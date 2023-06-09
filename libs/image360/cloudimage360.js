/*!
 *
 *  js-cloudimage-360-view v3.0.4
 *  https://github.com/scaleflex/js-cloudimage-360-view
 *
 *  Copyright (c) 2022 scaleflex
 *  Released under the MIT license
 *
 *  Date: 2022-10-19T16:10:42.859Z
 *
 */ !(function (t) {
    var e = {};
    function n(i) {
        if (e[i]) return e[i].exports;
        var o = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var o in t)
                    n.d(
                        i,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return i;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 127));
})([
    function (t, e, n) {
        var i = n(18),
            o = Function.prototype,
            r = o.bind,
            a = o.call,
            s = i && r.bind(a, a);
        t.exports = i
            ? function (t) {
                  return t && s(t);
              }
            : function (t) {
                  return (
                      t &&
                      function () {
                          return a.apply(t, arguments);
                      }
                  );
              };
    },
    function (t, e, n) {
        var i = n(120)();
        t.exports = i;
        try {
            regeneratorRuntime = i;
        } catch (t) {
            "object" == typeof globalThis ? (globalThis.regeneratorRuntime = i) : Function("r", "regeneratorRuntime = r")(i);
        }
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return "function" == typeof t;
        };
    },
    function (t, e, n) {
        (function (e) {
            var n = function (t) {
                return t && t.Math == Math && t;
            };
            t.exports =
                n("object" == typeof globalThis && globalThis) ||
                n("object" == typeof window && window) ||
                n("object" == typeof self && self) ||
                n("object" == typeof e && e) ||
                (function () {
                    return this;
                })() ||
                Function("return this")();
        }.call(this, n(66)));
    },
    function (t, e, n) {
        var i = n(2);
        t.exports = !i(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1]
            );
        });
    },
    function (t, e) {
        (t.exports = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e) {
        function n(t, e, n, i, o, r, a) {
            try {
                var s = t[r](a),
                    c = s.value;
            } catch (t) {
                return void n(t);
            }
            s.done ? e(c) : Promise.resolve(c).then(i, o);
        }
        (t.exports = function (t) {
            return function () {
                var e = this,
                    i = arguments;
                return new Promise(function (o, r) {
                    var a = t.apply(e, i);
                    function s(t) {
                        n(a, o, r, s, c, "next", t);
                    }
                    function c(t) {
                        n(a, o, r, s, c, "throw", t);
                    }
                    s(void 0);
                });
            };
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e, n) {
        var i = n(0),
            o = n(37),
            r = i({}.hasOwnProperty);
        t.exports =
            Object.hasOwn ||
            function (t, e) {
                return r(o(t), e);
            };
    },
    function (t, e, n) {
        var i = n(3),
            o = "object" == typeof document && document.all,
            r = void 0 === o && void 0 !== o;
        t.exports = r
            ? function (t) {
                  return "object" == typeof t ? null !== t : i(t) || t === o;
              }
            : function (t) {
                  return "object" == typeof t ? null !== t : i(t);
              };
    },
    function (t, e, n) {
        var i = n(4),
            o = n(36),
            r = n(8),
            a = n(38),
            s = n(33),
            c = n(32),
            u = o("wks"),
            l = i.Symbol,
            f = l && l.for,
            d = c ? l : (l && l.withoutSetter) || a;
        t.exports = function (t) {
            if (!r(u, t) || (!s && "string" != typeof u[t])) {
                var e = "Symbol." + t;
                s && r(l, t) ? (u[t] = l[t]) : (u[t] = c && f ? f(e) : d(e));
            }
            return u[t];
        };
    },
    function (t, e, n) {
        var i = n(4),
            o = n(3),
            r = function (t) {
                return o(t) ? t : void 0;
            };
        t.exports = function (t, e) {
            return arguments.length < 2 ? r(i[t]) : i[t] && i[t][e];
        };
    },
    function (t, e, n) {
        var i = n(5),
            o = n(39),
            r = n(42),
            a = n(15),
            s = n(30),
            c = TypeError,
            u = Object.defineProperty,
            l = Object.getOwnPropertyDescriptor;
        e.f = i
            ? r
                ? function (t, e, n) {
                      if ((a(t), (e = s(e)), a(n), "function" == typeof t && "prototype" === e && "value" in n && "writable" in n && !n.writable)) {
                          var i = l(t, e);
                          i && i.writable && ((t[e] = n.value), (n = { configurable: "configurable" in n ? n.configurable : i.configurable, enumerable: "enumerable" in n ? n.enumerable : i.enumerable, writable: !1 }));
                      }
                      return u(t, e, n);
                  }
                : u
            : function (t, e, n) {
                  if ((a(t), (e = s(e)), a(n), o))
                      try {
                          return u(t, e, n);
                      } catch (t) {}
                  if ("get" in n || "set" in n) throw c("Accessors not supported");
                  return "value" in n && (t[e] = n.value), t;
              };
    },
    function (t, e) {
        function n(e) {
            return (
                (t.exports = n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports),
                n(e)
            );
        }
        (t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
    function (t, e, n) {
        var i = n(27),
            o = n(28);
        t.exports = function (t) {
            return i(o(t));
        };
    },
    function (t, e, n) {
        var i = n(9),
            o = String,
            r = TypeError;
        t.exports = function (t) {
            if (i(t)) return t;
            throw r(o(t) + " is not an object");
        };
    },
    function (t, e, n) {
        var i = n(4),
            o = n(25).f,
            r = n(41),
            a = n(75),
            s = n(21),
            c = n(80),
            u = n(87);
        t.exports = function (t, e) {
            var n,
                l,
                f,
                d,
                h,
                p = t.target,
                m = t.global,
                v = t.stat;
            if ((n = m ? i : v ? i[p] || s(p, {}) : (i[p] || {}).prototype))
                for (l in e) {
                    if (((d = e[l]), (f = t.dontCallGetSet ? (h = o(n, l)) && h.value : n[l]), !u(m ? l : p + (v ? "." : "#") + l, t.forced) && void 0 !== f)) {
                        if (typeof d == typeof f) continue;
                        c(d, f);
                    }
                    (t.sham || (f && f.sham)) && r(d, "sham", !0), a(n, l, d, t);
                }
        };
    },
    function (t, e, n) {
        var i = n(18),
            o = Function.prototype.call;
        t.exports = i
            ? o.bind(o)
            : function () {
                  return o.apply(o, arguments);
              };
    },
    function (t, e, n) {
        var i = n(2);
        t.exports = !i(function () {
            var t = function () {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype");
        });
    },
    function (t, e, n) {
        var i = n(0),
            o = i({}.toString),
            r = i("".slice);
        t.exports = function (t) {
            return r(o(t), 8, -1);
        };
    },
    function (t, e, n) {
        var i = n(4),
            o = n(21),
            r = i["__core-js_shared__"] || o("__core-js_shared__", {});
        t.exports = r;
    },
    function (t, e, n) {
        var i = n(4),
            o = Object.defineProperty;
        t.exports = function (t, e) {
            try {
                o(i, t, { value: e, configurable: !0, writable: !0 });
            } catch (n) {
                i[t] = e;
            }
            return e;
        };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    },
    function (t, e, n) {
        var i = n(4),
            o = n(0);
        t.exports = function (t, e) {
            return o(i[t].prototype[e]);
        };
    },
    function (t, e, n) {
        var i = n(5),
            o = n(17),
            r = n(67),
            a = n(26),
            s = n(14),
            c = n(30),
            u = n(8),
            l = n(39),
            f = Object.getOwnPropertyDescriptor;
        e.f = i
            ? f
            : function (t, e) {
                  if (((t = s(t)), (e = c(e)), l))
                      try {
                          return f(t, e);
                      } catch (t) {}
                  if (u(t, e)) return a(!o(r.f, t, e), t[e]);
              };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        };
    },
    function (t, e, n) {
        var i = n(0),
            o = n(2),
            r = n(19),
            a = Object,
            s = i("".split);
        t.exports = o(function () {
            return !a("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                  return "String" == r(t) ? s(t, "") : a(t);
              }
            : a;
    },
    function (t, e, n) {
        var i = n(29),
            o = TypeError;
        t.exports = function (t) {
            if (i(t)) throw o("Can't call method on " + t);
            return t;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return null == t;
        };
    },
    function (t, e, n) {
        var i = n(68),
            o = n(31);
        t.exports = function (t) {
            var e = i(t, "string");
            return o(e) ? e : e + "";
        };
    },
    function (t, e, n) {
        var i = n(11),
            o = n(3),
            r = n(69),
            a = n(32),
            s = Object;
        t.exports = a
            ? function (t) {
                  return "symbol" == typeof t;
              }
            : function (t) {
                  var e = i("Symbol");
                  return o(e) && r(e.prototype, s(t));
              };
    },
    function (t, e, n) {
        var i = n(33);
        t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (t, e, n) {
        var i = n(34),
            o = n(2);
        t.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
                var t = Symbol();
                return !String(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && i && i < 41);
            });
    },
    function (t, e, n) {
        var i,
            o,
            r = n(4),
            a = n(70),
            s = r.process,
            c = r.Deno,
            u = (s && s.versions) || (c && c.version),
            l = u && u.v8;
        l && (o = (i = l.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !o && a && (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = a.match(/Chrome\/(\d+)/)) && (o = +i[1]), (t.exports = o);
    },
    function (t, e, n) {
        var i = n(3),
            o = n(72),
            r = TypeError;
        t.exports = function (t) {
            if (i(t)) return t;
            throw r(o(t) + " is not a function");
        };
    },
    function (t, e, n) {
        var i = n(74),
            o = n(20);
        (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: "3.25.0",
            mode: i ? "pure" : "global",
            copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",
            source: "https://github.com/zloirock/core-js",
        });
    },
    function (t, e, n) {
        var i = n(28),
            o = Object;
        t.exports = function (t) {
            return o(i(t));
        };
    },
    function (t, e, n) {
        var i = n(0),
            o = 0,
            r = Math.random(),
            a = i((1).toString);
        t.exports = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + r, 36);
        };
    },
    function (t, e, n) {
        var i = n(5),
            o = n(2),
            r = n(40);
        t.exports =
            !i &&
            !o(function () {
                return (
                    7 !=
                    Object.defineProperty(r("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var i = n(4),
            o = n(9),
            r = i.document,
            a = o(r) && o(r.createElement);
        t.exports = function (t) {
            return a ? r.createElement(t) : {};
        };
    },
    function (t, e, n) {
        var i = n(5),
            o = n(12),
            r = n(26);
        t.exports = i
            ? function (t, e, n) {
                  return o.f(t, e, r(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e, n) {
        var i = n(5),
            o = n(2);
        t.exports =
            i &&
            o(function () {
                return 42 != Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype;
            });
    },
    function (t, e, n) {
        var i = n(0),
            o = n(3),
            r = n(20),
            a = i(Function.toString);
        o(r.inspectSource) ||
            (r.inspectSource = function (t) {
                return a(t);
            }),
            (t.exports = r.inspectSource);
    },
    function (t, e, n) {
        var i = n(36),
            o = n(38),
            r = i("keys");
        t.exports = function (t) {
            return r[t] || (r[t] = o(t));
        };
    },
    function (t, e, n) {
        var i = n(0),
            o = n(8),
            r = n(14),
            a = n(46).indexOf,
            s = n(22),
            c = i([].push);
        t.exports = function (t, e) {
            var n,
                i = r(t),
                u = 0,
                l = [];
            for (n in i) !o(s, n) && o(i, n) && c(l, n);
            for (; e.length > u; ) o(i, (n = e[u++])) && (~a(l, n) || c(l, n));
            return l;
        };
    },
    function (t, e, n) {
        var i = n(14),
            o = n(83),
            r = n(48),
            a = function (t) {
                return function (e, n, a) {
                    var s,
                        c = i(e),
                        u = r(c),
                        l = o(a, u);
                    if (t && n != n) {
                        for (; u > l; ) if ((s = c[l++]) != s) return !0;
                    } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                    return !t && -1;
                };
            };
        t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    function (t, e, n) {
        var i = n(84);
        t.exports = function (t) {
            var e = +t;
            return e != e || 0 === e ? 0 : i(e);
        };
    },
    function (t, e, n) {
        var i = n(85);
        t.exports = function (t) {
            return i(t.length);
        };
    },
    function (t, e, n) {
        var i = n(89),
            o = n(0),
            r = n(27),
            a = n(37),
            s = n(48),
            c = n(90),
            u = o([].push),
            l = function (t) {
                var e = 1 == t,
                    n = 2 == t,
                    o = 3 == t,
                    l = 4 == t,
                    f = 6 == t,
                    d = 7 == t,
                    h = 5 == t || f;
                return function (p, m, v, g) {
                    for (var y, b, x = a(p), w = r(x), I = i(m, v), O = s(w), k = 0, E = g || c, S = e ? E(p, O) : n || d ? E(p, 0) : void 0; O > k; k++)
                        if ((h || k in w) && ((b = I((y = w[k]), k, x)), t))
                            if (e) S[k] = b;
                            else if (b)
                                switch (t) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return y;
                                    case 6:
                                        return k;
                                    case 2:
                                        u(S, y);
                                }
                            else
                                switch (t) {
                                    case 4:
                                        return !1;
                                    case 7:
                                        u(S, y);
                                }
                    return f ? -1 : o || l ? l : S;
                };
            };
        t.exports = { forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6), filterReject: l(7) };
    },
    function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            var e = [];
            return (
                (e.toString = function () {
                    return this.map(function (e) {
                        var n = (function (t, e) {
                            var n = t[1] || "",
                                i = t[3];
                            if (!i) return n;
                            if (e && "function" == typeof btoa) {
                                var o = ((a = i), "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                                    r = i.sources.map(function (t) {
                                        return "/*# sourceURL=" + i.sourceRoot + t + " */";
                                    });
                                return [n].concat(r).concat([o]).join("\n");
                            }
                            var a;
                            return [n].join("\n");
                        })(e, t);
                        return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
                    }).join("");
                }),
                (e.i = function (t, n) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var i = {}, o = 0; o < this.length; o++) {
                        var r = this[o][0];
                        null != r && (i[r] = !0);
                    }
                    for (o = 0; o < t.length; o++) {
                        var a = t[o];
                        (null != a[0] && i[a[0]]) || (n && !a[2] ? (a[2] = n) : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
                    }
                }),
                e
            );
        };
    },
    function (t, e, n) {
        var i,
            o,
            r = {},
            a =
                ((i = function () {
                    return window && document && document.all && !window.atob;
                }),
                function () {
                    return void 0 === o && (o = i.apply(this, arguments)), o;
                }),
            s = function (t, e) {
                return e ? e.querySelector(t) : document.querySelector(t);
            },
            c = (function (t) {
                var e = {};
                return function (t, n) {
                    if ("function" == typeof t) return t();
                    if (void 0 === e[t]) {
                        var i = s.call(this, t, n);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                            try {
                                i = i.contentDocument.head;
                            } catch (t) {
                                i = null;
                            }
                        e[t] = i;
                    }
                    return e[t];
                };
            })(),
            u = null,
            l = 0,
            f = [],
            d = n(117);
        function h(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = r[i.id];
                if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]);
                    for (; a < i.parts.length; a++) o.parts.push(b(i.parts[a], e));
                } else {
                    var s = [];
                    for (a = 0; a < i.parts.length; a++) s.push(b(i.parts[a], e));
                    r[i.id] = { id: i.id, refs: 1, parts: s };
                }
            }
        }
        function p(t, e) {
            for (var n = [], i = {}, o = 0; o < t.length; o++) {
                var r = t[o],
                    a = e.base ? r[0] + e.base : r[0],
                    s = { css: r[1], media: r[2], sourceMap: r[3] };
                i[a] ? i[a].parts.push(s) : n.push((i[a] = { id: a, parts: [s] }));
            }
            return n;
        }
        function m(t, e) {
            var n = c(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = f[f.length - 1];
            if ("top" === t.insertAt) i ? (i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e)) : n.insertBefore(e, n.firstChild), f.push(e);
            else if ("bottom" === t.insertAt) n.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = c(t.insertAt.before, n);
                n.insertBefore(e, o);
            }
        }
        function v(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = f.indexOf(t);
            e >= 0 && f.splice(e, 1);
        }
        function g(t) {
            var e = document.createElement("style");
            if ((void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce)) {
                var i = (function () {
                    0;
                    return n.nc;
                })();
                i && (t.attrs.nonce = i);
            }
            return y(e, t.attrs), m(t, e), e;
        }
        function y(t, e) {
            Object.keys(e).forEach(function (n) {
                t.setAttribute(n, e[n]);
            });
        }
        function b(t, e) {
            var n, i, o, r;
            if (e.transform && t.css) {
                if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
                t.css = r;
            }
            if (e.singleton) {
                var a = l++;
                (n = u || (u = g(e))), (i = I.bind(null, n, a, !1)), (o = I.bind(null, n, a, !0));
            } else
                t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                    ? ((n = (function (t) {
                          var e = document.createElement("link");
                          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), (t.attrs.rel = "stylesheet"), y(e, t.attrs), m(t, e), e;
                      })(e)),
                      (i = k.bind(null, n, e)),
                      (o = function () {
                          v(n), n.href && URL.revokeObjectURL(n.href);
                      }))
                    : ((n = g(e)),
                      (i = O.bind(null, n)),
                      (o = function () {
                          v(n);
                      }));
            return (
                i(t),
                function (e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        i((t = e));
                    } else o();
                }
            );
        }
        t.exports = function (t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}), e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = p(t, e);
            return (
                h(n, e),
                function (t) {
                    for (var i = [], o = 0; o < n.length; o++) {
                        var a = n[o];
                        (s = r[a.id]).refs--, i.push(s);
                    }
                    t && h(p(t, e), e);
                    for (o = 0; o < i.length; o++) {
                        var s;
                        if (0 === (s = i[o]).refs) {
                            for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                            delete r[s.id];
                        }
                    }
                }
            );
        };
        var x,
            w =
                ((x = []),
                function (t, e) {
                    return (x[t] = e), x.filter(Boolean).join("\n");
                });
        function I(t, e, n, i) {
            var o = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = w(e, o);
            else {
                var r = document.createTextNode(o),
                    a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
            }
        }
        function O(t, e) {
            var n = e.css,
                i = e.media;
            if ((i && t.setAttribute("media", i), t.styleSheet)) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n));
            }
        }
        function k(t, e, n) {
            var i = n.css,
                o = n.sourceMap,
                r = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || r) && (i = d(i)), o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([i], { type: "text/css" }),
                s = t.href;
            (t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
        }
    },
    function (t, e) {
        (t.exports = function (t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i;
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e, n) {
        var i = n(52);
        (t.exports = function (t, e) {
            if (t) {
                if ("string" == typeof t) return i(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0;
            }
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e) {
        (t.exports = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e) {
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        (t.exports = function (t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e, n) {
        var i = n(121),
            o = n(122),
            r = n(53),
            a = n(123);
        (t.exports = function (t) {
            return i(t) || o(t) || r(t) || a();
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e, n) {
        var i = n(124),
            o = n(125),
            r = n(53),
            a = n(126);
        (t.exports = function (t, e) {
            return i(t) || o(t, e) || r(t, e) || a();
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    ,
    ,
    function (t, e, n) {
        t.exports = n(61);
    },
    function (t, e, n) {
        var i = n(62);
        t.exports = i;
    },
    function (t, e, n) {
        var i = n(63);
        t.exports = i;
    },
    function (t, e, n) {
        var i = n(64);
        t.exports = i;
    },
    function (t, e, n) {
        n(65);
        var i = n(24);
        t.exports = i("Array", "forEach");
    },
    function (t, e, n) {
        "use strict";
        var i = n(16),
            o = n(88);
        i({ target: "Array", proto: !0, forced: [].forEach != o }, { forEach: o });
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        "use strict";
        var i = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            r = o && !i.call({ 1: 2 }, 1);
        e.f = r
            ? function (t) {
                  var e = o(this, t);
                  return !!e && e.enumerable;
              }
            : i;
    },
    function (t, e, n) {
        var i = n(17),
            o = n(9),
            r = n(31),
            a = n(71),
            s = n(73),
            c = n(10),
            u = TypeError,
            l = c("toPrimitive");
        t.exports = function (t, e) {
            if (!o(t) || r(t)) return t;
            var n,
                c = a(t, l);
            if (c) {
                if ((void 0 === e && (e = "default"), (n = i(c, t, e)), !o(n) || r(n))) return n;
                throw u("Can't convert object to primitive value");
            }
            return void 0 === e && (e = "number"), s(t, e);
        };
    },
    function (t, e, n) {
        var i = n(0);
        t.exports = i({}.isPrototypeOf);
    },
    function (t, e, n) {
        var i = n(11);
        t.exports = i("navigator", "userAgent") || "";
    },
    function (t, e, n) {
        var i = n(35),
            o = n(29);
        t.exports = function (t, e) {
            var n = t[e];
            return o(n) ? void 0 : i(n);
        };
    },
    function (t, e) {
        var n = String;
        t.exports = function (t) {
            try {
                return n(t);
            } catch (t) {
                return "Object";
            }
        };
    },
    function (t, e, n) {
        var i = n(17),
            o = n(3),
            r = n(9),
            a = TypeError;
        t.exports = function (t, e) {
            var n, s;
            if ("string" === e && o((n = t.toString)) && !r((s = i(n, t)))) return s;
            if (o((n = t.valueOf)) && !r((s = i(n, t)))) return s;
            if ("string" !== e && o((n = t.toString)) && !r((s = i(n, t)))) return s;
            throw a("Can't convert object to primitive value");
        };
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e, n) {
        var i = n(3),
            o = n(12),
            r = n(76),
            a = n(21);
        t.exports = function (t, e, n, s) {
            s || (s = {});
            var c = s.enumerable,
                u = void 0 !== s.name ? s.name : e;
            if ((i(n) && r(n, u, s), s.global)) c ? (t[e] = n) : a(e, n);
            else {
                try {
                    s.unsafe ? t[e] && (c = !0) : delete t[e];
                } catch (t) {}
                c ? (t[e] = n) : o.f(t, e, { value: n, enumerable: !1, configurable: !s.nonConfigurable, writable: !s.nonWritable });
            }
            return t;
        };
    },
    function (t, e, n) {
        var i = n(2),
            o = n(3),
            r = n(8),
            a = n(5),
            s = n(77).CONFIGURABLE,
            c = n(43),
            u = n(78),
            l = u.enforce,
            f = u.get,
            d = Object.defineProperty,
            h =
                a &&
                !i(function () {
                    return 8 !== d(function () {}, "length", { value: 8 }).length;
                }),
            p = String(String).split("String"),
            m = (t.exports = function (t, e, n) {
                "Symbol(" === String(e).slice(0, 7) && (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                    n && n.getter && (e = "get " + e),
                    n && n.setter && (e = "set " + e),
                    (!r(t, "name") || (s && t.name !== e)) && (a ? d(t, "name", { value: e, configurable: !0 }) : (t.name = e)),
                    h && n && r(n, "arity") && t.length !== n.arity && d(t, "length", { value: n.arity });
                try {
                    n && r(n, "constructor") && n.constructor ? a && d(t, "prototype", { writable: !1 }) : t.prototype && (t.prototype = void 0);
                } catch (t) {}
                var i = l(t);
                return r(i, "source") || (i.source = p.join("string" == typeof e ? e : "")), t;
            });
        Function.prototype.toString = m(function () {
            return (o(this) && f(this).source) || c(this);
        }, "toString");
    },
    function (t, e, n) {
        var i = n(5),
            o = n(8),
            r = Function.prototype,
            a = i && Object.getOwnPropertyDescriptor,
            s = o(r, "name"),
            c = s && "something" === function () {}.name,
            u = s && (!i || (i && a(r, "name").configurable));
        t.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u };
    },
    function (t, e, n) {
        var i,
            o,
            r,
            a = n(79),
            s = n(4),
            c = n(0),
            u = n(9),
            l = n(41),
            f = n(8),
            d = n(20),
            h = n(44),
            p = n(22),
            m = s.TypeError,
            v = s.WeakMap;
        if (a || d.state) {
            var g = d.state || (d.state = new v()),
                y = c(g.get),
                b = c(g.has),
                x = c(g.set);
            (i = function (t, e) {
                if (b(g, t)) throw m("Object already initialized");
                return (e.facade = t), x(g, t, e), e;
            }),
                (o = function (t) {
                    return y(g, t) || {};
                }),
                (r = function (t) {
                    return b(g, t);
                });
        } else {
            var w = h("state");
            (p[w] = !0),
                (i = function (t, e) {
                    if (f(t, w)) throw m("Object already initialized");
                    return (e.facade = t), l(t, w, e), e;
                }),
                (o = function (t) {
                    return f(t, w) ? t[w] : {};
                }),
                (r = function (t) {
                    return f(t, w);
                });
        }
        t.exports = {
            set: i,
            get: o,
            has: r,
            enforce: function (t) {
                return r(t) ? o(t) : i(t, {});
            },
            getterFor: function (t) {
                return function (e) {
                    var n;
                    if (!u(e) || (n = o(e)).type !== t) throw m("Incompatible receiver, " + t + " required");
                    return n;
                };
            },
        };
    },
    function (t, e, n) {
        var i = n(4),
            o = n(3),
            r = i.WeakMap;
        t.exports = o(r) && /native code/.test(String(r));
    },
    function (t, e, n) {
        var i = n(8),
            o = n(81),
            r = n(25),
            a = n(12);
        t.exports = function (t, e, n) {
            for (var s = o(e), c = a.f, u = r.f, l = 0; l < s.length; l++) {
                var f = s[l];
                i(t, f) || (n && i(n, f)) || c(t, f, u(e, f));
            }
        };
    },
    function (t, e, n) {
        var i = n(11),
            o = n(0),
            r = n(82),
            a = n(86),
            s = n(15),
            c = o([].concat);
        t.exports =
            i("Reflect", "ownKeys") ||
            function (t) {
                var e = r.f(s(t)),
                    n = a.f;
                return n ? c(e, n(t)) : e;
            };
    },
    function (t, e, n) {
        var i = n(45),
            o = n(23).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return i(t, o);
            };
    },
    function (t, e, n) {
        var i = n(47),
            o = Math.max,
            r = Math.min;
        t.exports = function (t, e) {
            var n = i(t);
            return n < 0 ? o(n + e, 0) : r(n, e);
        };
    },
    function (t, e) {
        var n = Math.ceil,
            i = Math.floor;
        t.exports =
            Math.trunc ||
            function (t) {
                var e = +t;
                return (e > 0 ? i : n)(e);
            };
    },
    function (t, e, n) {
        var i = n(47),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(i(t), 9007199254740991) : 0;
        };
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, n) {
        var i = n(2),
            o = n(3),
            r = /#|\.prototype\./,
            a = function (t, e) {
                var n = c[s(t)];
                return n == l || (n != u && (o(e) ? i(e) : !!e));
            },
            s = (a.normalize = function (t) {
                return String(t).replace(r, ".").toLowerCase();
            }),
            c = (a.data = {}),
            u = (a.NATIVE = "N"),
            l = (a.POLYFILL = "P");
        t.exports = a;
    },
    function (t, e, n) {
        "use strict";
        var i = n(49).forEach,
            o = n(96)("forEach");
        t.exports = o
            ? [].forEach
            : function (t) {
                  return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
              };
    },
    function (t, e, n) {
        var i = n(0),
            o = n(35),
            r = n(18),
            a = i(i.bind);
        t.exports = function (t, e) {
            return (
                o(t),
                void 0 === e
                    ? t
                    : r
                    ? a(t, e)
                    : function () {
                          return t.apply(e, arguments);
                      }
            );
        };
    },
    function (t, e, n) {
        var i = n(91);
        t.exports = function (t, e) {
            return new (i(t))(0 === e ? 0 : e);
        };
    },
    function (t, e, n) {
        var i = n(92),
            o = n(93),
            r = n(9),
            a = n(10)("species"),
            s = Array;
        t.exports = function (t) {
            var e;
            return i(t) && ((e = t.constructor), ((o(e) && (e === s || i(e.prototype))) || (r(e) && null === (e = e[a]))) && (e = void 0)), void 0 === e ? s : e;
        };
    },
    function (t, e, n) {
        var i = n(19);
        t.exports =
            Array.isArray ||
            function (t) {
                return "Array" == i(t);
            };
    },
    function (t, e, n) {
        var i = n(0),
            o = n(2),
            r = n(3),
            a = n(94),
            s = n(11),
            c = n(43),
            u = function () {},
            l = [],
            f = s("Reflect", "construct"),
            d = /^\s*(?:class|function)\b/,
            h = i(d.exec),
            p = !d.exec(u),
            m = function (t) {
                if (!r(t)) return !1;
                try {
                    return f(u, l, t), !0;
                } catch (t) {
                    return !1;
                }
            },
            v = function (t) {
                if (!r(t)) return !1;
                switch (a(t)) {
                    case "AsyncFunction":
                    case "GeneratorFunction":
                    case "AsyncGeneratorFunction":
                        return !1;
                }
                try {
                    return p || !!h(d, c(t));
                } catch (t) {
                    return !0;
                }
            };
        (v.sham = !0),
            (t.exports =
                !f ||
                o(function () {
                    var t;
                    return (
                        m(m.call) ||
                        !m(Object) ||
                        !m(function () {
                            t = !0;
                        }) ||
                        t
                    );
                })
                    ? v
                    : m);
    },
    function (t, e, n) {
        var i = n(95),
            o = n(3),
            r = n(19),
            a = n(10)("toStringTag"),
            s = Object,
            c =
                "Arguments" ==
                r(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = i
            ? r
            : function (t) {
                  var e, n, i;
                  return void 0 === t
                      ? "Undefined"
                      : null === t
                      ? "Null"
                      : "string" ==
                        typeof (n = (function (t, e) {
                            try {
                                return t[e];
                            } catch (t) {}
                        })((e = s(t)), a))
                      ? n
                      : c
                      ? r(e)
                      : "Object" == (i = r(e)) && o(e.callee)
                      ? "Arguments"
                      : i;
              };
    },
    function (t, e, n) {
        var i = {};
        (i[n(10)("toStringTag")] = "z"), (t.exports = "[object z]" === String(i));
    },
    function (t, e, n) {
        "use strict";
        var i = n(2);
        t.exports = function (t, e) {
            var n = [][t];
            return (
                !!n &&
                i(function () {
                    n.call(
                        null,
                        e ||
                            function () {
                                return 1;
                            },
                        1
                    );
                })
            );
        };
    },
    function (t, e, n) {
        t.exports = n(98);
    },
    function (t, e, n) {
        var i = n(99);
        t.exports = i;
    },
    function (t, e, n) {
        var i = n(100);
        t.exports = i;
    },
    function (t, e, n) {
        var i = n(101);
        t.exports = i;
    },
    function (t, e, n) {
        n(102);
        var i = n(24);
        t.exports = i("Array", "filter");
    },
    function (t, e, n) {
        "use strict";
        var i = n(16),
            o = n(49).filter;
        i(
            { target: "Array", proto: !0, forced: !n(103)("filter") },
            {
                filter: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                },
            }
        );
    },
    function (t, e, n) {
        var i = n(2),
            o = n(10),
            r = n(34),
            a = o("species");
        t.exports = function (t) {
            return (
                r >= 51 ||
                !i(function () {
                    var e = [];
                    return (
                        ((e.constructor = {})[a] = function () {
                            return { foo: 1 };
                        }),
                        1 !== e[t](Boolean).foo
                    );
                })
            );
        };
    },
    function (t, e, n) {
        t.exports = n(105);
    },
    function (t, e, n) {
        var i = n(106);
        t.exports = i;
    },
    function (t, e, n) {
        var i = n(107);
        t.exports = i;
    },
    function (t, e, n) {
        var i = n(108);
        t.exports = i;
    },
    function (t, e, n) {
        n(109);
        var i = n(24);
        t.exports = i("Array", "includes");
    },
    function (t, e, n) {
        "use strict";
        var i = n(16),
            o = n(46).includes,
            r = n(2),
            a = n(110);
        i(
            {
                target: "Array",
                proto: !0,
                forced: r(function () {
                    return !Array(1).includes();
                }),
            },
            {
                includes: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                },
            }
        ),
            a("includes");
    },
    function (t, e, n) {
        var i = n(10),
            o = n(111),
            r = n(12).f,
            a = i("unscopables"),
            s = Array.prototype;
        null == s[a] && r(s, a, { configurable: !0, value: o(null) }),
            (t.exports = function (t) {
                s[a][t] = !0;
            });
    },
    function (t, e, n) {
        var i,
            o = n(15),
            r = n(112),
            a = n(23),
            s = n(22),
            c = n(114),
            u = n(40),
            l = n(44),
            f = l("IE_PROTO"),
            d = function () {},
            h = function (t) {
                return "<script>" + t + "</script>";
            },
            p = function (t) {
                t.write(h("")), t.close();
                var e = t.parentWindow.Object;
                return (t = null), e;
            },
            m = function () {
                try {
                    i = new ActiveXObject("htmlfile");
                } catch (t) {}
                var t, e;
                m =
                    "undefined" != typeof document
                        ? document.domain && i
                            ? p(i)
                            : (((e = u("iframe")).style.display = "none"), c.appendChild(e), (e.src = String("javascript:")), (t = e.contentWindow.document).open(), t.write(h("document.F=Object")), t.close(), t.F)
                        : p(i);
                for (var n = a.length; n--; ) delete m.prototype[a[n]];
                return m();
            };
        (s[f] = !0),
            (t.exports =
                Object.create ||
                function (t, e) {
                    var n;
                    return null !== t ? ((d.prototype = o(t)), (n = new d()), (d.prototype = null), (n[f] = t)) : (n = m()), void 0 === e ? n : r.f(n, e);
                });
    },
    function (t, e, n) {
        var i = n(5),
            o = n(42),
            r = n(12),
            a = n(15),
            s = n(14),
            c = n(113);
        e.f =
            i && !o
                ? Object.defineProperties
                : function (t, e) {
                      a(t);
                      for (var n, i = s(e), o = c(e), u = o.length, l = 0; u > l; ) r.f(t, (n = o[l++]), i[n]);
                      return t;
                  };
    },
    function (t, e, n) {
        var i = n(45),
            o = n(23);
        t.exports =
            Object.keys ||
            function (t) {
                return i(t, o);
            };
    },
    function (t, e, n) {
        var i = n(11);
        t.exports = i("document", "documentElement");
    },
    function (t, e, n) {
        var i = n(116);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(51)(i, o);
        i.locals && (t.exports = i.locals);
    },
    function (t, e, n) {
        (t.exports = n(50)(!1)).push([
            t.i,
            ".cloudimage-360-icons-container {\n  position: absolute;\n  display: flex;\n  top: 5px;\n  right: 5px;\n  width: 30px;\n  height: 95%;\n  flex-direction: column;\n  align-items: center;\n  z-index: 101;\n}\n\n.cloudimage-360-magnifier-icon {\n  width: 25px;\n  height: 25px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background: url('https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/loupe.svg') 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360-fullscreen-icon {\n  width: 25px;\n  height: 25px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background: url('https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/full_screen.svg') 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360-reset-zoom-icon {\n  display: none;\n  width: 30px;\n  height: 30px;\n  margin-top: auto;\n  cursor: pointer;\n  background: url('https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/ic-resize.svg?vh=248986') 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360-close-fullscreen-icon {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  background: url('https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/cross.svg') 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360-loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0%;\n  height: 8px;\n  background-color: rgb(165, 175, 184);\n  z-index: 100;\n}\n\n.cloudimage-360-box-shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\n\n.cloudimage-360-view-360-icon {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 4px;\n  transition: 0.5s all;\n  color: rgb(80, 80, 80);\n  text-align: center;\n  line-height: 100px;\n  z-index: 2;\n}\n\n.cloudimage-360-view-360-circle {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 80%;\n  height: auto;\n  margin: auto;\n  pointer-events: none;\n  user-select: none;\n  transition: 0.5s all;\n  z-index: 2;\n}\n\n.cloudimage-360-fullscreen-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background-color: #FFF;\n}\n\n.cloudimage-360-img-magnifier-glass {\n  background-color: #FFF;\n  background-repeat: no-repeat;\n  position: absolute;\n  border: 3px solid #000;\n  border-radius: 50%;\n  cursor: wait;\n  line-height: 200px;\n  text-align: center;\n  z-index: 1000;\n  width: 250px;\n  height: 250px;\n  top: -75px;\n  right: -85px;\n}\n\n.cloudimage-360 .cloudimage-360-left,\n.cloudimage-360 .cloudimage-360-right {\n  padding: 8px;\n  background: rgb(244, 244, 244);\n  border: none;\n  border-radius: 4px;\n}\n\n.cloudimage-360 .cloudimage-360-left:focus,\n.cloudimage-360 .cloudimage-360-right:focus {\n  outline: none;\n}\n\n.cloudimage-360 .cloudimage-360-left {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  top: calc(50% - 15px);\n  left: 20px;\n}\n\n.cloudimage-360 .cloudimage-360-right {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  top: calc(50% - 15px);\n  right: 20px;\n}\n\n.cloudimage-360 .cloudimage-360-left:before,\n.cloudimage-360 .cloudimage-360-right:before {\n  content: '';\n  display: block;\n  width: 30px;\n  height: 30px;\n  background: 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360 .cloudimage-360-left:before {\n  background-image: url('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-left.svg');\n}\n\n.cloudimage-360 .cloudimage-360-right:before {\n  background-image: url('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-right.svg');\n}\n\n.cloudimage-360 .cloudimage-360-left.not-active,\n.cloudimage-360 .cloudimage-360-right.not-active {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n\n.cloudimage-360 .cloudimage-360-top,\n.cloudimage-360 .cloudimage-360-bottom {\n  padding: 8px;\n  background: rgb(244, 244, 244);\n  border: none;\n  border-radius: 4px;\n}\n\n.cloudimage-360 .cloudimage-360-top:focus,\n.cloudimage-360 .cloudimage-360-bottom:focus {\n  outline: none;\n}\n\n.cloudimage-360 .cloudimage-360-top {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  left: calc(50% - 15px);\n  top: 20px;\n  transform: rotate(90deg);\n}\n\n.cloudimage-360 .cloudimage-360-bottom {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  left: calc(50% - 15px);\n  bottom: 20px;\n  transform: rotate(90deg);\n}\n\n.cloudimage-360 .cloudimage-360-top:before,\n.cloudimage-360 .cloudimage-360-bottom:before {\n  content: '';\n  display: block;\n  width: 30px;\n  height: 30px;\n  background: 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360 .cloudimage-360-top:before {\n  background-image: url('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-left.svg');\n}\n\n.cloudimage-360 .cloudimage-360-bottom:before {\n  background-image: url('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-right.svg');\n}\n\n.cloudimage-360 .cloudimage-360-top.not-active,\n.cloudimage-360 .cloudimage-360-bottom.not-active {\n  opacity: 0.4;\n  cursor: default;\n}",
            "",
        ]);
    },
    function (t, e) {
        t.exports = function (t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host,
                i = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                var o,
                    r = e
                        .trim()
                        .replace(/^"(.*)"$/, function (t, e) {
                            return e;
                        })
                        .replace(/^'(.*)'$/, function (t, e) {
                            return e;
                        });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : ((o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, "")), "url(" + JSON.stringify(o) + ")");
            });
        };
    },
    function (t, e, n) {
        var i = n(119);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(51)(i, o);
        i.locals && (t.exports = i.locals);
    },
    function (t, e, n) {
        (t.exports = n(50)(!1)).push([
            t.i,
            ".cloudimage-360-hotspot-link-icon {\n  width: 42px;\n  height: 42px;\n  background: rgba(12, 109, 199, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  box-sizing: border-box;\n  transition: opacity 600ms ease-in-out;\n  cursor: auto;\n}\n\n.cloudimage-360-hotspot-link-icon::before {\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background-image: url('https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/assets/img/link-hotspot.svg');\n  background-color: #0C6DC7;\n  background-repeat: no-repeat;\n  background-size: 9px;\n  background-position: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 50%;\n\tanimation: pulse 2s infinite;\n  cursor: auto;\n}\n\n.cloudimage-360-hotspot-custom-icon {\n  width: 42px;\n  height: 42px;\n  background: #76AD0133;\n  border: 1px solid #FFFFFF33;\n  border-radius: 50%;\n  box-sizing: border-box;\n  transition: opacity 300ms ease-in-out;\n  cursor: auto;\n}\n\n.cloudimage-360-hotspot-custom-icon::before {\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background-image: url('https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/assets/img/plus.svg');\n  background-color: #76AD01;\n  background-repeat: no-repeat;\n  background-size: 9px;\n  background-position: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 50%;\n\tanimation: pulse 2s infinite;\n  cursor: auto;\n}\n\n.cloudimage-360-hotspot-popup {\n  visibility: hidden;\n  opacity: 0;\n  background-color: #FFFFFF;\n  padding: 6px;\n  border-radius: 2px;\n  box-shadow: 0px 4px 4px 0px #00000040;\n  z-index: 999;\n}\n\n.cloudimage-360-hotspot-popup[data-show] {\n  visibility: visible;\n  opacity: 1;\n}\n\n.cloudimage-360-popup-arrow,\n.cloudimage-360-popup-arrow::before {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: inherit;\n  cursor: 'auto';\n}\n\n.cloudimage-360-popup-arrow {\n  visibility: hidden;\n}\n\n.cloudimage-360-popup-arrow::before {\n  visibility: visible;\n  content: '';\n  transform: rotate(45deg);\n}\n\n.cloudimage-360-hotspot-popup[data-popper-placement^='top']\n  > .cloudimage-360-popup-arrow {\n  bottom: -4px;\n}\n\n.cloudimage-360-hotspot-popup[data-popper-placement^='bottom']\n  > .cloudimage-360-popup-arrow {\n  top: -4px;\n}\n\n.cloudimage-360-hotspot-popup[data-popper-placement^='left']\n  > .cloudimage-360-popup-arrow {\n  right: -4px;\n}\n\n.cloudimage-360-hotspot-popup[data-popper-placement^='right']\n  > .cloudimage-360-popup-arrow {\n  left: -4px;\n}\n\n.cloudimage-360-modal-wrapper {\n  max-width: 222px;\n}\n\n.cloudimage-360-images-carousel-wrapper {\n  margin: 0 auto;\n}\n\n.cloudimage-360-images-carousel {\n  background-color: #f5f4f4;\n  border-radius: 2px;\n}\n\n.cloudimage-360-images-carousel .cloudimage-360-carousel-image {\n  display: none;\n  object-fit: contain;\n  min-height: 187px;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cloudimage-360-images-carousel .cloudimage-360-carousel-image.active-image {\n  display: block;\n  animation-name: fade-active-image;\n  animation-duration: 1.5s;\n}\n\n.cloudimage-360-carousel-dots {\n  display: flex;\n  column-gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 5px auto;\n  row-gap: 3px;\n  padding: 0 6px;\n  width: 50%;\n}\n\n.cloudimage-360-carousel-dot {\n  width: 6px;\n  height: 6px;\n  background-color: #C9D0DE;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.6s ease;\n  border: 0;\n  padding: 0;\n}\n\n.cloudimage-360-carousel-dot.active-dot {\n  background-color: #76AD01;\n}\n\n.cloudimage-360-carousel-dot:focus,\n.cloudimage-360-carousel-dot:focus-visible {\n  border: 0;\n  outline: 0;\n}\n\n.cloudimage-360-modal-title {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 16px;\n  margin: 4px 0;\n}\n\n.cloudimage-360-modal-description {\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 16px;\n  margin: 4px 0;\n}\n\n.cloudimage-360-modal-more-details {\n  color: #76AD01;\n  background-color: #ECFAE6;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 400;\n  padding: 4px 8px;\n  transition: background-color 200ms ease-in-out;\n  border-radius: 2px;\n  text-decoration: none;\n}\n\n.cloudimage-360-modal-more-details:hover {\n  color: #76AD01;\n  background-color: #e1f5d8;\n}\n\n@keyframes pulse {\n\t0% {\n\t\tbox-shadow: 0 0 0 0 rgba(99, 99, 99, 0.7);\n\t}\n\n\t70% {\n\t\tbox-shadow: 0 0 0 10px rgba(99, 99, 99, 0);\n\t}\n\n\t100% {\n\t\tbox-shadow: 0 0 0 0 rgba(99, 99, 99, 0);\n\t}\n}\n\n@keyframes fade-active-image {\n  from { opacity: 0.7 }\n  to { opacity: 1 }\n}",
            "",
        ]);
    },
    function (t, e, n) {
        var i = n(13).default;
        function o() {
            "use strict";
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (t.exports = o = function () {
                return e;
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
            var e = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                a = "function" == typeof Symbol ? Symbol : {},
                s = a.iterator || "@@iterator",
                c = a.asyncIterator || "@@asyncIterator",
                u = a.toStringTag || "@@toStringTag";
            function l(t, e, n) {
                return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
            }
            try {
                l({}, "");
            } catch (t) {
                l = function (t, e, n) {
                    return (t[e] = n);
                };
            }
            function f(t, e, n, i) {
                var o = e && e.prototype instanceof p ? e : p,
                    r = Object.create(o.prototype),
                    a = new S(i || []);
                return (
                    (r._invoke = (function (t, e, n) {
                        var i = "suspendedStart";
                        return function (o, r) {
                            if ("executing" === i) throw new Error("Generator is already running");
                            if ("completed" === i) {
                                if ("throw" === o) throw r;
                                return j();
                            }
                            for (n.method = o, n.arg = r; ; ) {
                                var a = n.delegate;
                                if (a) {
                                    var s = O(a, n);
                                    if (s) {
                                        if (s === h) continue;
                                        return s;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === i) throw ((i = "completed"), n.arg);
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                i = "executing";
                                var c = d(t, e, n);
                                if ("normal" === c.type) {
                                    if (((i = n.done ? "completed" : "suspendedYield"), c.arg === h)) continue;
                                    return { value: c.arg, done: n.done };
                                }
                                "throw" === c.type && ((i = "completed"), (n.method = "throw"), (n.arg = c.arg));
                            }
                        };
                    })(t, n, a)),
                    r
                );
            }
            function d(t, e, n) {
                try {
                    return { type: "normal", arg: t.call(e, n) };
                } catch (t) {
                    return { type: "throw", arg: t };
                }
            }
            e.wrap = f;
            var h = {};
            function p() {}
            function m() {}
            function v() {}
            var g = {};
            l(g, s, function () {
                return this;
            });
            var y = Object.getPrototypeOf,
                b = y && y(y(C([])));
            b && b !== n && r.call(b, s) && (g = b);
            var x = (v.prototype = p.prototype = Object.create(g));
            function w(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    l(t, e, function (t) {
                        return this._invoke(e, t);
                    });
                });
            }
            function I(t, e) {
                var n;
                this._invoke = function (o, a) {
                    function s() {
                        return new e(function (n, s) {
                            !(function n(o, a, s, c) {
                                var u = d(t[o], t, a);
                                if ("throw" !== u.type) {
                                    var l = u.arg,
                                        f = l.value;
                                    return f && "object" == i(f) && r.call(f, "__await")
                                        ? e.resolve(f.__await).then(
                                              function (t) {
                                                  n("next", t, s, c);
                                              },
                                              function (t) {
                                                  n("throw", t, s, c);
                                              }
                                          )
                                        : e.resolve(f).then(
                                              function (t) {
                                                  (l.value = t), s(l);
                                              },
                                              function (t) {
                                                  return n("throw", t, s, c);
                                              }
                                          );
                                }
                                c(u.arg);
                            })(o, a, n, s);
                        });
                    }
                    return (n = n ? n.then(s, s) : s());
                };
            }
            function O(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (((e.delegate = null), "throw" === e.method)) {
                        if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), O(t, e), "throw" === e.method)) return h;
                        (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return h;
                }
                var i = d(n, t.iterator, e.arg);
                if ("throw" === i.type) return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), h;
                var o = i.arg;
                return o
                    ? o.done
                        ? ((e[t.resultName] = o.value), (e.next = t.nextLoc), "return" !== e.method && ((e.method = "next"), (e.arg = void 0)), (e.delegate = null), h)
                        : o
                    : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), h);
            }
            function k(t) {
                var e = { tryLoc: t[0] };
                1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
            }
            function E(t) {
                var e = t.completion || {};
                (e.type = "normal"), delete e.arg, (t.completion = e);
            }
            function S(t) {
                (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(k, this), this.reset(!0);
            }
            function C(t) {
                if (t) {
                    var e = t[s];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            i = function e() {
                                for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                                return (e.value = void 0), (e.done = !0), e;
                            };
                        return (i.next = i);
                    }
                }
                return { next: j };
            }
            function j() {
                return { value: void 0, done: !0 };
            }
            return (
                (m.prototype = v),
                l(x, "constructor", v),
                l(v, "constructor", m),
                (m.displayName = l(v, u, "GeneratorFunction")),
                (e.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
                }),
                (e.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : ((t.__proto__ = v), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(x)), t;
                }),
                (e.awrap = function (t) {
                    return { __await: t };
                }),
                w(I.prototype),
                l(I.prototype, c, function () {
                    return this;
                }),
                (e.AsyncIterator = I),
                (e.async = function (t, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new I(f(t, n, i, o), r);
                    return e.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (t) {
                              return t.done ? t.value : a.next();
                          });
                }),
                w(x),
                l(x, u, "Generator"),
                l(x, s, function () {
                    return this;
                }),
                l(x, "toString", function () {
                    return "[object Generator]";
                }),
                (e.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return (
                        e.reverse(),
                        function n() {
                            for (; e.length; ) {
                                var i = e.pop();
                                if (i in t) return (n.value = i), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (e.values = C),
                (S.prototype = {
                    constructor: S,
                    reset: function (t) {
                        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(E), !t))
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function n(n, i) {
                            return (a.type = "throw"), (a.arg = t), (e.next = n), i && ((e.method = "next"), (e.arg = void 0)), !!i;
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break;
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return (a.type = t), (a.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), h) : this.complete(a);
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return (
                            "break" === t.type || "continue" === t.type
                                ? (this.next = t.arg)
                                : "return" === t.type
                                ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                : "normal" === t.type && e && (this.next = e),
                            h
                        );
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), h;
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    E(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (t, e, n) {
                        return (this.delegate = { iterator: C(t), resultName: e, nextLoc: n }), "next" === this.method && (this.arg = void 0), h;
                    },
                }),
                e
            );
        }
        (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
    },
    function (t, e, n) {
        var i = n(52);
        (t.exports = function (t) {
            if (Array.isArray(t)) return i(t);
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e) {
        (t.exports = function (t) {
            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e) {
        (t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e) {
        (t.exports = function (t) {
            if (Array.isArray(t)) return t;
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e) {
        (t.exports = function (t, e) {
            var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
            if (null != n) {
                var i,
                    o,
                    r = [],
                    a = !0,
                    s = !1;
                try {
                    for (n = n.call(t); !(a = (i = n.next()).done) && (r.push(i.value), !e || r.length !== e); a = !0);
                } catch (t) {
                    (s = !0), (o = t);
                } finally {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (s) throw o;
                    }
                }
                return r;
            }
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e) {
        (t.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        n(60), n(97), n(104);
        var i = n(6),
            o = n.n(i),
            r = n(54),
            a = n.n(r),
            s = n(55),
            c = n.n(s),
            u = "spin-x",
            l = "spin-y",
            f = "spin-xy",
            d = "spin-yx",
            h = [!1, 0, null, void 0, "false", "0", "null", "undefined"],
            p = "x-axis",
            m = "y-axis",
            v = "center",
            g = /width=\d+|w=\d+|h=\d+|&width=\d+|&w=\d+|&h=\d+|func=\w+|\?$/g,
            y = /\?&/g,
            b = function (t) {
                return {
                    folder: w(t, "folder") || w(t, "data-folder") || "/",
                    apiVersion: w(t, "api-version") || w(t, "data-api-version") || w(t, "apiVersion") || w(t, "data-apiVersion") || "v7",
                    filenameX: w(t, "filename") || w(t, "data-filename") || w(t, "filename-x") || w(t, "data-filename-x") || "image-{index}.jpg",
                    filenameY: w(t, "filename-y") || w(t, "data-filename-y") || "image-y-{index}.jpg",
                    imageListX: w(t, "image-list-x") || w(t, "data-image-list-x") || null,
                    imageListY: w(t, "image-list-y") || w(t, "data-image-list-y") || null,
                    indexZeroBase: parseInt(w(t, "index-zero-base") || w(t, "data-index-zero-base") || 0, 10),
                    amountX: parseInt(w(t, "amount") || w(t, "data-amount") || w(t, "amount-x") || w(t, "data-amount-x") || 36, 10),
                    amountY: parseInt(w(t, "amount-y") || w(t, "data-amount-y") || 0, 10),
                    speed: parseInt(w(t, "speed") || w(t, "data-speed") || 80, 10),
                    dragSpeed: parseInt(w(t, "drag-speed") || w(t, "data-drag-speed") || 150, 10),
                    keys: x(t, "keys"),
                    keysReverse: x(t, "keys-reverse"),
                    boxShadow: w(t, "box-shadow") || w(t, "data-box-shadow"),
                    autoplay: x(t, "autoplay"),
                    autoplayBehavior: w(t, "autoplay-behavior") || w(t, "data-autoplay-behavior") || u,
                    playOnce: x(t, "play-once"),
                    autoplayReverse: x(t, "autoplay-reverse"),
                    pointerZoom: parseFloat(w(t, "pointer-zoom") || w(t, "data-pointer-zoom") || 0, 10),
                    bottomCircle: x(t, "bottom-circle"),
                    disableDrag: x(t, "disable-drag"),
                    fullscreen: x(t, "fullscreen") || x(t, "full-screen"),
                    magnifier: (null !== w(t, "magnifier") || null !== w(t, "data-magnifier")) && parseFloat(w(t, "magnifier") || w(t, "data-magnifier"), 10),
                    bottomCircleOffset: parseInt(w(t, "bottom-circle-offset") || w(t, "data-bottom-circle-offset") || 5, 10),
                    ciToken: w(t, "responsive") || w(t, "data-responsive"),
                    ciFilters: w(t, "filters") || w(t, "data-filters"),
                    ciTransformation: w(t, "transformation") || w(t, "data-transformation"),
                    lazyload: x(t, "lazyload"),
                    lazySelector: w(t, "lazyload-selector") || w(t, "data-lazyload-selector") || "lazyload",
                    spinReverse: x(t, "spin-reverse"),
                    controlReverse: x(t, "control-reverse"),
                    stopAtEdges: x(t, "stop-at-edges"),
                    hide360Logo: x(t, "hide-360-logo"),
                    logoSrc: w(t, "logo-src") || "https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/360_view.svg",
                    ratio: w(t, "ratio") || w(t, "data-ratio"),
                    imageInfo: w(t, "info") || w(t, "data-info") || x(t, "info"),
                };
            },
            x = function (t, e) {
                var n = w(t, e),
                    i = w(t, "data-".concat(e));
                return (null !== n && "false" !== n) || (null !== i && "false" !== i);
            },
            w = function (t, e) {
                return t.getAttribute(e);
            },
            I = function (t, e) {
                t.style.background = "rgba(255,255,255,0.8) url('".concat(e, "') 50% 50% / contain no-repeat");
            },
            O = (n(115), n(118), ["folder", "filenameX", "filenameY", "apiVersion", "imageListX", "imageListY", "indexZeroBase", "lazySelector", "keys", "stopAtEdges", "disableDrag", "controlReverse", "disableDrag"]),
            k = function (t) {
                return (e = t) <= 25 ? "25" : e <= 50 ? "50" : (100 * Math.ceil(e / 100)).toString();
                var e;
            },
            E = function (t, e) {
                var n,
                    i,
                    o,
                    r = t.container,
                    a = t.folder,
                    s = t.apiVersion,
                    c = t.filename,
                    u = void 0 === c ? "" : c,
                    l = t.ciParams || {},
                    f = l.ciToken,
                    d = l.ciFilters,
                    p = l.ciTransformation,
                    m = "".concat(a).concat(u);
                if (f) {
                    var v = r.offsetWidth,
                        g = -1 === h.indexOf(s) ? s : null,
                        y = g ? "".concat(g, "/") : "",
                        b =
                            ((n = k(v)),
                            (i = n.toString().split("x")),
                            (o = []),
                            [].forEach.call(i, function (t) {
                                o.push(t * Math.round(window.devicePixelRatio || 1));
                            }),
                            o.join("x")),
                        x = -1 !== new URL(m).origin.indexOf("cloudimg") ? m : "https://".concat(f, ".cloudimg.io/").concat(y).concat(m);
                    m = ""
                        .concat(x, "?")
                        .concat(p || "".concat(e ? "" : "width=".concat(b), " "))
                        .concat(d ? "&f=".concat(d) : "");
                }
                return m;
            },
            S = n(7),
            C = n.n(S),
            j = n(1),
            L = n.n(j),
            P = (function () {
                var t = C()(
                    L.a.mark(function t(e, n, i) {
                        var o;
                        return L.a.wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            ((o = new Image()).src = e),
                                            t.abrupt(
                                                "return",
                                                new Promise(function (t) {
                                                    (o.onload = function () {
                                                        t(o), i && i(o, n);
                                                    }),
                                                        (o.onerror = function () {
                                                            t(o), i && i(o, n);
                                                        });
                                                })
                                            )
                                        );
                                    case 3:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    })
                );
                return function (e, n, i) {
                    return t.apply(this, arguments);
                };
            })(),
            A = (function () {
                var t = C()(
                    L.a.mark(function t(e, n) {
                        return L.a.wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            (t.next = 2),
                                            Promise.all(
                                                e.map(
                                                    (function () {
                                                        var t = C()(
                                                            L.a.mark(function t(e, i) {
                                                                return L.a.wrap(function (t) {
                                                                    for (;;)
                                                                        switch ((t.prev = t.next)) {
                                                                            case 0:
                                                                                return (t.next = 2), P(e, i, n);
                                                                            case 2:
                                                                            case "end":
                                                                                return t.stop();
                                                                        }
                                                                }, t);
                                                            })
                                                        );
                                                        return function (e, n) {
                                                            return t.apply(this, arguments);
                                                        };
                                                    })()
                                                )
                                            )
                                        );
                                    case 2:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    })
                );
                return function (e, n) {
                    return t.apply(this, arguments);
                };
            })(),
            D = n(56),
            Y = n.n(D),
            R = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return (t += "").length >= e ? t : new Array(e - t.length + 1).join("0") + t;
            },
            M = function (t, e, n) {
                var i = e || {},
                    o = i.amount,
                    r = i.indexZeroBase;
                return Y()(new Array(o)).map(function (e, i) {
                    var o = R(i + 1, r),
                        a = t.replace("{index}", o);
                    return n ? a.replace(g, "").replace(y, "?") : a;
                });
            };
        function T(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e &&
                    (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        var X = function (t, e, n) {
                var i = e.folder;
                return t.map(function (t) {
                    var r = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2
                                ? T(Object(n), !0).forEach(function (e) {
                                      o()(t, e, n[e]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : T(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  });
                        }
                        return t;
                    })({}, e);
                    return (r.folder = /(http(s?)):\/\//gi.test(t) ? "" : i), (r.filename = t), E(r, n);
                });
            },
            F = function (t, e, n) {
                var i = (t || {}).imageList,
                    o = [];
                if (i)
                    try {
                        var r = JSON.parse(i);
                        o = X(r, t);
                    } catch (t) {
                        console.error("Wrong format in image-list attribute: ".concat(t.message));
                    }
                else o = M(e, t);
                A(o, n);
            },
            z = (function () {
                var t = C()(
                    L.a.mark(function t(e, n) {
                        return L.a.wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            (t.next = 2),
                                            Promise.all(
                                                e.map(
                                                    (function () {
                                                        var t = C()(
                                                            L.a.mark(function t(e, i) {
                                                                return L.a.wrap(function (t) {
                                                                    for (;;)
                                                                        switch ((t.prev = t.next)) {
                                                                            case 0:
                                                                                return (t.next = 2), P(e, i, n);
                                                                            case 2:
                                                                            case "end":
                                                                                return t.stop();
                                                                        }
                                                                }, t);
                                                            })
                                                        );
                                                        return function (e, n) {
                                                            return t.apply(this, arguments);
                                                        };
                                                    })()
                                                )
                                            )
                                        );
                                    case 2:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    })
                );
                return function (e, n) {
                    return t.apply(this, arguments);
                };
            })(),
            _ = function (t, e, n) {
                var i = (t || {}).imageList,
                    o = [];
                if (i)
                    try {
                        var r = JSON.parse(i);
                        o = X(r, t, !0);
                    } catch (t) {
                        console.error("Wrong format in image-list attribute: ".concat(t.message));
                    }
                else o = M(e, t, !0);
                z(o, n);
            };
        function N(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e &&
                    (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        var B = function (t, e) {
                var n = e.folder,
                    i = t[0],
                    r = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2
                                ? N(Object(n), !0).forEach(function (e) {
                                      o()(t, e, n[e]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : N(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  });
                        }
                        return t;
                    })({}, e);
                return (r.folder = /(http(s?)):\/\//gi.test(i) ? "" : n), (r.filename = i), E(r);
            },
            V = function (t, e, n) {
                var i,
                    o = e || {},
                    r = o.imageList,
                    a = o.lazySelector,
                    s = o.innerBox;
                if (r)
                    try {
                        var c = JSON.parse(r);
                        i = B(c, e);
                    } catch (t) {
                        console.error("Wrong format in image-list attribute: ".concat(t.message));
                    }
                else
                    i = (function (t, e) {
                        var n = (e || {}).indexZeroBase,
                            i = R(1, n);
                        return t.replace("{index}", i);
                    })(t, e);
                var u = new Image();
                u.setAttribute("data-src", i),
                    (u.style.position = "absolute"),
                    (u.style.top = 0),
                    (u.style.left = 0),
                    (u.style.width = "100%"),
                    (u.style.maxWidth = "100%"),
                    (u.style.maxHeight = "100%"),
                    a && (u.className = a),
                    s.appendChild(u),
                    n &&
                        (u.onload = function () {
                            return n(u);
                        });
            },
            W = (function (t) {
                return function (e, n, i, o) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0.5,
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0.5,
                        c = i / o,
                        u = e / n,
                        l = e * r,
                        f = n * r;
                    return (t ? c > u : c < u) ? (f = l / c) : (l = f * c), { width: l, height: f, offsetX: (e - l) * a, offsetY: (n - f) * s };
                };
            })(!0),
            U = n(13),
            H = n.n(U),
            q = function (t, e, n) {
                var i,
                    o,
                    r = e.container,
                    a = e.w,
                    s = e.h,
                    c = e.zoom,
                    u = e.bw,
                    l = e.offsetX,
                    f = e.offsetY,
                    d = (function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.event,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = 0,
                            i = 0,
                            o = e.getBoundingClientRect();
                        return (n = t.pageX - o.left), (i = t.pageY - o.top), { x: (n -= window.pageXOffset), y: (i -= window.pageYOffset) };
                    })(t, r);
                (i = d.x),
                    (o = d.y),
                    i > r.offsetWidth - a / c && (i = r.offsetWidth - a / c),
                    i < a / c && (i = a / c),
                    o > r.offsetHeight - s / c && (o = r.offsetHeight - s / c),
                    o < s / c && (o = s / c),
                    (n.style.left = "".concat(i - a, "px")),
                    (n.style.top = "".concat(o - s, "px"));
                var h = (i - l) * c - a + u,
                    p = (o - f) * c - s + u;
                n.style.backgroundPosition = "-".concat(h, "px -").concat(p, "px");
            },
            Z = function (t, e, n) {
                var i = (t / 150) * (36 / e) * 25 * (Math.max(n, 600) / 1500) || 1;
                return Math.floor(i);
            },
            G = function (t, e) {
                var n = t || {};
                n.classList ? n.classList.add(e) : (n.className += " ".concat(e));
            },
            J = function (t, e) {
                t.classList ? t.classList.remove(e) : (t.className = t.className.replace(new RegExp("(^|\\b)".concat(e.split(" ").join("|"), "(\\b|$)"), "gi"), " "));
            },
            $ = function (t, e, n, i, o) {
                var r = v;
                if (t) return o;
                var a = Math.abs(n.x - i.x),
                    s = Math.abs(n.y - i.y);
                return a > 10 && (r = p), s > 10 && e && (r = m), r;
            },
            K = function (t, e, n) {
                return Math.floor((t - e) / n) || 1;
            },
            Q = function (t) {
                var e = document.createElement("canvas");
                return (e.style.width = "100%"), (e.style.fontSize = "0"), t.appendChild(e), e;
            },
            tt = function (t) {
                var e = document.createElement("div");
                return (e.className = "cloudimage-360-icons-container"), t.appendChild(e), e;
            },
            et = function (t) {
                var e = document.createElement("div");
                return (e.className = "cloudimage-360-inner-box"), t.appendChild(e), e;
            },
            nt = function (t, e) {
                var n = document.createElement("div");
                return (n.className = "cloudimage-360-box-shadow"), (n.style.boxShadow = t), e.appendChild(n), n;
            },
            it = function (t) {
                var e = document.createElement("div");
                return (e.className = "cloudimage-360-loader"), t.appendChild(e), e;
            },
            ot = function (t) {
                (t.style.position = "relative"), (t.style.width = "100%"), (t.style.cursor = "wait"), t.setAttribute("draggable", "false"), (t.className = "".concat(t.className, " initialized"));
            },
            rt = function (t, e) {
                if (t && e)
                    try {
                        t.removeChild(e);
                    } catch (t) {}
            },
            at = function (t, e, n) {
                for (var i = new Array(e).length - 1; i > -1; i--) {
                    var o,
                        r = null === (o = t[i]) || void 0 === o ? void 0 : o[n];
                    if (r) return r;
                }
                return "0%";
            },
            st = function (t) {
                return t.reduce(function (e, n, i) {
                    var o = !(null == n || !n.xCoord),
                        r = !(null == n || !n.yCoord);
                    return o || (n.xCoord = at(t, i, "xCoord")), r || (n.yCoord = at(t, i, "yCoord")), e.push(n), e;
                }, []);
            },
            ct = function (t) {
                var e = "[data-hotspot-icon-id=".concat(t, "]");
                return document.querySelector(e);
            },
            ut = function (t, e, n, i, o) {
                (n.style.visibility = "visible"), (n.style.opacity = 1), (n.style.zIndex = 100), (n.style.left = "".concat(-n.offsetWidth / 2, "px")), (n.style.top = "".concat(-n.offsetHeight / 2, "px"));
                var r = t.offsetWidth / e[0],
                    a = t.offsetHeight / e[1],
                    s = "".concat(r * i, "px"),
                    c = "".concat(a * o, "px");
                n.style.transform = "translate3d(".concat(s, ", ").concat(c, ", 0)");
            },
            lt = function (t) {
                (t.style.visibility = "hidden"), (t.style.opacity = 0);
            },
            ft = function (t) {
                switch (t.toLowerCase()) {
                    case "x-axis":
                        return "x";
                    case "y-axis":
                        return "y";
                    default:
                        return "x";
                }
            },
            dt = function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "x-axis";
                e.forEach(function (e) {
                    var r = e.positions,
                        a = e.initialDimensions,
                        s = e.orientation,
                        c = e.variant.anchorId,
                        u = ft(o),
                        l = "x" === s ? n : i,
                        f = st(r).find(function (t) {
                            return t.imageIndex === l;
                        }),
                        d = ct(c);
                    if (f && u === s) {
                        var h = f.xCoord,
                            p = void 0 === h ? 0 : h,
                            m = f.yCoord;
                        ut(t, a, d, p, void 0 === m ? 0 : m);
                    } else lt(d);
                });
            };
        function ht(t) {
            if (null == t) return window;
            if ("[object Window]" !== t.toString()) {
                var e = t.ownerDocument;
                return (e && e.defaultView) || window;
            }
            return t;
        }
        function pt(t) {
            return t instanceof ht(t).Element || t instanceof Element;
        }
        function mt(t) {
            return t instanceof ht(t).HTMLElement || t instanceof HTMLElement;
        }
        function vt(t) {
            return "undefined" != typeof ShadowRoot && (t instanceof ht(t).ShadowRoot || t instanceof ShadowRoot);
        }
        var gt = Math.max,
            yt = Math.min,
            bt = Math.round;
        function xt() {
            var t = navigator.userAgentData;
            return null != t && t.brands
                ? t.brands
                      .map(function (t) {
                          return t.brand + "/" + t.version;
                      })
                      .join(" ")
                : navigator.userAgent;
        }
        function wt() {
            return !/^((?!chrome|android).)*safari/i.test(xt());
        }
        function It(t, e, n) {
            void 0 === e && (e = !1), void 0 === n && (n = !1);
            var i = t.getBoundingClientRect(),
                o = 1,
                r = 1;
            e && mt(t) && ((o = (t.offsetWidth > 0 && bt(i.width) / t.offsetWidth) || 1), (r = (t.offsetHeight > 0 && bt(i.height) / t.offsetHeight) || 1));
            var a = (pt(t) ? ht(t) : window).visualViewport,
                s = !wt() && n,
                c = (i.left + (s && a ? a.offsetLeft : 0)) / o,
                u = (i.top + (s && a ? a.offsetTop : 0)) / r,
                l = i.width / o,
                f = i.height / r;
            return { width: l, height: f, top: u, right: c + l, bottom: u + f, left: c, x: c, y: u };
        }
        function Ot(t) {
            var e = ht(t);
            return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
        }
        function kt(t) {
            return t ? (t.nodeName || "").toLowerCase() : null;
        }
        function Et(t) {
            return ((pt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
        }
        function St(t) {
            return It(Et(t)).left + Ot(t).scrollLeft;
        }
        function Ct(t) {
            return ht(t).getComputedStyle(t);
        }
        function jt(t) {
            var e = Ct(t),
                n = e.overflow,
                i = e.overflowX,
                o = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + o + i);
        }
        function Lt(t, e, n) {
            void 0 === n && (n = !1);
            var i,
                o,
                r = mt(e),
                a =
                    mt(e) &&
                    (function (t) {
                        var e = t.getBoundingClientRect(),
                            n = bt(e.width) / t.offsetWidth || 1,
                            i = bt(e.height) / t.offsetHeight || 1;
                        return 1 !== n || 1 !== i;
                    })(e),
                s = Et(e),
                c = It(t, a, n),
                u = { scrollLeft: 0, scrollTop: 0 },
                l = { x: 0, y: 0 };
            return (
                (r || (!r && !n)) &&
                    (("body" !== kt(e) || jt(s)) && (u = (i = e) !== ht(i) && mt(i) ? { scrollLeft: (o = i).scrollLeft, scrollTop: o.scrollTop } : Ot(i)),
                    mt(e) ? (((l = It(e, !0)).x += e.clientLeft), (l.y += e.clientTop)) : s && (l.x = St(s))),
                { x: c.left + u.scrollLeft - l.x, y: c.top + u.scrollTop - l.y, width: c.width, height: c.height }
            );
        }
        function Pt(t) {
            var e = It(t),
                n = t.offsetWidth,
                i = t.offsetHeight;
            return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: i };
        }
        function At(t) {
            return "html" === kt(t) ? t : t.assignedSlot || t.parentNode || (vt(t) ? t.host : null) || Et(t);
        }
        function Dt(t, e) {
            var n;
            void 0 === e && (e = []);
            var i = (function t(e) {
                    return ["html", "body", "#document"].indexOf(kt(e)) >= 0 ? e.ownerDocument.body : mt(e) && jt(e) ? e : t(At(e));
                })(t),
                o = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
                r = ht(i),
                a = o ? [r].concat(r.visualViewport || [], jt(i) ? i : []) : i,
                s = e.concat(a);
            return o ? s : s.concat(Dt(At(a)));
        }
        function Yt(t) {
            return ["table", "td", "th"].indexOf(kt(t)) >= 0;
        }
        function Rt(t) {
            return mt(t) && "fixed" !== Ct(t).position ? t.offsetParent : null;
        }
        function Mt(t) {
            for (var e = ht(t), n = Rt(t); n && Yt(n) && "static" === Ct(n).position; ) n = Rt(n);
            return n && ("html" === kt(n) || ("body" === kt(n) && "static" === Ct(n).position))
                ? e
                : n ||
                      (function (t) {
                          var e = /firefox/i.test(xt());
                          if (/Trident/i.test(xt()) && mt(t) && "fixed" === Ct(t).position) return null;
                          var n = At(t);
                          for (vt(n) && (n = n.host); mt(n) && ["html", "body"].indexOf(kt(n)) < 0; ) {
                              var i = Ct(n);
                              if (
                                  "none" !== i.transform ||
                                  "none" !== i.perspective ||
                                  "paint" === i.contain ||
                                  -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                                  (e && "filter" === i.willChange) ||
                                  (e && i.filter && "none" !== i.filter)
                              )
                                  return n;
                              n = n.parentNode;
                          }
                          return null;
                      })(t) ||
                      e;
        }
        var Tt = "top",
            Xt = "bottom",
            Ft = "right",
            zt = "left",
            _t = [Tt, Xt, Ft, zt],
            Nt = _t.reduce(function (t, e) {
                return t.concat([e + "-start", e + "-end"]);
            }, []),
            Bt = [].concat(_t, ["auto"]).reduce(function (t, e) {
                return t.concat([e, e + "-start", e + "-end"]);
            }, []),
            Vt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
        function Wt(t) {
            var e = new Map(),
                n = new Set(),
                i = [];
            return (
                t.forEach(function (t) {
                    e.set(t.name, t);
                }),
                t.forEach(function (t) {
                    n.has(t.name) ||
                        (function t(o) {
                            n.add(o.name),
                                [].concat(o.requires || [], o.requiresIfExists || []).forEach(function (i) {
                                    if (!n.has(i)) {
                                        var o = e.get(i);
                                        o && t(o);
                                    }
                                }),
                                i.push(o);
                        })(t);
                }),
                i
            );
        }
        var Ut = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Ht() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return !e.some(function (t) {
                return !(t && "function" == typeof t.getBoundingClientRect);
            });
        }
        function qt(t) {
            void 0 === t && (t = {});
            var e = t,
                n = e.defaultModifiers,
                i = void 0 === n ? [] : n,
                o = e.defaultOptions,
                r = void 0 === o ? Ut : o;
            return function (t, e, n) {
                void 0 === n && (n = r);
                var o,
                    a,
                    s = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ut, r), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} },
                    c = [],
                    u = !1,
                    l = {
                        state: s,
                        setOptions: function (n) {
                            var o = "function" == typeof n ? n(s.options) : n;
                            f(), (s.options = Object.assign({}, r, s.options, o)), (s.scrollParents = { reference: pt(t) ? Dt(t) : t.contextElement ? Dt(t.contextElement) : [], popper: Dt(e) });
                            var a = (function (t) {
                                var e = Wt(t);
                                return Vt.reduce(function (t, n) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === n;
                                        })
                                    );
                                }, []);
                            })(
                                (function (t) {
                                    var e = t.reduce(function (t, e) {
                                        var n = t[e.name];
                                        return (t[e.name] = n ? Object.assign({}, n, e, { options: Object.assign({}, n.options, e.options), data: Object.assign({}, n.data, e.data) }) : e), t;
                                    }, {});
                                    return Object.keys(e).map(function (t) {
                                        return e[t];
                                    });
                                })([].concat(i, s.options.modifiers))
                            );
                            return (
                                (s.orderedModifiers = a.filter(function (t) {
                                    return t.enabled;
                                })),
                                s.orderedModifiers.forEach(function (t) {
                                    var e = t.name,
                                        n = t.options,
                                        i = void 0 === n ? {} : n,
                                        o = t.effect;
                                    if ("function" == typeof o) {
                                        var r = o({ state: s, name: e, instance: l, options: i });
                                        c.push(r || function () {});
                                    }
                                }),
                                l.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!u) {
                                var t = s.elements,
                                    e = t.reference,
                                    n = t.popper;
                                if (Ht(e, n)) {
                                    (s.rects = { reference: Lt(e, Mt(n), "fixed" === s.options.strategy), popper: Pt(n) }),
                                        (s.reset = !1),
                                        (s.placement = s.options.placement),
                                        s.orderedModifiers.forEach(function (t) {
                                            return (s.modifiersData[t.name] = Object.assign({}, t.data));
                                        });
                                    for (var i = 0; i < s.orderedModifiers.length; i++)
                                        if (!0 !== s.reset) {
                                            var o = s.orderedModifiers[i],
                                                r = o.fn,
                                                a = o.options,
                                                c = void 0 === a ? {} : a,
                                                f = o.name;
                                            "function" == typeof r && (s = r({ state: s, options: c, name: f, instance: l }) || s);
                                        } else (s.reset = !1), (i = -1);
                                }
                            }
                        },
                        update:
                            ((o = function () {
                                return new Promise(function (t) {
                                    l.forceUpdate(), t(s);
                                });
                            }),
                            function () {
                                return (
                                    a ||
                                        (a = new Promise(function (t) {
                                            Promise.resolve().then(function () {
                                                (a = void 0), t(o());
                                            });
                                        })),
                                    a
                                );
                            }),
                        destroy: function () {
                            f(), (u = !0);
                        },
                    };
                if (!Ht(t, e)) return l;
                function f() {
                    c.forEach(function (t) {
                        return t();
                    }),
                        (c = []);
                }
                return (
                    l.setOptions(n).then(function (t) {
                        !u && n.onFirstUpdate && n.onFirstUpdate(t);
                    }),
                    l
                );
            };
        }
        var Zt = { passive: !0 };
        function Gt(t) {
            return t.split("-")[0];
        }
        function Jt(t) {
            return t.split("-")[1];
        }
        function $t(t) {
            return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
        }
        function Kt(t) {
            var e,
                n = t.reference,
                i = t.element,
                o = t.placement,
                r = o ? Gt(o) : null,
                a = o ? Jt(o) : null,
                s = n.x + n.width / 2 - i.width / 2,
                c = n.y + n.height / 2 - i.height / 2;
            switch (r) {
                case Tt:
                    e = { x: s, y: n.y - i.height };
                    break;
                case Xt:
                    e = { x: s, y: n.y + n.height };
                    break;
                case Ft:
                    e = { x: n.x + n.width, y: c };
                    break;
                case zt:
                    e = { x: n.x - i.width, y: c };
                    break;
                default:
                    e = { x: n.x, y: n.y };
            }
            var u = r ? $t(r) : null;
            if (null != u) {
                var l = "y" === u ? "height" : "width";
                switch (a) {
                    case "start":
                        e[u] = e[u] - (n[l] / 2 - i[l] / 2);
                        break;
                    case "end":
                        e[u] = e[u] + (n[l] / 2 - i[l] / 2);
                }
            }
            return e;
        }
        var Qt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function te(t) {
            var e,
                n = t.popper,
                i = t.popperRect,
                o = t.placement,
                r = t.variation,
                a = t.offsets,
                s = t.position,
                c = t.gpuAcceleration,
                u = t.adaptive,
                l = t.roundOffsets,
                f = t.isFixed,
                d = a.x,
                h = void 0 === d ? 0 : d,
                p = a.y,
                m = void 0 === p ? 0 : p,
                v = "function" == typeof l ? l({ x: h, y: m }) : { x: h, y: m };
            (h = v.x), (m = v.y);
            var g = a.hasOwnProperty("x"),
                y = a.hasOwnProperty("y"),
                b = zt,
                x = Tt,
                w = window;
            if (u) {
                var I = Mt(n),
                    O = "clientHeight",
                    k = "clientWidth";
                if ((I === ht(n) && "static" !== Ct((I = Et(n))).position && "absolute" === s && ((O = "scrollHeight"), (k = "scrollWidth")), (I = I), o === Tt || ((o === zt || o === Ft) && "end" === r)))
                    (x = Xt), (m -= (f && I === w && w.visualViewport ? w.visualViewport.height : I[O]) - i.height), (m *= c ? 1 : -1);
                if (o === zt || ((o === Tt || o === Xt) && "end" === r)) (b = Ft), (h -= (f && I === w && w.visualViewport ? w.visualViewport.width : I[k]) - i.width), (h *= c ? 1 : -1);
            }
            var E,
                S = Object.assign({ position: s }, u && Qt),
                C =
                    !0 === l
                        ? (function (t) {
                              var e = t.x,
                                  n = t.y,
                                  i = window.devicePixelRatio || 1;
                              return { x: bt(e * i) / i || 0, y: bt(n * i) / i || 0 };
                          })({ x: h, y: m })
                        : { x: h, y: m };
            return (
                (h = C.x),
                (m = C.y),
                c
                    ? Object.assign({}, S, (((E = {})[x] = y ? "0" : ""), (E[b] = g ? "0" : ""), (E.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)"), E))
                    : Object.assign({}, S, (((e = {})[x] = y ? m + "px" : ""), (e[b] = g ? h + "px" : ""), (e.transform = ""), e))
            );
        }
        var ee = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function ne(t) {
            return t.replace(/left|right|bottom|top/g, function (t) {
                return ee[t];
            });
        }
        var ie = { start: "end", end: "start" };
        function oe(t) {
            return t.replace(/start|end/g, function (t) {
                return ie[t];
            });
        }
        function re(t, e) {
            var n = e.getRootNode && e.getRootNode();
            if (t.contains(e)) return !0;
            if (n && vt(n)) {
                var i = e;
                do {
                    if (i && t.isSameNode(i)) return !0;
                    i = i.parentNode || i.host;
                } while (i);
            }
            return !1;
        }
        function ae(t) {
            return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
        }
        function se(t, e, n) {
            return "viewport" === e
                ? ae(
                      (function (t, e) {
                          var n = ht(t),
                              i = Et(t),
                              o = n.visualViewport,
                              r = i.clientWidth,
                              a = i.clientHeight,
                              s = 0,
                              c = 0;
                          if (o) {
                              (r = o.width), (a = o.height);
                              var u = wt();
                              (u || (!u && "fixed" === e)) && ((s = o.offsetLeft), (c = o.offsetTop));
                          }
                          return { width: r, height: a, x: s + St(t), y: c };
                      })(t, n)
                  )
                : pt(e)
                ? (function (t, e) {
                      var n = It(t, !1, "fixed" === e);
                      return (
                          (n.top = n.top + t.clientTop),
                          (n.left = n.left + t.clientLeft),
                          (n.bottom = n.top + t.clientHeight),
                          (n.right = n.left + t.clientWidth),
                          (n.width = t.clientWidth),
                          (n.height = t.clientHeight),
                          (n.x = n.left),
                          (n.y = n.top),
                          n
                      );
                  })(e, n)
                : ae(
                      (function (t) {
                          var e,
                              n = Et(t),
                              i = Ot(t),
                              o = null == (e = t.ownerDocument) ? void 0 : e.body,
                              r = gt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                              a = gt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                              s = -i.scrollLeft + St(t),
                              c = -i.scrollTop;
                          return "rtl" === Ct(o || n).direction && (s += gt(n.clientWidth, o ? o.clientWidth : 0) - r), { width: r, height: a, x: s, y: c };
                      })(Et(t))
                  );
        }
        function ce(t, e, n, i) {
            var o =
                    "clippingParents" === e
                        ? (function (t) {
                              var e = Dt(At(t)),
                                  n = ["absolute", "fixed"].indexOf(Ct(t).position) >= 0 && mt(t) ? Mt(t) : t;
                              return pt(n)
                                  ? e.filter(function (t) {
                                        return pt(t) && re(t, n) && "body" !== kt(t);
                                    })
                                  : [];
                          })(t)
                        : [].concat(e),
                r = [].concat(o, [n]),
                a = r[0],
                s = r.reduce(function (e, n) {
                    var o = se(t, n, i);
                    return (e.top = gt(o.top, e.top)), (e.right = yt(o.right, e.right)), (e.bottom = yt(o.bottom, e.bottom)), (e.left = gt(o.left, e.left)), e;
                }, se(t, a, i));
            return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
        }
        function ue(t) {
            return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
        }
        function le(t, e) {
            return e.reduce(function (e, n) {
                return (e[n] = t), e;
            }, {});
        }
        function fe(t, e) {
            void 0 === e && (e = {});
            var n = e,
                i = n.placement,
                o = void 0 === i ? t.placement : i,
                r = n.strategy,
                a = void 0 === r ? t.strategy : r,
                s = n.boundary,
                c = void 0 === s ? "clippingParents" : s,
                u = n.rootBoundary,
                l = void 0 === u ? "viewport" : u,
                f = n.elementContext,
                d = void 0 === f ? "popper" : f,
                h = n.altBoundary,
                p = void 0 !== h && h,
                m = n.padding,
                v = void 0 === m ? 0 : m,
                g = ue("number" != typeof v ? v : le(v, _t)),
                y = "popper" === d ? "reference" : "popper",
                b = t.rects.popper,
                x = t.elements[p ? y : d],
                w = ce(pt(x) ? x : x.contextElement || Et(t.elements.popper), c, l, a),
                I = It(t.elements.reference),
                O = Kt({ reference: I, element: b, strategy: "absolute", placement: o }),
                k = ae(Object.assign({}, b, O)),
                E = "popper" === d ? k : I,
                S = { top: w.top - E.top + g.top, bottom: E.bottom - w.bottom + g.bottom, left: w.left - E.left + g.left, right: E.right - w.right + g.right },
                C = t.modifiersData.offset;
            if ("popper" === d && C) {
                var j = C[o];
                Object.keys(S).forEach(function (t) {
                    var e = [Ft, Xt].indexOf(t) >= 0 ? 1 : -1,
                        n = [Tt, Xt].indexOf(t) >= 0 ? "y" : "x";
                    S[t] += j[n] * e;
                });
            }
            return S;
        }
        function de(t, e, n) {
            return gt(t, yt(e, n));
        }
        function he(t, e, n) {
            return void 0 === n && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
        }
        function pe(t) {
            return [Tt, Ft, Xt, zt].some(function (e) {
                return t[e] >= 0;
            });
        }
        var me = qt({
                defaultModifiers: [
                    {
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function () {},
                        effect: function (t) {
                            var e = t.state,
                                n = t.instance,
                                i = t.options,
                                o = i.scroll,
                                r = void 0 === o || o,
                                a = i.resize,
                                s = void 0 === a || a,
                                c = ht(e.elements.popper),
                                u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                            return (
                                r &&
                                    u.forEach(function (t) {
                                        t.addEventListener("scroll", n.update, Zt);
                                    }),
                                s && c.addEventListener("resize", n.update, Zt),
                                function () {
                                    r &&
                                        u.forEach(function (t) {
                                            t.removeEventListener("scroll", n.update, Zt);
                                        }),
                                        s && c.removeEventListener("resize", n.update, Zt);
                                }
                            );
                        },
                        data: {},
                    },
                    {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function (t) {
                            var e = t.state,
                                n = t.name;
                            e.modifiersData[n] = Kt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
                        },
                        data: {},
                    },
                    {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function (t) {
                            var e = t.state,
                                n = t.options,
                                i = n.gpuAcceleration,
                                o = void 0 === i || i,
                                r = n.adaptive,
                                a = void 0 === r || r,
                                s = n.roundOffsets,
                                c = void 0 === s || s,
                                u = { placement: Gt(e.placement), variation: Jt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: o, isFixed: "fixed" === e.options.strategy };
                            null != e.modifiersData.popperOffsets &&
                                (e.styles.popper = Object.assign({}, e.styles.popper, te(Object.assign({}, u, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a, roundOffsets: c })))),
                                null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, te(Object.assign({}, u, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))),
                                (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }));
                        },
                        data: {},
                    },
                    {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function (t) {
                            var e = t.state;
                            Object.keys(e.elements).forEach(function (t) {
                                var n = e.styles[t] || {},
                                    i = e.attributes[t] || {},
                                    o = e.elements[t];
                                mt(o) &&
                                    kt(o) &&
                                    (Object.assign(o.style, n),
                                    Object.keys(i).forEach(function (t) {
                                        var e = i[t];
                                        !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e);
                                    }));
                            });
                        },
                        effect: function (t) {
                            var e = t.state,
                                n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                            return (
                                Object.assign(e.elements.popper.style, n.popper),
                                (e.styles = n),
                                e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                                function () {
                                    Object.keys(e.elements).forEach(function (t) {
                                        var i = e.elements[t],
                                            o = e.attributes[t] || {},
                                            r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
                                                return (t[e] = ""), t;
                                            }, {});
                                        mt(i) &&
                                            kt(i) &&
                                            (Object.assign(i.style, r),
                                            Object.keys(o).forEach(function (t) {
                                                i.removeAttribute(t);
                                            }));
                                    });
                                }
                            );
                        },
                        requires: ["computeStyles"],
                    },
                    {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function (t) {
                            var e = t.state,
                                n = t.options,
                                i = t.name,
                                o = n.offset,
                                r = void 0 === o ? [0, 0] : o,
                                a = Bt.reduce(function (t, n) {
                                    return (
                                        (t[n] = (function (t, e, n) {
                                            var i = Gt(t),
                                                o = [zt, Tt].indexOf(i) >= 0 ? -1 : 1,
                                                r = "function" == typeof n ? n(Object.assign({}, e, { placement: t })) : n,
                                                a = r[0],
                                                s = r[1];
                                            return (a = a || 0), (s = (s || 0) * o), [zt, Ft].indexOf(i) >= 0 ? { x: s, y: a } : { x: a, y: s };
                                        })(n, e.rects, r)),
                                        t
                                    );
                                }, {}),
                                s = a[e.placement],
                                c = s.x,
                                u = s.y;
                            null != e.modifiersData.popperOffsets && ((e.modifiersData.popperOffsets.x += c), (e.modifiersData.popperOffsets.y += u)), (e.modifiersData[i] = a);
                        },
                    },
                    {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function (t) {
                            var e = t.state,
                                n = t.options,
                                i = t.name;
                            if (!e.modifiersData[i]._skip) {
                                for (
                                    var o = n.mainAxis,
                                        r = void 0 === o || o,
                                        a = n.altAxis,
                                        s = void 0 === a || a,
                                        c = n.fallbackPlacements,
                                        u = n.padding,
                                        l = n.boundary,
                                        f = n.rootBoundary,
                                        d = n.altBoundary,
                                        h = n.flipVariations,
                                        p = void 0 === h || h,
                                        m = n.allowedAutoPlacements,
                                        v = e.options.placement,
                                        g = Gt(v),
                                        y =
                                            c ||
                                            (g === v || !p
                                                ? [ne(v)]
                                                : (function (t) {
                                                      if ("auto" === Gt(t)) return [];
                                                      var e = ne(t);
                                                      return [oe(t), e, oe(e)];
                                                  })(v)),
                                        b = [v].concat(y).reduce(function (t, n) {
                                            return t.concat(
                                                "auto" === Gt(n)
                                                    ? (function (t, e) {
                                                          void 0 === e && (e = {});
                                                          var n = e,
                                                              i = n.placement,
                                                              o = n.boundary,
                                                              r = n.rootBoundary,
                                                              a = n.padding,
                                                              s = n.flipVariations,
                                                              c = n.allowedAutoPlacements,
                                                              u = void 0 === c ? Bt : c,
                                                              l = Jt(i),
                                                              f = l
                                                                  ? s
                                                                      ? Nt
                                                                      : Nt.filter(function (t) {
                                                                            return Jt(t) === l;
                                                                        })
                                                                  : _t,
                                                              d = f.filter(function (t) {
                                                                  return u.indexOf(t) >= 0;
                                                              });
                                                          0 === d.length && (d = f);
                                                          var h = d.reduce(function (e, n) {
                                                              return (e[n] = fe(t, { placement: n, boundary: o, rootBoundary: r, padding: a })[Gt(n)]), e;
                                                          }, {});
                                                          return Object.keys(h).sort(function (t, e) {
                                                              return h[t] - h[e];
                                                          });
                                                      })(e, { placement: n, boundary: l, rootBoundary: f, padding: u, flipVariations: p, allowedAutoPlacements: m })
                                                    : n
                                            );
                                        }, []),
                                        x = e.rects.reference,
                                        w = e.rects.popper,
                                        I = new Map(),
                                        O = !0,
                                        k = b[0],
                                        E = 0;
                                    E < b.length;
                                    E++
                                ) {
                                    var S = b[E],
                                        C = Gt(S),
                                        j = "start" === Jt(S),
                                        L = [Tt, Xt].indexOf(C) >= 0,
                                        P = L ? "width" : "height",
                                        A = fe(e, { placement: S, boundary: l, rootBoundary: f, altBoundary: d, padding: u }),
                                        D = L ? (j ? Ft : zt) : j ? Xt : Tt;
                                    x[P] > w[P] && (D = ne(D));
                                    var Y = ne(D),
                                        R = [];
                                    if (
                                        (r && R.push(A[C] <= 0),
                                        s && R.push(A[D] <= 0, A[Y] <= 0),
                                        R.every(function (t) {
                                            return t;
                                        }))
                                    ) {
                                        (k = S), (O = !1);
                                        break;
                                    }
                                    I.set(S, R);
                                }
                                if (O)
                                    for (
                                        var M = function (t) {
                                                var e = b.find(function (e) {
                                                    var n = I.get(e);
                                                    if (n)
                                                        return n.slice(0, t).every(function (t) {
                                                            return t;
                                                        });
                                                });
                                                if (e) return (k = e), "break";
                                            },
                                            T = p ? 3 : 1;
                                        T > 0;
                                        T--
                                    ) {
                                        if ("break" === M(T)) break;
                                    }
                                e.placement !== k && ((e.modifiersData[i]._skip = !0), (e.placement = k), (e.reset = !0));
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: { _skip: !1 },
                    },
                    {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function (t) {
                            var e = t.state,
                                n = t.options,
                                i = t.name,
                                o = n.mainAxis,
                                r = void 0 === o || o,
                                a = n.altAxis,
                                s = void 0 !== a && a,
                                c = n.boundary,
                                u = n.rootBoundary,
                                l = n.altBoundary,
                                f = n.padding,
                                d = n.tether,
                                h = void 0 === d || d,
                                p = n.tetherOffset,
                                m = void 0 === p ? 0 : p,
                                v = fe(e, { boundary: c, rootBoundary: u, padding: f, altBoundary: l }),
                                g = Gt(e.placement),
                                y = Jt(e.placement),
                                b = !y,
                                x = $t(g),
                                w = "x" === x ? "y" : "x",
                                I = e.modifiersData.popperOffsets,
                                O = e.rects.reference,
                                k = e.rects.popper,
                                E = "function" == typeof m ? m(Object.assign({}, e.rects, { placement: e.placement })) : m,
                                S = "number" == typeof E ? { mainAxis: E, altAxis: E } : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
                                C = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                                j = { x: 0, y: 0 };
                            if (I) {
                                if (r) {
                                    var L,
                                        P = "y" === x ? Tt : zt,
                                        A = "y" === x ? Xt : Ft,
                                        D = "y" === x ? "height" : "width",
                                        Y = I[x],
                                        R = Y + v[P],
                                        M = Y - v[A],
                                        T = h ? -k[D] / 2 : 0,
                                        X = "start" === y ? O[D] : k[D],
                                        F = "start" === y ? -k[D] : -O[D],
                                        z = e.elements.arrow,
                                        _ = h && z ? Pt(z) : { width: 0, height: 0 },
                                        N = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                                        B = N[P],
                                        V = N[A],
                                        W = de(0, O[D], _[D]),
                                        U = b ? O[D] / 2 - T - W - B - S.mainAxis : X - W - B - S.mainAxis,
                                        H = b ? -O[D] / 2 + T + W + V + S.mainAxis : F + W + V + S.mainAxis,
                                        q = e.elements.arrow && Mt(e.elements.arrow),
                                        Z = q ? ("y" === x ? q.clientTop || 0 : q.clientLeft || 0) : 0,
                                        G = null != (L = null == C ? void 0 : C[x]) ? L : 0,
                                        J = Y + H - G,
                                        $ = de(h ? yt(R, Y + U - G - Z) : R, Y, h ? gt(M, J) : M);
                                    (I[x] = $), (j[x] = $ - Y);
                                }
                                if (s) {
                                    var K,
                                        Q = "x" === x ? Tt : zt,
                                        tt = "x" === x ? Xt : Ft,
                                        et = I[w],
                                        nt = "y" === w ? "height" : "width",
                                        it = et + v[Q],
                                        ot = et - v[tt],
                                        rt = -1 !== [Tt, zt].indexOf(g),
                                        at = null != (K = null == C ? void 0 : C[w]) ? K : 0,
                                        st = rt ? it : et - O[nt] - k[nt] - at + S.altAxis,
                                        ct = rt ? et + O[nt] + k[nt] - at - S.altAxis : ot,
                                        ut =
                                            h && rt
                                                ? (function (t, e, n) {
                                                      var i = de(t, e, n);
                                                      return i > n ? n : i;
                                                  })(st, et, ct)
                                                : de(h ? st : it, et, h ? ct : ot);
                                    (I[w] = ut), (j[w] = ut - et);
                                }
                                e.modifiersData[i] = j;
                            }
                        },
                        requiresIfExists: ["offset"],
                    },
                    {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function (t) {
                            var e,
                                n = t.state,
                                i = t.name,
                                o = t.options,
                                r = n.elements.arrow,
                                a = n.modifiersData.popperOffsets,
                                s = Gt(n.placement),
                                c = $t(s),
                                u = [zt, Ft].indexOf(s) >= 0 ? "height" : "width";
                            if (r && a) {
                                var l = (function (t, e) {
                                        return ue("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : le(t, _t));
                                    })(o.padding, n),
                                    f = Pt(r),
                                    d = "y" === c ? Tt : zt,
                                    h = "y" === c ? Xt : Ft,
                                    p = n.rects.reference[u] + n.rects.reference[c] - a[c] - n.rects.popper[u],
                                    m = a[c] - n.rects.reference[c],
                                    v = Mt(r),
                                    g = v ? ("y" === c ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
                                    y = p / 2 - m / 2,
                                    b = l[d],
                                    x = g - f[u] - l[h],
                                    w = g / 2 - f[u] / 2 + y,
                                    I = de(b, w, x),
                                    O = c;
                                n.modifiersData[i] = (((e = {})[O] = I), (e.centerOffset = I - w), e);
                            }
                        },
                        effect: function (t) {
                            var e = t.state,
                                n = t.options.element,
                                i = void 0 === n ? "[data-popper-arrow]" : n;
                            null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && re(e.elements.popper, i) && (e.elements.arrow = i);
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"],
                    },
                    {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function (t) {
                            var e = t.state,
                                n = t.name,
                                i = e.rects.reference,
                                o = e.rects.popper,
                                r = e.modifiersData.preventOverflow,
                                a = fe(e, { elementContext: "reference" }),
                                s = fe(e, { altBoundary: !0 }),
                                c = he(a, i),
                                u = he(s, o, r),
                                l = pe(c),
                                f = pe(u);
                            (e.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: l, hasPopperEscaped: f }),
                                (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": l, "data-popper-escaped": f }));
                        },
                    },
                ],
            }),
            ve = function (t, e) {
                e || (t.removeAttribute("data-show"), t.removeAttribute("data-cloudimage-360-show"));
            },
            ge = n(57),
            ye = n.n(ge),
            be = function (t, e, n) {
                var i = document.createElement("div"),
                    o = document.createElement("div");
                return (
                    (i.className = "cloudimage-360-images-carousel"),
                    (i.style.maxWidth = "".concat(n.offsetWidth, "px")),
                    (o.className = "cloudimage-360-carousel-dots"),
                    t.forEach(function (t, n) {
                        var r = (function (t, e) {
                                var n = document.createElement("img");
                                return (
                                    (n.className = "cloudimage-360-carousel-image"),
                                    n.setAttribute("src", t.src || ""),
                                    n.setAttribute("alt", t.alt || "more-info"),
                                    e || (n.setAttribute("data-active-image", ""), (n.className += " active-image")),
                                    n
                                );
                            })(t, n),
                            a = (function (t, e, n) {
                                var i = document.createElement("button");
                                return (
                                    (i.className = "cloudimage-360-carousel-dot"),
                                    (i.onclick = function () {
                                        return (function (t, e, n) {
                                            var i = n.querySelector("[data-active-dot]"),
                                                o = n.querySelector("[data-active-image]");
                                            i.classList.remove("active-dot"),
                                                i.removeAttribute("data-active-dot"),
                                                o.classList.remove("active-image"),
                                                o.removeAttribute("data-active-image"),
                                                (t.className += " active-image"),
                                                t.setAttribute("data-active-image", ""),
                                                (e.className += " active-dot"),
                                                e.setAttribute("data-active-dot", "");
                                        })(t, i, n);
                                    }),
                                    e || ((i.className += " active-dot"), i.setAttribute("data-active-dot", "")),
                                    i
                                );
                            })(r, n, e);
                        o.appendChild(a), i.appendChild(r);
                    }),
                    [i, o]
                );
            },
            xe = function (t, e, n) {
                var i = t.images,
                    o = t.title,
                    r = t.description,
                    a = t.moreDetailsUrl,
                    s = t.moreDetailsTitle,
                    c = void 0 === s ? "Read more" : s,
                    u = document.createElement("div");
                if (((u.className = "cloudimage-360-modal-wrapper"), i)) {
                    var l = document.createElement("div"),
                        f = be(i, n, e),
                        d = ye()(f, 2),
                        h = d[0],
                        p = d[1];
                    l.appendChild(h), i.length > 1 && l.appendChild(p), u.appendChild(l), (l.className = "cloudimage-360-images-carousel-wrapper");
                }
                if (o) {
                    var m = (function (t) {
                        var e = document.createElement("h4");
                        return (e.innerText = t), (e.className = "cloudimage-360-modal-title"), e;
                    })(o);
                    u.appendChild(m);
                }
                if (r) {
                    var v = (function (t) {
                        var e = document.createElement("p");
                        return (e.innerText = t), (e.className = "cloudimage-360-modal-description"), e;
                    })(r);
                    u.appendChild(v);
                }
                if (a) {
                    var g = (function (t, e) {
                        var n = document.createElement("a");
                        return (n.href = t), (n.innerText = e), (n.className = "cloudimage-360-modal-more-details"), (n.target = "_blank"), n;
                    })(a, c);
                    u.appendChild(g);
                }
                n.appendChild(u);
            },
            we = function (t, e, n) {
                var i,
                    o = e.variant,
                    r = n.popupSelector,
                    a = n.arrow,
                    s = o.url,
                    c = o.images,
                    u = o.title,
                    l = o.anchorId,
                    f = o.description,
                    d = o.moreDetailsUrl,
                    h = document.createElement("div");
                if (
                    ((h.className = "cloudimage-360-hotspot-popup ".concat(r)),
                    h.setAttribute("data-hotspot-popup-id", l),
                    h.setAttribute("data-cloudimage-360-hotspot", ""),
                    (h.style.minHeight = 16),
                    (h.style.minWidth = 16),
                    (h.style.cursor = "default"),
                    (h.onclick = function (t) {
                        return t.stopPropagation();
                    }),
                    ("object" === H()(o) && c) || f || d || (u && !s))
                )
                    xe(o, t, h);
                else if (s) {
                    var p = (function (t) {
                        var e = t.url,
                            n = t.title,
                            i = t.newTab,
                            o = document.createElement("a");
                        return (o.href = e), (o.innerText = n), i && (o.target = "_blank"), o;
                    })(o);
                    h.appendChild(p);
                } else if ("string" == typeof o)
                    try {
                        var m = ((i = o), document.querySelector("[".concat("data-cloudimage-360-hotspots", "=").concat(i, "]"))),
                            v = m.cloneNode(!0);
                        h.appendChild(v), m.parentNode.removeChild(m);
                    } catch (t) {
                        console.error("Cloudimage-360: Element with anchorId '".concat(l, "' not exist in the DOM"));
                    }
                if (a) {
                    var g = (function () {
                        var t = document.createElement("div");
                        return t.setAttribute("data-popper-arrow", ""), t.setAttribute("data-cloudimage-360-hotspot", ""), (t.className = "cloudimage-360-popup-arrow"), t;
                    })();
                    h.appendChild(g);
                }
                return t.appendChild(h), h;
            },
            Ie = function (t, e) {
                e.forEach(function (e) {
                    var n = e.popupProps,
                        i = we(t, e, n),
                        o = (function (t, e, n) {
                            var i = e.placement,
                                o = e.offset,
                                r = document.createElement("div"),
                                a = me(r, t);
                            return (
                                a.setOptions({
                                    placement: i,
                                    modifiers: [
                                        { name: "offset", options: { offset: o } },
                                        { name: "preventOverflow", options: { boundary: n } },
                                    ],
                                }),
                                a
                            );
                        })(i, n, t),
                        r = (function (t, e, n, i) {
                            var o,
                                r = e.indicatorSelector,
                                a = e.variant,
                                s = a.url,
                                c = a.anchorId,
                                u = e.popupProps.open,
                                l = void 0 !== u && u,
                                f = document.createElement("div");
                            (f.style.position = "absolute"),
                                (f.className = "cloudimage-360-hotspot-".concat(s ? "link" : "custom", "-icon ").concat(r)),
                                f.setAttribute("data-hotspot-icon-id", c),
                                f.setAttribute("data-cloudimage-360-hotspot", "");
                            f.onclick = function (t) {
                                return t.stopPropagation();
                            };
                            return (
                                ["mouseenter", "touchstart", "focus"].forEach(function (t) {
                                    f.addEventListener(t, function () {
                                        return (function (t, e) {
                                            t.setAttribute("data-show", ""), t.setAttribute("data-cloudimage-360-show", ""), e.update();
                                        })(n, i);
                                    });
                                }),
                                l ||
                                    ["mouseleave", "blur"].forEach(function (t) {
                                        f.addEventListener(t, function () {
                                            return setTimeout(function () {
                                                return ve(n, o);
                                            }, 160);
                                        });
                                    }),
                                n.addEventListener("mouseenter", function () {
                                    o = !0;
                                }),
                                n.addEventListener("mouseleave", function () {
                                    (o = !1), !l && ve(n, o);
                                }),
                                lt(f),
                                t.appendChild(f),
                                f
                            );
                        })(t, e, i, o);
                    (o.state.elements.reference = r), o.update();
                });
            };
        function Oe(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e &&
                    (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function ke(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? Oe(Object(n), !0).forEach(function (e) {
                          o()(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : Oe(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
            }
            return t;
        }
        var Ee = function (t) {
                return t.map(function (t) {
                    var e = t.variant,
                        n = void 0 === e ? {} : e,
                        i = t.positions,
                        o = void 0 === i ? [] : i,
                        r = t.indicatorSelector,
                        a = void 0 === r ? "" : r,
                        s = t.popupProps,
                        c = void 0 === s ? {} : s,
                        u = t.orientation,
                        l = void 0 === u ? "x" : u,
                        f = t.initialDimensions,
                        d = void 0 === f ? [500, 500] : f;
                    !(function (t) {
                        var e = t.variant,
                            n = void 0 === e ? {} : e,
                            i = n.url,
                            o = n.title,
                            r = n.anchorId,
                            a = n.images,
                            s = n.description,
                            c = n.moreDetailsUrl;
                        i && !o && console.error("Cloudimage-360: Hotspot config with variant link must have title for the link"),
                            o || i || r || a || s || c || console.error("Cloudimage-360: Hotspot config with custom variant must provide anchorId");
                    })(t);
                    var h = (function (t) {
                            var e = t.popupSelector,
                                n = void 0 === e ? "" : e,
                                i = t.arrow,
                                o = void 0 === i || i,
                                r = t.offset,
                                a = void 0 === r ? [0, 10] : r,
                                s = t.placement,
                                c = void 0 === s ? "auto" : s,
                                u = t.open;
                            return { popupSelector: n, arrow: o, offset: a, placement: c, open: void 0 !== u && u };
                        })(c),
                        p = null == n ? void 0 : n.anchorId;
                    if (!p) {
                        var m = Math.floor(1e4 * Math.random());
                        p = "cloudimage-360-".concat(m);
                    }
                    return { variant: ke(ke({}, n), {}, { anchorId: p }), popupProps: h, positions: o, indicatorSelector: a, initialDimensions: d, orientation: l.toLowerCase() };
                });
            },
            Se = function () {
                return !!document.querySelectorAll("[data-cloudimage-360-show]").length;
            },
            Ce = function (t, e, n) {
                (e && x(e.target, "data-cloudimage-360-hotspot")) ||
                    t.forEach(function (t) {
                        var e = t.variant.anchorId;
                        ct(e).style.pointerEvents = n ? "none" : "all";
                    });
            };
        function je(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e &&
                    (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function Le(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? je(Object(n), !0).forEach(function (e) {
                          o()(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : je(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
            }
            return t;
        }
        var Pe = (function () {
            function t(e, n, i) {
                a()(this, t),
                    (this.container = e),
                    (this.movementStart = { x: 0, y: 0 }),
                    (this.isStartSpin = !1),
                    (this.movingDirection = v),
                    (this.isClicked = !1),
                    (this.loadedImagesX = 0),
                    (this.loadedImagesY = 0),
                    (this.imagesLoaded = !1),
                    (this.reversed = !1),
                    (this.fullscreenView = !!n),
                    (this.imagesX = []),
                    (this.imagesY = []),
                    (this.originalImagesX = []),
                    (this.originalImagesY = []),
                    (this.resizedImagesX = []),
                    (this.resizedImagesY = []),
                    (this.devicePixelRatio = Math.round(window.devicePixelRatio || 1)),
                    (this.isMobile = !(!("ontouchstart" in window) && !navigator.msMaxTouchPoints)),
                    (this.id = e.id),
                    (this.hotspotsConfigs = i && Ee(i)),
                    (this.isMagnifyOpen = !1),
                    (this.isDragged = !1),
                    (this.startPointerZoom = !1),
                    (this.zoomIntensity = 0),
                    (this.mouseTracked = !1),
                    (this.intialPositions = { x: 0, y: 0 }),
                    (this.pointerCurrentPosition = { x: 0, y: 0 }),
                    (this.isStartedLoadOriginalImages = !1),
                    this.init(e);
            }
            return (
                c()(t, [
                    {
                        key: "isReady",
                        value: function () {
                            var t = this.imagesX.filter(function (t) {
                                    return t;
                                }),
                                e = this.imagesY.filter(function (t) {
                                    return t;
                                }),
                                n = this.amountX + this.amountY;
                            return t.length + e.length === n;
                        },
                    },
                    {
                        key: "mouseDown",
                        value: function (t) {
                            if (this.imagesLoaded) {
                                var e = Se(),
                                    n = t.pageX,
                                    i = t.pageY;
                                this.hideInitialIcons(),
                                    (this.autoplay || this.loopTimeoutId) && (this.stop(), (this.autoplay = !1), (this.isZoomReady = !0)),
                                    (this.intialPositions = { x: n, y: i }),
                                    (this.movementStart = { x: n, y: i }),
                                    (this.isClicked = !0),
                                    (this.isDragged = !1),
                                    this.hotspotsConfigs && Ce(this.hotspotsConfigs, t, !0),
                                    e && (this.isClicked = !1),
                                    this.hotspotsConfigs && dt(this.container, this.hotspotsConfigs, this.activeImageX, this.activeImageY, this.movingDirection);
                            }
                        },
                    },
                    {
                        key: "mouseUp",
                        value: function () {
                            var t = this;
                            this.imagesLoaded &&
                                this.isClicked &&
                                ((this.movementStart = { x: 0, y: 0 }),
                                (this.isStartSpin = !1),
                                (this.isClicked = !1),
                                this.bottomCircle && !this.mouseTracked && this.show360ViewCircleIcon(),
                                this.hotspotsConfigs && Ce(this.hotspotsConfigs),
                                this.pointerZoom && !this.fullscreenView
                                    ? (setTimeout(function () {
                                          t.isZoomReady = !0;
                                      }, 50),
                                      this.mouseTracked ? (this.container.style.cursor = "zoom-out") : (this.container.style.cursor = "zoom-in"))
                                    : (this.container.style.cursor = "grab"));
                        },
                    },
                    {
                        key: "mouseClick",
                        value: function (t) {
                            this.pointerZoom &&
                                !this.fullscreenView &&
                                (this.setCursorPosition(t),
                                this.hideInitialIcons(),
                                this.isStartedLoadOriginalImages || this.isDragged || !this.isZoomReady || this.prepareOriginalImages(t),
                                this.isAllOriginalImagesLoaded && !this.isDragged && this.isZoomReady && this.togglePointerZoom(t));
                        },
                    },
                    {
                        key: "mouseMove",
                        value: function (t) {
                            if (this.imagesLoaded) {
                                var e = t.pageX,
                                    n = t.pageY;
                                if ((this.mouseTracked && (this.setCursorPosition(t), this.isClicked || this.update()), this.isClicked)) {
                                    var i = { x: e, y: n };
                                    (this.container.style.cursor = "grabbing"), (this.isDragged = !0), (this.movingDirection = $(this.isStartSpin, this.allowSpinY, this.intialPositions, i, this.movingDirection)), this.onMoveHandler(t);
                                }
                            }
                        },
                    },
                    {
                        key: "mouseLeave",
                        value: function () {
                            this.imagesLoaded && (this.pointerZoom && this.mouseTracked && this.togglePointerZoom(), this.isMagnifyOpen && this.closeMagnifier());
                        },
                    },
                    {
                        key: "togglePointerZoom",
                        value: function () {
                            var t,
                                e = this;
                            if (((this.autoplay || this.loopTimeoutId) && (this.stop(), (this.autoplay = !1)), this.mouseTracked)) {
                                var n =
                                    ((t = this.pointerZoom),
                                    Array.from(Array(20)).reduce(function (e, n, i) {
                                        var o = +((i - 1 < 0 ? t : e[i - 1]) - (t - 1) / 20).toFixed(2);
                                        return (e || []).push(o), e;
                                    }, []));
                                (this.container.style.cursor = "zoom-in"),
                                    n.forEach(function (t, i) {
                                        setTimeout(function () {
                                            (e.zoomIntensity = t), e.update(), i === n.length - 1 && ((e.mouseTracked = !1), e.update());
                                        }, 200 * (e.pointerZoom - t));
                                    });
                            } else {
                                this.bottomCircle && this.hide360ViewCircleIcon();
                                var i = (function (t) {
                                    return Array.from(Array(20)).reduce(function (e, n, i) {
                                        var o = +((i - 1 < 0 ? 1 : e[i - 1]) + (t - 1) / 20).toFixed(2);
                                        return (e || []).push(o), e;
                                    }, []);
                                })(this.pointerZoom);
                                this.hotspotsConfigs &&
                                    (document.querySelectorAll("[data-hotspot-icon-id]") || []).forEach(function (t) {
                                        lt(t);
                                    }),
                                    i.forEach(function (t) {
                                        setTimeout(function () {
                                            (e.zoomIntensity = t), e.update();
                                        }, 200 * t);
                                    }),
                                    (this.mouseTracked = !0),
                                    (this.container.style.cursor = "zoom-out");
                            }
                        },
                    },
                    {
                        key: "onOriginalImageLoad",
                        value: function (t, e, n, i) {
                            t === m ? (this.originalImagesY[i] = n) : (this.originalImagesX[i] = n);
                            var o = this.originalImagesX.filter(function (t) {
                                    return t;
                                }),
                                r = this.originalImagesY.filter(function (t) {
                                    return t;
                                }),
                                a = this.amountX + this.amountY,
                                s = o.length + r.length,
                                c = o.length + r.length === this.amountX + this.amountY,
                                u = Math.round((s / a) * 100);
                            this.updatePercentageInLoader(u), c && (this.removeLoader(), this.togglePointerZoom(e), (this.mouseTracked = !0), (this.isAllOriginalImagesLoaded = !0));
                        },
                    },
                    {
                        key: "prepareOriginalImages",
                        value: function (t) {
                            var e = E(this.srcXConfig);
                            if (((this.isStartedLoadOriginalImages = !0), (this.loader = it(this.innerBox)), (this.container.style.cursor = "wait"), _(this.srcXConfig, e, this.onOriginalImageLoad.bind(this, p, t)), this.allowSpinY)) {
                                var n = E(this.srcYConfig);
                                _(this.srcYConfig, n, this.onOriginalImageLoad.bind(this, m, t));
                            }
                        },
                    },
                    {
                        key: "touchStart",
                        value: function (t) {
                            if (this.imagesLoaded) {
                                var e = Se();
                                this.hideInitialIcons(),
                                    (this.autoplay || this.loopTimeoutId) && (this.stop(), (this.autoplay = !1)),
                                    (this.intialPositions = { x: t.touches[0].clientX, y: t.touches[0].clientY }),
                                    (this.movementStart = { x: t.touches[0].clientX, y: t.touches[0].clientY }),
                                    (this.isClicked = !0),
                                    e && (this.isClicked = !1);
                            }
                        },
                    },
                    {
                        key: "touchEnd",
                        value: function () {
                            this.imagesLoaded && (this.bottomCircle && this.show360ViewCircleIcon(), (this.movementStart = { x: 0, y: 0 }), (this.isStartSpin = !1), (this.isClicked = !1));
                        },
                    },
                    {
                        key: "touchMove",
                        value: function (t) {
                            if (this.isClicked && this.imagesLoaded) {
                                t.cancelable && t.preventDefault();
                                var e = { x: t.touches[0].clientX, y: t.touches[0].clientY };
                                (this.movingDirection = $(this.isStartSpin, this.allowSpinY, this.intialPositions, e, this.movingDirection)), this.onMoveHandler(t);
                            }
                        },
                    },
                    {
                        key: "keyDownGeneral",
                        value: function (t) {
                            this.imagesLoaded && (this.glass && this.closeMagnifier(), 27 === t.keyCode && this.mouseTracked && this.togglePointerZoom());
                        },
                    },
                    {
                        key: "hideInitialIcons",
                        value: function () {
                            this.glass && this.closeMagnifier(), this.view360Icon && this.remove360ViewIcon();
                        },
                    },
                    {
                        key: "setCursorPosition",
                        value: function (t) {
                            this.mousePositions = { x: t.clientX, y: t.clientY };
                        },
                    },
                    {
                        key: "getCursorPositionInCanvas",
                        value: function () {
                            var t = this.canvas.getBoundingClientRect();
                            return (this.pointerCurrentPosition = { x: this.mousePositions.x - t.left, y: this.mousePositions.y - t.top }), this.pointerCurrentPosition;
                        },
                    },
                    {
                        key: "keyDown",
                        value: function (t) {
                            this.imagesLoaded &&
                                (this.glass && this.closeMagnifier(),
                                37 === t.keyCode && (this.keysReverse ? this.left() : this.right(), this.onSpin()),
                                39 === t.keyCode && (this.keysReverse ? this.right() : this.left(), this.onSpin()),
                                this.allowSpinY &&
                                    (t.preventDefault(), 38 === t.keyCode && (this.keysReverse ? this.top() : this.bottom(), this.onSpin()), 40 === t.keyCode && (this.keysReverse ? this.bottom() : this.top(), this.onSpin())));
                        },
                    },
                    {
                        key: "onSpin",
                        value: function () {
                            this.bottomCircle && this.hide360ViewCircleIcon(), this.view360Icon && this.remove360ViewIcon(), (this.autoplay || this.loopTimeoutId) && (this.stop(), (this.autoplay = !1));
                        },
                    },
                    {
                        key: "keyUp",
                        value: function (t) {
                            this.imagesLoaded && -1 !== [37, 39].indexOf(t.keyCode) && this.onFinishSpin();
                        },
                    },
                    {
                        key: "onFinishSpin",
                        value: function () {
                            this.bottomCircle && this.show360ViewCircleIcon();
                        },
                    },
                    {
                        key: "moveActiveIndexUp",
                        value: function (t) {
                            var e = this.controlReverse ? !this.spinReverse : this.spinReverse;
                            this.stopAtEdges
                                ? this.activeImageX + t >= this.amountX
                                    ? ((this.activeImageX = this.amountX), (e ? this.leftElem : this.rightElem) && G(e ? this.leftElem : this.rightElem, "not-active"))
                                    : ((this.activeImageX += t), this.rightElem && J(this.rightElem, "not-active"), this.leftElem && J(this.leftElem, "not-active"))
                                : ((this.activeImageX = (this.activeImageX + t) % this.amountX || this.amountX), this.activeImageX === this.amountX && this.allowSpinY && (this.spinY = !0));
                        },
                    },
                    {
                        key: "moveActiveIndexDown",
                        value: function (t) {
                            var e = this.controlReverse ? !this.spinReverse : this.spinReverse;
                            this.stopAtEdges
                                ? this.activeImageX - t <= 1
                                    ? ((this.activeImageX = 1), (e ? this.rightElem : this.leftElem) && G(e ? this.rightElem : this.leftElem, "not-active"))
                                    : ((this.activeImageX -= t), this.leftElem && J(this.leftElem, "not-active"), this.rightElem && J(this.rightElem, "not-active"))
                                : this.activeImageX - t < 1
                                ? ((this.activeImageX = this.amountX + (this.activeImageX - t)), (this.spinY = !0))
                                : (this.activeImageX -= t);
                        },
                    },
                    {
                        key: "moveActiveYIndexUp",
                        value: function (t) {
                            var e = this.controlReverse ? !this.spinReverse : this.spinReverse;
                            this.stopAtEdges
                                ? this.activeImageY + t >= this.amountY
                                    ? ((this.activeImageY = this.amountY), (e ? this.bottomElem : this.topElem) && G(e ? this.bottomElem : this.topElem, "not-active"))
                                    : ((this.activeImageY += t), this.topElem && J(this.topElem, "not-active"), this.bottomElem && J(this.bottomElem, "not-active"))
                                : ((this.activeImageY = (this.activeImageY + t) % this.amountY || this.amountY), this.activeImageY === this.amountY && (this.spinY = !1));
                        },
                    },
                    {
                        key: "moveActiveYIndexDown",
                        value: function (t) {
                            var e = this.controlReverse ? !this.spinReverse : this.spinReverse;
                            this.stopAtEdges
                                ? this.activeImageY - t <= 1
                                    ? ((this.activeImageY = 1), (e ? this.topElem : this.bottomElem) && G(e ? this.topElem : this.bottomElem, "not-active"))
                                    : ((this.activeImageY -= t), this.bottomElem && J(this.bottomElem, "not-active"), this.topElem && J(this.topElem, "not-active"))
                                : this.activeImageY - t < 1
                                ? ((this.activeImageY = this.amountY + (this.activeImageY - t)), (this.spinY = !1))
                                : (this.activeImageY -= t);
                        },
                    },
                    {
                        key: "moveRight",
                        value: function (t) {
                            var e = K(t, this.movementStart.x, this.speedFactor);
                            this.spinReverse ? this.moveActiveIndexDown(e) : this.moveActiveIndexUp(e), (this.movementStart.x = t), (this.activeImageY = 1), this.update();
                        },
                    },
                    {
                        key: "moveLeft",
                        value: function (t) {
                            var e = K(this.movementStart.x, t, this.speedFactor);
                            this.spinReverse ? this.moveActiveIndexUp(e) : this.moveActiveIndexDown(e), (this.activeImageY = 1), (this.movementStart.x = t), this.update();
                        },
                    },
                    {
                        key: "moveTop",
                        value: function (t) {
                            var e = K(this.movementStart.y, t, this.speedFactor);
                            this.spinReverse ? this.moveActiveYIndexUp(e) : this.moveActiveYIndexDown(e), (this.activeImageX = 1), (this.movementStart.y = t), this.update();
                        },
                    },
                    {
                        key: "moveBottom",
                        value: function (t) {
                            var e = K(t, this.movementStart.y, this.speedFactor);
                            this.spinReverse ? this.moveActiveYIndexDown(e) : this.moveActiveYIndexUp(e), (this.activeImageX = 1), (this.movementStart.y = t), this.update();
                        },
                    },
                    {
                        key: "onMoveHandler",
                        value: function (t) {
                            var e = this.isMobile ? t.touches[0].clientX : t.pageX,
                                n = this.isMobile ? t.touches[0].clientY : t.pageY,
                                i = e - this.movementStart.x >= this.speedFactor,
                                o = this.movementStart.x - e >= this.speedFactor,
                                r = this.movementStart.y - n >= this.speedFactor,
                                a = n - this.movementStart.y >= this.speedFactor;
                            this.bottomCircle && this.hide360ViewCircleIcon(),
                                i && this.movingDirection === p
                                    ? (this.moveRight(e), (this.isStartSpin = !0))
                                    : o && this.movingDirection === p
                                    ? (this.moveLeft(e), (this.isStartSpin = !0))
                                    : r && this.movingDirection === m
                                    ? (this.moveTop(n), (this.isStartSpin = !0))
                                    : a && this.movingDirection === m && (this.moveBottom(n), (this.isStartSpin = !0));
                        },
                    },
                    {
                        key: "left",
                        value: function () {
                            (this.movingDirection = p), (this.activeImageY = this.reversed ? this.amountY : 1), this.moveActiveIndexDown(1), this.update();
                        },
                    },
                    {
                        key: "right",
                        value: function () {
                            (this.movingDirection = p), (this.activeImageY = this.reversed ? this.amountY : 1), this.moveActiveIndexUp(1), this.update();
                        },
                    },
                    {
                        key: "top",
                        value: function () {
                            (this.movingDirection = m), (this.activeImageX = this.reversed ? this.amountX : 1), this.moveActiveYIndexUp(1), this.update();
                        },
                    },
                    {
                        key: "bottom",
                        value: function () {
                            (this.movingDirection = m), (this.activeImageX = this.reversed ? this.amountX : 1), this.moveActiveYIndexDown(1), this.update();
                        },
                    },
                    {
                        key: "loop",
                        value: function (t) {
                            var e = { left: this.left.bind(this), right: this.right.bind(this), top: this.top.bind(this), bottom: this.bottom.bind(this) };
                            !(function (t, e, n, i) {
                                var o = i.bottom,
                                    r = i.top,
                                    a = i.left,
                                    s = i.right;
                                switch (t) {
                                    case l:
                                        n ? o() : r();
                                        break;
                                    case f:
                                    case d:
                                        e ? (n ? o() : r()) : n ? a() : s();
                                        break;
                                    case u:
                                    default:
                                        n ? a() : s();
                                }
                            })(this.autoplayBehavior, this.spinY, t, e);
                        },
                    },
                    {
                        key: "updateContainerAndCanvasSize",
                        value: function (t) {
                            var e = (function (t, e) {
                                try {
                                    var n = t.width / t.height;
                                    if (("number" == typeof e && (n = e), e && "object" === H()(e))) {
                                        var i = Object.keys(e)
                                            .sort(function (t, e) {
                                                return t - e;
                                            })
                                            .find(function (t) {
                                                return window.innerWidth <= parseInt(t, 10);
                                            });
                                        i && (n = e[i]);
                                    }
                                    return n;
                                } catch (t) {
                                    return 1;
                                }
                            })(t, this.ratio);
                            if (this.fullscreenView)
                                return (
                                    (this.container.width = window.innerWidth * this.devicePixelRatio),
                                    (this.container.style.width = window.innerWidth + "px"),
                                    (this.container.height = window.innerHeight * this.devicePixelRatio),
                                    (this.container.style.height = window.innerHeight + "px"),
                                    (this.container.style.maxWidth = "unset"),
                                    (this.canvas.width = window.innerWidth * this.devicePixelRatio),
                                    (this.canvas.style.width = window.innerWidth + "px"),
                                    (this.canvas.height = window.innerHeight * this.devicePixelRatio),
                                    void (this.canvas.style.height = window.innerHeight + "px")
                                );
                            (this.canvas.width = this.container.offsetWidth * this.devicePixelRatio),
                                (this.canvas.style.width = this.container.offsetWidth + "px"),
                                (this.canvas.height = (this.container.offsetWidth / e) * this.devicePixelRatio),
                                (this.canvas.style.height = this.container.offsetWidth / e + "px");
                        },
                    },
                    {
                        key: "onResizedImageLoad",
                        value: function (t, e, n) {
                            t === m ? (this.resizedImagesY[n] = e) : (this.resizedImagesX[n] = e);
                            var i = this.resizedImagesX.filter(function (t) {
                                    return t;
                                }),
                                o = this.resizedImagesY.filter(function (t) {
                                    return t;
                                });
                            i.length + o.length === this.amountX + this.amountY && ((this.imagesX = this.resizedImagesX), (this.imagesY = this.resizedImagesY), this.update());
                        },
                    },
                    {
                        key: "showImageInfo",
                        value: function (t) {
                            (t.font = "".concat(this.fullscreenView ? 28 : 14, "px serif")), (t.fillStyle = "white" === this.info ? "#FFF" : "#000");
                            var e = "image-dimension: ".concat(this.container.offsetWidth, "x").concat(this.container.offsetHeight, "px"),
                                n = ["active-index-x: " + this.activeImageX, "active-index-y: " + this.activeImageY].join(" | ");
                            t.fillText(e, 20, this.container.offsetHeight - 35), t.fillText(n, 20, this.container.offsetHeight - 10);
                        },
                    },
                    {
                        key: "requestResizedImages",
                        value: function () {
                            if (this.isReady()) {
                                var t = this.ciParams.ciToken,
                                    e = this.imagesX[0];
                                if ((this.update(), t && !(this.container.offsetWidth < 1.5 * e.width))) {
                                    this.speedFactor = Z(this.dragSpeed, this.amountX, this.container.offsetWidth);
                                    var n = E(this.srcXConfig);
                                    if ((F(this.srcXConfig, n, this.onResizedImageLoad.bind(this, p)), this.allowSpinY)) {
                                        var i = E(this.srcYConfig);
                                        F(this.srcYConfig, i, this.onResizedImageLoad.bind(this, m));
                                    }
                                }
                            }
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            var t = this.imagesX[this.activeImageX - 1];
                            if ((this.movingDirection === m && (t = this.imagesY[this.activeImageY - 1]), t)) {
                                var e = this.canvas.getContext("2d");
                                if ((e.scale(this.devicePixelRatio, this.devicePixelRatio), this.updateContainerAndCanvasSize(t), this.fullscreenView)) {
                                    var n = W(this.canvas.width, this.canvas.height, t.width, t.height),
                                        i = n.width,
                                        o = n.height,
                                        r = n.offsetX,
                                        a = n.offsetY;
                                    e.drawImage(t, r, a, i, o);
                                } else
                                    this.mouseTracked
                                        ? this.updateImageScale(e)
                                        : (this.hotspotsConfigs && !this.autoplay && dt(this.container, this.hotspotsConfigs, this.activeImageX, this.activeImageY, this.movingDirection, this.isClicked),
                                          e.drawImage(t, 0, 0, this.canvas.width, this.canvas.height));
                                this.info && this.showImageInfo(e);
                            }
                        },
                    },
                    {
                        key: "updateImageScale",
                        value: function (t) {
                            var e = this.originalImagesX[this.activeImageX - 1];
                            this.movingDirection === m && (e = this.originalImagesY[this.activeImageY - 1]);
                            var n = this.getCursorPositionInCanvas(),
                                i = this.canvas.width,
                                o = this.canvas.height,
                                r = this.canvas.width * this.zoomIntensity,
                                a = this.canvas.height * this.zoomIntensity,
                                s = 0 - (n.x / i) * (r - this.canvas.width),
                                c = 0 - (n.y / o) * (a - this.canvas.height);
                            t.drawImage(e, s, c, r, a);
                        },
                    },
                    {
                        key: "updatePercentageInLoader",
                        value: function (t) {
                            this.loader && (this.loader.style.width = t + "%"), this.view360Icon && (this.view360Icon.innerText = t + "%");
                        },
                    },
                    {
                        key: "onFirstImageLoaded",
                        value: function (t) {
                            this.add360ViewIcon();
                            var e = this.canvas.getContext("2d");
                            if ((e.scale(this.devicePixelRatio, this.devicePixelRatio), this.updateContainerAndCanvasSize(t), this.fullscreenView)) {
                                var n = W(this.canvas.width, this.canvas.height, t.width, t.height),
                                    i = n.offsetX,
                                    o = n.offsetY,
                                    r = n.width,
                                    a = n.height;
                                (this.offset = { x: i, y: o }), this.addCloseFullscreenView(), e.drawImage(t, i, o, r, a);
                            } else e.drawImage(t, 0, 0, this.canvas.width, this.canvas.height);
                            this.info && this.showImageInfo(e),
                                this.magnifier && this.addMagnifier(),
                                this.boxShadow && !this.fullscreenView && (this.boxShadowEl = nt(this.boxShadow, this.innerBox)),
                                this.bottomCircle && !this.fullscreenView && this.add360ViewCircleIcon(),
                                this.fullscreen && !this.fullscreenView && this.addFullscreenIcon();
                        },
                    },
                    {
                        key: "onAllImagesLoaded",
                        value: function () {
                            if (
                                (this.removeLoader(),
                                (this.imagesLoaded = !0),
                                this.autoplay && this.pointerZoom ? (this.container.style.cursor = "zoom-in") : (this.container.style.cursor = "grab"),
                                (this.speedFactor = Z(this.dragSpeed, this.amountX, this.container.offsetWidth)),
                                this.autoplay && this.play(),
                                this.disableDrag && (this.container.style.cursor = "default"),
                                this.view360Icon)
                            ) {
                                if (this.hide360Logo) return this.remove360ViewIcon();
                                (this.view360Icon.innerText = ""), this.logoSrc && I(this.view360Icon, this.logoSrc);
                            }
                            this.initControls();
                        },
                    },
                    {
                        key: "magnify",
                        value: function (t) {
                            var e = this;
                            t.stopPropagation(), this.mouseTracked && this.togglePointerZoom();
                            var n,
                                i,
                                o,
                                r,
                                a,
                                s,
                                c,
                                u,
                                l =
                                    ((n = this.movingDirection),
                                    (i = this.imagesX),
                                    (o = this.imagesY),
                                    (r = this.activeImageX),
                                    (a = this.activeImageY),
                                    (s = new Image()),
                                    (c = i.map(function (t) {
                                        return t.src.replace(g, "").replace(y, "?");
                                    })),
                                    (u = o.map(function (t) {
                                        return t.src.replace(g, "").replace(y, "?");
                                    })),
                                    (s.src = c[r - 1]),
                                    n === m && (s.src = u[a - 1]),
                                    s);
                            (this.isMagnifyOpen = !0),
                                (l.onload = function () {
                                    e.glass && (e.glass.style.cursor = "none");
                                }),
                                (this.glass = document.createElement("div")),
                                (this.container.style.overflow = "hidden"),
                                (function (t, e, n, i, o) {
                                    var r = e || {},
                                        a = r.x,
                                        s = void 0 === a ? 0 : a,
                                        c = r.y,
                                        u = void 0 === c ? 0 : c,
                                        l = (t.offsetWidth - 2 * s) * o,
                                        f = (t.offsetHeight - 2 * u) * o;
                                    i.setAttribute("class", "cloudimage-360-img-magnifier-glass"), t.prepend(i), (i.style.backgroundImage = "url('".concat(n.src, "')")), (i.style.backgroundSize = "".concat(l, "px ").concat(f, "px"));
                                    var d = { container: t, w: i.offsetWidth / 2, h: i.offsetHeight / 2, zoom: o, bw: 3, offsetX: s, offsetY: u },
                                        h = function (t) {
                                            q(t, d, i);
                                        },
                                        p = function (t) {
                                            q(t, d, i);
                                        };
                                    i.addEventListener("mousemove", h), t.addEventListener("mousemove", h), i.addEventListener("touchmove", p, { passive: !0 }), t.addEventListener("touchmove", p, { passive: !0 });
                                })(this.container, this.offset, l, this.glass, this.magnifier || 3);
                        },
                    },
                    {
                        key: "closeMagnifier",
                        value: function () {
                            this.glass && ((this.container.style.overflow = "visible"), this.container.removeChild(this.glass), (this.glass = null), (this.isMagnifyOpen = !1));
                        },
                    },
                    {
                        key: "openFullscreenModal",
                        value: function (e) {
                            e.stopPropagation(),
                                this.mouseTracked && this.togglePointerZoom(),
                                new t(
                                    (function (t) {
                                        var e = document.createElement("div");
                                        e.className = "cloudimage-360-fullscreen-modal";
                                        var n = t.cloneNode();
                                        return (n.style.height = "100%"), (n.style.maxHeight = "100%"), e.appendChild(n), (window.document.body.style.overflow = "hidden"), window.document.body.appendChild(e), n;
                                    })(this.container),
                                    !0,
                                    this.hotspotsConfigs
                                );
                        },
                    },
                    {
                        key: "setFullscreenEvents",
                        value: function (t, e) {
                            if ("click" === e.type) return this.closeFullscreenModal(e);
                            "Escape" === e.key && this.container.parentNode.parentNode === document.body && this.closeFullscreenModalOnEsc(e);
                        },
                    },
                    {
                        key: "closeFullscreenModalOnEsc",
                        value: function (t) {
                            this.closeFullscreenModal(t);
                        },
                    },
                    {
                        key: "play",
                        value: function () {
                            var t = this;
                            this.bottomCircle && this.hide360ViewCircleIcon(),
                                this.remove360ViewIcon(),
                                (this.loopTimeoutId = window.setInterval(function () {
                                    t.loop(t.reversed);
                                    var e = (function (t, e, n, i, o, r) {
                                        switch (t) {
                                            case f:
                                            case l:
                                                return !!(r ? 1 === n : n === o);
                                            case u:
                                            case d:
                                            default:
                                                return !!(r ? 1 === e : e === i);
                                        }
                                    })(t.autoplayBehavior, t.activeImageX, t.activeImageY, t.amountX, t.amountY, t.reversed);
                                    t.playOnce && e && (window.clearTimeout(t.loopTimeoutId), (t.autoplay = !1), t.hotspotsConfigs && dt(t.container, t.hotspotsConfigs, t.activeImageX, t.activeImageY, t.movingDirection, t.isClicked));
                                }, this.autoplaySpeed));
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            this.bottomCircle && this.show360ViewCircleIcon(), window.clearTimeout(this.loopTimeoutId);
                        },
                    },
                    {
                        key: "updateView",
                        value: function (e, n) {
                            var i,
                                o,
                                r = this,
                                a = this.container,
                                s = b(a);
                            if (
                                ((i = this),
                                (o = s),
                                Object.keys(o).reduce(function (t, e) {
                                    var n = i[e] !== o[e];
                                    return -1 !== O.indexOf(e) && n && (t = !0), t;
                                }, !1)) ||
                                e
                            ) {
                                var c = this.container,
                                    u = n.findIndex(function (t) {
                                        return t.id === r.container.id;
                                    });
                                return a.removeChild(this.innerBox), ((a = a.cloneNode(!0)).className = a.className.replace(" initialized", "")), c.parentNode.replaceChild(a, c), n.splice(u, 1, new t(a));
                            }
                            (a.style.position = "relative"), (a.style.width = "100%"), (a.style.cursor = "default"), a.setAttribute("draggable", "false"), this.stop(), this.init(a, !0);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            stop();
                            var t = this.container,
                                e = t.cloneNode(!0),
                                n = e.querySelector(".cloudimage-360-inner-box");
                            (e.className = e.className.replace(" initialized", "")),
                                (e.style.position = "relative"),
                                (e.style.width = "100%"),
                                (e.style.cursor = "default"),
                                e.setAttribute("draggable", "false"),
                                (e.style.minHeight = "auto"),
                                e.removeChild(n),
                                t.parentNode.replaceChild(e, t);
                        },
                    },
                    {
                        key: "addCloseFullscreenView",
                        value: function (t) {
                            var e = (function () {
                                var t = document.createElement("div");
                                return (t.className = "cloudimage-360-close-fullscreen-icon"), t;
                            })();
                            (e.onclick = this.setFullscreenEvents.bind(this, t)), (window.onkeyup = this.setFullscreenEvents.bind(this, t)), this.iconsContainer.appendChild(e);
                        },
                    },
                    {
                        key: "add360ViewIcon",
                        value: function () {
                            var t;
                            (this.view360Icon = (((t = document.createElement("div")).className = "cloudimage-360-view-360-icon"), (t.innerText = "0%"), t)), this.innerBox.appendChild(this.view360Icon);
                        },
                    },
                    {
                        key: "addFullscreenIcon",
                        value: function () {
                            var t;
                            (this.fullscreenIcon = (((t = document.createElement("div")).className = "cloudimage-360-fullscreen-icon"), t)),
                                (this.fullscreenIcon.onclick = this.openFullscreenModal.bind(this)),
                                this.iconsContainer.appendChild(this.fullscreenIcon);
                        },
                    },
                    {
                        key: "showFullscreenIcon",
                        value: function () {
                            this.fullscreenIcon && ((this.fullscreenIcon.style.display = "block"), (this.fullscreenIcon.style.pointerEvents = "auto"));
                        },
                    },
                    {
                        key: "hideFullscreenIcon",
                        value: function () {
                            this.fullscreenIcon && ((this.fullscreenIcon.style.display = "none"), (this.fullscreenIcon.style.pointerEvents = "none"));
                        },
                    },
                    {
                        key: "addMagnifier",
                        value: function () {
                            var t;
                            (this.magnifierIcon = (((t = document.createElement("div")).className = "cloudimage-360-magnifier-icon"), t)),
                                (this.magnifierIcon.onclick = this.magnify.bind(this)),
                                this.iconsContainer.appendChild(this.magnifierIcon);
                        },
                    },
                    {
                        key: "enableMagnifierIcon",
                        value: function () {
                            this.magnifierIcon && ((this.magnifierIcon.style.display = "block"), (this.magnifierIcon.style.pointerEvents = "auto"));
                        },
                    },
                    {
                        key: "disableMagnifierIcon",
                        value: function () {
                            this.magnifierIcon && ((this.magnifierIcon.style.display = "none"), (this.magnifierIcon.style.pointerEvents = "none"));
                        },
                    },
                    {
                        key: "closeFullscreenModal",
                        value: function (t) {
                            t.stopPropagation(), document.body.removeChild(this.container.parentNode), (window.document.body.style.overflow = "visible");
                        },
                    },
                    {
                        key: "add360ViewCircleIcon",
                        value: function () {
                            var t, e;
                            (this.view360CircleIcon =
                                ((t = this.bottomCircleOffset),
                                ((e = new Image()).src = "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/assets/img/360.svg"),
                                (e.style.bottom = "".concat(t, "%")),
                                (e.className = "cloudimage-360-view-360-circle"),
                                e)),
                                this.innerBox.appendChild(this.view360CircleIcon);
                        },
                    },
                    {
                        key: "show360ViewCircleIcon",
                        value: function () {
                            this.view360CircleIcon && (this.view360CircleIcon.style.opacity = "1");
                        },
                    },
                    {
                        key: "hide360ViewCircleIcon",
                        value: function () {
                            this.view360CircleIcon && (this.view360CircleIcon.style.opacity = "0");
                        },
                    },
                    {
                        key: "remove360ViewCircleIcon",
                        value: function () {
                            this.view360CircleIcon && (this.innerBox.removeChild(this.view360CircleIcon), (this.view360CircleIcon = null));
                        },
                    },
                    {
                        key: "removeLoader",
                        value: function () {
                            this.loader && (this.innerBox.removeChild(this.loader), (this.loader = null));
                        },
                    },
                    {
                        key: "remove360ViewIcon",
                        value: function () {
                            if (this.view360Icon)
                                try {
                                    this.innerBox.removeChild(this.view360Icon), (this.view360Icon = null);
                                } catch (t) {}
                        },
                    },
                    {
                        key: "initControls",
                        value: function () {
                            var t = this,
                                e = (function (t, e) {
                                    var n = t.container,
                                        i = t.controlReverse,
                                        o = t.spinReverse,
                                        r = t.stopAtEdges,
                                        a = e.onRightStart,
                                        s = e.onLeftStart,
                                        c = e.onTopStart,
                                        u = e.onBottomStart,
                                        l = e.onEventEnd,
                                        f = {},
                                        d = i ? !o : o,
                                        h = n.querySelectorAll(".cloudimage-360-left, .cloudimage-360-prev")[0],
                                        p = n.querySelectorAll(".cloudimage-360-right, .cloudimage-360-next")[0],
                                        m = n.querySelector(".cloudimage-360-top"),
                                        v = n.querySelector(".cloudimage-360-bottom");
                                    return (
                                        h &&
                                            ((h.style.display = "block"),
                                            h.addEventListener("mousedown", d ? a : s),
                                            h.addEventListener("touchstart", d ? a : s, { passive: !0 }),
                                            h.addEventListener("mouseup", l),
                                            h.addEventListener("touchend", l),
                                            (f.left = h)),
                                        p &&
                                            ((p.style.display = "block"),
                                            p.addEventListener("mousedown", d ? s : a),
                                            p.addEventListener("touchstart", d ? s : a, { passive: !0 }),
                                            p.addEventListener("mouseup", l),
                                            p.addEventListener("touchend", l),
                                            (f.right = p)),
                                        m &&
                                            ((m.style.display = "block"),
                                            m.addEventListener("mousedown", d ? u : c),
                                            m.addEventListener("touchstart", d ? u : c),
                                            m.addEventListener("mouseup", l),
                                            m.addEventListener("touchend", l),
                                            (f.top = m)),
                                        v &&
                                            ((v.style.display = "block"),
                                            v.addEventListener("mousedown", d ? c : u),
                                            v.addEventListener("touchstart", d ? c : u),
                                            v.addEventListener("mouseup", l),
                                            v.addEventListener("touchend", l),
                                            (f.bottom = v)),
                                        (d ? p : h) && r && (G(d ? p : h, "not-active"), G(d ? m : v, "not-active")),
                                        f
                                    );
                                })(
                                    { container: this.container, controlReverse: this.controlReverse, spinReverse: this.spinReverse, stopAtEdges: this.stopAtEdges },
                                    {
                                        onLeftStart: function (e) {
                                            e.stopPropagation(), t.onSpin(), t.left(), (t.loopTimeoutId = window.setInterval(t.left.bind(t), t.autoplaySpeed));
                                        },
                                        onRightStart: function (e) {
                                            e.stopPropagation(), t.onSpin(), t.right(), (t.loopTimeoutId = window.setInterval(t.right.bind(t), t.autoplaySpeed));
                                        },
                                        onTopStart: function (e) {
                                            e.stopPropagation(), t.onSpin(), t.top(), (t.loopTimeoutId = window.setInterval(t.top.bind(t), t.autoplaySpeed));
                                        },
                                        onBottomStart: function (e) {
                                            e.stopPropagation(), t.onSpin(), t.bottom(), (t.loopTimeoutId = window.setInterval(t.bottom.bind(t), t.autoplaySpeed));
                                        },
                                        onEventEnd: function () {
                                            t.onFinishSpin(), window.clearTimeout(t.loopTimeoutId);
                                        },
                                    }
                                );
                            (this.topElem = e.top), (this.bottomElem = e.bottom), (this.leftElem = e.left), (this.rightElem = e.right);
                        },
                    },
                    {
                        key: "attachEvents",
                        value: function (t, e, n) {
                            window.addEventListener("resize", this.requestResizedImages.bind(this)),
                                t &&
                                    !this.disableDrag &&
                                    (this.container.addEventListener("click", this.mouseClick.bind(this)),
                                    this.container.addEventListener("mousedown", this.mouseDown.bind(this)),
                                    this.container.addEventListener("mousemove", this.mouseMove.bind(this)),
                                    this.container.addEventListener("mouseleave", this.mouseLeave.bind(this)),
                                    document.addEventListener("mouseup", this.mouseUp.bind(this))),
                                e &&
                                    !this.disableDrag &&
                                    (this.container.addEventListener("touchstart", this.touchStart.bind(this), { passive: !0 }),
                                    this.container.addEventListener("touchend", this.touchEnd.bind(this)),
                                    this.container.addEventListener("touchmove", this.touchMove.bind(this))),
                                n && (document.addEventListener("keydown", this.keyDown.bind(this)), document.addEventListener("keyup", this.keyUp.bind(this))),
                                document.addEventListener("keydown", this.keyDownGeneral.bind(this));
                        },
                    },
                    {
                        key: "init",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = b(t),
                                o = i.folder,
                                r = i.apiVersion,
                                a = i.filenameX,
                                s = i.filenameY,
                                c = i.imageListX,
                                u = i.imageListY,
                                l = i.indexZeroBase,
                                f = i.amountX,
                                h = i.amountY,
                                v = i.draggable,
                                g = void 0 === v || v,
                                y = i.swipeable,
                                x = void 0 === y || y,
                                w = i.keys,
                                O = i.keysReverse,
                                k = i.bottomCircle,
                                S = i.bottomCircleOffset,
                                C = i.boxShadow,
                                j = i.autoplay,
                                L = i.autoplayBehavior,
                                P = i.playOnce,
                                A = i.speed,
                                D = i.autoplayReverse,
                                Y = i.disableDrag,
                                R = void 0 === Y || Y,
                                M = i.fullscreen,
                                T = i.magnifier,
                                X = i.ciToken,
                                z = i.ciFilters,
                                _ = i.ciTransformation,
                                N = i.lazyload,
                                B = i.lazySelector,
                                W = i.spinReverse,
                                U = i.dragSpeed,
                                H = i.stopAtEdges,
                                q = i.controlReverse,
                                Z = i.hide360Logo,
                                G = i.logoSrc,
                                J = i.pointerZoom,
                                $ = i.ratio,
                                K = i.imageInfo,
                                at = void 0 === K ? "black" : K,
                                st = { ciToken: X, ciFilters: z, ciTransformation: _ };
                            if (
                                ((this.folder = o),
                                (this.apiVersion = r),
                                (this.filenameX = a),
                                (this.filenameY = s),
                                (this.imageListX = c),
                                (this.imageListY = u),
                                (this.indexZeroBase = l),
                                (this.amountX = c ? JSON.parse(c).length : f),
                                (this.amountY = u ? JSON.parse(u).length : h),
                                (this.allowSpinY = !!this.amountY),
                                (this.activeImageX = D ? this.amountX : 1),
                                (this.activeImageY = D ? this.amountY : 1),
                                (this.spinY = L === d),
                                (this.bottomCircle = k),
                                (this.bottomCircleOffset = S),
                                (this.boxShadow = C),
                                (this.autoplay = j),
                                (this.autoplayBehavior = L),
                                (this.playOnce = P),
                                (this.speed = A),
                                (this.reversed = D),
                                (this.disableDrag = R),
                                (this.fullscreen = M),
                                (this.magnifier = !this.isMobile && T > 1 ? Math.min(T, 5) : 0),
                                (this.lazySelector = B),
                                (this.spinReverse = W),
                                (this.controlReverse = q),
                                (this.dragSpeed = Math.max(U, 50)),
                                (this.autoplaySpeed = (36 * this.speed) / this.amountX),
                                (this.stopAtEdges = H),
                                (this.hide360Logo = Z),
                                (this.logoSrc = G),
                                (this.ciParams = st),
                                (this.apiVersion = r),
                                (this.pointerZoom = J > 1 ? Math.min(J, 3) : 0),
                                (this.keysReverse = O),
                                (this.info = at),
                                (this.keys = w),
                                (this.ratio = $ && JSON.parse($)),
                                n)
                            )
                                return (
                                    rt(this.innerBox, this.iconsContainer),
                                    rt(this.innerBox, this.boxShadowEl),
                                    rt(this.innerBox, this.view360Icon),
                                    this.remove360ViewCircleIcon(),
                                    (this.iconsContainer = tt(this.innerBox)),
                                    this.hide360Logo || this.lazyload || !this.logoSrc || (this.add360ViewIcon(), I(this.view360Icon, this.logoSrc)),
                                    this.magnifier && this.addMagnifier(),
                                    this.bottomCircle && !this.fullscreenView && this.add360ViewCircleIcon(),
                                    this.fullscreen && !this.fullscreenView && this.addFullscreenIcon(),
                                    this.boxShadow && !this.fullscreenView && (this.boxShadowEl = nt(this.boxShadow, this.innerBox)),
                                    this.onAllImagesLoaded()
                                );
                            (this.innerBox = et(this.container)),
                                (this.iconsContainer = tt(this.innerBox)),
                                (this.canvas = Q(this.innerBox)),
                                (this.loader = it(this.innerBox)),
                                this.hotspotsConfigs && !this.fullscreenView && Ie(t, this.hotspotsConfigs),
                                ot(this.container),
                                (this.srcXConfig = {
                                    folder: o,
                                    filename: a,
                                    imageList: c,
                                    container: t,
                                    innerBox: this.innerBox,
                                    apiVersion: r,
                                    ciParams: st,
                                    lazySelector: B,
                                    amount: this.amountX,
                                    indexZeroBase: l,
                                    fullscreen: this.fullscreenView,
                                }),
                                (this.srcYConfig = Le(Le({}, this.srcXConfig), {}, { filename: s, orientation: m, imageList: u, amount: this.amountY }));
                            var ct = E(this.srcXConfig),
                                ut = function (t, n, i) {
                                    t !== m ? (e.imagesX[i] = n) : (e.imagesY[i] = n);
                                    var o = e.imagesX.filter(function (t) {
                                            return t;
                                        }),
                                        r = e.imagesY.filter(function (t) {
                                            return t;
                                        }),
                                        a = e.amountX + e.amountY,
                                        s = o.length + r.length,
                                        c = !i && t !== m,
                                        u = Math.round((s / a) * 100);
                                    e.updatePercentageInLoader(u), c && e.onFirstImageLoaded(n), e.isReady() && e.onAllImagesLoaded();
                                },
                                lt = function () {
                                    if ((F(e.srcXConfig, ct, ut.bind(e, p)), e.allowSpinY)) {
                                        var t = E(e.srcYConfig);
                                        F(e.srcYConfig, t, ut.bind(e, m));
                                    }
                                };
                            if (N) {
                                var ft = function (t) {
                                    e.innerBox.removeChild(t), lt();
                                };
                                V(ct, this.srcXConfig, ft);
                            } else lt();
                            this.attachEvents(g, x, w);
                        },
                    },
                ]),
                t
            );
        })();
        function Ae() {
            var t = [],
                e = document.querySelectorAll(".cloudimage-360:not(.initialized)");
            [].slice.call(e).forEach(function (e) {
                var n = (function (t) {
                    if (!t.id) {
                        var e = Math.floor(1e4 * Math.random()),
                            n = "cloudimage-360-view-".concat(e);
                        t.id = n;
                    }
                    return t;
                })(e);
                x(n, "hotspots") || t.push(new Pe(n));
            }),
                (window.CI360._viewers = t);
        }
        function De() {
            return !(window.CI360._viewers && window.CI360._viewers.length > 0);
        }
        (window.CI360 = window.CI360 || {}),
            (window.CI360.init = Ae),
            (window.CI360.destroy = function () {
                De() ||
                    (window.CI360._viewers.forEach(function (t) {
                        t.destroy();
                    }),
                    (window.CI360._viewers = []));
            }),
            (window.CI360.getActiveIndexByID = function (t, e) {
                if (!De()) {
                    var n = window.CI360._viewers.filter(function (e) {
                        return e.id === t;
                    })[0];
                    return "y" === e ? n && n.activeImageY - 1 : n && n.activeImageX - 1;
                }
            }),
            (window.CI360.update = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t) {
                    var n = window.CI360._viewers.filter(function (e) {
                        return e.id === t;
                    })[0];
                    n.updateView(e, window.CI360._viewers);
                } else
                    window.CI360._viewers.forEach(function (t) {
                        t.updateView(e, window.CI360._viewers);
                    });
            }),
            (window.CI360.add = function (t) {
                var e = Array.from(document.querySelectorAll(".cloudimage-360:not(.initialized)"));
                if (e.length && t) {
                    var n = e.filter(function (e) {
                        return e.id === t;
                    })[0];
                    n && window.CI360._viewers.push(new Pe(n));
                }
            }),
            (window.CI360.addHotspots = function (t, e) {
                var n = document.querySelectorAll(".cloudimage-360:not(.initialized)"),
                    i = Array.from(n).find(function (e) {
                        return e.id === t;
                    });
                i && window.CI360._viewers.push(new Pe(i, !1, e));
            }),
            window.CI360.notInitOnLoad || Ae();
    },
]);
