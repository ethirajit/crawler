if (!function(e, t, n) {
    function i(e, t) {
        return typeof e === t;
    }
    function r() {
        var e, t, n, r, o, s, a;
        for (var l in y) if (y.hasOwnProperty(l)) {
            if (e = [], t = y[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
            for (r = i(t.fn, "function") ? t.fn() :t.fn, o = 0; o < e.length; o++) s = e[o], 
            a = s.split("."), 1 === a.length ? x[a[0]] = r :(!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), 
            x[a[0]][a[1]] = r), w.push((r ? "" :"no-") + a.join("-"));
        }
    }
    function o(e) {
        var t = T.className, n = x._config.classPrefix || "";
        if (C && (t = t.baseVal), x._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2");
        }
        x._config.enableClasses && (t += " " + n + e.join(" " + n), C ? T.className.baseVal = t :T.className = t);
    }
    function s(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) :C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) :t.createElement.apply(t, arguments);
    }
    function l() {
        var e = t.body;
        return e || (e = a(C ? "svg" :"body"), e.fake = !0), e;
    }
    function u(e, n, i, r) {
        var o, s, u, d, c = "modernizr", f = a("div"), h = l();
        if (parseInt(i, 10)) for (;i--; ) u = a("div"), u.id = r ? r[i] :c + (i + 1), f.appendChild(u);
        return o = a("style"), o.type = "text/css", o.id = "s" + c, (h.fake ? h :f).appendChild(o), 
        h.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e :o.appendChild(t.createTextNode(e)), 
        f.id = c, h.fake && (h.style.background = "", h.style.overflow = "hidden", d = T.style.overflow, 
        T.style.overflow = "hidden", T.appendChild(h)), s = n(f, e), h.fake ? (h.parentNode.removeChild(h), 
        T.style.overflow = d, T.offsetHeight) :f.parentNode.removeChild(f), !!s;
    }
    function d(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }
    function c(t, i) {
        var r = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (;r--; ) if (e.CSS.supports(d(t[r]), i)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; r--; ) o.push("(" + d(t[r]) + ":" + i + ")");
            return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position;
            });
        }
        return n;
    }
    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase();
        }).replace(/^-/, "");
    }
    function h(e, t, r, o) {
        function l() {
            d && (delete k.style, delete k.modElem);
        }
        if (o = i(o, "undefined") ? !1 :o, !i(r, "undefined")) {
            var u = c(e, r);
            if (!i(u, "undefined")) return u;
        }
        for (var d, h, p, g, m, v = [ "modernizr", "tspan" ]; !k.style; ) d = !0, k.modElem = a(v.shift()), 
        k.style = k.modElem.style;
        for (p = e.length, h = 0; p > h; h++) if (g = e[h], m = k.style[g], s(g, "-") && (g = f(g)), 
        k.style[g] !== n) {
            if (o || i(r, "undefined")) return l(), "pfx" == t ? g :!0;
            try {
                k.style[g] = r;
            } catch (y) {}
            if (k.style[g] != m) return l(), "pfx" == t ? g :!0;
        }
        return l(), !1;
    }
    function p(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }
    function g(e, t, n) {
        var r;
        for (var o in e) if (e[o] in t) return n === !1 ? e[o] :(r = t[e[o]], i(r, "function") ? p(r, n || t) :r);
        return !1;
    }
    function m(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + E.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? h(a, t, r, o) :(a = (e + " " + $.join(s + " ") + s).split(" "), 
        g(a, t, n));
    }
    function v(e, t, i) {
        return m(e, n, n, t, i);
    }
    var y = [], b = {
        _version:"3.3.1",
        _config:{
            classPrefix:"",
            enableClasses:!0,
            enableJSClass:!0,
            usePrefixes:!0
        },
        _q:[],
        on:function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e]);
            }, 0);
        },
        addTest:function(e, t, n) {
            y.push({
                name:e,
                fn:t,
                options:n
            });
        },
        addAsyncTest:function(e) {
            y.push({
                name:null,
                fn:e
            });
        }
    }, x = function() {};
    x.prototype = b, x = new x();
    var w = [], T = t.documentElement, C = "svg" === T.nodeName.toLowerCase(), A = "Moz O ms Webkit", E = b._config.usePrefixes ? A.split(" ") :[];
    b._cssomPrefixes = E;
    var S = {
        elem:a("modernizr")
    };
    x._q.push(function() {
        delete S.elem;
    });
    var k = {
        style:S.elem.style
    };
    x._q.unshift(function() {
        delete k.style;
    });
    var $ = b._config.usePrefixes ? A.toLowerCase().split(" ") :[];
    b._domPrefixes = $, b.testAllProps = m, b.testAllProps = v, x.addTest("backgroundsize", v("backgroundSize", "100%", !0)), 
    x.addTest("bgpositionshorthand", function() {
        var e = a("a"), t = e.style, n = "right 10px bottom 10px";
        return t.cssText = "background-position: " + n + ";", t.backgroundPosition === n;
    }), x.addTest("bgpositionxy", function() {
        return v("backgroundPositionX", "3px", !0) && v("backgroundPositionY", "5px", !0);
    }), x.addTest("bgrepeatround", v("backgroundRepeat", "round")), x.addTest("bgrepeatspace", v("backgroundRepeat", "space")), 
    x.addTest("bgsizecover", v("backgroundSize", "cover")), x.addTest("borderradius", v("borderRadius", "0px", !0)), 
    x.addTest("cssanimations", v("animationName", "a", !0));
    var N = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") :[];
    b._prefixes = N, x.addTest("csscalc", function() {
        var e = "width:", t = "calc(10px);", n = a("a");
        return n.style.cssText = e + N.join(t + e), !!n.style.length;
    }), x.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0);
    });
    var F = b.testStyles = u, D = "CSS" in e && "supports" in e.CSS, R = "supportsCSS" in e;
    x.addTest("supports", D || R), x.addTest("csstransforms3d", function() {
        var e = !!v("perspective", "1px", !0), t = x._config.usePrefixes;
        if (e && (!t || "webkitPerspective" in T.style)) {
            var n, i = "#modernizr{width:0;height:0}";
            x.supports ? n = "@supports (perspective: 1px)" :(n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), 
            n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", F(i + n, function(t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight;
            });
        }
        return e;
    }), x.addTest("csstransitions", v("transition", "all", !0)), x.addTest("flexboxtweener", v("flexAlign", "end", !0));
    var I = function() {
        var e = navigator.userAgent, t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1), n = e.match(/w(eb)?osbrowser/gi), i = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9, r = 533 > t && e.match(/android/gi);
        return n || r || i;
    }();
    I ? x.addTest("fontface", !1) :F('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var i = t.getElementById("smodernizr"), r = i.sheet || i.styleSheet, o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText :r.cssText || "" :"", s = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        x.addTest("fontface", s);
    }), x.addTest("inlinesvg", function() {
        var e = a("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI);
    }), x.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
        } catch (t) {
            return !1;
        }
    }), x.addTest("multiplebgs", function() {
        var e = a("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background);
    }), x.addTest("preserve3d", v("transformStyle", "preserve-3d")), x.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
        } catch (t) {
            return !1;
        }
    });
    var L = {}.toString;
    x.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test(L.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")));
    }), x.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(L.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")));
    }), x.addTest("svgfilters", function() {
        var t = !1;
        try {
            t = "SVGFEColorMatrixElement" in e && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
        } catch (n) {}
        return t;
    }), x.addTest("svgforeignobject", function() {
        return !!t.createElementNS && /SVGForeignObject/.test(L.call(t.createElementNS("http://www.w3.org/2000/svg", "foreignObject")));
    }), x.addTest("canvas", function() {
        var e = a("canvas");
        return !(!e.getContext || !e.getContext("2d"));
    });
    var j = a("canvas");
    x.addTest("todataurljpeg", function() {
        return !!x.canvas && 0 === j.toDataURL("image/jpeg").indexOf("data:image/jpeg");
    }), x.addTest("todataurlpng", function() {
        return !!x.canvas && 0 === j.toDataURL("image/png").indexOf("data:image/png");
    }), x.addTest("todataurlwebp", function() {
        var e = !1;
        try {
            e = !!x.canvas && 0 === j.toDataURL("image/webp").indexOf("data:image/webp");
        } catch (t) {}
        return e;
    }), r(), o(w), delete b.addTest, delete b.addAsyncTest;
    for (var P = 0; P < x._q.length; P++) x._q[P]();
    e.Modernizr = x;
}(window, document), function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) :function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } :t(e);
}("undefined" != typeof window ? window :this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length, n = ot.type(e);
        return "function" === n || ot.isWindow(e) ? !1 :"array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
    }
    function i(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
        });
        if (t.nodeType) return ot.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (gt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e);
        }
        return ot.grep(e, function(e) {
            return J.call(t, e) > -1 !== n;
        });
    }
    function r(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function o(e) {
        var t = {};
        return ot.each(e.match(wt) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function s() {
        X.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), 
        ot.ready();
    }
    function a() {
        this.expando = ot.expando + a.uid++;
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace($t, "-$&").toLowerCase(), 
        n = e.getAttribute(i), "string" == typeof n) {
            try {
                n = "true" === n ? !0 :"false" === n ? !1 :"null" === n ? null :+n + "" === n ? +n :kt.test(n) ? ot.parseJSON(n) :n;
            } catch (r) {}
            St.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function u(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur();
        } :function() {
            return ot.css(e, t, "");
        }, l = a(), u = n && n[3] || (ot.cssNumber[t] ? "" :"px"), d = (ot.cssNumber[t] || "px" !== u && +l) && Ft.exec(ot.css(e, t));
        if (d && d[3] !== u) {
            u = u || d[3], n = n || [], d = +l || 1;
            do o = o || ".5", d /= o, ot.style(e, t, d + u); while (o !== (o = a() / l) && 1 !== o && --s);
        }
        return n && (d = +d || +l || 0, r = n[1] ? d + (n[1] + 1) * n[2] :+n[2], i && (i.unit = u, 
        i.start = d, i.end = r)), r;
    }
    function d(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") :"undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") :[];
        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([ e ], n) :n;
    }
    function c(e, t) {
        for (var n = 0, i = e.length; i > n; n++) Et.set(e[n], "globalEval", !t || Et.get(t[n], "globalEval"));
    }
    function f(e, t, n, i, r) {
        for (var o, s, a, l, u, f, h = t.createDocumentFragment(), p = [], g = 0, m = e.length; m > g; g++) if (o = e[g], 
        o || 0 === o) if ("object" === ot.type(o)) ot.merge(p, o.nodeType ? [ o ] :o); else if (Ot.test(o)) {
            for (s = s || h.appendChild(t.createElement("div")), a = (Lt.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = Pt[a] || Pt._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], f = l[0]; f--; ) s = s.lastChild;
            ot.merge(p, s.childNodes), s = h.firstChild, s.textContent = "";
        } else p.push(t.createTextNode(o));
        for (h.textContent = "", g = 0; o = p[g++]; ) if (i && ot.inArray(o, i) > -1) r && r.push(o); else if (u = ot.contains(o.ownerDocument, o), 
        s = d(h.appendChild(o), "script"), u && c(s), n) for (f = 0; o = s[f++]; ) jt.test(o.type || "") && n.push(o);
        return h;
    }
    function h() {
        return !0;
    }
    function p() {
        return !1;
    }
    function g() {
        try {
            return X.activeElement;
        } catch (e) {}
    }
    function m(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) m(e, a, n, i, t[a], o);
            return e;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) :null == r && ("string" == typeof n ? (r = i, 
        i = void 0) :(r = i, i = n, n = void 0)), r === !1) r = p; else if (!r) return e;
        return 1 === o && (s = r, r = function(e) {
            return ot().off(e), s.apply(this, arguments);
        }, r.guid = s.guid || (s.guid = ot.guid++)), e.each(function() {
            ot.event.add(this, t, r, i, n);
        });
    }
    function v(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t :t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) :e;
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function b(e) {
        var t = _t.exec(e.type);
        return t ? e.type = t[1] :e.removeAttribute("type"), e;
    }
    function x(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Et.hasData(e) && (o = Et.access(e), s = Et.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u) for (n = 0, i = u[r].length; i > n; n++) ot.event.add(t, r, u[r][n]);
            }
            St.hasData(e) && (a = St.access(e), l = ot.extend({}, a), St.set(t, l));
        }
    }
    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && It.test(e.type) ? t.checked = e.checked :"input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function T(e, t, n, i) {
        t = K.apply([], t);
        var r, o, s, a, l, u, c = 0, h = e.length, p = h - 1, g = t[0], m = ot.isFunction(g);
        if (m || h > 1 && "string" == typeof g && !it.checkClone && Wt.test(g)) return e.each(function(r) {
            var o = e.eq(r);
            m && (t[0] = g.call(this, r, o.html())), T(o, t, n, i);
        });
        if (h && (r = f(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), 
        o || i)) {
            for (s = ot.map(d(r, "script"), y), a = s.length; h > c; c++) l = r, c !== p && (l = ot.clone(l, !0, !0), 
            a && ot.merge(s, d(l, "script"))), n.call(e[c], l, c);
            if (a) for (u = s[s.length - 1].ownerDocument, ot.map(s, b), c = 0; a > c; c++) l = s[c], 
            jt.test(l.type || "") && !Et.access(l, "globalEval") && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) :ot.globalEval(l.textContent.replace(Zt, "")));
        }
        return e;
    }
    function C(e, t, n) {
        for (var i, r = t ? ot.filter(t, e) :e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ot.cleanData(d(i)), 
        i.parentNode && (n && ot.contains(i.ownerDocument, i) && c(d(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function A(e, t) {
        var n = ot(t.createElement(e)).appendTo(t.body), i = ot.css(n[0], "display");
        return n.detach(), i;
    }
    function E(e) {
        var t = X, n = Vt[e];
        return n || (n = A(e, t), "none" !== n && n || (zt = (zt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), 
        t = zt[0].contentDocument, t.write(), t.close(), n = A(e, t), zt.detach()), Vt[e] = n), 
        n;
    }
    function S(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || Gt(e), s = n ? n.getPropertyValue(t) || n[t] :void 0, "" !== s && void 0 !== s || ot.contains(e.ownerDocument, e) || (s = ot.style(e, t)), 
        n && !it.pixelMarginRight() && Xt.test(s) && Yt.test(t) && (i = a.width, r = a.minWidth, 
        o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, 
        a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" :s;
    }
    function k(e, t) {
        return {
            get:function() {
                return e() ? void delete this.get :(this.get = t).apply(this, arguments);
            }
        };
    }
    function $(e) {
        if (e in rn) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nn.length; n--; ) if (e = nn[n] + t, 
        e in rn) return e;
    }
    function N(e, t, n) {
        var i = Ft.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") :t;
    }
    function F(e, t, n, i, r) {
        for (var o = n === (i ? "border" :"content") ? 4 :"width" === t ? 1 :0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(e, n + Dt[o], !0, r)), 
        i ? ("content" === n && (s -= ot.css(e, "padding" + Dt[o], !0, r)), "margin" !== n && (s -= ot.css(e, "border" + Dt[o] + "Width", !0, r))) :(s += ot.css(e, "padding" + Dt[o], !0, r), 
        "padding" !== n && (s += ot.css(e, "border" + Dt[o] + "Width", !0, r)));
        return s;
    }
    function D(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth :e.offsetHeight, o = Gt(e), s = "border-box" === ot.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = S(e, t, o), (0 > r || null == r) && (r = e.style[t]), Xt.test(r)) return r;
            i = s && (it.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
        }
        return r + F(e, t, n || (s ? "border" :"content"), i, o) + "px";
    }
    function R(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = Et.get(i, "olddisplay"), 
        n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Rt(i) && (o[s] = Et.access(i, "olddisplay", E(i.nodeName)))) :(r = Rt(i), 
        "none" === n && r || Et.set(i, "olddisplay", r ? n :ot.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" :"none"));
        return e;
    }
    function I(e, t, n, i, r) {
        return new I.prototype.init(e, t, n, i, r);
    }
    function L() {
        return e.setTimeout(function() {
            on = void 0;
        }), on = ot.now();
    }
    function j(e, t) {
        var n, i = 0, r = {
            height:e
        };
        for (t = t ? 1 :0; 4 > i; i += 2 - t) n = Dt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function P(e, t, n) {
        for (var i, r = (q.tweeners[t] || []).concat(q.tweeners["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, t, e)) return i;
    }
    function O(e, t, n) {
        var i, r, o, s, a, l, u, d, c = this, f = {}, h = e.style, p = e.nodeType && Rt(e), g = Et.get(e, "fxshow");
        n.queue || (a = ot._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, 
        l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l();
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, ot.queue(e, "fx").length || a.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
        u = ot.css(e, "display"), d = "none" === u ? Et.get(e, "olddisplay") || E(e.nodeName) :u, 
        "inline" === d && "none" === ot.css(e, "float") && (h.display = "inline-block")), 
        n.overflow && (h.overflow = "hidden", c.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        }));
        for (i in t) if (r = t[i], an.exec(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" :"show")) {
                if ("show" !== r || !g || void 0 === g[i]) continue;
                p = !0;
            }
            f[i] = g && g[i] || ot.style(e, i);
        } else u = void 0;
        if (ot.isEmptyObject(f)) "inline" === ("none" === u ? E(e.nodeName) :u) && (h.display = u); else {
            g ? "hidden" in g && (p = g.hidden) :g = Et.access(e, "fxshow", {}), o && (g.hidden = !p), 
            p ? ot(e).show() :c.done(function() {
                ot(e).hide();
            }), c.done(function() {
                var t;
                Et.remove(e, "fxshow");
                for (t in f) ot.style(e, t, f[t]);
            });
            for (i in f) s = P(p ? g[i] :0, i, c), i in g || (g[i] = s.start, p && (s.end = s.start, 
            s.start = "width" === i || "height" === i ? 1 :0));
        }
    }
    function M(e, t) {
        var n, i, r, o, s;
        for (n in e) if (i = ot.camelCase(n), r = t[i], o = e[n], ot.isArray(o) && (r = o[1], 
        o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = ot.cssHooks[i], s && "expand" in s) {
            o = s.expand(o), delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
    }
    function q(e, t, n) {
        var i, r, o = 0, s = q.prefilters.length, a = ot.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (r) return !1;
            for (var t = on || L(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
            return a.notifyWith(e, [ u, o, n ]), 1 > o && l ? n :(a.resolveWith(e, [ u ]), !1);
        }, u = a.promise({
            elem:e,
            props:ot.extend({}, t),
            opts:ot.extend(!0, {
                specialEasing:{},
                easing:ot.easing._default
            }, n),
            originalProperties:t,
            originalOptions:n,
            startTime:on || L(),
            duration:n.duration,
            tweens:[],
            createTween:function(t, n) {
                var i = ot.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i;
            },
            stop:function(t) {
                var n = 0, i = t ? u.tweens.length :0;
                if (r) return this;
                for (r = !0; i > n; n++) u.tweens[n].run(1);
                return t ? (a.notifyWith(e, [ u, 1, 0 ]), a.resolveWith(e, [ u, t ])) :a.rejectWith(e, [ u, t ]), 
                this;
            }
        }), d = u.props;
        for (M(d, u.opts.specialEasing); s > o; o++) if (i = q.prefilters[o].call(u, e, d, u.opts)) return ot.isFunction(i.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(i.stop, i)), 
        i;
        return ot.map(d, P, u), ot.isFunction(u.opts.start) && u.opts.start.call(e, u), 
        ot.fx.timer(ot.extend(l, {
            elem:e,
            anim:u,
            queue:u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function H(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function B(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(wt) || [];
            if (ot.isFunction(n)) for (;i = o[r++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
            (e[i] = e[i] || []).unshift(n)) :(e[i] = e[i] || []).push(n);
        };
    }
    function U(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, ot.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) :void 0 :(t.dataTypes.unshift(u), 
                r(u), !1);
            }), l;
        }
        var o = {}, s = e === kn;
        return r(t.dataTypes[0]) || !o["*"] && r("*");
    }
    function W(e, t) {
        var n, i, r = ot.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e :i || (i = {}))[n] = t[n]);
        return i && ot.extend(!0, e, i), e;
    }
    function _(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (r in a) if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break;
        }
        if (l[0] in n) o = l[0]; else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break;
                }
                s || (s = r);
            }
            o = o || s;
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) :void 0;
    }
    function Z(e, t, n, i) {
        var r, o, s, a, l, u = {}, d = e.dataTypes.slice();
        if (d[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = d.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s) for (r in u) if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[r] :u[r] !== !0 && (o = a[0], d.unshift(a[1]));
                break;
            }
            if (s !== !0) if (s && e["throws"]) t = s(t); else try {
                t = s(t);
            } catch (c) {
                return {
                    state:"parsererror",
                    error:s ? c :"No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state:"success",
            data:t
        };
    }
    function z(e, t, n, i) {
        var r;
        if (ot.isArray(t)) ot.each(t, function(t, r) {
            n || Dn.test(e) ? i(e, r) :z(e + "[" + ("object" == typeof r && null != r ? t :"") + "]", r, n, i);
        }); else if (n || "object" !== ot.type(t)) i(e, t); else for (r in t) z(e + "[" + r + "]", t[r], n, i);
    }
    function V(e) {
        return ot.isWindow(e) ? e :9 === e.nodeType && e.defaultView;
    }
    var Y = [], X = e.document, G = Y.slice, K = Y.concat, Q = Y.push, J = Y.indexOf, et = {}, tt = et.toString, nt = et.hasOwnProperty, it = {}, rt = "2.2.4", ot = function(e, t) {
        return new ot.fn.init(e, t);
    }, st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, lt = /-([\da-z])/gi, ut = function(e, t) {
        return t.toUpperCase();
    };
    ot.fn = ot.prototype = {
        jquery:rt,
        constructor:ot,
        selector:"",
        length:0,
        toArray:function() {
            return G.call(this);
        },
        get:function(e) {
            return null != e ? 0 > e ? this[e + this.length] :this[e] :G.call(this);
        },
        pushStack:function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each:function(e) {
            return ot.each(this, e);
        },
        map:function(e) {
            return this.pushStack(ot.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice:function() {
            return this.pushStack(G.apply(this, arguments));
        },
        first:function() {
            return this.eq(0);
        },
        last:function() {
            return this.eq(-1);
        },
        eq:function(e) {
            var t = this.length, n = +e + (0 > e ? t :0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] :[]);
        },
        end:function() {
            return this.prevObject || this.constructor();
        },
        push:Q,
        sort:Y.sort,
        splice:Y.splice
    }, ot.extend = ot.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), 
        a === l && (s = this, a--); l > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], 
        i = e[t], s !== i && (u && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, 
        o = n && ot.isArray(n) ? n :[]) :o = n && ot.isPlainObject(n) ? n :{}, s[t] = ot.extend(u, o, i)) :void 0 !== i && (s[t] = i));
        return s;
    }, ot.extend({
        expando:"jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady:!0,
        error:function(e) {
            throw new Error(e);
        },
        noop:function() {},
        isFunction:function(e) {
            return "function" === ot.type(e);
        },
        isArray:Array.isArray,
        isWindow:function(e) {
            return null != e && e === e.window;
        },
        isNumeric:function(e) {
            var t = e && e.toString();
            return !ot.isArray(e) && t - parseFloat(t) + 1 >= 0;
        },
        isPlainObject:function(e) {
            var t;
            if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
            if (e.constructor && !nt.call(e, "constructor") && !nt.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e) ;
            return void 0 === t || nt.call(e, t);
        },
        isEmptyObject:function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type:function(e) {
            return null == e ? e + "" :"object" == typeof e || "function" == typeof e ? et[tt.call(e)] || "object" :typeof e;
        },
        globalEval:function(e) {
            var t, n = eval;
            e = ot.trim(e), e && (1 === e.indexOf("use strict") ? (t = X.createElement("script"), 
            t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) :n(e));
        },
        camelCase:function(e) {
            return e.replace(at, "ms-").replace(lt, ut);
        },
        nodeName:function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each:function(e, t) {
            var i, r = 0;
            if (n(e)) for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++) ; else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
            return e;
        },
        trim:function(e) {
            return null == e ? "" :(e + "").replace(st, "");
        },
        makeArray:function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ot.merge(i, "string" == typeof e ? [ e ] :e) :Q.call(i, e)), 
            i;
        },
        inArray:function(e, t, n) {
            return null == t ? -1 :J.call(t, e, n);
        },
        merge:function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e;
        },
        grep:function(e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
            return r;
        },
        map:function(e, t, i) {
            var r, o, s = 0, a = [];
            if (n(e)) for (r = e.length; r > s; s++) o = t(e[s], s, i), null != o && a.push(o); else for (s in e) o = t(e[s], s, i), 
            null != o && a.push(o);
            return K.apply([], a);
        },
        guid:1,
        proxy:function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), ot.isFunction(e) ? (i = G.call(arguments, 2), 
            r = function() {
                return e.apply(t || this, i.concat(G.call(arguments)));
            }, r.guid = e.guid = e.guid || ot.guid++, r) :void 0;
        },
        now:Date.now,
        support:it
    }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = Y[Symbol.iterator]), 
    ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase();
    });
    var dt = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, c, h, p = t && t.ownerDocument, g = t ? t.nodeType :9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((t ? t.ownerDocument || t :H) !== R && D(t), t = t || R, L)) {
                if (11 !== g && (u = vt.exec(e))) if (r = u[1]) {
                    if (9 === g) {
                        if (!(s = t.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n;
                    } else if (p && (s = p.getElementById(r)) && M(t, s) && s.id === r) return n.push(s), 
                    n;
                } else {
                    if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), 
                    n;
                }
                if (!(!w.qsa || Z[e + " "] || j && j.test(e))) {
                    if (1 !== g) p = t, h = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(bt, "\\$&") :t.setAttribute("id", a = q), 
                        c = E(e), o = c.length, l = ft.test(a) ? "#" + a :"[id='" + a + "']"; o--; ) c[o] = l + " " + f(c[o]);
                        h = c.join(","), p = yt.test(e) && d(t.parentNode) || t;
                    }
                    if (h) try {
                        return Q.apply(n, p.querySelectorAll(h)), n;
                    } catch (m) {} finally {
                        a === q && t.removeAttribute("id");
                    }
                }
            }
            return k(e.replace(at, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[q] = !0, e;
        }
        function r(e) {
            var t = R.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) T.attrHandle[n[i]] = t;
        }
        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 :-1;
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; ) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
                });
            });
        }
        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function c() {}
        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i;
        }
        function h(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, o = U++;
            return t.first ? function(t, n, o) {
                for (;t = t[i]; ) if (1 === t.nodeType || r) return e(t, n, o);
            } :function(t, n, s) {
                var a, l, u, d = [ B, o ];
                if (s) {
                    for (;t = t[i]; ) if ((1 === t.nodeType || r) && e(t, n, s)) return !0;
                } else for (;t = t[i]; ) if (1 === t.nodeType || r) {
                    if (u = t[q] || (t[q] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === B && a[1] === o) return d[2] = a[2];
                    if (l[i] = d, d[2] = e(t, n, s)) return !0;
                }
            };
        }
        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
            } :e[0];
        }
        function g(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i;
        }
        function m(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), 
            u && t.push(a)));
            return s;
        }
        function v(e, t, n, r, o, s) {
            return r && !r[q] && (r = v(r)), o && !o[q] && (o = v(o, s)), i(function(i, s, a, l) {
                var u, d, c, f = [], h = [], p = s.length, v = i || g(t || "*", a.nodeType ? [ a ] :a, []), y = !e || !i && t ? v :m(v, f, e, a, l), b = n ? o || (i ? e :p || r) ? [] :s :y;
                if (n && n(y, b, a, l), r) for (u = m(b, h), r(u, [], a, l), d = u.length; d--; ) (c = u[d]) && (b[h[d]] = !(y[h[d]] = c));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], d = b.length; d--; ) (c = b[d]) && u.push(y[d] = c);
                            o(null, b = [], u, l);
                        }
                        for (d = b.length; d--; ) (c = b[d]) && (u = o ? et(i, c) :f[d]) > -1 && (i[u] = !(s[u] = c));
                    }
                } else b = m(b === s ? b.splice(p, b.length) :b), o ? o(null, s, b, l) :Q.apply(s, b);
            });
        }
        function y(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 :0, l = h(function(e) {
                return e === t;
            }, s, !0), u = h(function(e) {
                return et(t, e) > -1;
            }, s, !0), d = [ function(e, n, i) {
                var r = !o && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) :u(e, n, i));
                return t = null, r;
            } ]; r > a; a++) if (n = T.relative[e[a].type]) d = [ h(p(d), n) ]; else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[q]) {
                    for (i = ++a; r > i && !T.relative[e[i].type]; i++) ;
                    return v(a > 1 && p(d), a > 1 && f(e.slice(0, a - 1).concat({
                        value:" " === e[a - 2].type ? "*" :""
                    })).replace(at, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && f(e));
                }
                d.push(n);
            }
            return p(d);
        }
        function b(e, n) {
            var r = n.length > 0, o = e.length > 0, s = function(i, s, a, l, u) {
                var d, c, f, h = 0, p = "0", g = i && [], v = [], y = $, b = i || o && T.find.TAG("*", u), x = B += null == y ? 1 :Math.random() || .1, w = b.length;
                for (u && ($ = s === R || s || u); p !== w && null != (d = b[p]); p++) {
                    if (o && d) {
                        for (c = 0, s || d.ownerDocument === R || (D(d), a = !L); f = e[c++]; ) if (f(d, s || R, a)) {
                            l.push(d);
                            break;
                        }
                        u && (B = x);
                    }
                    r && ((d = !f && d) && h--, i && g.push(d));
                }
                if (h += p, r && p !== h) {
                    for (c = 0; f = n[c++]; ) f(g, v, s, a);
                    if (i) {
                        if (h > 0) for (;p--; ) g[p] || v[p] || (v[p] = G.call(l));
                        v = m(v);
                    }
                    Q.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l);
                }
                return u && (B = x, $ = y), g;
            };
            return r ? i(s) :s;
        }
        var x, w, T, C, A, E, S, k, $, N, F, D, R, I, L, j, P, O, M, q = "sizzle" + 1 * new Date(), H = e.document, B = 0, U = 0, W = n(), _ = n(), Z = n(), z = function(e, t) {
            return e === t && (F = !0), 0;
        }, V = 1 << 31, Y = {}.hasOwnProperty, X = [], G = X.pop, K = X.push, Q = X.push, J = X.slice, et = function(e, t) {
            for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
            return -1;
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", st = new RegExp(nt + "+", "g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ct = new RegExp(ot), ft = new RegExp("^" + it + "$"), ht = {
            ID:new RegExp("^#(" + it + ")"),
            CLASS:new RegExp("^\\.(" + it + ")"),
            TAG:new RegExp("^(" + it + "|[*])"),
            ATTR:new RegExp("^" + rt),
            PSEUDO:new RegExp("^" + ot),
            CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool:new RegExp("^(?:" + tt + ")$", "i"),
            needsContext:new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, pt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), wt = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t :0 > i ? String.fromCharCode(i + 65536) :String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i);
        }, Tt = function() {
            D();
        };
        try {
            Q.apply(X = J.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType;
        } catch (Ct) {
            Q = {
                apply:X.length ? function(e, t) {
                    K.apply(e, J.call(t));
                } :function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        w = t.support = {}, A = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName :!1;
        }, D = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e :H;
            return i !== R && 9 === i.nodeType && i.documentElement ? (R = i, I = R.documentElement, 
            L = !A(R), (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) :n.attachEvent && n.attachEvent("onunload", Tt)), 
            w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(R.createComment("")), !e.getElementsByTagName("*").length;
            }), w.getElementsByClassName = mt.test(R.getElementsByClassName), w.getById = r(function(e) {
                return I.appendChild(e).id = q, !R.getElementsByName || !R.getElementsByName(q).length;
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [ n ] :[];
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(xt, wt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) :(delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(xt, wt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) :w.qsa ? t.querySelectorAll(e) :void 0;
            } :function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && L ? t.getElementsByClassName(e) :void 0;
            }, P = [], j = [], (w.qsa = mt.test(R.querySelectorAll)) && (r(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + nt + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || j.push("\\[" + nt + "*(?:value|" + tt + ")"), 
                e.querySelectorAll("[id~=" + q + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), 
                e.querySelectorAll("a#" + q + "+*").length || j.push(".#.+[+~]");
            }), r(function(e) {
                var t = R.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + nt + "*[*^$|!~]?="), 
                e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                j.push(",.*:");
            })), (w.matchesSelector = mt.test(O = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), P.push("!=", ot);
            }), j = j.length && new RegExp(j.join("|")), P = P.length && new RegExp(P.join("|")), 
            t = mt.test(I.compareDocumentPosition), M = t || mt.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement :e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) :e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } :function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, z = t ? function(e, t) {
                if (e === t) return F = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n :(n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) :1, 
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === R || e.ownerDocument === H && M(H, e) ? -1 :t === R || t.ownerDocument === H && M(H, t) ? 1 :N ? et(N, e) - et(N, t) :0 :4 & n ? -1 :1);
            } :function(e, t) {
                if (e === t) return F = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [ e ], l = [ t ];
                if (!r || !o) return e === R ? -1 :t === R ? 1 :r ? -1 :o ? 1 :N ? et(N, e) - et(N, t) :0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (n = t; n = n.parentNode; ) l.unshift(n);
                for (;a[i] === l[i]; ) i++;
                return i ? s(a[i], l[i]) :a[i] === H ? -1 :l[i] === H ? 1 :0;
            }, R) :R;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== R && D(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !L || Z[n + " "] || P && P.test(n) || j && j.test(n))) try {
                var i = O.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
            } catch (r) {}
            return t(n, R, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== R && D(e), M(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== R && D(e);
            var n = T.attrHandle[t.toLowerCase()], i = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !L) :void 0;
            return void 0 !== i ? i :w.attributes || !L ? e.getAttribute(t) :(i = e.getAttributeNode(t)) && i.specified ? i.value :null;
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (F = !w.detectDuplicates, N = !w.sortStable && e.slice(0), e.sort(z), F) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return N = null, e;
        }, C = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += C(t);
            return n;
        }, T = t.selectors = {
            cacheLength:50,
            createPseudo:i,
            match:ht,
            attrHandle:{},
            find:{},
            relative:{
                ">":{
                    dir:"parentNode",
                    first:!0
                },
                " ":{
                    dir:"parentNode"
                },
                "+":{
                    dir:"previousSibling",
                    first:!0
                },
                "~":{
                    dir:"previousSibling"
                }
            },
            preFilter:{
                ATTR:function(e) {
                    return e[1] = e[1].replace(xt, wt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, wt), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD:function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) :2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) :e[3] && t.error(e[0]), 
                    e;
                },
                PSEUDO:function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null :(e[3] ? e[2] = e[4] || e[5] || "" :n && ct.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter:{
                TAG:function(e) {
                    var t = e.replace(xt, wt).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } :function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS:function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR:function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n :n ? (o += "", "=" === n ? o === i :"!=" === n ? o !== i :"^=" === n ? i && 0 === o.indexOf(i) :"*=" === n ? i && o.indexOf(i) > -1 :"$=" === n ? i && o.slice(-i.length) === i :"~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 :"|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" :!1) :!0;
                    };
                },
                CHILD:function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode;
                    } :function(t, n, l) {
                        var u, d, c, f, h, p, g = o !== s ? "nextSibling" :"previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (f = t; f = f[g]; ) if (a ? f.nodeName.toLowerCase() === v :1 === f.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling";
                                }
                                return !0;
                            }
                            if (p = [ s ? m.firstChild :m.lastChild ], s && y) {
                                for (f = m, c = f[q] || (f[q] = {}), d = c[f.uniqueID] || (c[f.uniqueID] = {}), 
                                u = d[e] || [], h = u[0] === B && u[1], b = h && u[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop(); ) if (1 === f.nodeType && ++b && f === t) {
                                    d[e] = [ B, h, b ];
                                    break;
                                }
                            } else if (y && (f = t, c = f[q] || (f[q] = {}), d = c[f.uniqueID] || (c[f.uniqueID] = {}), 
                            u = d[e] || [], h = u[0] === B && u[1], b = h), b === !1) for (;(f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v :1 !== f.nodeType) || !++b || (y && (c = f[q] || (f[q] = {}), 
                            d = c[f.uniqueID] || (c[f.uniqueID] = {}), d[e] = [ B, b ]), f !== t)); ) ;
                            return b -= r, b === i || 0 === b % i && b / i >= 0;
                        }
                    };
                },
                PSEUDO:function(e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[q] ? o(n) :o.length > 1 ? (r = [ e, e, "", n ], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--; ) i = et(e, r[s]), e[i] = !(t[i] = r[s]);
                    }) :function(e) {
                        return o(e, 0, r);
                    }) :o;
                }
            },
            pseudos:{
                not:i(function(e) {
                    var t = [], n = [], r = S(e.replace(at, "$1"));
                    return r[q] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                    }) :function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has:i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains:i(function(e) {
                    return e = e.replace(xt, wt), function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                    };
                }),
                lang:i(function(e) {
                    return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = L ? t.lang :t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target:function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root:function(e) {
                    return e === I;
                },
                focus:function(e) {
                    return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled:function(e) {
                    return e.disabled === !1;
                },
                disabled:function(e) {
                    return e.disabled === !0;
                },
                checked:function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected:function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty:function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent:function(e) {
                    return !T.pseudos.empty(e);
                },
                header:function(e) {
                    return gt.test(e.nodeName);
                },
                input:function(e) {
                    return pt.test(e.nodeName);
                },
                button:function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text:function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first:u(function() {
                    return [ 0 ];
                }),
                last:u(function(e, t) {
                    return [ t - 1 ];
                }),
                eq:u(function(e, t, n) {
                    return [ 0 > n ? n + t :n ];
                }),
                even:u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd:u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt:u(function(e, t, n) {
                    for (var i = 0 > n ? n + t :n; --i >= 0; ) e.push(i);
                    return e;
                }),
                gt:u(function(e, t, n) {
                    for (var i = 0 > n ? n + t :n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
            radio:!0,
            checkbox:!0,
            file:!0,
            password:!0,
            image:!0
        }) T.pseudos[x] = a(x);
        for (x in {
            submit:!0,
            reset:!0
        }) T.pseudos[x] = l(x);
        return c.prototype = T.filters = T.pseudos, T.setFilters = new c(), E = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, u, d = _[e + " "];
            if (d) return n ? 0 :d.slice(0);
            for (a = e, l = [], u = T.preFilter; a; ) {
                i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), 
                i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
                    value:i,
                    type:r[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (s in T.filter) !(r = ht[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), 
                o.push({
                    value:i,
                    type:s,
                    matches:r
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length :a ? t.error(e) :_(e, l).slice(0);
        }, S = t.compile = function(e, t) {
            var n, i = [], r = [], o = Z[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--; ) o = y(t[n]), o[q] ? i.push(o) :r.push(o);
                o = Z(e, b(r, i)), o.selector = e;
            }
            return o;
        }, k = t.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e, c = !i && E(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && L && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(xt, wt), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (r = ht.needsContext.test(e) ? 0 :o.length; r-- && (s = o[r], !T.relative[a = s.type]); ) if ((l = T.find[a]) && (i = l(s.matches[0].replace(xt, wt), yt.test(o[0].type) && d(t.parentNode) || t))) {
                    if (o.splice(r, 1), e = i.length && f(o), !e) return Q.apply(n, i), n;
                    break;
                }
            }
            return (u || S(e, c))(i, t, !L, n, !t || yt.test(e) && d(t.parentNode) || t), n;
        }, w.sortStable = q.split("").sort(z).join("") === q, w.detectDuplicates = !!F, 
        D(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(R.createElement("div"));
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 :e.getAttribute(t, "type" === t.toLowerCase() ? 1 :2);
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 :e.defaultValue;
        }), r(function(e) {
            return null == e.getAttribute("disabled");
        }) || o(tt, function(e, t, n) {
            var i;
            return n ? void 0 :e[t] === !0 ? t.toLowerCase() :(i = e.getAttributeNode(t)) && i.specified ? i.value :null;
        }), t;
    }(e);
    ot.find = dt, ot.expr = dt.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = dt.uniqueSort, 
    ot.text = dt.getText, ot.isXMLDoc = dt.isXML, ot.contains = dt.contains;
    var ct = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (r && ot(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, ft = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, ht = ot.expr.match.needsContext, pt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, gt = /^.[^:#\[\.,]*$/;
    ot.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ot.find.matchesSelector(i, e) ? [ i ] :[] :ot.find.matches(e, ot.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, ot.fn.extend({
        find:function(e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; n > t; t++) if (ot.contains(r[t], this)) return !0;
            }));
            for (t = 0; n > t; t++) ot.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? ot.unique(i) :i), i.selector = this.selector ? this.selector + " " + e :e, 
            i;
        },
        filter:function(e) {
            return this.pushStack(i(this, e || [], !1));
        },
        not:function(e) {
            return this.pushStack(i(this, e || [], !0));
        },
        is:function(e) {
            return !!i(this, "string" == typeof e && ht.test(e) ? ot(e) :e || [], !1).length;
        }
    });
    var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, yt = ot.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || mt, "string" == typeof e) {
            if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] :vt.exec(e), 
            !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) :this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof ot ? t[0] :t, ot.merge(this, ot.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t :X, !0)), 
                pt.test(i[1]) && ot.isPlainObject(t)) for (i in t) ot.isFunction(this[i]) ? this[i](t[i]) :this.attr(i, t[i]);
                return this;
            }
            return r = X.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), 
            this.context = X, this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) :ot.isFunction(e) ? void 0 !== n.ready ? n.ready(e) :e(ot) :(void 0 !== e.selector && (this.selector = e.selector, 
        this.context = e.context), ot.makeArray(e, this));
    };
    yt.prototype = ot.fn, mt = ot(X);
    var bt = /^(?:parents|prev(?:Until|All))/, xt = {
        children:!0,
        contents:!0,
        next:!0,
        prev:!0
    };
    ot.fn.extend({
        has:function(e) {
            var t = ot(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (ot.contains(this, t[e])) return !0;
            });
        },
        closest:function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = ht.test(e) || "string" != typeof e ? ot(e, t || this.context) :0; r > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 :1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) :o);
        },
        index:function(e) {
            return e ? "string" == typeof e ? J.call(ot(e), this[0]) :J.call(this, e.jquery ? e[0] :e) :this[0] && this[0].parentNode ? this.first().prevAll().length :-1;
        },
        add:function(e, t) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(e, t))));
        },
        addBack:function(e) {
            return this.add(null == e ? this.prevObject :this.prevObject.filter(e));
        }
    }), ot.each({
        parent:function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t :null;
        },
        parents:function(e) {
            return ct(e, "parentNode");
        },
        parentsUntil:function(e, t, n) {
            return ct(e, "parentNode", n);
        },
        next:function(e) {
            return r(e, "nextSibling");
        },
        prev:function(e) {
            return r(e, "previousSibling");
        },
        nextAll:function(e) {
            return ct(e, "nextSibling");
        },
        prevAll:function(e) {
            return ct(e, "previousSibling");
        },
        nextUntil:function(e, t, n) {
            return ct(e, "nextSibling", n);
        },
        prevUntil:function(e, t, n) {
            return ct(e, "previousSibling", n);
        },
        siblings:function(e) {
            return ft((e.parentNode || {}).firstChild, e);
        },
        children:function(e) {
            return ft(e.firstChild);
        },
        contents:function(e) {
            return e.contentDocument || ot.merge([], e.childNodes);
        }
    }, function(e, t) {
        ot.fn[e] = function(n, i) {
            var r = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), 
            this.length > 1 && (xt[e] || ot.uniqueSort(r), bt.test(e) && r.reverse()), this.pushStack(r);
        };
    });
    var wt = /\S+/g;
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) :ot.extend({}, e);
        var t, n, i, r, s = [], a = [], l = -1, u = function() {
            for (r = e.once, i = t = !0; a.length; l = -1) for (n = a.shift(); ++l < s.length; ) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, 
            n = !1);
            e.memory || (n = !1), t = !1, r && (s = n ? [] :"");
        }, d = {
            add:function() {
                return s && (n && !t && (l = s.length - 1, a.push(n)), function i(t) {
                    ot.each(t, function(t, n) {
                        ot.isFunction(n) ? e.unique && d.has(n) || s.push(n) :n && n.length && "string" !== ot.type(n) && i(n);
                    });
                }(arguments), n && !t && u()), this;
            },
            remove:function() {
                return ot.each(arguments, function(e, t) {
                    for (var n; (n = ot.inArray(t, s, n)) > -1; ) s.splice(n, 1), l >= n && l--;
                }), this;
            },
            has:function(e) {
                return e ? ot.inArray(e, s) > -1 :s.length > 0;
            },
            empty:function() {
                return s && (s = []), this;
            },
            disable:function() {
                return r = a = [], s = n = "", this;
            },
            disabled:function() {
                return !s;
            },
            lock:function() {
                return r = a = [], n || (s = n = ""), this;
            },
            locked:function() {
                return !!r;
            },
            fireWith:function(e, n) {
                return r || (n = n || [], n = [ e, n.slice ? n.slice() :n ], a.push(n), t || u()), 
                this;
            },
            fire:function() {
                return d.fireWith(this, arguments), this;
            },
            fired:function() {
                return !!i;
            }
        };
        return d;
    }, ot.extend({
        Deferred:function(e) {
            var t = [ [ "resolve", "done", ot.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ot.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ot.Callbacks("memory") ] ], n = "pending", i = {
                state:function() {
                    return n;
                },
                always:function() {
                    return r.done(arguments).fail(arguments), this;
                },
                then:function() {
                    var e = arguments;
                    return ot.Deferred(function(n) {
                        ot.each(t, function(t, o) {
                            var s = ot.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ot.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) :n[o[0] + "With"](this === i ? n.promise() :this, s ? [ e ] :arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise:function(e) {
                    return null != e ? ot.extend(e, i) :i;
                }
            }, r = {};
            return i.pipe = i.then, ot.each(t, function(e, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i :this, arguments), this;
                }, r[o[0] + "With"] = s.fireWith;
            }), i.promise(r), e && e.call(r, r), r;
        },
        when:function(e) {
            var t, n, i, r = 0, o = G.call(arguments), s = o.length, a = 1 !== s || e && ot.isFunction(e.promise) ? s :0, l = 1 === a ? e :ot.Deferred(), u = function(e, n, i) {
                return function(r) {
                    n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) :r, i === t ? l.notifyWith(n, i) :--a || l.resolveWith(n, i);
                };
            };
            if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) :--a;
            return a || l.resolveWith(i, o), l.promise();
        }
    });
    var Tt;
    ot.fn.ready = function(e) {
        return ot.ready.promise().done(e), this;
    }, ot.extend({
        isReady:!1,
        readyWait:1,
        holdReady:function(e) {
            e ? ot.readyWait++ :ot.ready(!0);
        },
        ready:function(e) {
            (e === !0 ? --ot.readyWait :ot.isReady) || (ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (Tt.resolveWith(X, [ ot ]), 
            ot.fn.triggerHandler && (ot(X).triggerHandler("ready"), ot(X).off("ready"))));
        }
    }), ot.ready.promise = function(t) {
        return Tt || (Tt = ot.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? e.setTimeout(ot.ready) :(X.addEventListener("DOMContentLoaded", s), 
        e.addEventListener("load", s))), Tt.promise(t);
    }, ot.ready.promise();
    var Ct = function(e, t, n, i, r, o, s) {
        var a = 0, l = e.length, u = null == n;
        if ("object" === ot.type(n)) {
            r = !0;
            for (a in n) Ct(e, t, a, n[a], !0, o, s);
        } else if (void 0 !== i && (r = !0, ot.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), 
        t = null) :(u = t, t = function(e, t, n) {
            return u.call(ot(e), n);
        })), t)) for (;l > a; a++) t(e[a], n, s ? i :i.call(e[a], a, t(e[a], n)));
        return r ? e :u ? t.call(e) :l ? t(e[0], n) :o;
    }, At = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    a.uid = 1, a.prototype = {
        register:function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n :Object.defineProperty(e, this.expando, {
                value:n,
                writable:!0,
                configurable:!0
            }), e[this.expando];
        },
        cache:function(e) {
            if (!At(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, At(e) && (e.nodeType ? e[this.expando] = t :Object.defineProperty(e, this.expando, {
                value:t,
                configurable:!0
            }))), t;
        },
        set:function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n; else for (i in t) r[i] = t[i];
            return r;
        },
        get:function(e, t) {
            return void 0 === t ? this.cache(e) :e[this.expando] && e[this.expando][t];
        },
        access:function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), 
            void 0 !== i ? i :this.get(e, ot.camelCase(t))) :(this.set(e, t, n), void 0 !== n ? n :t);
        },
        remove:function(e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e); else {
                    ot.isArray(t) ? i = t.concat(t.map(ot.camelCase)) :(r = ot.camelCase(t), t in o ? i = [ t, r ] :(i = r, 
                    i = i in o ? [ i ] :i.match(wt) || [])), n = i.length;
                    for (;n--; ) delete o[i[n]];
                }
                (void 0 === t || ot.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 :delete e[this.expando]);
            }
        },
        hasData:function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ot.isEmptyObject(t);
        }
    };
    var Et = new a(), St = new a(), kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, $t = /[A-Z]/g;
    ot.extend({
        hasData:function(e) {
            return St.hasData(e) || Et.hasData(e);
        },
        data:function(e, t, n) {
            return St.access(e, t, n);
        },
        removeData:function(e, t) {
            St.remove(e, t);
        },
        _data:function(e, t, n) {
            return Et.access(e, t, n);
        },
        _removeData:function(e, t) {
            Et.remove(e, t);
        }
    }), ot.fn.extend({
        data:function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = St.get(o), 1 === o.nodeType && !Et.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), 
                    l(o, i, r[i])));
                    Et.set(o, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == typeof e ? this.each(function() {
                St.set(this, e);
            }) :Ct(this, function(t) {
                var n, i;
                if (o && void 0 === t) {
                    if (n = St.get(o, e) || St.get(o, e.replace($t, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = ot.camelCase(e), n = St.get(o, i), void 0 !== n) return n;
                    if (n = l(o, i, void 0), void 0 !== n) return n;
                } else i = ot.camelCase(e), this.each(function() {
                    var n = St.get(this, i);
                    St.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && St.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData:function(e) {
            return this.each(function() {
                St.remove(this, e);
            });
        }
    }), ot.extend({
        queue:function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = Et.get(e, t), n && (!i || ot.isArray(n) ? i = Et.access(e, t, ot.makeArray(n)) :i.push(n)), 
            i || []) :void 0;
        },
        dequeue:function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t), i = n.length, r = n.shift(), o = ot._queueHooks(e, t), s = function() {
                ot.dequeue(e, t);
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire();
        },
        _queueHooks:function(e, t) {
            var n = t + "queueHooks";
            return Et.get(e, n) || Et.access(e, n, {
                empty:ot.Callbacks("once memory").add(function() {
                    Et.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), ot.fn.extend({
        queue:function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ot.queue(this[0], e) :void 0 === t ? this :this.each(function() {
                var n = ot.queue(this, e, t);
                ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e);
            });
        },
        dequeue:function(e) {
            return this.each(function() {
                ot.dequeue(this, e);
            });
        },
        clearQueue:function(e) {
            return this.queue(e || "fx", []);
        },
        promise:function(e, t) {
            var n, i = 1, r = ot.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) n = Et.get(o[s], e + "queueHooks"), 
            n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t);
        }
    });
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ft = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"), Dt = [ "Top", "Right", "Bottom", "Left" ], Rt = function(e, t) {
        return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e);
    }, It = /^(?:checkbox|radio)$/i, Lt = /<([\w:-]+)/, jt = /^$|\/(?:java|ecma)script/i, Pt = {
        option:[ 1, "<select multiple='multiple'>", "</select>" ],
        thead:[ 1, "<table>", "</table>" ],
        col:[ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr:[ 2, "<table><tbody>", "</tbody></table>" ],
        td:[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default:[ 0, "", "" ]
    };
    Pt.optgroup = Pt.option, Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead, 
    Pt.th = Pt.td;
    var Ot = /<|&#?\w+;/;
    !function() {
        var e = X.createDocumentFragment(), t = e.appendChild(X.createElement("div")), n = X.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), 
        t.appendChild(n), it.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        t.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var Mt = /^key/, qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ht = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global:{},
        add:function(e, t, n, i, r) {
            var o, s, a, l, u, d, c, f, h, p, g, m = Et.get(e);
            if (m) for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ot.guid++), 
            (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                return "undefined" != typeof ot && ot.event.triggered !== t.type ? ot.event.dispatch.apply(e, arguments) :void 0;
            }), t = (t || "").match(wt) || [ "" ], u = t.length; u--; ) a = Ht.exec(t[u]) || [], 
            h = g = a[1], p = (a[2] || "").split(".").sort(), h && (c = ot.event.special[h] || {}, 
            h = (r ? c.delegateType :c.bindType) || h, c = ot.event.special[h] || {}, d = ot.extend({
                type:h,
                origType:g,
                data:i,
                handler:n,
                guid:n.guid,
                selector:r,
                needsContext:r && ot.expr.match.needsContext.test(r),
                namespace:p.join(".")
            }, o), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, c.setup && c.setup.call(e, i, p, s) !== !1 || e.addEventListener && e.addEventListener(h, s)), 
            c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) :f.push(d), 
            ot.event.global[h] = !0);
        },
        remove:function(e, t, n, i, r) {
            var o, s, a, l, u, d, c, f, h, p, g, m = Et.hasData(e) && Et.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(wt) || [ "" ], u = t.length; u--; ) if (a = Ht.exec(t[u]) || [], 
                h = g = a[1], p = (a[2] || "").split(".").sort(), h) {
                    for (c = ot.event.special[h] || {}, h = (i ? c.delegateType :c.bindType) || h, f = l[h] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--; ) d = f[o], 
                    !r && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (f.splice(o, 1), 
                    d.selector && f.delegateCount--, c.remove && c.remove.call(e, d));
                    s && !f.length && (c.teardown && c.teardown.call(e, p, m.handle) !== !1 || ot.removeEvent(e, h, m.handle), 
                    delete l[h]);
                } else for (h in l) ot.event.remove(e, h + t[u], n, i, !0);
                ot.isEmptyObject(l) && Et.remove(e, "handle events");
            }
        },
        dispatch:function(e) {
            e = ot.event.fix(e);
            var t, n, i, r, o, s = [], a = G.call(arguments), l = (Et.get(this, "events") || {})[e.type] || [], u = ot.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = ot.event.handlers.call(this, e, l), t = 0; (r = s[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = r.elem, 
                n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); ) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, 
                e.data = o.data, i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), 
                void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers:function(e, t) {
            var n, i, r, o, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (i = [], n = 0; a > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 :ot.find(r, this, null, [ l ]).length), 
                i[r] && i.push(o);
                i.length && s.push({
                    elem:l,
                    handlers:i
                });
            }
            return a < t.length && s.push({
                elem:this,
                handlers:t.slice(a)
            }), s;
        },
        props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks:{},
        keyHooks:{
            props:"char charCode key keyCode".split(" "),
            filter:function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode :t.keyCode), 
                e;
            }
        },
        mouseHooks:{
            props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter:function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || X, 
                i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), 
                e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), 
                e.which || void 0 === o || (e.which = 1 & o ? 1 :2 & o ? 3 :4 & o ? 2 :0), e;
            }
        },
        fix:function(e) {
            if (e[ot.expando]) return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = qt.test(r) ? this.mouseHooks :Mt.test(r) ? this.keyHooks :{}), 
            i = s.props ? this.props.concat(s.props) :this.props, e = new ot.Event(o), t = i.length; t--; ) n = i[t], 
            e[n] = o[n];
            return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            s.filter ? s.filter(e, o) :e;
        },
        special:{
            load:{
                noBubble:!0
            },
            focus:{
                trigger:function() {
                    return this !== g() && this.focus ? (this.focus(), !1) :void 0;
                },
                delegateType:"focusin"
            },
            blur:{
                trigger:function() {
                    return this === g() && this.blur ? (this.blur(), !1) :void 0;
                },
                delegateType:"focusout"
            },
            click:{
                trigger:function() {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), 
                    !1) :void 0;
                },
                _default:function(e) {
                    return ot.nodeName(e.target, "a");
                }
            },
            beforeunload:{
                postDispatch:function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, ot.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h :p) :this.type = e, 
        t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void (this[ot.expando] = !0)) :new ot.Event(e, t);
    }, ot.Event.prototype = {
        constructor:ot.Event,
        isDefaultPrevented:p,
        isPropagationStopped:p,
        isImmediatePropagationStopped:p,
        isSimulated:!1,
        preventDefault:function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation:function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation:function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, ot.each({
        mouseenter:"mouseover",
        mouseleave:"mouseout",
        pointerenter:"pointerover",
        pointerleave:"pointerout"
    }, function(e, t) {
        ot.event.special[e] = {
            delegateType:t,
            bindType:t,
            handle:function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || ot.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), ot.fn.extend({
        on:function(e, t, n, i) {
            return m(this, e, t, n, i);
        },
        one:function(e, t, n, i) {
            return m(this, e, t, n, i, 1);
        },
        off:function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace :i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = p), 
            this.each(function() {
                ot.event.remove(this, e, n, t);
            });
        }
    });
    var Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ut = /<script|<style|<link/i, Wt = /checked\s*(?:[^=]|=\s*.checked.)/i, _t = /^true\/(.*)/, Zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter:function(e) {
            return e.replace(Bt, "<$1></$2>");
        },
        clone:function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = ot.contains(e.ownerDocument, e);
            if (!(it.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e))) for (s = d(a), 
            o = d(e), i = 0, r = o.length; r > i; i++) w(o[i], s[i]);
            if (t) if (n) for (o = o || d(e), s = s || d(a), i = 0, r = o.length; r > i; i++) x(o[i], s[i]); else x(e, a);
            return s = d(a, "script"), s.length > 0 && c(s, !l && d(e, "script")), a;
        },
        cleanData:function(e) {
            for (var t, n, i, r = ot.event.special, o = 0; void 0 !== (n = e[o]); o++) if (At(n)) {
                if (t = n[Et.expando]) {
                    if (t.events) for (i in t.events) r[i] ? ot.event.remove(n, i) :ot.removeEvent(n, i, t.handle);
                    n[Et.expando] = void 0;
                }
                n[St.expando] && (n[St.expando] = void 0);
            }
        }
    }), ot.fn.extend({
        domManip:T,
        detach:function(e) {
            return C(this, e, !0);
        },
        remove:function(e) {
            return C(this, e);
        },
        text:function(e) {
            return Ct(this, function(e) {
                return void 0 === e ? ot.text(this) :this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append:function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend:function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before:function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after:function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty:function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ot.cleanData(d(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone:function(e, t) {
            return e = null == e ? !1 :e, t = null == t ? e :t, this.map(function() {
                return ot.clone(this, e, t);
            });
        },
        html:function(e) {
            return Ct(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ut.test(e) && !Pt[(Lt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = ot.htmlPrefilter(e);
                    try {
                        for (;i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(d(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (r) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith:function() {
            var e = [];
            return T(this, arguments, function(t) {
                var n = this.parentNode;
                ot.inArray(this, e) < 0 && (ot.cleanData(d(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), ot.each({
        appendTo:"append",
        prependTo:"prepend",
        insertBefore:"before",
        insertAfter:"after",
        replaceAll:"replaceWith"
    }, function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, i = [], r = ot(e), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this :this.clone(!0), 
            ot(r[s])[t](n), Q.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var zt, Vt = {
        HTML:"block",
        BODY:"block"
    }, Yt = /^margin/, Xt = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"), Gt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    }, Kt = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = s[o];
        return r;
    }, Qt = X.documentElement;
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
            a.innerHTML = "", Qt.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", 
            r = "4px" === t.marginRight, Qt.removeChild(s);
        }
        var n, i, r, o, s = X.createElement("div"), a = X.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        it.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        s.appendChild(a), ot.extend(it, {
            pixelPosition:function() {
                return t(), n;
            },
            boxSizingReliable:function() {
                return null == i && t(), i;
            },
            pixelMarginRight:function() {
                return null == i && t(), r;
            },
            reliableMarginLeft:function() {
                return null == i && t(), o;
            },
            reliableMarginRight:function() {
                var t, n = a.appendChild(X.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                n.style.marginRight = n.style.width = "0", a.style.width = "1px", Qt.appendChild(s), 
                t = !parseFloat(e.getComputedStyle(n).marginRight), Qt.removeChild(s), a.removeChild(n), 
                t;
            }
        }));
    }();
    var Jt = /^(none|table(?!-c[ea]).+)/, en = {
        position:"absolute",
        visibility:"hidden",
        display:"block"
    }, tn = {
        letterSpacing:"0",
        fontWeight:"400"
    }, nn = [ "Webkit", "O", "Moz", "ms" ], rn = X.createElement("div").style;
    ot.extend({
        cssHooks:{
            opacity:{
                get:function(e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" :n;
                    }
                }
            }
        },
        cssNumber:{
            animationIterationCount:!0,
            columnCount:!0,
            fillOpacity:!0,
            flexGrow:!0,
            flexShrink:!0,
            fontWeight:!0,
            lineHeight:!0,
            opacity:!0,
            order:!0,
            orphans:!0,
            widows:!0,
            zIndex:!0,
            zoom:!0
        },
        cssProps:{
            "float":"cssFloat"
        },
        style:function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = ot.camelCase(t), l = e.style;
                return t = ot.cssProps[a] || (ot.cssProps[a] = $(a) || a), s = ot.cssHooks[t] || ot.cssHooks[a], 
                void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r :l[t] :(o = typeof n, 
                "string" === o && (r = Ft.exec(n)) && r[1] && (n = u(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[a] ? "" :"px")), 
                it.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n)), void 0);
            }
        },
        css:function(e, t, n, i) {
            var r, o, s, a = ot.camelCase(t);
            return t = ot.cssProps[a] || (ot.cssProps[a] = $(a) || a), s = ot.cssHooks[t] || ot.cssHooks[a], 
            s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = S(e, t, i)), "normal" === r && t in tn && (r = tn[t]), 
            "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 :r) :r;
        }
    }), ot.each([ "height", "width" ], function(e, t) {
        ot.cssHooks[t] = {
            get:function(e, n, i) {
                return n ? Jt.test(ot.css(e, "display")) && 0 === e.offsetWidth ? Kt(e, en, function() {
                    return D(e, t, i);
                }) :D(e, t, i) :void 0;
            },
            set:function(e, n, i) {
                var r, o = i && Gt(e), s = i && F(e, t, i, "border-box" === ot.css(e, "boxSizing", !1, o), o);
                return s && (r = Ft.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ot.css(e, t)), 
                N(e, n, s);
            }
        };
    }), ot.cssHooks.marginLeft = k(it.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Kt(e, {
            marginLeft:0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px" :void 0;
    }), ot.cssHooks.marginRight = k(it.reliableMarginRight, function(e, t) {
        return t ? Kt(e, {
            display:"inline-block"
        }, S, [ e, "marginRight" ]) :void 0;
    }), ot.each({
        margin:"",
        padding:"",
        border:"Width"
    }, function(e, t) {
        ot.cssHooks[e + t] = {
            expand:function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") :[ n ]; 4 > i; i++) r[e + Dt[i] + t] = o[i] || o[i - 2] || o[0];
                return r;
            }
        }, Yt.test(e) || (ot.cssHooks[e + t].set = N);
    }), ot.fn.extend({
        css:function(e, t) {
            return Ct(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (ot.isArray(t)) {
                    for (i = Gt(e), r = t.length; r > s; s++) o[t[s]] = ot.css(e, t[s], !1, i);
                    return o;
                }
                return void 0 !== n ? ot.style(e, t, n) :ot.css(e, t);
            }, e, t, arguments.length > 1);
        },
        show:function() {
            return R(this, !0);
        },
        hide:function() {
            return R(this);
        },
        toggle:function(e) {
            return "boolean" == typeof e ? e ? this.show() :this.hide() :this.each(function() {
                Rt(this) ? ot(this).show() :ot(this).hide();
            });
        }
    }), ot.Tween = I, I.prototype = {
        constructor:I,
        init:function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || ot.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = o || (ot.cssNumber[n] ? "" :"px");
        },
        cur:function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) :I.propHooks._default.get(this);
        },
        run:function(e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) :e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) :I.propHooks._default.set(this), this;
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default:{
            get:function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] :(t = ot.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t :0);
            },
            set:function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) :1 !== e.elem.nodeType || null == e.elem.style[ot.cssProps[e.prop]] && !ot.cssHooks[e.prop] ? e.elem[e.prop] = e.now :ot.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set:function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, ot.easing = {
        linear:function(e) {
            return e;
        },
        swing:function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default:"swing"
    }, ot.fx = I.prototype.init, ot.fx.step = {};
    var on, sn, an = /^(?:toggle|show|hide)$/, ln = /queueHooks$/;
    ot.Animation = ot.extend(q, {
        tweeners:{
            "*":[ function(e, t) {
                var n = this.createTween(e, t);
                return u(n.elem, e, Ft.exec(t), n), n;
            } ]
        },
        tweener:function(e, t) {
            ot.isFunction(e) ? (t = e, e = [ "*" ]) :e = e.match(wt);
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], q.tweeners[n] = q.tweeners[n] || [], 
            q.tweeners[n].unshift(t);
        },
        prefilters:[ O ],
        prefilter:function(e, t) {
            t ? q.prefilters.unshift(e) :q.prefilters.push(e);
        }
    }), ot.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? ot.extend({}, e) :{
            complete:n || !n && t || ot.isFunction(e) && e,
            duration:e,
            easing:n && t || t && !ot.isFunction(t) && t
        };
        return i.duration = ot.fx.off ? 0 :"number" == typeof i.duration ? i.duration :i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] :ot.fx.speeds._default, 
        null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue);
        }, i;
    }, ot.fn.extend({
        fadeTo:function(e, t, n, i) {
            return this.filter(Rt).css("opacity", 0).show().end().animate({
                opacity:t
            }, e, n, i);
        },
        animate:function(e, t, n, i) {
            var r = ot.isEmptyObject(e), o = ot.speed(t, n, i), s = function() {
                var t = q(this, ot.extend({}, e), o);
                (r || Et.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, r || o.queue === !1 ? this.each(s) :this.queue(o.queue, s);
        },
        stop:function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, r = null != e && e + "queueHooks", o = ot.timers, s = Et.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && ln.test(r) && i(s[r]);
                for (r = o.length; r--; ) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), 
                t = !1, o.splice(r, 1));
                !t && n || ot.dequeue(this, e);
            });
        },
        finish:function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = Et.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = ot.timers, s = i ? i.length :0;
                for (n.finish = !0, ot.queue(this, e, []), r && r.stop && r.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
            });
        }
    }), ot.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = ot.fn[t];
        ot.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) :this.animate(j(t, !0), e, i, r);
        };
    }), ot.each({
        slideDown:j("show"),
        slideUp:j("hide"),
        slideToggle:j("toggle"),
        fadeIn:{
            opacity:"show"
        },
        fadeOut:{
            opacity:"hide"
        },
        fadeToggle:{
            opacity:"toggle"
        }
    }, function(e, t) {
        ot.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), ot.timers = [], ot.fx.tick = function() {
        var e, t = 0, n = ot.timers;
        for (on = ot.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || ot.fx.stop(), on = void 0;
    }, ot.fx.timer = function(e) {
        ot.timers.push(e), e() ? ot.fx.start() :ot.timers.pop();
    }, ot.fx.interval = 13, ot.fx.start = function() {
        sn || (sn = e.setInterval(ot.fx.tick, ot.fx.interval));
    }, ot.fx.stop = function() {
        e.clearInterval(sn), sn = null;
    }, ot.fx.speeds = {
        slow:600,
        fast:200,
        _default:400
    }, ot.fn.delay = function(t, n) {
        return t = ot.fx ? ot.fx.speeds[t] || t :t, n = n || "fx", this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r);
            };
        });
    }, function() {
        var e = X.createElement("input"), t = X.createElement("select"), n = t.appendChild(X.createElement("option"));
        e.type = "checkbox", it.checkOn = "" !== e.value, it.optSelected = n.selected, t.disabled = !0, 
        it.optDisabled = !n.disabled, e = X.createElement("input"), e.value = "t", e.type = "radio", 
        it.radioValue = "t" === e.value;
    }();
    var un, dn = ot.expr.attrHandle;
    ot.fn.extend({
        attr:function(e, t) {
            return Ct(this, ot.attr, e, t, arguments.length > 1);
        },
        removeAttr:function(e) {
            return this.each(function() {
                ot.removeAttr(this, e);
            });
        }
    }), ot.extend({
        attr:function(e, t, n) {
            var i, r, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? ot.prop(e, t, n) :(1 === o && ot.isXMLDoc(e) || (t = t.toLowerCase(), 
            r = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? un :void 0)), void 0 !== n ? null === n ? void ot.removeAttr(e, t) :r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i :(e.setAttribute(t, n + ""), 
            n) :r && "get" in r && null !== (i = r.get(e, t)) ? i :(i = ot.find.attr(e, t), 
            null == i ? void 0 :i)) :void 0;
        },
        attrHooks:{
            type:{
                set:function(e, t) {
                    if (!it.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr:function(e, t) {
            var n, i, r = 0, o = t && t.match(wt);
            if (o && 1 === e.nodeType) for (;n = o[r++]; ) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (e[i] = !1), 
            e.removeAttribute(n);
        }
    }), un = {
        set:function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) :e.setAttribute(n, n), n;
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = dn[t] || ot.find.attr;
        dn[t] = function(e, t, i) {
            var r, o;
            return i || (o = dn[t], dn[t] = r, r = null != n(e, t, i) ? t.toLowerCase() :null, 
            dn[t] = o), r;
        };
    });
    var cn = /^(?:input|select|textarea|button)$/i, fn = /^(?:a|area)$/i;
    ot.fn.extend({
        prop:function(e, t) {
            return Ct(this, ot.prop, e, t, arguments.length > 1);
        },
        removeProp:function(e) {
            return this.each(function() {
                delete this[ot.propFix[e] || e];
            });
        }
    }), ot.extend({
        prop:function(e, t, n) {
            var i, r, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? (1 === o && ot.isXMLDoc(e) || (t = ot.propFix[t] || t, 
            r = ot.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i :e[t] = n :r && "get" in r && null !== (i = r.get(e, t)) ? i :e[t]) :void 0;
        },
        propHooks:{
            tabIndex:{
                get:function(e) {
                    var t = ot.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) :cn.test(e.nodeName) || fn.test(e.nodeName) && e.href ? 0 :-1;
                }
            }
        },
        propFix:{
            "for":"htmlFor",
            "class":"className"
        }
    }), it.optSelected || (ot.propHooks.selected = {
        get:function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set:function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), ot.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ot.propFix[this.toLowerCase()] = this;
    });
    var hn = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass:function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, H(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(wt) || []; n = this[l++]; ) if (r = H(n), 
            i = 1 === n.nodeType && (" " + r + " ").replace(hn, " ")) {
                for (s = 0; o = t[s++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                a = ot.trim(i), r !== a && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass:function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, H(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(wt) || []; n = this[l++]; ) if (r = H(n), 
            i = 1 === n.nodeType && (" " + r + " ").replace(hn, " ")) {
                for (s = 0; o = t[s++]; ) for (;i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                a = ot.trim(i), r !== a && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass:function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) :this.removeClass(e) :ot.isFunction(e) ? this.each(function(n) {
                ot(this).toggleClass(e.call(this, n, H(this), t), t);
            }) :this.each(function() {
                var t, i, r, o;
                if ("string" === n) for (i = 0, r = ot(this), o = e.match(wt) || []; t = o[i++]; ) r.hasClass(t) ? r.removeClass(t) :r.addClass(t); else void 0 !== e && "boolean" !== n || (t = H(this), 
                t && Et.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" :Et.get(this, "__className__") || ""));
            });
        },
        hasClass:function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + H(n) + " ").replace(hn, " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var pn = /\r/g, gn = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
        val:function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = ot.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, ot(this).val()) :e, null == r ? r = "" :"number" == typeof r ? r += "" :ot.isArray(r) && (r = ot.map(r, function(e) {
                    return null == e ? "" :e + "";
                })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
            })) :r ? (t = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n :(n = r.value, 
            "string" == typeof n ? n.replace(pn, "") :null == n ? "" :n)) :void 0;
        }
    }), ot.extend({
        valHooks:{
            option:{
                get:function(e) {
                    var t = ot.find.attr(e, "value");
                    return null != t ? t :ot.trim(ot.text(e)).replace(gn, " ");
                }
            },
            select:{
                get:function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null :[], a = o ? r + 1 :i.length, l = 0 > r ? a :o ? r :0; a > l; l++) if (n = i[l], 
                    !(!n.selected && l !== r || (it.optDisabled ? n.disabled :null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ot(n).val(), o) return t;
                        s.push(t);
                    }
                    return s;
                },
                set:function(e, t) {
                    for (var n, i, r = e.options, o = ot.makeArray(t), s = r.length; s--; ) i = r[s], 
                    (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), ot.each([ "radio", "checkbox" ], function() {
        ot.valHooks[this] = {
            set:function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) > -1 :void 0;
            }
        }, it.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" :e.value;
        });
    });
    var mn = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger:function(t, n, i, r) {
            var o, s, a, l, u, d, c, f = [ i || X ], h = nt.call(t, "type") ? t.type :t, p = nt.call(t, "namespace") ? t.namespace.split(".") :[];
            if (s = a = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !mn.test(h + ot.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), 
            h = p.shift(), p.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[ot.expando] ? t :new ot.Event(h, "object" == typeof t && t), 
            t.isTrigger = r ? 2 :3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") :null, 
            t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] :ot.makeArray(n, [ t ]), 
            c = ot.event.special[h] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!r && !c.noBubble && !ot.isWindow(i)) {
                    for (l = c.delegateType || h, mn.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), 
                    a = s;
                    a === (i.ownerDocument || X) && f.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (s = f[o++]) && !t.isPropagationStopped(); ) t.type = o > 1 ? l :c.bindType || h, 
                d = (Et.get(s, "events") || {})[t.type] && Et.get(s, "handle"), d && d.apply(s, n), 
                d = u && s[u], d && d.apply && At(s) && (t.result = d.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = h, r || t.isDefaultPrevented() || c._default && c._default.apply(f.pop(), n) !== !1 || !At(i) || u && ot.isFunction(i[h]) && !ot.isWindow(i) && (a = i[u], 
                a && (i[u] = null), ot.event.triggered = h, i[h](), ot.event.triggered = void 0, 
                a && (i[u] = a)), t.result;
            }
        },
        simulate:function(e, t, n) {
            var i = ot.extend(new ot.Event(), n, {
                type:e,
                isSimulated:!0
            });
            ot.event.trigger(i, null, t);
        }
    }), ot.fn.extend({
        trigger:function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this);
            });
        },
        triggerHandler:function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) :void 0;
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) :this.trigger(t);
        };
    }), ot.fn.extend({
        hover:function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), it.focusin = "onfocusin" in e, it.focusin || ot.each({
        focus:"focusin",
        blur:"focusout"
    }, function(e, t) {
        var n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e));
        };
        ot.event.special[t] = {
            setup:function() {
                var i = this.ownerDocument || this, r = Et.access(i, t);
                r || i.addEventListener(e, n, !0), Et.access(i, t, (r || 0) + 1);
            },
            teardown:function() {
                var i = this.ownerDocument || this, r = Et.access(i, t) - 1;
                r ? Et.access(i, t, r) :(i.removeEventListener(e, n, !0), Et.remove(i, t));
            }
        };
    });
    var vn = e.location, yn = ot.now(), bn = /\?/;
    ot.parseJSON = function(e) {
        return JSON.parse(e + "");
    }, ot.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (i) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), 
        n;
    };
    var xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, An = /^(?:GET|HEAD)$/, En = /^\/\//, Sn = {}, kn = {}, $n = "*/".concat("*"), Nn = X.createElement("a");
    Nn.href = vn.href, ot.extend({
        active:0,
        lastModified:{},
        etag:{},
        ajaxSettings:{
            url:vn.href,
            type:"GET",
            isLocal:Cn.test(vn.protocol),
            global:!0,
            processData:!0,
            async:!0,
            contentType:"application/x-www-form-urlencoded; charset=UTF-8",
            accepts:{
                "*":$n,
                text:"text/plain",
                html:"text/html",
                xml:"application/xml, text/xml",
                json:"application/json, text/javascript"
            },
            contents:{
                xml:/\bxml\b/,
                html:/\bhtml/,
                json:/\bjson\b/
            },
            responseFields:{
                xml:"responseXML",
                text:"responseText",
                json:"responseJSON"
            },
            converters:{
                "* text":String,
                "text html":!0,
                "text json":ot.parseJSON,
                "text xml":ot.parseXML
            },
            flatOptions:{
                url:!0,
                context:!0
            }
        },
        ajaxSetup:function(e, t) {
            return t ? W(W(e, ot.ajaxSettings), t) :W(ot.ajaxSettings, e);
        },
        ajaxPrefilter:B(Sn),
        ajaxTransport:B(kn),
        ajax:function(t, n) {
            function i(t, n, i, a) {
                var u, c, y, b, w, C = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 :0, 
                u = t >= 200 && 300 > t || 304 === t, i && (b = _(f, T, i)), b = Z(f, b, T, u), 
                u ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), 
                w = T.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" :304 === t ? C = "notmodified" :(C = b.state, 
                c = b.data, y = b.error, u = !y)) :(y = C, !t && C || (C = "error", 0 > t && (t = 0))), 
                T.status = t, T.statusText = (n || C) + "", u ? g.resolveWith(h, [ c, C, T ]) :g.rejectWith(h, [ T, C, y ]), 
                T.statusCode(v), v = void 0, d && p.trigger(u ? "ajaxSuccess" :"ajaxError", [ T, f, u ? c :y ]), 
                m.fireWith(h, [ T, C ]), d && (p.trigger("ajaxComplete", [ T, f ]), --ot.active || ot.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, d, c, f = ot.ajaxSetup({}, n), h = f.context || f, p = f.context && (h.nodeType || h.jquery) ? ot(h) :ot.event, g = ot.Deferred(), m = ot.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
                readyState:0,
                getResponseHeader:function(e) {
                    var t;
                    if (2 === x) {
                        if (!a) for (a = {}; t = Tn.exec(s); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null :t;
                },
                getAllResponseHeaders:function() {
                    return 2 === x ? s :null;
                },
                setRequestHeader:function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, y[e] = t), this;
                },
                overrideMimeType:function(e) {
                    return x || (f.mimeType = e), this;
                },
                statusCode:function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) v[t] = [ v[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort:function(e) {
                    var t = e || w;
                    return r && r.abort(t), i(0, t), this;
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || vn.href) + "").replace(xn, "").replace(En, vn.protocol + "//"), 
            f.type = n.method || n.type || f.method || f.type, f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(wt) || [ "" ], 
            null == f.crossDomain) {
                u = X.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = Nn.protocol + "//" + Nn.host != u.protocol + "//" + u.host;
                } catch (C) {
                    f.crossDomain = !0;
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)), 
            U(Sn, f, n, T), 2 === x) return T;
            d = ot.event && f.global, d && 0 === ot.active++ && ot.event.trigger("ajaxStart"), 
            f.type = f.type.toUpperCase(), f.hasContent = !An.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (bn.test(o) ? "&" :"?") + f.data, 
            delete f.data), f.cache === !1 && (f.url = wn.test(o) ? o.replace(wn, "$1_=" + yn++) :o + (bn.test(o) ? "&" :"?") + "_=" + yn++)), 
            f.ifModified && (ot.lastModified[o] && T.setRequestHeader("If-Modified-Since", ot.lastModified[o]), 
            ot.etag[o] && T.setRequestHeader("If-None-Match", ot.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), 
            T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $n + "; q=0.01" :"") :f.accepts["*"]);
            for (c in f.headers) T.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(h, T, f) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (c in {
                success:1,
                error:1,
                complete:1
            }) T[c](f[c]);
            if (r = U(kn, f, n, T)) {
                if (T.readyState = 1, d && p.trigger("ajaxSend", [ T, f ]), 2 === x) return T;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout");
                }, f.timeout));
                try {
                    x = 1, r.send(y, i);
                } catch (C) {
                    if (!(2 > x)) throw C;
                    i(-1, C);
                }
            } else i(-1, "No Transport");
            return T;
        },
        getJSON:function(e, t, n) {
            return ot.get(e, t, n, "json");
        },
        getScript:function(e, t) {
            return ot.get(e, void 0, t, "script");
        }
    }), ot.each([ "get", "post" ], function(e, t) {
        ot[t] = function(e, n, i, r) {
            return ot.isFunction(n) && (r = r || i, i = n, n = void 0), ot.ajax(ot.extend({
                url:e,
                type:t,
                dataType:r,
                data:n,
                success:i
            }, ot.isPlainObject(e) && e));
        };
    }), ot._evalUrl = function(e) {
        return ot.ajax({
            url:e,
            type:"GET",
            dataType:"script",
            async:!1,
            global:!1,
            "throws":!0
        });
    }, ot.fn.extend({
        wrapAll:function(e) {
            var t;
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapAll(e.call(this, t));
            }) :(this[0] && (t = ot(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), 
            t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this);
        },
        wrapInner:function(e) {
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapInner(e.call(this, t));
            }) :this.each(function() {
                var t = ot(this), n = t.contents();
                n.length ? n.wrapAll(e) :t.append(e);
            });
        },
        wrap:function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) :e);
            });
        },
        unwrap:function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes);
            }).end();
        }
    }), ot.expr.filters.hidden = function(e) {
        return !ot.expr.filters.visible(e);
    }, ot.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
    };
    var Fn = /%20/g, Dn = /\[\]$/, Rn = /\r?\n/g, In = /^(?:submit|button|image|reset|file)$/i, Ln = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = ot.isFunction(t) ? t() :null == t ? "" :t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) z(n, e[n], t, r);
        return i.join("&").replace(Fn, "+");
    }, ot.fn.extend({
        serialize:function() {
            return ot.param(this.serializeArray());
        },
        serializeArray:function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) :this;
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && Ln.test(this.nodeName) && !In.test(e) && (this.checked || !It.test(e));
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null :ot.isArray(n) ? ot.map(n, function(e) {
                    return {
                        name:t.name,
                        value:e.replace(Rn, "\r\n")
                    };
                }) :{
                    name:t.name,
                    value:n.replace(Rn, "\r\n")
                };
            }).get();
        }
    }), ot.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    };
    var jn = {
        0:200,
        1223:204
    }, Pn = ot.ajaxSettings.xhr();
    it.cors = !!Pn && "withCredentials" in Pn, it.ajax = Pn = !!Pn, ot.ajaxTransport(function(t) {
        var n, i;
        return it.cors || Pn && !t.crossDomain ? {
            send:function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() :"error" === e ? "number" != typeof a.status ? o(0, "error") :o(a.status, a.statusText) :o(jn[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary:a.response
                        } :{
                            text:a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i :a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null);
                } catch (l) {
                    if (n) throw l;
                }
            },
            abort:function() {
                n && n();
            }
        } :void 0;
    }), ot.ajaxSetup({
        accepts:{
            script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents:{
            script:/\b(?:java|ecma)script\b/
        },
        converters:{
            "text script":function(e) {
                return ot.globalEval(e), e;
            }
        }
    }), ot.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), ot.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send:function(i, r) {
                    t = ot("<script>").prop({
                        charset:e.scriptCharset,
                        src:e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 :200, e.type);
                    }), X.head.appendChild(t[0]);
                },
                abort:function() {
                    n && n();
                }
            };
        }
    });
    var On = [], Mn = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp:"callback",
        jsonpCallback:function() {
            var e = On.pop() || ot.expando + "_" + yn++;
            return this[e] = !0, e;
        }
    }), ot.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = t.jsonp !== !1 && (Mn.test(t.url) ? "url" :"string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() :t.jsonpCallback, 
        a ? t[a] = t[a].replace(Mn, "$1" + r) :t.jsonp !== !1 && (t.url += (bn.test(t.url) ? "&" :"?") + t.jsonp + "=" + r), 
        t.converters["script json"] = function() {
            return s || ot.error(r + " was not called"), s[0];
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments;
        }, i.always(function() {
            void 0 === o ? ot(e).removeProp(r) :e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, 
            On.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0;
        }), "script") :void 0;
    }), ot.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || X;
        var i = pt.exec(e), r = !n && [];
        return i ? [ t.createElement(i[1]) ] :(i = f([ e ], t, r), r && r.length && ot(r).remove(), 
        ot.merge([], i.childNodes));
    };
    var qn = ot.fn.load;
    ot.fn.load = function(e, t, n) {
        if ("string" != typeof e && qn) return qn.apply(this, arguments);
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = ot.trim(e.slice(a)), e = e.slice(0, a)), ot.isFunction(t) ? (n = t, 
        t = void 0) :t && "object" == typeof t && (r = "POST"), s.length > 0 && ot.ajax({
            url:e,
            type:r || "GET",
            dataType:"html",
            data:t
        }).done(function(e) {
            o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) :e);
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, ot.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
            return e === t.elem;
        }).length;
    }, ot.offset = {
        setOffset:function(e, t, n) {
            var i, r, o, s, a, l, u, d = ot.css(e, "position"), c = ot(e), f = {};
            "static" === d && (e.style.position = "relative"), a = c.offset(), o = ot.css(e, "top"), 
            l = ot.css(e, "left"), u = ("absolute" === d || "fixed" === d) && (o + l).indexOf("auto") > -1, 
            u ? (i = c.position(), s = i.top, r = i.left) :(s = parseFloat(o) || 0, r = parseFloat(l) || 0), 
            ot.isFunction(t) && (t = t.call(e, n, ot.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), 
            null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) :c.css(f);
        }
    }, ot.fn.extend({
        offset:function(e) {
            if (arguments.length) return void 0 === e ? this :this.each(function(t) {
                ot.offset.setOffset(this, e, t);
            });
            var t, n, i = this[0], r = {
                top:0,
                left:0
            }, o = i && i.ownerDocument;
            return o ? (t = o.documentElement, ot.contains(t, i) ? (r = i.getBoundingClientRect(), 
            n = V(o), {
                top:r.top + n.pageYOffset - t.clientTop,
                left:r.left + n.pageXOffset - t.clientLeft
            }) :r) :void 0;
        },
        position:function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top:0,
                    left:0
                };
                return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() :(e = this.offsetParent(), 
                t = this.offset(), ot.nodeName(e[0], "html") || (i = e.offset()), i.top += ot.css(e[0], "borderTopWidth", !0), 
                i.left += ot.css(e[0], "borderLeftWidth", !0)), {
                    top:t.top - i.top - ot.css(n, "marginTop", !0),
                    left:t.left - i.left - ot.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent:function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ot.css(e, "position"); ) e = e.offsetParent;
                return e || Qt;
            });
        }
    }), ot.each({
        scrollLeft:"pageXOffset",
        scrollTop:"pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ot.fn[e] = function(i) {
            return Ct(this, function(e, i, r) {
                var o = V(e);
                return void 0 === r ? o ? o[t] :e[i] :void (o ? o.scrollTo(n ? o.pageXOffset :r, n ? r :o.pageYOffset) :e[i] = r);
            }, e, i, arguments.length);
        };
    }), ot.each([ "top", "left" ], function(e, t) {
        ot.cssHooks[t] = k(it.pixelPosition, function(e, n) {
            return n ? (n = S(e, t), Xt.test(n) ? ot(e).position()[t] + "px" :n) :void 0;
        });
    }), ot.each({
        Height:"height",
        Width:"width"
    }, function(e, t) {
        ot.each({
            padding:"inner" + e,
            content:t,
            "":"outer" + e
        }, function(n, i) {
            ot.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || r === !0 ? "margin" :"border");
                return Ct(this, function(t, n, i) {
                    var r;
                    return ot.isWindow(t) ? t.document.documentElement["client" + e] :9 === t.nodeType ? (r = t.documentElement, 
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) :void 0 === i ? ot.css(t, n, s) :ot.style(t, n, i, s);
                }, t, o ? i :void 0, o, null);
            };
        });
    }), ot.fn.extend({
        bind:function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind:function(e, t) {
            return this.off(e, null, t);
        },
        delegate:function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate:function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") :this.off(t, e || "**", n);
        },
        size:function() {
            return this.length;
        }
    }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot;
    });
    var Hn = e.jQuery, Bn = e.$;
    return ot.noConflict = function(t) {
        return e.$ === ot && (e.$ = Bn), t && e.jQuery === ot && (e.jQuery = Hn), ot;
    }, t || (e.jQuery = e.$ = ot), ot;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

