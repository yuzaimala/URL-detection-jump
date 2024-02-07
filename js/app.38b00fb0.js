(function () {
    "use strict";
    var n = {
        4954: function (n, t, o) {
            var e = o(6210), r = o(8085);

            function c(n, t, o, e, c, i) {
                const a = (0, r.up)("HelloWorld");
                return (0, r.wg)(), (0, r.j4)(a, {msg: ""})
            }

            var i = o(5832);
            const a = n => ((0, r.dD)("data-v-48d0e743"), n = n(), (0, r.Cn)(), n), u = {class: "redirector"},
                l = a((() => (0, r._)("h1", {class: "blink"}, "收藏此页防止失联", -1))),
                s = a((() => (0, r._)("h1", null, "正在为您选择线路", -1))), d = {key: 0};

            function f(n, t, o, e, c, a) {
                return (0, r.wg)(), (0, r.iD)("div", u, [l, (0, r._)("button", {
                    onClick: t[0] || (t[0] = (...n) => a.addToFavorites && a.addToFavorites(...n)),
                    class: "favorite-button"
                }, "添加到收藏夹"), s, c.countdown > 0 ? ((0, r.wg)(), (0, r.iD)("h1", d, "请等待 " + (0, i.zw)(c.countdown) + " 秒...", 1)) : (0, r.kq)("", !0)])
            }

            o(7198);
            var h = o(8493), v = {
                name: "UrlRedirector", data() {
                    return {countdown: 3}
                }, created() {
                    this.startCountdown(), this.checkUrlsAndRedirect()
                }, methods: {
                    startCountdown() {
                        const n = setInterval((() => {
                            this.countdown > 0 ? this.countdown -= 1 : clearInterval(n)
                        }), 1e3)
                    }, addToFavorites() {
                        const n = window.location.href, t = document.title;
                        try {
                            window.external.AddFavorite(n, t)
                        } catch (o) {
                            alert("按 Ctrl+D 添加到收藏夹")
                        }
                    }, async checkUrlsAndRedirect() {
                        const n = ["YmFpZHUuY29t", "YmFpZHUuY29t"],
                            t = n.map((n => atob(n))), o = t.map((n => h.Z.get(n).then((() => ({
                                url: n,
                                accessible: !0
                            }))).catch((t => (console.error(`无法访问 ${n}:`, t), {url: n, accessible: !1})))));
                        try {
                            const n = await Promise.all(o);
                            while (this.countdown > 0) await new Promise((n => setTimeout(n, 1e3)));
                            const t = window.location.pathname + window.location.search + window.location.hash;
                            for (const o of n) if (o.accessible) {
                                let n = o.url.endsWith("/") ? o.url.slice(0, -1) : o.url;
                                n += t, window.location.href = n;
                                break
                            }
                        } catch (e) {
                            console.error("检查 URL 时发生错误", e)
                        }
                    }
                }
            }, w = o(6328);
            const p = (0, w.Z)(v, [["render", f], ["__scopeId", "data-v-48d0e743"]]);
            var b = p, m = {name: "App", components: {HelloWorld: b}};
            const y = (0, w.Z)(m, [["render", c]]);
            var g = y;
            (0, e.ri)(g).mount("#app")
        }
    }, t = {};

    function o(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var c = t[e] = {exports: {}};
        return n[e].call(c.exports, c, c.exports, o), c.exports
    }

    o.m = n, function () {
        var n = [];
        o.O = function (t, e, r, c) {
            if (!e) {
                var i = 1 / 0;
                for (s = 0; s < n.length; s++) {
                    e = n[s][0], r = n[s][1], c = n[s][2];
                    for (var a = !0, u = 0; u < e.length; u++) (!1 & c || i >= c) && Object.keys(o.O).every((function (n) {
                        return o.O[n](e[u])
                    })) ? e.splice(u--, 1) : (a = !1, c < i && (i = c));
                    if (a) {
                        n.splice(s--, 1);
                        var l = r();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            c = c || 0;
            for (var s = n.length; s > 0 && n[s - 1][2] > c; s--) n[s] = n[s - 1];
            n[s] = [e, r, c]
        }
    }(), function () {
        o.n = function (n) {
            var t = n && n.__esModule ? function () {
                return n["default"]
            } : function () {
                return n
            };
            return o.d(t, {a: t}), t
        }
    }(), function () {
        o.d = function (n, t) {
            for (var e in t) o.o(t, e) && !o.o(n, e) && Object.defineProperty(n, e, {enumerable: !0, get: t[e]})
        }
    }(), function () {
        o.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (n) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        o.o = function (n, t) {
            return Object.prototype.hasOwnProperty.call(n, t)
        }
    }(), function () {
        o.r = function (n) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(n, "__esModule", {value: !0})
        }
    }(), function () {
        var n = {143: 0};
        o.O.j = function (t) {
            return 0 === n[t]
        };
        var t = function (t, e) {
            var r, c, i = e[0], a = e[1], u = e[2], l = 0;
            if (i.some((function (t) {
                return 0 !== n[t]
            }))) {
                for (r in a) o.o(a, r) && (o.m[r] = a[r]);
                if (u) var s = u(o)
            }
            for (t && t(e); l < i.length; l++) c = i[l], o.o(n, c) && n[c] && n[c][0](), n[c] = 0;
            return o.O(s)
        }, e = self["webpackChunktiaozhuan"] = self["webpackChunktiaozhuan"] || [];
        e.forEach(t.bind(null, 0)), e.push = t.bind(null, e.push.bind(e))
    }();
    var e = o.O(void 0, [998], (function () {
        return o(4954)
    }));
    e = o.O(e)
})();