+function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition:"webkitTransitionEnd",
            MozTransition:"transitionend",
            OTransition:"oTransitionEnd otransitionend",
            transition:"transitionend"
        };
        for (var n in t) if (void 0 !== e.style[n]) return {
            end:t[n]
        };
        return !1;
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1, i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0;
        });
        var r = function() {
            n || e(i).trigger(e.support.transition.end);
        };
        return setTimeout(r, t), this;
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType:e.support.transition.end,
            delegateType:e.support.transition.end,
            handle:function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) :void 0;
            }
        });
    });
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var n = e(this), r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n);
        });
    }
    var n = '[data-dismiss="alert"]', i = function(t) {
        e(t).on("click", n, this.close);
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove();
        }
        var r = e(this), o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e("#" === o ? [] :o);
        t && t.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), 
        t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) :n());
    };
    var r = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this;
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close);
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this), r = i.data("bs.button"), o = "object" == typeof t && t;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() :t && r.setState(t);
        });
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1;
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText:"loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled", i = this.$element, r = i.is("input") ? "val" :"html", o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(e.proxy(function() {
            i[r](null == o[t] ? this.options[t] :o[t]), "loadingText" == t ? (this.isLoading = !0, 
            i.addClass(n).attr(n, n).prop(n, !0)) :this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1));
        }, this), 0);
    }, n.prototype.toggle = function() {
        var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), 
            this.$element.addClass("active")) :"checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), 
            this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), 
            e && n.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this;
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), 
        i.is("input,button") ? i.trigger("focus") :i.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type));
    });
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this), r = i.data("bs.carousel"), o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t), s = "string" == typeof t ? t :o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) :s ? r[s]() :o.interval && r.pause().cycle();
        });
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = n, this.paused = null, this.sliding = null, this.interval = null, 
        this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this));
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval:5e3,
        pause:"hover",
        wrap:!0,
        keyboard:!0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
              case 37:
                this.prev();
                break;

              case 39:
                this.next();
                break;

              default:
                return;
            }
            e.preventDefault();
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), 
        this;
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active);
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t), i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var r = "prev" == e ? -1 :1, o = (n + r) % this.$items.length;
        return this.$items.eq(o);
    }, n.prototype.to = function(e) {
        var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 :this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e);
        }) :n == e ? this.pause().cycle() :this.slide(e > n ? "next" :"prev", this.$items.eq(e));
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, n.prototype.next = function() {
        return this.sliding ? void 0 :this.slide("next");
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 :this.slide("prev");
    }, n.prototype.slide = function(t, i) {
        var r = this.$element.find(".item.active"), o = i || this.getItemForDirection(t, r), s = this.interval, a = "next" == t ? "left" :"right", l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var u = o[0], d = e.Event("slide.bs.carousel", {
            relatedTarget:u,
            direction:a
        });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = e(this.$indicators.children()[this.getItemIndex(o)]);
                c && c.addClass("active");
            }
            var f = e.Event("slid.bs.carousel", {
                relatedTarget:u,
                direction:a
            });
            return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), 
            o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                o.removeClass([ t, a ].join(" ")).addClass("active"), r.removeClass([ "active", a ].join(" ")), 
                l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f);
                }, 0);
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) :(r.removeClass("active"), o.addClass("active"), 
            this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this;
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this;
    };
    var r = function(n) {
        var i, r = e(this), o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = e.extend({}, o.data(), r.data()), a = r.attr("data-slide-to");
            a && (s.interval = !1), t.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault();
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), 
    e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data());
        });
    });
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i);
    }
    function n(t) {
        return this.each(function() {
            var n = e(this), r = n.data("bs.collapse"), o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), 
            "string" == typeof t && r[t]();
        });
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), 
        this.transitioning = null, this.options.parent ? this.$parent = this.getParent() :this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
        this.options.toggle && this.toggle();
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle:!0
    }, i.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" :"height";
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (t = r.data("bs.collapse"), t && t.transitioning))) {
                var o = e.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, 
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!e.support.transition) return a.call(this);
                    var l = e.camelCase([ "scroll", s ].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l]);
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) :r.call(this);
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" :"show"]();
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var r = e(i);
            this.addAriaAndCollapsedClass(t(r), r);
        }, this)).end();
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n);
    };
    var r = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = r, this;
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = e(this);
        r.attr("data-target") || i.preventDefault();
        var o = t(r), s = o.data("bs.collapse"), a = s ? "toggle" :r.data();
        n.call(o, a);
    });
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i :t.parent();
    }
    function n(n) {
        n && 3 === n.which || (e(r).remove(), e(o).each(function() {
            var i = e(this), r = t(i), o = {
                relatedTarget:this
            };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)), 
            n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))));
        }));
    }
    function i(t) {
        return this.each(function() {
            var n = e(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n);
        });
    }
    var r = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', s = function(t) {
        e(t).on("click.bs.dropdown", this.toggle);
    };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = t(r), s = o.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var a = {
                    relatedTarget:this
                };
                if (o.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a));
            }
            return !1;
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = t(i), s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), 
                i.trigger("click");
                var a = " li:not(.disabled):visible a", l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), 
                    l.eq(u).trigger("focus");
                }
            }
        }
    };
    var a = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = a, this;
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown);
}(jQuery), +function(e) {
    "use strict";
    function t(t, i) {
        return this.each(function() {
            var r = e(this), o = r.data("bs.modal"), s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            o || r.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](i) :s.show && o.show(i);
        });
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, 
    n.DEFAULTS = {
        backdrop:!0,
        keyboard:!0,
        show:!0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() :this.show(e);
    }, n.prototype.show = function(t) {
        var i = this, r = e.Event("show.bs.modal", {
            relatedTarget:t
        });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var r = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), 
            i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = e.Event("shown.bs.modal", {
                relatedTarget:t
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o);
            }).emulateTransitionEnd(n.TRANSITION_DURATION) :i.$element.trigger("focus").trigger(o);
        }));
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), 
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) :this.hideModal());
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus");
        }, this));
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide();
        }, this)) :this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) :e(window).off("resize.bs.modal");
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal");
        });
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, n.prototype.backdrop = function(t) {
        var i = this, r = this.$element.hasClass("fade") ? "fade" :"";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && r;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) :void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() :this.hide()));
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) :t();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), t && t();
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) :s();
        } else t && t();
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft:!this.bodyIsOverflowing && e ? this.scrollbarWidth :"",
            paddingRight:this.bodyIsOverflowing && !e ? this.scrollbarWidth :""
        });
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft:"",
            paddingRight:""
        });
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar();
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth);
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t;
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this;
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this), r = i.attr("href"), o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), s = o.data("bs.modal") ? "toggle" :e.extend({
            remote:!/#/.test(r) && r
        }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus");
            });
        }), t.call(o, s, this);
    });
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this), r = i.data("bs.tooltip"), o = "object" == typeof t && t;
            !r && /destroy|hide/.test(t) || (r || i.data("bs.tooltip", r = new n(this, o)), 
            "string" == typeof t && r[t]());
        });
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t);
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation:!0,
        placement:"top",
        selector:!1,
        template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger:"hover focus",
        title:"",
        delay:0,
        html:!1,
        container:!1,
        viewport:{
            selector:"body",
            padding:0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), 
        this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) :this.options.viewport.selector || this.options.viewport), 
        this.inState = {
            click:!1,
            hover:!1,
            focus:!1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" :"focusin", l = "hover" == s ? "mouseleave" :"focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), 
                this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger:"manual",
            selector:""
        }) :this.fixTitle();
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS;
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show:t.delay,
            hide:t.delay
        }), t;
    }, n.prototype.getDelegateOptions = function() {
        var t = {}, n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i);
        }), t;
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t :e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), 
        e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" :"hover"] = !0), 
        n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") :(clearTimeout(n.timeout), 
        n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show();
        }, n.options.delay.show)) :n.show());
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t :e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), 
        e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" :"hover"] = !1), 
        n.isInStateTrue() ? void 0 :(clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide();
        }, n.options.delay.hide)) :n.hide());
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var r = this, o = this.tip(), s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) :this.options.placement, l = /\s?auto?\s?/i, u = l.test(a);
            u && (a = a.replace(l, "") || "top"), o.detach().css({
                top:0,
                left:0,
                display:"block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) :o.insertAfter(this.$element), 
            this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(), c = o[0].offsetWidth, f = o[0].offsetHeight;
            if (u) {
                var h = a, p = this.getPosition(this.$viewport);
                a = "bottom" == a && d.bottom + f > p.bottom ? "top" :"top" == a && d.top - f < p.top ? "bottom" :"right" == a && d.right + c > p.width ? "left" :"left" == a && d.left - c < p.left ? "right" :a, 
                o.removeClass(h).addClass(a);
            }
            var g = this.getCalculatedOffset(a, d, c, f);
            this.applyPlacement(g, a);
            var m = function() {
                var e = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r);
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) :m();
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(), r = i[0].offsetWidth, o = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, e.offset.setOffset(i[0], e.extend({
            using:function(e) {
                i.css({
                    top:Math.round(e.top),
                    left:Math.round(e.left)
                });
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth, u = i[0].offsetHeight;
        "top" == n && u != o && (t.top = t.top + o - u);
        var d = this.getViewportAdjustedDelta(n, t, l, u);
        d.left ? t.left += d.left :t.top += d.top;
        var c = /top|bottom/.test(n), f = c ? 2 * d.left - r + l :2 * d.top - o + u, h = c ? "offsetWidth" :"offsetHeight";
        i.offset(t), this.replaceArrow(f, i[0][h], c);
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" :"top", 50 * (1 - e / t) + "%").css(n ? "top" :"left", "");
    }, n.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" :"text"](t), e.removeClass("fade in top bottom left right");
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), 
            t && t();
        }
        var r = this, o = e(this.$tip), s = e.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 :(o.removeClass("in"), 
        e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) :i(), 
        this.hoverState = null, this);
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "");
    }, n.prototype.hasContent = function() {
        return this.getTitle();
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0], i = "BODY" == n.tagName, r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, {
            width:r.right - r.left,
            height:r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement, s = i ? {
            top:0,
            left:0
        } :o ? null :t.offset(), a = {
            scroll:i ? document.documentElement.scrollTop || document.body.scrollTop :t.scrollTop()
        }, l = i ? {
            width:e(window).width(),
            height:e(window).height()
        } :null;
        return e.extend({}, r, a, l, s);
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top:t.top + t.height,
            left:t.left + t.width / 2 - n / 2
        } :"top" == e ? {
            top:t.top - i,
            left:t.left + t.width / 2 - n / 2
        } :"left" == e ? {
            top:t.top + t.height / 2 - i / 2,
            left:t.left - n
        } :{
            top:t.top + t.height / 2 - i / 2,
            left:t.left + t.width
        };
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top:0,
            left:0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - o - s.scroll, l = t.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a :l > s.top + s.height && (r.top = s.top + s.height - l);
        } else {
            var u = t.left - o, d = t.left + o + n;
            u < s.left ? r.left = s.left - u :d > s.right && (r.left = s.left + s.width - d);
        }
        return r;
    }, n.prototype.getTitle = function() {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) :n.title);
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e;
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, n.prototype.enable = function() {
        this.enabled = !0;
    }, n.prototype.disable = function() {
        this.enabled = !1;
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), 
        e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, 
        n.isInStateTrue() ? n.enter(n) :n.leave(n)) :n.tip().hasClass("in") ? n.leave(n) :n.enter(n);
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), 
            e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null;
        });
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this;
    };
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this), r = i.data("bs.popover"), o = "object" == typeof t && t;
            !r && /destroy|hide/.test(t) || (r || i.data("bs.popover", r = new n(this, o)), 
            "string" == typeof t && r[t]());
        });
    }
    var n = function(e, t) {
        this.init("popover", e, t);
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement:"right",
        trigger:"click",
        content:"",
        template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, 
    n.prototype.getDefaults = function() {
        return n.DEFAULTS;
    }, n.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" :"text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" :"append" :"text"](n), 
        e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide();
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, n.prototype.getContent = function() {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) :t.content);
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this;
    };
}(jQuery), +function(e) {
    "use strict";
    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window :n), 
        this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function n(n) {
        return this.each(function() {
            var i = e(this), r = i.data("bs.scrollspy"), o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]();
        });
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset:10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, t.prototype.refresh = function() {
        var t = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
        e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var t = e(this), r = t.data("target") || t.attr("href"), o = /^#./.test(r) && e(r);
            return o && o.length && o.is(":visible") && [ [ o[n]().top + i, r ] ] || null;
        }).sort(function(e, t) {
            return e[0] - t[0];
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1]);
        });
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return s != (e = o[o.length - 1]) && this.activate(e);
        if (s && t < r[0]) return this.activeTarget = null, this.clear();
        for (e = r.length; e--; ) s != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e]);
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), 
        i.trigger("activate.bs.scrollspy");
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this;
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data());
        });
    });
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this), r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]();
        });
    }
    var n = function(t) {
        this.element = e(t);
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"), o = e.Event("hide.bs.tab", {
                relatedTarget:t[0]
            }), s = e.Event("show.bs.tab", {
                relatedTarget:r[0]
            });
            if (r.trigger(o), t.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() {
                    r.trigger({
                        type:"hidden.bs.tab",
                        relatedTarget:t[0]
                    }), t.trigger({
                        type:"shown.bs.tab",
                        relatedTarget:r[0]
                    });
                });
            }
        }
    }, n.prototype.activate = function(t, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, 
            t.addClass("in")) :t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            r && r();
        }
        var s = i.find("> .active"), a = r && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) :o(), 
        s.removeClass("in");
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this;
    };
    var r = function(n) {
        n.preventDefault(), t.call(e(this), "show");
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r);
}(jQuery), +function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this), r = i.data("bs.affix"), o = "object" == typeof t && t;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]();
        });
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, 
        this.checkPosition();
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset:0,
        target:window
    }, n.prototype.getState = function(e, t, n, i) {
        var r = this.$target.scrollTop(), o = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > r ? "top" :!1;
        if ("bottom" == this.affixed) return null != n ? r + this.unpin <= o.top ? !1 :"bottom" :e - i >= r + s ? !1 :"bottom";
        var a = null == this.affixed, l = a ? r :o.top, u = a ? s :t;
        return null != n && n >= r ? "top" :null != i && l + u >= e - i ? "bottom" :!1;
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(), t = this.$element.offset();
        return this.pinnedOffset = t.top - e;
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1);
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(), i = this.options.offset, r = i.top, o = i.bottom, s = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), 
            "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, t, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a :""), u = e.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() :null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == a && this.$element.offset({
                top:s - t - o
            });
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this;
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), 
            null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i);
        });
    });
}(jQuery), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], function(t) {
        return e(t);
    }) :"object" == typeof module && "object" == typeof module.exports ? module.exports = e(require("jquery")) :e(window.jQuery);
}(function(e) {
    "use strict";
    function t(e) {
        void 0 === e && (e = window.navigator.userAgent), e = e.toLowerCase();
        var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [], n = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [], i = {}, r = {
            browser:t[5] || t[3] || t[1] || "",
            version:t[2] || t[4] || "0",
            versionNumber:t[4] || t[2] || "0",
            platform:n[0] || ""
        };
        if (r.browser && (i[r.browser] = !0, i.version = r.version, i.versionNumber = parseInt(r.versionNumber, 10)), 
        r.platform && (i[r.platform] = !0), (i.android || i.bb || i.blackberry || i.ipad || i.iphone || i.ipod || i.kindle || i.playbook || i.silk || i["windows phone"]) && (i.mobile = !0), 
        (i.cros || i.mac || i.linux || i.win) && (i.desktop = !0), (i.chrome || i.opr || i.safari) && (i.webkit = !0), 
        i.rv || i.iemobile) {
            var o = "msie";
            r.browser = o, i[o] = !0;
        }
        if (i.edge) {
            delete i.edge;
            var s = "msedge";
            r.browser = s, i[s] = !0;
        }
        if (i.safari && i.blackberry) {
            var a = "blackberry";
            r.browser = a, i[a] = !0;
        }
        if (i.safari && i.playbook) {
            var l = "playbook";
            r.browser = l, i[l] = !0;
        }
        if (i.bb) {
            var u = "blackberry";
            r.browser = u, i[u] = !0;
        }
        if (i.opr) {
            var d = "opera";
            r.browser = d, i[d] = !0;
        }
        if (i.safari && i.android) {
            var c = "android";
            r.browser = c, i[c] = !0;
        }
        if (i.safari && i.kindle) {
            var f = "kindle";
            r.browser = f, i[f] = !0;
        }
        if (i.safari && i.silk) {
            var h = "silk";
            r.browser = h, i[h] = !0;
        }
        return i.name = r.browser, i.platform = r.platform, i;
    }
    return window.jQBrowser = t(window.navigator.userAgent), window.jQBrowser.uaMatch = t, 
    e && (e.browser = window.jQBrowser), window.jQBrowser;
}), function(e, t) {
    "function" == typeof define && define.amd ? define([], t) :"object" == typeof exports ? module.exports = t() :e.materialColors = t();
}(this, function() {
    return {
        red:{
            50:"#ffebee",
            100:"#ffcdd2",
            200:"#ef9a9a",
            300:"#e57373",
            400:"#ef5350",
            500:"#f44336",
            600:"#e53935",
            700:"#d32f2f",
            800:"#c62828",
            900:"#b71c1c",
            a100:"#ff8a80",
            a200:"#ff5252",
            a400:"#ff1744",
            a700:"#d50000"
        },
        pink:{
            50:"#fce4ec",
            100:"#f8bbd0",
            200:"#f48fb1",
            300:"#f06292",
            400:"#ec407a",
            500:"#e91e63",
            600:"#d81b60",
            700:"#c2185b",
            800:"#ad1457",
            900:"#880e4f",
            a100:"#ff80ab",
            a200:"#ff4081",
            a400:"#f50057",
            a700:"#c51162"
        },
        purple:{
            50:"#f3e5f5",
            100:"#e1bee7",
            200:"#ce93d8",
            300:"#ba68c8",
            400:"#ab47bc",
            500:"#9c27b0",
            600:"#8e24aa",
            700:"#7b1fa2",
            800:"#6a1b9a",
            900:"#4a148c",
            a100:"#ea80fc",
            a200:"#e040fb",
            a400:"#d500f9",
            a700:"#aa00ff"
        },
        deepPurple:{
            50:"#ede7f6",
            100:"#d1c4e9",
            200:"#b39ddb",
            300:"#9575cd",
            400:"#7e57c2",
            500:"#673ab7",
            600:"#5e35b1",
            700:"#512da8",
            800:"#4527a0",
            900:"#311b92",
            a100:"#b388ff",
            a200:"#7c4dff",
            a400:"#651fff",
            a700:"#6200ea"
        },
        indigo:{
            50:"#e8eaf6",
            100:"#c5cae9",
            200:"#9fa8da",
            300:"#7986cb",
            400:"#5c6bc0",
            500:"#3f51b5",
            600:"#3949ab",
            700:"#303f9f",
            800:"#283593",
            900:"#1a237e",
            a100:"#8c9eff",
            a200:"#536dfe",
            a400:"#3d5afe",
            a700:"#304ffe"
        },
        blue:{
            50:"#e3f2fd",
            100:"#bbdefb",
            200:"#90caf9",
            300:"#64b5f6",
            400:"#42a5f5",
            500:"#2196f3",
            600:"#1e88e5",
            700:"#1976d2",
            800:"#1565c0",
            900:"#0d47a1",
            a100:"#82b1ff",
            a200:"#448aff",
            a400:"#2979ff",
            a700:"#2962ff"
        },
        lightBlue:{
            50:"#e1f5fe",
            100:"#b3e5fc",
            200:"#81d4fa",
            300:"#4fc3f7",
            400:"#29b6f6",
            500:"#03a9f4",
            600:"#039be5",
            700:"#0288d1",
            800:"#0277bd",
            900:"#01579b",
            a100:"#80d8ff",
            a200:"#40c4ff",
            a400:"#00b0ff",
            a700:"#0091ea"
        },
        cyan:{
            50:"#e0f7fa",
            100:"#b2ebf2",
            200:"#80deea",
            300:"#4dd0e1",
            400:"#26c6da",
            500:"#00bcd4",
            600:"#00acc1",
            700:"#0097a7",
            800:"#00838f",
            900:"#006064",
            a100:"#84ffff",
            a200:"#18ffff",
            a400:"#00e5ff",
            a700:"#00b8d4"
        },
        teal:{
            50:"#e0f2f1",
            100:"#b2dfdb",
            200:"#80cbc4",
            300:"#4db6ac",
            400:"#26a69a",
            500:"#009688",
            600:"#00897b",
            700:"#00796b",
            800:"#00695c",
            900:"#004d40",
            a100:"#a7ffeb",
            a200:"#64ffda",
            a400:"#1de9b6",
            a700:"#00bfa5"
        },
        green:{
            50:"#e8f5e9",
            100:"#c8e6c9",
            200:"#a5d6a7",
            300:"#81c784",
            400:"#66bb6a",
            500:"#4caf50",
            600:"#43a047",
            700:"#388e3c",
            800:"#2e7d32",
            900:"#1b5e20",
            a100:"#b9f6ca",
            a200:"#69f0ae",
            a400:"#00e676",
            a700:"#00c853"
        },
        lightGreen:{
            50:"#f1f8e9",
            100:"#dcedc8",
            200:"#c5e1a5",
            300:"#aed581",
            400:"#9ccc65",
            500:"#8bc34a",
            600:"#7cb342",
            700:"#689f38",
            800:"#558b2f",
            900:"#33691e",
            a100:"#ccff90",
            a200:"#b2ff59",
            a400:"#76ff03",
            a700:"#64dd17"
        },
        lime:{
            50:"#f9fbe7",
            100:"#f0f4c3",
            200:"#e6ee9c",
            300:"#dce775",
            400:"#d4e157",
            500:"#cddc39",
            600:"#c0ca33",
            700:"#afb42b",
            800:"#9e9d24",
            900:"#827717",
            a100:"#f4ff81",
            a200:"#eeff41",
            a400:"#c6ff00",
            a700:"#aeea00"
        },
        yellow:{
            50:"#fffde7",
            100:"#fff9c4",
            200:"#fff59d",
            300:"#fff176",
            400:"#ffee58",
            500:"#ffeb3b",
            600:"#fdd835",
            700:"#fbc02d",
            800:"#f9a825",
            900:"#f57f17",
            a100:"#ffff8d",
            a200:"#ffff00",
            a400:"#ffea00",
            a700:"#ffd600"
        },
        amber:{
            50:"#fff8e1",
            100:"#ffecb3",
            200:"#ffe082",
            300:"#ffd54f",
            400:"#ffca28",
            500:"#ffc107",
            600:"#ffb300",
            700:"#ffa000",
            800:"#ff8f00",
            900:"#ff6f00",
            a100:"#ffe57f",
            a200:"#ffd740",
            a400:"#ffc400",
            a700:"#ffab00"
        },
        orange:{
            50:"#fff3e0",
            100:"#ffe0b2",
            200:"#ffcc80",
            300:"#ffb74d",
            400:"#ffa726",
            500:"#ff9800",
            600:"#fb8c00",
            700:"#f57c00",
            800:"#ef6c00",
            900:"#e65100",
            a100:"#ffd180",
            a200:"#ffab40",
            a400:"#ff9100",
            a700:"#ff6d00"
        },
        deepOrange:{
            50:"#fbe9e7",
            100:"#ffccbc",
            200:"#ffab91",
            300:"#ff8a65",
            400:"#ff7043",
            500:"#ff5722",
            600:"#f4511e",
            700:"#e64a19",
            800:"#d84315",
            900:"#bf360c",
            a100:"#ff9e80",
            a200:"#ff6e40",
            a400:"#ff3d00",
            a700:"#dd2c00"
        },
        brown:{
            50:"#efebe9",
            100:"#d7ccc8",
            200:"#bcaaa4",
            300:"#a1887f",
            400:"#8d6e63",
            500:"#795548",
            600:"#6d4c41",
            700:"#5d4037",
            800:"#4e342e",
            900:"#3e2723"
        },
        grey:{
            50:"#fafafa",
            100:"#f5f5f5",
            200:"#eeeeee",
            300:"#e0e0e0",
            400:"#bdbdbd",
            500:"#9e9e9e",
            600:"#757575",
            700:"#616161",
            800:"#424242",
            900:"#212121"
        },
        blueGrey:{
            50:"#eceff1",
            100:"#cfd8dc",
            200:"#b0bec5",
            300:"#90a4ae",
            400:"#78909c",
            500:"#607d8b",
            600:"#546e7a",
            700:"#455a64",
            800:"#37474f",
            900:"#263238"
        },
        darkText:{
            primary:"rgba(0, 0, 0, 0.87)",
            secondary:"rgba(0, 0, 0, 0.54)",
            disabled:"rgba(0, 0, 0, 0.38)",
            dividers:"rgba(0, 0, 0, 0.12)"
        },
        lightText:{
            primary:"rgba(255, 255, 255, 1)",
            secondary:"rgba(255, 255, 255, 0.7)",
            disabled:"rgba(255, 255, 255, 0.5)",
            dividers:"rgba(255, 255, 255, 0.12)"
        },
        darkIcons:{
            active:"rgba(0, 0, 0, 0.54)",
            inactive:"rgba(0, 0, 0, 0.38)"
        },
        lightIcons:{
            active:"rgba(255, 255, 255, 1)",
            inactive:"rgba(255, 255, 255, 0.5)"
        },
        white:"#ffffff",
        black:"#000000"
    };
}), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], e) :"object" == typeof module && module.exports ? module.exports = e(require("jquery")) :e(jQuery);
}(function(e) {
    e.extend(e.fn, {
        validate:function(t) {
            if (!this.length) return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var n = e.data(this[0], "validator");
            return n ? n :(this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), 
            e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                n.settings.submitHandler && (n.submitButton = t.target), e(this).hasClass("cancel") && (n.cancelSubmit = !0), 
                void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
            }), this.on("submit.validate", function(t) {
                function i() {
                    var i, r;
                    return n.settings.submitHandler ? (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), 
                    r = n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), 
                    void 0 !== r ? r :!1) :!0;
                }
                return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, 
                i()) :n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) :i() :(n.focusInvalid(), 
                !1);
            })), n);
        },
        valid:function() {
            var t, n, i;
            return e(this[0]).is("form") ? t = this.validate().form() :(i = [], t = !0, n = e(this[0].form).validate(), 
            this.each(function() {
                t = n.element(this) && t, t || (i = i.concat(n.errorList));
            }), n.errorList = i), t;
        },
        rules:function(t, n) {
            var i, r, o, s, a, l, u = this[0];
            if (null != u && null != u.form) {
                if (t) switch (i = e.data(u.form, "validator").settings, r = i.rules, o = e.validator.staticRules(u), 
                t) {
                  case "add":
                    e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[u.name] = o, n.messages && (i.messages[u.name] = e.extend(i.messages[u.name], n.messages));
                    break;

                  case "remove":
                    return n ? (l = {}, e.each(n.split(/\s/), function(t, n) {
                        l[n] = o[n], delete o[n], "required" === n && e(u).removeAttr("aria-required");
                    }), l) :(delete r[u.name], o);
                }
                return s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u), 
                s.required && (a = s.required, delete s.required, s = e.extend({
                    required:a
                }, s), e(u).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, 
                s = e.extend(s, {
                    remote:a
                })), s;
            }
        }
    }), e.extend(e.expr[":"], {
        blank:function(t) {
            return !e.trim("" + e(t).val());
        },
        filled:function(t) {
            var n = e(t).val();
            return null !== n && !!e.trim("" + n);
        },
        unchecked:function(t) {
            return !e(t).prop("checked");
        }
    }), e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, 
        this.init();
    }, e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n);
        } :void 0 === n ? t :(arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), 
        n.constructor !== Array && (n = [ n ]), e.each(n, function(e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return n;
            });
        }), t);
    }, e.extend(e.validator, {
        defaults:{
            messages:{},
            groups:{},
            rules:{},
            errorClass:"error",
            pendingClass:"pending",
            validClass:"valid",
            errorElement:"label",
            focusCleanup:!1,
            focusInvalid:!0,
            errorContainer:e([]),
            errorLabelContainer:e([]),
            onsubmit:!0,
            ignore:":hidden",
            ignoreTitle:!1,
            onfocusin:function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), 
                this.hideThese(this.errorsFor(e)));
            },
            onfocusout:function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
            },
            onkeyup:function(t, n) {
                var i = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
            },
            onclick:function(e) {
                e.name in this.submitted ? this.element(e) :e.parentNode.name in this.submitted && this.element(e.parentNode);
            },
            highlight:function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) :e(t).addClass(n).removeClass(i);
            },
            unhighlight:function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) :e(t).removeClass(n).addClass(i);
            }
        },
        setDefaults:function(t) {
            e.extend(e.validator.defaults, t);
        },
        messages:{
            required:"This field is required.",
            remote:"Please fix this field.",
            email:"Please enter a valid email address.",
            url:"Please enter a valid URL.",
            date:"Please enter a valid date.",
            dateISO:"Please enter a valid date (ISO).",
            number:"Please enter a valid number.",
            digits:"Please enter only digits.",
            equalTo:"Please enter the same value again.",
            maxlength:e.validator.format("Please enter no more than {0} characters."),
            minlength:e.validator.format("Please enter at least {0} characters."),
            rangelength:e.validator.format("Please enter a value between {0} and {1} characters long."),
            range:e.validator.format("Please enter a value between {0} and {1}."),
            max:e.validator.format("Please enter a value less than or equal to {0}."),
            min:e.validator.format("Please enter a value greater than or equal to {0}."),
            step:e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges:!1,
        prototype:{
            init:function() {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]);
                    var n = e.data(this.form, "validator"), i = "on" + t.type.replace(/^validate/, ""), r = n.settings;
                    r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t);
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), 
                this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), 
                this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, 
                this.invalid = {}, this.reset();
                var n, i = this.groups = {};
                e.each(this.settings.groups, function(t, n) {
                    "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) {
                        i[n] = t;
                    });
                }), n = this.settings.rules, e.each(n, function(t, i) {
                    n[t] = e.validator.normalizeRule(i);
                }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), 
                this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), 
                e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },
            form:function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), 
                this.valid() || e(this.currentForm).triggerHandler("invalid-form", [ this ]), this.showErrors(), 
                this.valid();
            },
            checkForm:function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid();
            },
            element:function(t) {
                var n, i, r = this.clean(t), o = this.validationTargetFor(r), s = this, a = !0;
                return void 0 === o ? delete this.invalid[r.name] :(this.prepareElement(o), this.currentElements = e(o), 
                i = this.groups[o.name], i && e.each(this.groups, function(e, t) {
                    t === i && e !== o.name && (r = s.validationTargetFor(s.clean(s.findByName(e))), 
                    r && r.name in s.invalid && (s.currentElements.push(r), a = s.check(r) && a));
                }), n = this.check(o) !== !1, a = a && n, this.invalid[o.name] = n ? !1 :!0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), 
                this.showErrors(), e(t).attr("aria-invalid", !n)), a;
            },
            showErrors:function(t) {
                if (t) {
                    var n = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function(e, t) {
                        return {
                            message:e,
                            element:n.findByName(t)[0]
                        };
                    }), this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t);
                    });
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) :this.defaultShowErrors();
            },
            resetForm:function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, 
                this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t);
            },
            resetElements:function(e) {
                var t;
                if (this.settings.unhighlight) for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), 
                this.findByName(e[t].name).removeClass(this.settings.validClass); else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
            },
            numberOfInvalids:function() {
                return this.objectLength(this.invalid);
            },
            objectLength:function(e) {
                var t, n = 0;
                for (t in e) e[t] && n++;
                return n;
            },
            hideErrors:function() {
                this.hideThese(this.toHide);
            },
            hideThese:function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide();
            },
            valid:function() {
                return 0 === this.size();
            },
            size:function() {
                return this.errorList.length;
            },
            focusInvalid:function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                } catch (t) {}
            },
            findLastActive:function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name;
                }).length && t;
            },
            elements:function() {
                var t = this, n = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var i = this.name || e(this).attr("name");
                    return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), 
                    this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]), 
                    i in n || !t.objectLength(e(this).rules()) ? !1 :(n[i] = !0, !0);
                });
            },
            clean:function(t) {
                return e(t)[0];
            },
            errors:function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext);
            },
            resetInternals:function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), 
                this.toHide = e([]);
            },
            reset:function() {
                this.resetInternals(), this.currentElements = e([]);
            },
            prepareForm:function() {
                this.reset(), this.toHide = this.errors().add(this.containers);
            },
            prepareElement:function(e) {
                this.reset(), this.toHide = this.errorsFor(e);
            },
            elementValue:function(t) {
                var n, i, r = e(t), o = t.type;
                return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() :"number" === o && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" :r.val() :(n = t.hasAttribute("contenteditable") ? r.text() :r.val(), 
                "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) :(i = n.lastIndexOf("/"), 
                i >= 0 ? n.substr(i + 1) :(i = n.lastIndexOf("\\"), i >= 0 ? n.substr(i + 1) :n)) :"string" == typeof n ? n.replace(/\r/g, "") :n);
            },
            check:function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, i, r, o = e(t).rules(), s = e.map(o, function(e, t) {
                    return t;
                }).length, a = !1, l = this.elementValue(t);
                if ("function" == typeof o.normalizer) {
                    if (l = o.normalizer.call(t, l), "string" != typeof l) throw new TypeError("The normalizer should return a string value.");
                    delete o.normalizer;
                }
                for (i in o) {
                    r = {
                        method:i,
                        parameters:o[i]
                    };
                    try {
                        if (n = e.validator.methods[i].call(this, l, t, r.parameters), "dependency-mismatch" === n && 1 === s) {
                            a = !0;
                            continue;
                        }
                        if (a = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n) return this.formatAndAdd(t, r), !1;
                    } catch (u) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", u), 
                        u instanceof TypeError && (u.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), 
                        u;
                    }
                }
                return a ? void 0 :(this.objectLength(o) && this.successList.push(t), !0);
            },
            customDataMessage:function(t, n) {
                return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
            },
            customMessage:function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n :n[t]);
            },
            findDefined:function() {
                for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e];
            },
            defaultMessage:function(t, n) {
                "string" == typeof n && (n = {
                    method:n
                });
                var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"), r = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, t) :r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), 
                i;
            },
            formatAndAdd:function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message:n,
                    element:e,
                    method:t.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
            },
            addWrapper:function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
            },
            defaultShowErrors:function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), 
                this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
            },
            validElements:function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements:function() {
                return e(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel:function(t, n) {
                var i, r, o, s, a = this.errorsFor(t), l = this.idOrName(t), u = e(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), 
                a.html(n)) :(a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), 
                i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), 
                this.labelContainer.length ? this.labelContainer.append(i) :this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) :i.insertAfter(t), 
                a.is("label") ? a.attr("for", l) :0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = a.attr("id"), 
                u ? u.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (u += " " + o) :u = o, 
                e(t).attr("aria-describedby", u), r = this.groups[t.name], r && (s = this, e.each(s.groups, function(t, n) {
                    n === r && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"));
                })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) :this.settings.success(a, t)), 
                this.toShow = this.toShow.add(a);
            },
            errorsFor:function(t) {
                var n = this.escapeCssMeta(this.idOrName(t)), i = e(t).attr("aria-describedby"), r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r);
            },
            escapeCssMeta:function(e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName:function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name :e.id || e.name);
            },
            validationTargetFor:function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
            },
            checkable:function(e) {
                return /radio|checkbox/i.test(e.type);
            },
            findByName:function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
            },
            getLength:function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                  case "select":
                    return e("option:selected", n).length;

                  case "input":
                    if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;
                }
                return t.length;
            },
            depend:function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) :!0;
            },
            dependTypes:{
                "boolean":function(e) {
                    return e;
                },
                string:function(t, n) {
                    return !!e(t, n.form).length;
                },
                "function":function(e, t) {
                    return e(t);
                }
            },
            optional:function(t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
            },
            startRequest:function(t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), 
                this.pending[t.name] = !0);
            },
            stopRequest:function(t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], 
                e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), 
                this.formSubmitted = !1) :!n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [ this ]), 
                this.formSubmitted = !1);
            },
            previousValue:function(t, n) {
                return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old:null,
                    valid:!0,
                    message:this.defaultMessage(t, {
                        method:n
                    })
                });
            },
            destroy:function() {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
            }
        },
        classRuleSettings:{
            required:{
                required:!0
            },
            email:{
                email:!0
            },
            url:{
                url:!0
            },
            date:{
                date:!0
            },
            dateISO:{
                dateISO:!0
            },
            number:{
                number:!0
            },
            digits:{
                digits:!0
            },
            creditcard:{
                creditcard:!0
            }
        },
        addClassRules:function(t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n :e.extend(this.classRuleSettings, t);
        },
        classRules:function(t) {
            var n = {}, i = e(t).attr("class");
            return i && e.each(i.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
            }), n;
        },
        normalizeAttributeRule:function(e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), 
            isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i :t === n && "range" !== t && (e[n] = !0);
        },
        attributeRules:function(t) {
            var n, i, r = {}, o = e(t), s = t.getAttribute("type");
            for (n in e.validator.methods) "required" === n ? (i = t.getAttribute(n), "" === i && (i = !0), 
            i = !!i) :i = o.attr(n), this.normalizeAttributeRule(r, s, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, 
            r;
        },
        dataRules:function(t) {
            var n, i, r = {}, o = e(t), s = t.getAttribute("type");
            for (n in e.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), 
            this.normalizeAttributeRule(r, s, n, i);
            return r;
        },
        staticRules:function(t) {
            var n = {}, i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), 
            n;
        },
        normalizeRules:function(t, n) {
            return e.each(t, function(i, r) {
                if (r === !1) return void delete t[i];
                if (r.param || r.depends) {
                    var o = !0;
                    switch (typeof r.depends) {
                      case "string":
                        o = !!e(r.depends, n.form).length;
                        break;

                      case "function":
                        o = r.depends.call(n, n);
                    }
                    o ? t[i] = void 0 !== r.param ? r.param :!0 :(e.data(n.form, "validator").resetElements(e(n)), 
                    delete t[i]);
                }
            }), e.each(t, function(i, r) {
                t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) :r;
            }), e.each([ "minlength", "maxlength" ], function() {
                t[this] && (t[this] = Number(t[this]));
            }), e.each([ "rangelength", "range" ], function() {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [ Number(t[this][0]), Number(t[this][1]) ] :"string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), 
                t[this] = [ Number(n[0]), Number(n[1]) ]));
            }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [ t.min, t.max ], 
            delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [ t.minlength, t.maxlength ], 
            delete t.minlength, delete t.maxlength)), t;
        },
        normalizeRule:function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() {
                    n[this] = !0;
                }), t = n;
            }
            return t;
        },
        addMethod:function(t, n, i) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i :e.validator.messages[t], 
            n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
        },
        methods:{
            required:function(t, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = e(n).val();
                    return r && r.length > 0;
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 :t.length > 0;
            },
            email:function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
            },
            url:function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e);
            },
            date:function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
            },
            dateISO:function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
            },
            number:function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
            },
            digits:function(e, t) {
                return this.optional(t) || /^\d+$/.test(e);
            },
            minlength:function(t, n, i) {
                var r = e.isArray(t) ? t.length :this.getLength(t, n);
                return this.optional(n) || r >= i;
            },
            maxlength:function(t, n, i) {
                var r = e.isArray(t) ? t.length :this.getLength(t, n);
                return this.optional(n) || i >= r;
            },
            rangelength:function(t, n, i) {
                var r = e.isArray(t) ? t.length :this.getLength(t, n);
                return this.optional(n) || r >= i[0] && r <= i[1];
            },
            min:function(e, t, n) {
                return this.optional(t) || e >= n;
            },
            max:function(e, t, n) {
                return this.optional(t) || n >= e;
            },
            range:function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1];
            },
            step:function(t, n, i) {
                var r, o = e(n).attr("type"), s = "Step attribute on input type " + o + " is not supported.", a = [ "text", "number", "range" ], l = new RegExp("\\b" + o + "\\b"), u = o && !l.test(a.join()), d = function(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?$/);
                    return t && t[1] ? t[1].length :0;
                }, c = function(e) {
                    return Math.round(e * Math.pow(10, r));
                }, f = !0;
                if (u) throw new Error(s);
                return r = d(i), (d(t) > r || 0 !== c(t) % c(i)) && (f = !1), this.optional(n) || f;
            },
            equalTo:function(t, n, i) {
                var r = e(i);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    e(n).valid();
                }), t === r.val();
            },
            remote:function(t, n, i, r) {
                if (this.optional(n)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var o, s, a, l = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), 
                l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, 
                i = "string" == typeof i && {
                    url:i
                } || i, a = e.param(e.extend({
                    data:t
                }, i.data)), l.old === a ? l.valid :(l.old = a, o = this, this.startRequest(n), 
                s = {}, s[n.name] = t, e.ajax(e.extend(!0, {
                    mode:"abort",
                    port:"validate" + n.name,
                    dataType:"json",
                    data:s,
                    context:o.currentForm,
                    success:function(e) {
                        var i, s, a, u = e === !0 || "true" === e;
                        o.settings.messages[n.name][r] = l.originalMessage, u ? (a = o.formSubmitted, o.resetInternals(), 
                        o.toHide = o.errorsFor(n), o.formSubmitted = a, o.successList.push(n), o.invalid[n.name] = !1, 
                        o.showErrors()) :(i = {}, s = e || o.defaultMessage(n, {
                            method:r,
                            parameters:t
                        }), i[n.name] = l.message = s, o.invalid[n.name] = !0, o.showErrors(i)), l.valid = u, 
                        o.stopRequest(n, u);
                    }
                }, i)), "pending");
            }
        }
    });
    var t, n = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, i) {
        var r = e.port;
        "abort" === e.mode && (n[r] && n[r].abort(), n[r] = i);
    }) :(t = e.ajax, e.ajax = function(i) {
        var r = ("mode" in i ? i :e.ajaxSettings).mode, o = ("port" in i ? i :e.ajaxSettings).port;
        return "abort" === r ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) :t.apply(this, arguments);
    });
}), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery", "./jquery.validate" ], e) :"object" == typeof module && module.exports ? module.exports = e(require("jquery")) :e(jQuery);
}(function(e) {
    !function() {
        function t(e) {
            return e.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-���������]*/g, "");
        }
        e.validator.addMethod("maxWords", function(e, n, i) {
            return this.optional(n) || t(e).match(/\b\w+\b/g).length <= i;
        }, e.validator.format("Please enter {0} words or less.")), e.validator.addMethod("minWords", function(e, n, i) {
            return this.optional(n) || t(e).match(/\b\w+\b/g).length >= i;
        }, e.validator.format("Please enter at least {0} words.")), e.validator.addMethod("rangeWords", function(e, n, i) {
            var r = t(e), o = /\b\w+\b/g;
            return this.optional(n) || r.match(o).length >= i[0] && r.match(o).length <= i[1];
        }, e.validator.format("Please enter between {0} and {1} words."));
    }(), e.validator.addMethod("accept", function(t, n, i) {
        var r, o, s, a = "string" == typeof i ? i.replace(/\s/g, "") :"image/*", l = this.optional(n);
        if (l) return l;
        if ("file" === e(n).attr("type") && (a = a.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"), 
        n.files && n.files.length)) for (s = new RegExp(".?(" + a + ")$", "i"), r = 0; r < n.files.length; r++) if (o = n.files[r], 
        !o.type.match(s)) return !1;
        return !0;
    }, e.validator.format("Please enter a value with a valid mimetype.")), e.validator.addMethod("alphanumeric", function(e, t) {
        return this.optional(t) || /^\w+$/i.test(e);
    }, "Letters, numbers, and underscores only please"), e.validator.addMethod("bankaccountNL", function(e, t) {
        if (this.optional(t)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(e)) return !1;
        var n, i, r, o = e.replace(/ /g, ""), s = 0, a = o.length;
        for (n = 0; a > n; n++) i = a - n, r = o.substring(n, n + 1), s += i * r;
        return 0 === s % 11;
    }, "Please specify a valid bank account number"), e.validator.addMethod("bankorgiroaccountNL", function(t, n) {
        return this.optional(n) || e.validator.methods.bankaccountNL.call(this, t, n) || e.validator.methods.giroaccountNL.call(this, t, n);
    }, "Please specify a valid bank or giro account number"), e.validator.addMethod("bic", function(e, t) {
        return this.optional(t) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(e.toUpperCase());
    }, "Please specify a valid BIC code"), e.validator.addMethod("cifES", function(e) {
        "use strict";
        var t, n, i, r, o, s, a = [];
        if (e = e.toUpperCase(), !e.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) return !1;
        for (i = 0; 9 > i; i++) a[i] = parseInt(e.charAt(i), 10);
        for (n = a[2] + a[4] + a[6], r = 1; 8 > r; r += 2) o = (2 * a[r]).toString(), s = o.charAt(1), 
        n += parseInt(o.charAt(0), 10) + ("" === s ? 0 :parseInt(s, 10));
        return /^[ABCDEFGHJNPQRSUVW]{1}/.test(e) ? (n += "", t = 10 - parseInt(n.charAt(n.length - 1), 10), 
        e += t, a[8].toString() === String.fromCharCode(64 + t) || a[8].toString() === e.charAt(e.length - 1)) :!1;
    }, "Please specify a valid CIF number."), e.validator.addMethod("cpfBR", function(e) {
        if (e = e.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, ""), 11 !== e.length) return !1;
        var t, n, i, r, o = 0;
        if (t = parseInt(e.substring(9, 10), 10), n = parseInt(e.substring(10, 11), 10), 
        i = function(e, t) {
            var n = 10 * e % 11;
            return 10 !== n && 11 !== n || (n = 0), n === t;
        }, "" === e || "00000000000" === e || "11111111111" === e || "22222222222" === e || "33333333333" === e || "44444444444" === e || "55555555555" === e || "66666666666" === e || "77777777777" === e || "88888888888" === e || "99999999999" === e) return !1;
        for (r = 1; 9 >= r; r++) o += parseInt(e.substring(r - 1, r), 10) * (11 - r);
        if (i(o, t)) {
            for (o = 0, r = 1; 10 >= r; r++) o += parseInt(e.substring(r - 1, r), 10) * (12 - r);
            return i(o, n);
        }
        return !1;
    }, "Please specify a valid CPF number"), e.validator.addMethod("creditcard", function(e, t) {
        if (this.optional(t)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(e)) return !1;
        var n, i, r = 0, o = 0, s = !1;
        if (e = e.replace(/\D/g, ""), e.length < 13 || e.length > 19) return !1;
        for (n = e.length - 1; n >= 0; n--) i = e.charAt(n), o = parseInt(i, 10), s && (o *= 2) > 9 && (o -= 9), 
        r += o, s = !s;
        return 0 === r % 10;
    }, "Please enter a valid credit card number."), e.validator.addMethod("creditcardtypes", function(e, t, n) {
        if (/[^0-9\-]+/.test(e)) return !1;
        e = e.replace(/\D/g, "");
        var i = 0;
        return n.mastercard && (i |= 1), n.visa && (i |= 2), n.amex && (i |= 4), n.dinersclub && (i |= 8), 
        n.enroute && (i |= 16), n.discover && (i |= 32), n.jcb && (i |= 64), n.unknown && (i |= 128), 
        n.all && (i = 255), 1 & i && /^(5[12345])/.test(e) ? 16 === e.length :2 & i && /^(4)/.test(e) ? 16 === e.length :4 & i && /^(3[47])/.test(e) ? 15 === e.length :8 & i && /^(3(0[012345]|[68]))/.test(e) ? 14 === e.length :16 & i && /^(2(014|149))/.test(e) ? 15 === e.length :32 & i && /^(6011)/.test(e) ? 16 === e.length :64 & i && /^(3)/.test(e) ? 16 === e.length :64 & i && /^(2131|1800)/.test(e) ? 15 === e.length :!!(128 & i);
    }, "Please enter a valid credit card number."), e.validator.addMethod("currency", function(e, t, n) {
        var i, r = "string" == typeof n, o = r ? n :n[0], s = r ? !0 :n[1];
        return o = o.replace(/,/g, ""), o = s ? o + "]" :o + "]?", i = "^[" + o + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", 
        i = new RegExp(i), this.optional(t) || i.test(e);
    }, "Please specify a valid currency"), e.validator.addMethod("dateFA", function(e, t) {
        return this.optional(t) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(e);
    }, e.validator.messages.date), e.validator.addMethod("dateITA", function(e, t) {
        var n, i, r, o, s, a = !1, l = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return l.test(e) ? (n = e.split("/"), i = parseInt(n[0], 10), r = parseInt(n[1], 10), 
        o = parseInt(n[2], 10), s = new Date(Date.UTC(o, r - 1, i, 12, 0, 0, 0)), a = s.getUTCFullYear() === o && s.getUTCMonth() === r - 1 && s.getUTCDate() === i) :a = !1, 
        this.optional(t) || a;
    }, e.validator.messages.date), e.validator.addMethod("dateNL", function(e, t) {
        return this.optional(t) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(e);
    }, e.validator.messages.date), e.validator.addMethod("extension", function(e, t, n) {
        return n = "string" == typeof n ? n.replace(/,/g, "|") :"png|jpe?g|gif", this.optional(t) || e.match(new RegExp("\\.(" + n + ")$", "i"));
    }, e.validator.format("Please enter a value with a valid extension.")), e.validator.addMethod("giroaccountNL", function(e, t) {
        return this.optional(t) || /^[0-9]{1,7}$/.test(e);
    }, "Please specify a valid giro account number"), e.validator.addMethod("iban", function(e, t) {
        if (this.optional(t)) return !0;
        var n, i, r, o, s, a, l, u, d, c = e.replace(/ /g, "").toUpperCase(), f = "", h = !0, p = "", g = "", m = 5;
        if (c.length < m) return !1;
        if (n = c.substring(0, 2), a = {
            AL:"\\d{8}[\\dA-Z]{16}",
            AD:"\\d{8}[\\dA-Z]{12}",
            AT:"\\d{16}",
            AZ:"[\\dA-Z]{4}\\d{20}",
            BE:"\\d{12}",
            BH:"[A-Z]{4}[\\dA-Z]{14}",
            BA:"\\d{16}",
            BR:"\\d{23}[A-Z][\\dA-Z]",
            BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",
            CR:"\\d{17}",
            HR:"\\d{17}",
            CY:"\\d{8}[\\dA-Z]{16}",
            CZ:"\\d{20}",
            DK:"\\d{14}",
            DO:"[A-Z]{4}\\d{20}",
            EE:"\\d{16}",
            FO:"\\d{14}",
            FI:"\\d{14}",
            FR:"\\d{10}[\\dA-Z]{11}\\d{2}",
            GE:"[\\dA-Z]{2}\\d{16}",
            DE:"\\d{18}",
            GI:"[A-Z]{4}[\\dA-Z]{15}",
            GR:"\\d{7}[\\dA-Z]{16}",
            GL:"\\d{14}",
            GT:"[\\dA-Z]{4}[\\dA-Z]{20}",
            HU:"\\d{24}",
            IS:"\\d{22}",
            IE:"[\\dA-Z]{4}\\d{14}",
            IL:"\\d{19}",
            IT:"[A-Z]\\d{10}[\\dA-Z]{12}",
            KZ:"\\d{3}[\\dA-Z]{13}",
            KW:"[A-Z]{4}[\\dA-Z]{22}",
            LV:"[A-Z]{4}[\\dA-Z]{13}",
            LB:"\\d{4}[\\dA-Z]{20}",
            LI:"\\d{5}[\\dA-Z]{12}",
            LT:"\\d{16}",
            LU:"\\d{3}[\\dA-Z]{13}",
            MK:"\\d{3}[\\dA-Z]{10}\\d{2}",
            MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",
            MR:"\\d{23}",
            MU:"[A-Z]{4}\\d{19}[A-Z]{3}",
            MC:"\\d{10}[\\dA-Z]{11}\\d{2}",
            MD:"[\\dA-Z]{2}\\d{18}",
            ME:"\\d{18}",
            NL:"[A-Z]{4}\\d{10}",
            NO:"\\d{11}",
            PK:"[\\dA-Z]{4}\\d{16}",
            PS:"[\\dA-Z]{4}\\d{21}",
            PL:"\\d{24}",
            PT:"\\d{21}",
            RO:"[A-Z]{4}[\\dA-Z]{16}",
            SM:"[A-Z]\\d{10}[\\dA-Z]{12}",
            SA:"\\d{2}[\\dA-Z]{18}",
            RS:"\\d{18}",
            SK:"\\d{20}",
            SI:"\\d{15}",
            ES:"\\d{20}",
            SE:"\\d{20}",
            CH:"\\d{5}[\\dA-Z]{12}",
            TN:"\\d{20}",
            TR:"\\d{5}[\\dA-Z]{17}",
            AE:"\\d{3}\\d{16}",
            GB:"[A-Z]{4}\\d{14}",
            VG:"[\\dA-Z]{4}\\d{16}"
        }, s = a[n], "undefined" != typeof s && (l = new RegExp("^[A-Z]{2}\\d{2}" + s + "$", ""), 
        !l.test(c))) return !1;
        for (i = c.substring(4, c.length) + c.substring(0, 4), u = 0; u < i.length; u++) r = i.charAt(u), 
        "0" !== r && (h = !1), h || (f += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(r));
        for (d = 0; d < f.length; d++) o = f.charAt(d), g = "" + p + o, p = g % 97;
        return 1 === p;
    }, "Please specify a valid IBAN"), e.validator.addMethod("integer", function(e, t) {
        return this.optional(t) || /^-?\d+$/.test(e);
    }, "A positive or negative non-decimal number please"), e.validator.addMethod("ipv4", function(e, t) {
        return this.optional(t) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e);
    }, "Please enter a valid IP v4 address."), e.validator.addMethod("ipv6", function(e, t) {
        return this.optional(t) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e);
    }, "Please enter a valid IP v6 address."), e.validator.addMethod("lettersonly", function(e, t) {
        return this.optional(t) || /^[a-z]+$/i.test(e);
    }, "Letters only please"), e.validator.addMethod("letterswithbasicpunc", function(e, t) {
        return this.optional(t) || /^[a-z\-.,()'"\s]+$/i.test(e);
    }, "Letters or punctuation only please"), e.validator.addMethod("mobileNL", function(e, t) {
        return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(e);
    }, "Please specify a valid mobile number"), e.validator.addMethod("mobileUK", function(e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/);
    }, "Please specify a valid mobile number"), e.validator.addMethod("nieES", function(e) {
        "use strict";
        return e = e.toUpperCase(), e.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[T]{1}/.test(e) ? e[8] === /^[T]{1}[A-Z0-9]{8}$/.test(e) :/^[XYZ]{1}/.test(e) ? e[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(e.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23) :!1 :!1;
    }, "Please specify a valid NIE number."), e.validator.addMethod("nifES", function(e) {
        "use strict";
        return e = e.toUpperCase(), e.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[0-9]{8}[A-Z]{1}$/.test(e) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(e.substring(8, 0) % 23) === e.charAt(8) :/^[KLM]{1}/.test(e) ? e[8] === String.fromCharCode(64) :!1 :!1;
    }, "Please specify a valid NIF number."), e.validator.addMethod("notEqualTo", function(t, n, i) {
        return this.optional(n) || !e.validator.methods.equalTo.call(this, t, n, i);
    }, "Please enter a different value, values must not be the same."), e.validator.addMethod("nowhitespace", function(e, t) {
        return this.optional(t) || /^\S+$/i.test(e);
    }, "No white space please"), e.validator.addMethod("pattern", function(e, t, n) {
        return this.optional(t) ? !0 :("string" == typeof n && (n = new RegExp("^(?:" + n + ")$")), 
        n.test(e));
    }, "Invalid format."), e.validator.addMethod("phoneNL", function(e, t) {
        return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(e);
    }, "Please specify a valid phone number."), e.validator.addMethod("phoneUK", function(e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/);
    }, "Please specify a valid phone number"), e.validator.addMethod("phoneUS", function(e, t) {
        return e = e.replace(/\s+/g, ""), this.optional(t) || e.length > 9 && e.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/);
    }, "Please specify a valid phone number"), e.validator.addMethod("phonesUK", function(e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/);
    }, "Please specify a valid uk phone number"), e.validator.addMethod("postalCodeCA", function(e, t) {
        return this.optional(t) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(e);
    }, "Please specify a valid postal code"), e.validator.addMethod("postalcodeBR", function(e, t) {
        return this.optional(t) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(e);
    }, "Informe um CEP v��lido."), e.validator.addMethod("postalcodeIT", function(e, t) {
        return this.optional(t) || /^\d{5}$/.test(e);
    }, "Please specify a valid postal code"), e.validator.addMethod("postalcodeNL", function(e, t) {
        return this.optional(t) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(e);
    }, "Please specify a valid postal code"), e.validator.addMethod("postcodeUK", function(e, t) {
        return this.optional(t) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(e);
    }, "Please specify a valid UK postcode"), e.validator.addMethod("require_from_group", function(t, n, i) {
        var r = e(i[1], n.form), o = r.eq(0), s = o.data("valid_req_grp") ? o.data("valid_req_grp") :e.extend({}, this), a = r.filter(function() {
            return s.elementValue(this);
        }).length >= i[0];
        return o.data("valid_req_grp", s), e(n).data("being_validated") || (r.data("being_validated", !0), 
        r.each(function() {
            s.element(this);
        }), r.data("being_validated", !1)), a;
    }, e.validator.format("Please fill at least {0} of these fields.")), e.validator.addMethod("skip_or_fill_minimum", function(t, n, i) {
        var r = e(i[1], n.form), o = r.eq(0), s = o.data("valid_skip") ? o.data("valid_skip") :e.extend({}, this), a = r.filter(function() {
            return s.elementValue(this);
        }).length, l = 0 === a || a >= i[0];
        return o.data("valid_skip", s), e(n).data("being_validated") || (r.data("being_validated", !0), 
        r.each(function() {
            s.element(this);
        }), r.data("being_validated", !1)), l;
    }, e.validator.format("Please either skip these fields or fill at least {0} of them.")), 
    e.validator.addMethod("stateUS", function(e, t, n) {
        var i, r = "undefined" == typeof n, o = r || "undefined" == typeof n.caseSensitive ? !1 :n.caseSensitive, s = r || "undefined" == typeof n.includeTerritories ? !1 :n.includeTerritories, a = r || "undefined" == typeof n.includeMilitary ? !1 :n.includeMilitary;
        return i = s || a ? s && a ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" :s ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" :"^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" :"^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", 
        i = o ? new RegExp(i) :new RegExp(i, "i"), this.optional(t) || i.test(e);
    }, "Please specify a valid state"), e.validator.addMethod("strippedminlength", function(t, n, i) {
        return e(t).text().length >= i;
    }, e.validator.format("Please enter at least {0} characters")), e.validator.addMethod("time", function(e, t) {
        return this.optional(t) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(e);
    }, "Please enter a valid time, between 00:00 and 23:59"), e.validator.addMethod("time12h", function(e, t) {
        return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e);
    }, "Please enter a valid time in 12-hour am/pm format"), e.validator.addMethod("url2", function(e, t) {
        return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e);
    }, e.validator.messages.url), e.validator.addMethod("vinUS", function(e) {
        if (17 !== e.length) return !1;
        var t, n, i, r, o, s, a = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], l = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ], u = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ], d = 0;
        for (t = 0; 17 > t; t++) {
            if (r = u[t], i = e.slice(t, t + 1), 8 === t && (s = i), isNaN(i)) {
                for (n = 0; n < a.length; n++) if (i.toUpperCase() === a[n]) {
                    i = l[n], i *= r, isNaN(s) && 8 === n && (s = a[n]);
                    break;
                }
            } else i *= r;
            d += i;
        }
        return o = d % 11, 10 === o && (o = "X"), o === s;
    }, "The specified vehicle identification number (VIN) is invalid."), e.validator.addMethod("zipcodeUS", function(e, t) {
        return this.optional(t) || /^\d{5}(-\d{4})?$/.test(e);
    }, "The specified US ZIP Code is invalid"), e.validator.addMethod("ziprange", function(e, t) {
        return this.optional(t) || /^90[2-5]\d\{2\}-\d{4}$/.test(e);
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx");
});
