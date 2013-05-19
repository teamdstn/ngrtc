// Copyright 2013 vLine, inc. All rights reserved.
(function () {
  function e(a) {
    throw a;
  }
  var i = void 0,
    j = !0,
    k = null,
    n = !1;

  function aa() {
    return function (a) {
      return a
    }
  }
  function ba() {
    return function () {}
  }
  function ca(a) {
    return function (b) {
      this[a] = b
    }
  }
  function p(a) {
    return function () {
      return this[a]
    }
  }
  function t(a) {
    return function () {
      return a
    }
  }
  var u, da = [];

  function ea(a) {
    return function () {
      return da[a].apply(this, arguments)
    }
  }
  var fa = fa || {}, w = this;

  function ga(a) {
    for (var a = a.split("."), b = w, c; c = a.shift();) if (b[c] != k) b = b[c];
      else return k;
    return b
  }
  function ha() {}

  function ia(a) {
    a.Ga = function () {
      return a.Fp ? a.Fp : a.Fp = new a
    }
  }

  function ja(a) {
    var b = typeof a;
    if ("object" == b) if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
      } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
  }
  function y(a) {
    return a !== i
  }
  function ka(a) {
    return "array" == ja(a)
  }
  function la(a) {
    var b = ja(a);
    return "array" == b || "object" == b && "number" == typeof a.length
  }
  function z(a) {
    return "string" == typeof a
  }
  function ma(a) {
    return "number" == typeof a
  }
  function na(a) {
    return "function" == ja(a)
  }
  function oa(a) {
    var b = typeof a;
    return "object" == b && a != k || "function" == b
  }
  function qa(a) {
    return a[ra] || (a[ra] = ++sa)
  }
  var ra = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
    sa = 0;

  function ta(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }
  function ua(a, b, c) {
    a || e(Error());
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  }

  function A(a, b, c) {
    A = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta : ua;
    return A.apply(k, arguments)
  }
  function va(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = Array.prototype.slice.call(arguments);
      b.unshift.apply(b, c);
      return a.apply(this, b)
    }
  }
  var wa = Date.now || function () {
      return +new Date
    };

  function xa(a) {
    var b = {}, c;
    for (c in b) var d = ("" + b[c]).replace(/\$/g, "$$$$"),
    a = a.replace(RegExp("\\{\\$" + c + "\\}", "gi"), d);
    return a
  }

  function B(a, b) {
    var c = a.split("."),
      d = w;
    !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
    for (var f; c.length && (f = c.shift());)!c.length && y(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
  function D(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.d = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
  };

  function ya() {
    0 != za && (this.yy = Error().stack, Aa[qa(this)] = this)
  }
  var za = 0,
    Aa = {};
  ya.prototype.ud = n;
  ya.prototype.J = function () {
    if (!this.ud && (this.ud = j, this.A(), 0 != za)) {
      var a = qa(this);
      delete Aa[a]
    }
  };
  ya.prototype.A = function () {
    this.Vs && Ba.apply(k, this.Vs);
    if (this.qq) for (; this.qq.length;) this.qq.shift()()
  };

  function Da(a) {
    a && "function" == typeof a.J && a.J()
  }
  function Ba(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      la(d) ? Ba.apply(k, d) : Da(d)
    }
  };

  function Ea(a) {
    Error.captureStackTrace ? Error.captureStackTrace(this, Ea) : this.stack = Error().stack || "";
    a && (this.message = String(a))
  }
  D(Ea, Error);
  Ea.prototype.name = "CustomError";

  function Fa(a, b) {
    return 0 == a.lastIndexOf(b, 0)
  }
  function Ga(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
  }
  function Ha(a, b) {
    for (var c = 1; c < arguments.length; c++) var d = String(arguments[c]).replace(/\$/g, "$$$$"),
    a = a.replace(/\%s/, d);
    return a
  }
  function Ia(a) {
    return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
  }
  function Ja(a) {
    return /^[\s\xa0]*$/.test(a)
  }
  function Ka(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
  }

  function La(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
  }
  function Ma(a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
  }
  function Na(a) {
    if (!Oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Sa, "&quot;"));
    return a
  }
  var Pa = /&/g,
    Qa = /</g,
    Ra = />/g,
    Sa = /\"/g,
    Oa = /[&<>\"]/;

  function Ta(a) {
    if (-1 != a.indexOf("&")) if ("document" in w) var b = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"'
      }, c = document.createElement("div"), a = a.replace(Ua, function (a, f) {
      var g = b[a];
      if (g) return g;
      if ("#" == f.charAt(0)) {
        var h = Number("0" + f.substr(1));
        isNaN(h) || (g = String.fromCharCode(h))
      }
      g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
      return b[a] = g
    });
    else a = a.replace(/&([^;]+);/g, function (a, b) {
        switch (b) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          if ("#" ==
            b.charAt(0)) {
            var c = Number("0" + b.substr(1));
            if (!isNaN(c)) return String.fromCharCode(c)
          }
          return a
        }
      });
    return a
  }
  var Ua = /&([^;\s<&]+);?/g;

  function Va(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
      var f = 1 == c ? b : b.charAt(d);
      if (a.charAt(0) == f && a.charAt(a.length - 1) == f) return a.substring(1, a.length - 1)
    }
    return a
  }
  function Xa(a, b) {
    var c = RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "");
    return a.replace(c, "")
  }

  function E(a, b) {
    var c = y(i) ? a.toFixed(i) : String(a),
      d = c.indexOf("."); - 1 == d && (d = c.length);
    d = Math.max(0, b - d);
    return Array(d + 1).join("0") + c
  }
  function Ya(a) {
    return a == k ? "" : String(a)
  }

  function $a(a, b) {
    for (var c = 0, d = La(String(a)).split("."), f = La(String(b)).split("."), g = Math.max(d.length, f.length), h = 0; 0 == c && h < g; h++) {
      var l = d[h] || "",
        m = f[h] || "",
        q = RegExp("(\\d*)(\\D*)", "g"),
        s = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = q.exec(l) || ["", "", ""],
          v = s.exec(m) || ["", "", ""];
        if (0 == r[0].length && 0 == v[0].length) break;
        c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == v[2].length) ? -1 : (0 == r[2].length) > (0 == v[2].length) ? 1 : 0) || (r[2] < v[2] ? -1 : r[2] > v[2] ? 1 : 0)
      } while (0 == c)
    }
    return c
  }
  function ab(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
      return c.toUpperCase()
    })
  };
  var bb = Array.prototype,
    cb = bb.indexOf ? function (a, b, c) {
      return bb.indexOf.call(a, b, c)
    } : function (a, b, c) {
      c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if (z(a)) return !z(b) || 1 != b.length ? -1 : a.indexOf(b, c);
      for (; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1
    }, F = bb.forEach ? function (a, b, c) {
      bb.forEach.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, f = z(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
    }, db = bb.filter ? function (a, b, c) {
      return bb.filter.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, f = [], g = 0, h =
          z(a) ? a.split("") : a, l = 0; l < d; l++) if (l in h) {
          var m = h[l];
          b.call(c, m, l, a) && (f[g++] = m)
        }
      return f
    }, eb = bb.map ? function (a, b, c) {
      return bb.map.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, f = Array(d), g = z(a) ? a.split("") : a, h = 0; h < d; h++) h in g && (f[h] = b.call(c, g[h], h, a));
      return f
    }, fb = bb.some ? function (a, b, c) {
      return bb.some.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, f = z(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && b.call(c, f[g], g, a)) return j;
      return n
    }, gb = bb.every ? function (a, b, c) {
      return bb.every.call(a, b, c)
    } : function (a,
      b, c) {
      for (var d = a.length, f = z(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && !b.call(c, f[g], g, a)) return n;
      return j
    };

  function hb(a, b, c) {
    b = ib(a, b, c);
    return 0 > b ? k : z(a) ? a.charAt(b) : a[b]
  }
  function ib(a, b, c) {
    for (var d = a.length, f = z(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && b.call(c, f[g], g, a)) return g;
    return -1
  }
  function jb(a, b) {
    return 0 <= cb(a, b)
  }
  function kb(a) {
    if (!ka(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0
  }
  function lb(a, b) {
    jb(a, b) || a.push(b)
  }

  function mb(a, b) {
    var c = cb(a, b),
      d;
    (d = 0 <= c) && bb.splice.call(a, c, 1);
    return d
  }
  function nb(a) {
    return bb.concat.apply(bb, arguments)
  }
  function ob(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  }
  function pb(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c],
        f;
      if (ka(d) || (f = la(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d);
      else if (f) for (var g = a.length, h = d.length, l = 0; l < h; l++) a[g + l] = d[l];
      else a.push(d)
    }
  }
  function qb(a, b, c, d) {
    bb.splice.apply(a, rb(arguments, 1))
  }

  function rb(a, b, c) {
    return 2 >= arguments.length ? bb.slice.call(a, b) : bb.slice.call(a, b, c)
  }
  function sb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  };
  var tb, ub, wb, xb, yb, zb, Ab;

  function Bb() {
    return w.navigator ? w.navigator.userAgent : k
  }
  function Cb() {
    return w.navigator
  }
  yb = xb = wb = ub = tb = n;
  var Db;
  if (Db = Bb()) {
    var Eb = Cb();
    tb = 0 == Db.indexOf("Opera");
    ub = !tb && -1 != Db.indexOf("MSIE");
    xb = (wb = !tb && -1 != Db.indexOf("WebKit")) && -1 != Db.indexOf("Mobile");
    yb = !tb && !wb && "Gecko" == Eb.product
  }
  var Fb = tb,
    G = ub,
    I = yb,
    J = wb,
    Gb = xb,
    Hb, Ib = Cb();
  Hb = Ib && Ib.platform || "";
  zb = -1 != Hb.indexOf("Mac");
  Ab = -1 != Hb.indexOf("Win");
  var Jb = !! Cb() && -1 != (Cb().appVersion || "").indexOf("X11"),
    Kb;
  a: {
    var Lb = "",
      Mb;
    if (Fb && w.opera) var Nb = w.opera.version,
    Lb = "function" == typeof Nb ? Nb() : Nb;
    else if (I ? Mb = /rv\:([^\);]+)(\)|;)/ : G ? Mb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Mb = /WebKit\/(\S+)/), Mb) var Ob = Mb.exec(Bb()),
    Lb = Ob ? Ob[1] : "";
    if (G) {
      var Pb, Qb = w.document;
      Pb = Qb ? Qb.documentMode : i;
      if (Pb > parseFloat(Lb)) {
        Kb = String(Pb);
        break a
      }
    }
    Kb = Lb
  }
  var Rb = {};

  function Sb(a) {
    return Rb[a] || (Rb[a] = 0 <= $a(Kb, a))
  }
  var Tb = {};

  function Ub(a) {
    return Tb[a] || (Tb[a] = G && !! document.documentMode && document.documentMode >= a)
  };
  var Vb = !G || Ub(9),
    Wb = !G || Ub(9),
    Xb = G && !Sb("9"),
    Yb = !J || Sb("528"),
    Zb = I && Sb("1.9b") || G && Sb("8") || Fb && Sb("9.5") || J && Sb("528"),
    $b = I && !Sb("8") || G && !Sb("9");

  function ac(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
  }
  u = ac.prototype;
  u.A = ba();
  u.J = ba();
  u.Jf = n;
  u.defaultPrevented = n;
  u.Dk = j;
  u.stopPropagation = function () {
    this.Jf = j
  };
  u.preventDefault = function () {
    this.defaultPrevented = j;
    this.Dk = n
  };

  function bc(a) {
    a.preventDefault()
  };

  function cc(a) {
    cc[" "](a);
    return a
  }
  cc[" "] = ha;

  function dc(a, b) {
    a && this.Lc(a, b)
  }
  D(dc, ac);
  var ec = [1, 4, 2];
  u = dc.prototype;
  u.target = k;
  u.relatedTarget = k;
  u.offsetX = 0;
  u.offsetY = 0;
  u.clientX = 0;
  u.clientY = 0;
  u.screenX = 0;
  u.screenY = 0;
  u.button = 0;
  u.keyCode = 0;
  u.charCode = 0;
  u.ctrlKey = n;
  u.altKey = n;
  u.shiftKey = n;
  u.metaKey = n;
  u.fn = n;
  u.Sb = k;
  u.Lc = function (a, b) {
    var c = this.type = a.type;
    ac.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (I) {
        var f;
        a: {
          try {
            cc(d.nodeName);
            f = j;
            break a
          } catch (g) {}
          f = n
        }
        f || (d = k)
      }
    } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = J || a.offsetX !== i ? a.offsetX : a.layerX;
    this.offsetY = J || a.offsetY !== i ? a.offsetY : a.layerY;
    this.clientX = a.clientX !== i ? a.clientX : a.pageX;
    this.clientY = a.clientY !== i ? a.clientY : a.pageY;
    this.screenX = a.screenX ||
      0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.fn = zb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.Sb = a;
    a.defaultPrevented && this.preventDefault();
    delete this.Jf
  };

  function fc(a) {
    return (Vb ? 0 == a.Sb.button : "click" == a.type ? j : !! (a.Sb.button & ec[0])) && !(J && zb && a.ctrlKey)
  }
  u.stopPropagation = function () {
    dc.d.stopPropagation.call(this);
    this.Sb.stopPropagation ? this.Sb.stopPropagation() : this.Sb.cancelBubble = j
  };
  u.preventDefault = function () {
    dc.d.preventDefault.call(this);
    var a = this.Sb;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = n, Xb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  u.ot = p("Sb");
  u.A = ba();

  function gc() {}
  var hc = 0;
  u = gc.prototype;
  u.key = 0;
  u.Kf = n;
  u.vl = n;
  u.Lc = function (a, b, c, d, f, g) {
    na(a) ? this.Ip = j : a && a.handleEvent && na(a.handleEvent) ? this.Ip = n : e(Error("Invalid listener argument"));
    this.Cg = a;
    this.Oq = b;
    this.src = c;
    this.type = d;
    this.capture = !! f;
    this.Nj = g;
    this.vl = n;
    this.key = ++hc;
    this.Kf = n
  };
  u.handleEvent = function (a) {
    return this.Ip ? this.Cg.call(this.Nj || this.src, a) : this.Cg.handleEvent.call(this.Cg, a)
  };

  function ic(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }
  function jc(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b
  }
  function kc(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b
  }
  function lc(a, b) {
    for (var c in a) if (a[c] == b) return j;
    return n
  }
  function mc(a) {
    for (var b in a) return n;
    return j
  }
  function nc(a, b) {
    b in a && delete a[b]
  }
  function oc(a, b, c) {
    b in a && e(Error('The object already contains the key "' + b + '"'));
    a[b] = c
  }
  function pc(a) {
    var b = {}, c;
    for (c in a) b[c] = a[c];
    return b
  }
  var qc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function rc(a, b) {
    for (var c, d, f = 1; f < arguments.length; f++) {
      d = arguments[f];
      for (c in d) a[c] = d[c];
      for (var g = 0; g < qc.length; g++) c = qc[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
  function sc(a) {
    var b = arguments.length;
    if (1 == b && ka(arguments[0])) return sc.apply(k, arguments[0]);
    b % 2 && e(Error("Uneven number of arguments"));
    for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
    return c
  };
  var tc = {}, uc = {}, vc = {}, wc = {};

  function xc(a, b, c, d, f) {
    if (b) {
      if (ka(b)) {
        for (var g = 0; g < b.length; g++) xc(a, b[g], c, d, f);
        return k
      }
      var d = !! d,
        h = uc;
      b in h || (h[b] = {
        L: 0,
        Sc: 0
      });
      h = h[b];
      d in h || (h[d] = {
        L: 0,
        Sc: 0
      }, h.L++);
      var h = h[d],
        l = qa(a),
        m;
      h.Sc++;
      if (h[l]) {
        m = h[l];
        for (g = 0; g < m.length; g++) if (h = m[g], h.Cg == c && h.Nj == f) {
            if (h.Kf) break;
            return m[g].key
          }
      } else m = h[l] = [], h.L++;
      var q = yc,
        s = Wb ? function (a) {
          return q.call(s.src, s.key, a)
        } : function (a) {
          a = q.call(s.src, s.key, a);
          if (!a) return a
        }, g = s;
      g.src = a;
      h = new gc;
      h.Lc(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      m.push(h);
      tc[c] = h;
      vc[l] ||
        (vc[l] = []);
      vc[l].push(h);
      a.addEventListener ? (a == w || !a.El) && a.addEventListener(b, g, d) : a.attachEvent(b in wc ? wc[b] : wc[b] = "on" + b, g);
      return c
    }
    e(Error("Invalid event type"))
  }
  function zc(a, b, c, d, f) {
    if (ka(b)) for (var g = 0; g < b.length; g++) zc(a, b[g], c, d, f);
    else a = xc(a, b, c, d, f), tc[a].vl = j
  }
  function Ac(a, b, c, d, f) {
    if (ka(b)) for (var g = 0; g < b.length; g++) Ac(a, b[g], c, d, f);
    else if (d = !! d, a = Bc(a, b, d)) for (g = 0; g < a.length; g++) if (a[g].Cg == c && a[g].capture == d && a[g].Nj == f) {
          Cc(a[g].key);
          break
        }
  }

  function Cc(a) {
    if (!tc[a]) return n;
    var b = tc[a];
    if (b.Kf) return n;
    var c = b.src,
      d = b.type,
      f = b.Oq,
      g = b.capture;
    c.removeEventListener ? (c == w || !c.El) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in wc ? wc[d] : wc[d] = "on" + d, f);
    c = qa(c);
    vc[c] && (f = vc[c], mb(f, b), 0 == f.length && delete vc[c]);
    b.Kf = j;
    if (b = uc[d][g][c]) b.iq = j, Dc(d, g, c, b);
    delete tc[a];
    return j
  }

  function Dc(a, b, c, d) {
    if (!d.ik && d.iq) {
      for (var f = 0, g = 0; f < d.length; f++) d[f].Kf ? d[f].Oq.src = k : (f != g && (d[g] = d[f]), g++);
      d.length = g;
      d.iq = n;
      0 == g && (delete uc[a][b][c], uc[a][b].L--, 0 == uc[a][b].L && (delete uc[a][b], uc[a].L--), 0 == uc[a].L && delete uc[a])
    }
  }
  function Ec(a) {
    var b, c = 0,
      d = b == k;
    b = !! b;
    if (a == k) ic(vc, function (a) {
        for (var f = a.length - 1; 0 <= f; f--) {
          var g = a[f];
          if (d || b == g.capture) Cc(g.key), c++
        }
      });
    else if (a = qa(a), vc[a]) for (var a = vc[a], f = a.length - 1; 0 <= f; f--) {
        var g = a[f];
        if (d || b == g.capture) Cc(g.key), c++
    }
  }

  function Bc(a, b, c) {
    var d = uc;
    return b in d && (d = d[b], c in d && (d = d[c], a = qa(a), d[a])) ? d[a] : k
  }
  function Fc(a, b, c, d, f) {
    var g = 1,
      b = qa(b);
    if (a[b]) {
      a.Sc--;
      a = a[b];
      a.ik ? a.ik++ : a.ik = 1;
      try {
        for (var h = a.length, l = 0; l < h; l++) {
          var m = a[l];
          m && !m.Kf && (g &= Gc(m, f) !== n)
        }
      } finally {
        a.ik--, Dc(c, d, b, a)
      }
    }
    return Boolean(g)
  }
  function Gc(a, b) {
    a.vl && Cc(a.key);
    return a.handleEvent(b)
  }

  function Hc(a, b) {
    var c = b.type || b,
      d = uc;
    if (!(c in d)) return j;
    if (z(b)) b = new ac(b, a);
    else if (b instanceof ac) b.target = b.target || a;
    else {
      var f = b,
        b = new ac(c, a);
      rc(b, f)
    }
    var f = 1,
      g, d = d[c],
      c = j in d,
      h;
    if (c) {
      g = [];
      for (h = a; h; h = h.Le) g.push(h);
      h = d[j];
      h.Sc = h.L;
      for (var l = g.length - 1; !b.Jf && 0 <= l && h.Sc; l--) b.currentTarget = g[l], f &= Fc(h, g[l], b.type, j, b) && b.Dk != n
    }
    if (n in d) if (h = d[n], h.Sc = h.L, c) for (l = 0; !b.Jf && l < g.length && h.Sc; l++) b.currentTarget = g[l], f &= Fc(h, g[l], b.type, n, b) && b.Dk != n;
      else for (d = a; !b.Jf && d && h.Sc; d = d.Le) b.currentTarget =
            d, f &= Fc(h, d, b.type, n, b) && b.Dk != n;
    return Boolean(f)
  }

  function yc(a, b) {
    if (!tc[a]) return j;
    var c = tc[a],
      d = c.type,
      f = uc;
    if (!(d in f)) return j;
    var f = f[d],
      g, h;
    if (!Wb) {
      g = b || ga("window.event");
      var l = j in f,
        m = n in f;
      if (l) {
        if (0 > g.keyCode || g.returnValue != i) return j;
        a: {
          var q = n;
          if (0 == g.keyCode) try {
              g.keyCode = -1;
              break a
          } catch (s) {
            q = j
          }
          if (q || g.returnValue == i) g.returnValue = j
        }
      }
      q = new dc;
      q.Lc(g, this);
      g = j;
      try {
        if (l) {
          for (var r = [], v = q.currentTarget; v; v = v.parentNode) r.push(v);
          h = f[j];
          h.Sc = h.L;
          for (var x = r.length - 1; !q.Jf && 0 <= x && h.Sc; x--) q.currentTarget = r[x], g &= Fc(h, r[x], d, j, q);
          if (m) {
            h =
              f[n];
            h.Sc = h.L;
            for (x = 0; !q.Jf && x < r.length && h.Sc; x++) q.currentTarget = r[x], g &= Fc(h, r[x], d, n, q)
          }
        } else g = Gc(c, q)
      } finally {
        r && (r.length = 0)
      }
      return g
    }
    d = new dc(b, this);
    return g = Gc(c, d)
  };

  function Ic() {
    ya.call(this)
  }
  D(Ic, ya);
  u = Ic.prototype;
  u.El = j;
  u.Le = k;
  u.xc = ca("Le");
  u.addEventListener = function (a, b, c, d) {
    xc(this, a, b, c, d)
  };
  u.removeEventListener = function (a, b, c, d) {
    Ac(this, a, b, c, d)
  };
  u.dispatchEvent = function (a) {
    return Hc(this, a)
  };
  u.A = function () {
    Ic.d.A.call(this);
    Ec(this);
    this.Le = k
  };

  function Kc(a, b) {
    ya.call(this);
    this.ai = a || 1;
    this.Ri = b || Lc;
    this.sl = A(this.$x, this);
    this.Jm = wa()
  }
  D(Kc, Ic);
  Kc.prototype.enabled = n;
  var Lc = w.window;
  u = Kc.prototype;
  u.sa = k;
  u.setInterval = function (a) {
    this.ai = a;
    this.sa && this.enabled ? (this.stop(), this.start()) : this.sa && this.stop()
  };
  u.$x = function () {
    if (this.enabled) {
      var a = wa() - this.Jm;
      0 < a && a < 0.8 * this.ai ? this.sa = this.Ri.setTimeout(this.sl, this.ai - a) : (this.dispatchEvent(Mc), this.enabled && (this.sa = this.Ri.setTimeout(this.sl, this.ai), this.Jm = wa()))
    }
  };
  u.start = function () {
    this.enabled = j;
    this.sa || (this.sa = this.Ri.setTimeout(this.sl, this.ai), this.Jm = wa())
  };
  u.stop = function () {
    this.enabled = n;
    this.sa && (this.Ri.clearTimeout(this.sa), this.sa = k)
  };
  u.A = function () {
    Kc.d.A.call(this);
    this.stop();
    delete this.Ri
  };
  var Mc = "tick";

  function Nc(a, b, c) {
    na(a) ? c && (a = A(a, c)) : a && "function" == typeof a.handleEvent ? a = A(a.handleEvent, a) : e(Error("Invalid listener argument"));
    return 2147483647 < b ? -1 : Lc.setTimeout(a, b || 0)
  };

  function Oc(a, b) {
    b && (a = A(a, b));
    Pc.push(a);
    Qc()
  }
  var Pc = [],
    Rc = [];

  function Sc() {
    for (; Rc.length;) Rc.pop().fa()
  }
  function Tc() {
    try {
      Sc();
      for (var a, b = 0; b < Pc.length; ++b) try {
          a = j, Pc[b](), a = n
      } finally {
        Sc(), a && Pc.splice(0, b + 1)
      }
      Pc.length = 0
    } finally {
      0 < Rc.length + Pc.length && Nc(Tc, 0)
    }
  }
  function Qc() {
    1 === Rc.length + Pc.length && Nc(Tc, 0)
  }
  xc(window, "focus", Tc);
  /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/

  function Uc(a, b) {
    this.Pa = [];
    this.wo = a;
    this.Po = b || k
  }
  u = Uc.prototype;
  u.ad = n;
  u.Qh = n;
  u.xi = 0;
  u.Gn = n;
  u.Ks = n;
  u.tl = 0;
  u.cancel = function (a) {
    if (this.ad) this.Ei instanceof Uc && this.Ei.cancel();
    else {
      if (this.Ea) {
        var b = this.Ea;
        delete this.Ea;
        a ? b.cancel(a) : (b.tl--, 0 >= b.tl && b.cancel())
      }
      this.wo ? this.wo.call(this.Po, this) : this.Gn = j;
      this.ad || this.gb(new Vc(this))
    }
  };
  u.Fo = function (a, b) {
    Wc(this, a, b);
    this.xi--;
    0 == this.xi && this.ad && Xc(this)
  };

  function Wc(a, b, c) {
    a.ad = j;
    a.Ei = c;
    a.Qh = !b;
    Xc(a)
  }
  u.Xc = function () {
    this.ad && (this.Gn || e(new Yc(this)), this.Gn = n)
  };
  u.ya = function (a) {
    this.Xc();
    Wc(this, j, a)
  };
  u.gb = function (a) {
    this.Xc();
    Wc(this, n, a)
  };
  u.bg = function (a, b) {
    return Zc(this, a, k, b)
  };
  u.il = function (a, b) {
    return Zc(this, k, a, b)
  };

  function Zc(a, b, c, d) {
    a.Pa.push([b, c, d]);
    a.ad && Xc(a);
    return a
  }
  u.us = function (a, b) {
    return Zc(this, a, a, b)
  };

  function $c(a) {
    return fb(a.Pa, function (a) {
      return na(a[1])
    })
  }

  function Xc(a) {
    a.Un && (a.ad && $c(a)) && (w.clearTimeout(a.Un), delete a.Un);
    a.Ea && (a.Ea.tl--, delete a.Ea);
    for (var b = a.Ei, c = n, d = n; a.Pa.length && 0 == a.xi;) {
      var f = a.Pa.shift(),
        g = f[0],
        h = f[1],
        f = f[2];
      if (g = a.Qh ? h : g) try {
          var l = g.call(f || a.Po, b);
          y(l) && (a.Qh = a.Qh && (l == b || l instanceof Error), a.Ei = b = l);
          b instanceof Uc && (d = j, a.xi++)
      } catch (m) {
        b = m, a.Qh = j, $c(a) || (c = j)
      }
    }
    a.Ei = b;
    d && a.xi && (Zc(b, A(a.Fo, a, j), A(a.Fo, a, n)), b.Ks = j);
    c && (a.Un = w.setTimeout(function () {
      e(b)
    }, 0))
  }
  function ad(a) {
    var b = new Uc;
    b.ya(a);
    return b
  }

  function Yc(a) {
    Ea.call(this);
    this.Us = a
  }
  D(Yc, Ea);
  Yc.prototype.message = "Deferred has already fired";
  Yc.prototype.name = "AlreadyCalledError";

  function Vc(a) {
    Ea.call(this);
    this.Us = a
  }
  D(Vc, Ea);
  Vc.prototype.message = "Deferred was cancelled";
  Vc.prototype.name = "CancelledError";

  function bd(a, b, c, d, f, g) {
    Uc.call(this, f, g);
    this.Rp = a;
    this.Fl = [];
    this.bp = !! b;
    this.ht = !! c;
    this.Os = !! d;
    for (b = 0; b < a.length; b++) Zc(a[b], A(this.pp, this, b, j), A(this.pp, this, b, n));
    0 == a.length && !this.bp && this.ya(this.Fl)
  }
  D(bd, Uc);
  bd.prototype.kq = 0;
  bd.prototype.pp = function (a, b, c) {
    this.kq++;
    this.Fl[a] = [b, c];
    this.ad || (this.bp && b ? this.ya([a, c]) : this.ht && !b ? this.gb(c) : this.kq == this.Rp.length && this.ya(this.Fl));
    this.Os && !b && (c = k);
    return c
  };
  bd.prototype.gb = function (a) {
    bd.d.gb.call(this, a);
    F(this.Rp, function (a) {
      a.cancel()
    })
  };

  function cd(a) {
    if (1 === arguments.length) return new K(a);
    var b = [];
    F(arguments, function (a) {
      b.push(a instanceof Uc ? a : ad(a))
    });
    return new dd(b)
  }
  function ed(a) {
    z(a) && (a = new M(a));
    var b = new K;
    b.gb(a);
    return b
  }
  function K(a) {
    Uc.call(this);
    y(a) && (a instanceof Uc ? Zc(a, this.ya, this.gb, this) : this.ya(a))
  }
  D(K, Uc);

  function fd(a, b, c) {
    var d, f = b.length,
      g;
    1 < f && (g = b[f - 1], "object" == typeof g && (g != k && !ka(g)) && (d = g, b = 2 === f ? b[0] : rb(b, 0, f - 1)));
    gd(a, b, c, d);
    return a
  }

  function gd(a, b, c, d) {
    var f = d || k;
    b && (la(b) ? F(b, function (a) {
      gd(this, a, c, f)
    }, a) : c.call(a, 1 >= b.length ? b : function (a) {
      if (ka(a)) {
        var c = [];
        F(a, function (a) {
          c.push(a[1])
        });
        return b.apply(f, c)
      }
      return b.call(f, a)
    }, f))
  }
  K.prototype.Rk = function (a, b, c) {
    gd(this, a, Uc.prototype.bg, c);
    gd(this, b, Uc.prototype.il, c);
    return this
  };
  K.prototype.Ze = function (a, b) {
    return fd(this, arguments, Uc.prototype.us)
  };
  K.prototype.G = function (a, b) {
    return fd(this, arguments, Uc.prototype.bg)
  };
  K.prototype.$d = function (a, b) {
    return fd(this, arguments, Uc.prototype.il)
  };

  function dd(a) {
    K.call(this, new bd(a, n, j))
  }
  D(dd, K);

  function hd(a) {
    if ("function" == typeof a.Xa) return a.Xa();
    if (z(a)) return a.split("");
    if (la(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b
    }
    return jc(a)
  }
  function id(a) {
    if ("function" == typeof a.pf) return a.pf();
    if ("function" != typeof a.Xa) {
      if (la(a) || z(a)) {
        for (var b = [], a = a.length, c = 0; c < a; c++) b.push(c);
        return b
      }
      return kc(a)
    }
  }

  function jd(a, b, c) {
    if ("function" == typeof a.forEach) a.forEach(b, c);
    else if (la(a) || z(a)) F(a, b, c);
    else for (var d = id(a), f = hd(a), g = f.length, h = 0; h < g; h++) b.call(c, f[h], d && d[h], a)
  };
  var kd = "StopIteration" in w ? w.StopIteration : Error("StopIteration");

  function ld() {}
  ld.prototype.next = function () {
    e(kd)
  };
  ld.prototype.Pd = function () {
    return this
  };

  function md(a) {
    if (a instanceof ld) return a;
    if ("function" == typeof a.Pd) return a.Pd(n);
    if (la(a)) {
      var b = 0,
        c = new ld;
      c.next = function () {
        for (;;) {
          b >= a.length && e(kd);
          if (b in a) return a[b++];
          b++
        }
      };
      return c
    }
    e(Error("Not implemented"))
  }

  function nd(a, b) {
    if (la(a)) try {
        F(a, b, i)
    } catch (c) {
      c !== kd && e(c)
    } else {
      a = md(a);
      try {
        for (;;) b.call(i, a.next(), i, a)
      } catch (d) {
        d !== kd && e(d)
      }
    }
  };

  function od(a, b) {
    this.wb = {};
    this.Ka = [];
    var c = arguments.length;
    if (1 < c) {
      c % 2 && e(Error("Uneven number of arguments"));
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a) {
      a instanceof od ? (c = a.pf(), d = a.Xa()) : (c = kc(a), d = jc(a));
      for (var f = 0; f < c.length; f++) this.set(c[f], d[f])
    }
  }
  u = od.prototype;
  u.L = 0;
  u.Xi = 0;
  u.Tb = p("L");
  u.Xa = function () {
    pd(this);
    for (var a = [], b = 0; b < this.Ka.length; b++) a.push(this.wb[this.Ka[b]]);
    return a
  };
  u.pf = function () {
    pd(this);
    return this.Ka.concat()
  };
  u.sd = function (a) {
    return qd(this.wb, a)
  };
  u.xh = function (a, b) {
    if (this === a) return j;
    if (this.L != a.Tb()) return n;
    var c = b || rd;
    pd(this);
    for (var d, f = 0; d = this.Ka[f]; f++) if (!c(this.get(d), a.get(d))) return n;
    return j
  };

  function rd(a, b) {
    return a === b
  }
  u.clear = function () {
    this.wb = {};
    this.Xi = this.L = this.Ka.length = 0
  };
  u.remove = function (a) {
    return qd(this.wb, a) ? (delete this.wb[a], this.L--, this.Xi++, this.Ka.length > 2 * this.L && pd(this), j) : n
  };

  function pd(a) {
    if (a.L != a.Ka.length) {
      for (var b = 0, c = 0; b < a.Ka.length;) {
        var d = a.Ka[b];
        qd(a.wb, d) && (a.Ka[c++] = d);
        b++
      }
      a.Ka.length = c
    }
    if (a.L != a.Ka.length) {
      for (var f = {}, c = b = 0; b < a.Ka.length;) d = a.Ka[b], qd(f, d) || (a.Ka[c++] = d, f[d] = 1), b++;
      a.Ka.length = c
    }
  }
  u.get = function (a, b) {
    return qd(this.wb, a) ? this.wb[a] : b
  };
  u.set = function (a, b) {
    qd(this.wb, a) || (this.L++, this.Ka.push(a), this.Xi++);
    this.wb[a] = b
  };
  u.Va = function () {
    return new od(this)
  };
  u.Pd = function (a) {
    pd(this);
    var b = 0,
      c = this.Ka,
      d = this.wb,
      f = this.Xi,
      g = this,
      h = new ld;
    h.next = function () {
      for (;;) {
        f != g.Xi && e(Error("The map has changed since the iterator was created"));
        b >= c.length && e(kd);
        var h = c[b++];
        return a ? h : d[h]
      }
    };
    return h
  };

  function qd(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };

  function sd(a) {
    return td(a || arguments.callee.caller, [])
  }

  function td(a, b) {
    var c = [];
    if (jb(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
      c.push(ud(a) + "(");
      for (var d = a.arguments, f = 0; f < d.length; f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
        switch (typeof g) {
        case "object":
          g = g ? "object" : "null";
          break;
        case "string":
          break;
        case "number":
          g = String(g);
          break;
        case "boolean":
          g = g ? "true" : "false";
          break;
        case "function":
          g = (g = ud(g)) ? g : "[fn]";
          break;
        default:
          g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(td(a.caller, b))
      } catch (h) {
        c.push("[exception trying to get caller]\n")
      }
    } else a ?
        c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
  }
  function ud(a) {
    if (vd[a]) return vd[a];
    a = String(a);
    if (!vd[a]) {
      var b = /function ([^\(]+)/.exec(a);
      vd[a] = b ? b[1] : "[Anonymous]"
    }
    return vd[a]
  }
  var vd = {};

  function wd(a, b, c, d, f) {
    this.reset(a, b, c, d, f)
  }
  wd.prototype.kr = 0;
  wd.prototype.Ml = k;
  wd.prototype.Ll = k;
  var xd = 0;
  wd.prototype.reset = function (a, b, c, d, f) {
    this.kr = "number" == typeof f ? f : xd++;
    this.Mr = d || wa();
    this.Af = a;
    this.Tu = b;
    this.Wp = c;
    delete this.Ml;
    delete this.Ll
  };
  wd.prototype.wn = ca("Af");
  wd.prototype.Ej = p("Tu");
  wd.prototype.lp = p("kr");

  function yd(a) {
    this.oi = a
  }
  yd.prototype.Ea = k;
  yd.prototype.Af = k;
  yd.prototype.eb = k;
  yd.prototype.Th = k;

  function Ad(a, b) {
    this.name = a;
    this.value = b
  }
  Ad.prototype.toString = p("name");
  var Cd = new Ad("OFF", Infinity),
    Dd = new Ad("SHOUT", 1200),
    Ed = new Ad("SEVERE", 1E3),
    Fd = new Ad("WARNING", 900),
    Gd = new Ad("INFO", 800),
    Hd = new Ad("CONFIG", 700),
    Id = new Ad("FINE", 500),
    Jd = new Ad("FINER", 400),
    Kd = new Ad("FINEST", 300);
  u = yd.prototype;
  u.getName = p("oi");
  u.getParent = p("Ea");
  u.ip = function () {
    this.eb || (this.eb = {});
    return this.eb
  };
  u.wn = ca("Af");

  function Ld(a) {
    return a.Af ? a.Af : a.Ea ? Ld(a.Ea) : k
  }
  u.log = function (a, b, c) {
    if (a.value >= Ld(this).value) {
      a = this.wt(a, b, c);
      b = "log:" + a.Ej();
      w.console && (w.console.timeStamp ? w.console.timeStamp(b) : w.console.markTimeline && w.console.markTimeline(b));
      w.msWriteProfilerMark && w.msWriteProfilerMark(b);
      for (b = this; b;) {
        var c = b,
          d = a;
        if (c.Th) for (var f = 0, g = i; g = c.Th[f]; f++) g(d);
        b = b.getParent()
      }
    }
  };
  u.wt = function (a, b, c) {
    var d = new wd(a, String(b), this.oi);
    if (c) {
      d.Ml = c;
      var f;
      var g = arguments.callee.caller;
      try {
        var h;
        var l = ga("window.location.href");
        if (z(c)) h = {
            message: c,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: l,
            stack: "Not available"
        };
        else {
          var m, q, s = n;
          try {
            m = c.lineNumber || c.Fy || "Not available"
          } catch (r) {
            m = "Not available", s = j
          }
          try {
            q = c.fileName || c.filename || c.sourceURL || l
          } catch (v) {
            q = "Not available", s = j
          }
          h = s || !c.lineNumber || !c.fileName || !c.stack ? {
            message: c.message,
            name: c.name,
            lineNumber: m,
            fileName: q,
            stack: c.stack || "Not available"
          } : c
        }
        f = "Message: " + Na(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + Na(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Na(sd(g) + "-> ")
      } catch (x) {
        f = "Exception trying to expose exception! You win, we lose. " + x
      }
      d.Ll = f
    }
    return d
  };

  function Md(a, b) {
    a.log(Fd, b, i)
  }
  function Nd(a, b) {
    a.log(Id, b, i)
  }
  u.yn = ca("Ea");
  var Od = {}, Pd = k;

  function Qd() {
    Pd || (Pd = new yd(""), Od[""] = Pd, Pd.wn(Hd))
  }

  function Rd() {
    Qd();
    return Pd
  }
  function Sd(a) {
    Qd();
    var b;
    if (!(b = Od[a])) {
      b = new yd(a);
      var c = a.lastIndexOf("."),
        d = a.substr(c + 1),
        c = Sd(a.substr(0, c));
      c.ip()[d] = b;
      b.yn(c);
      Od[a] = b
    }
    return b
  };

  function Td(a) {
    return "enterState:" + a
  }
  var Ud = "cancel";

  function Vd() {
    this.Wq = wa()
  }
  var Wd = new Vd;
  Vd.prototype.set = ca("Wq");
  Vd.prototype.reset = function () {
    this.set(wa())
  };
  Vd.prototype.get = p("Wq");

  function Xd(a) {
    this.ic = a || "";
    this.Wx = Wd
  }
  u = Xd.prototype;
  u.Fn = j;
  u.xr = j;
  u.Px = j;
  u.wr = n;
  u.Rx = n;

  function Yd(a) {
    return 10 > a ? "0" + a : String(a)
  }
  function Zd(a, b) {
    var c = (a.Mr - b) / 1E3,
      d = c.toFixed(3),
      f = 0;
    if (1 > c) f = 2;
    else for (; 100 > c;) f++, c *= 10;
    for (; 0 < f--;) d = " " + d;
    return d
  }
  function $d(a) {
    Xd.call(this, a)
  }
  D($d, Xd);

  function ae() {
    this.nx = A(this.vs, this);
    this.zj = new $d;
    this.zj.Fn = n;
    this.Hp = this.zj.wr = n;
    this.Vp = "";
    this.gt = {}
  }
  ae.prototype.vs = function (a) {
    if (!this.gt[a.Wp]) {
      var b;
      b = this.zj;
      var c = [];
      c.push(b.ic, " ");
      if (b.Fn) {
        var d = new Date(a.Mr);
        c.push("[", Yd(d.getFullYear() - 2E3) + Yd(d.getMonth() + 1) + Yd(d.getDate()) + " " + Yd(d.getHours()) + ":" + Yd(d.getMinutes()) + ":" + Yd(d.getSeconds()) + "." + Yd(Math.floor(d.getMilliseconds() / 10)), "] ")
      }
      b.xr && c.push("[", Zd(a, b.Wx.get()), "s] ");
      b.Px && c.push("[", a.Wp, "] ");
      b.Rx && c.push("[", a.Af.name, "] ");
      c.push(a.Ej(), "\n");
      b.wr && a.Ml && c.push(a.Ll, "\n");
      b = c.join("");
      if (be) switch (a.Af) {
        case Dd:
          ce("info",
            b);
          break;
        case Ed:
          ce("error", b);
          break;
        case Fd:
          ce("warn", b);
          break;
        default:
          ce("debug", b)
      } else window.opera ? window.opera.postError(b) : this.Vp += b
    }
  };
  var be = window.console;

  function ce(a, b) {
    var c = be;
    if (c[a]) c[a](b);
    else c.log(b)
  };
  var de, ee = n,
    fe = k;

  function ge() {
    if (!ee) {
      fe = new ae;
      var a;
      a = fe.zj;
      a.Fn = j;
      a.xr = n;
      a = fe;
      if (j != a.Hp) {
        var b = Rd(),
          c = a.nx;
        b.Th || (b.Th = []);
        b.Th.push(c);
        a.Hp = j
      }
      ee = j;
      he(Fd)
    }
  }
  function he(a) {
    ge();
    Rd().wn(a);
    return a
  }
  function ie(a) {
    ge();
    return Sd(a)
  };

  function je(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")")
    } catch (b) {}
    e(Error("Invalid JSON string: " + a))
  }
  function ke(a, b) {
    return (new le(b)).Ma(a)
  }
  function le(a) {
    this.Ck = a
  }
  le.prototype.Ma = function (a) {
    var b = [];
    me(this, a, b);
    return b.join("")
  };

  function me(a, b, c) {
    switch (typeof b) {
    case "string":
      ne(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if (b == k) {
        c.push("null");
        break
      }
      if (ka(b)) {
        var d = b.length;
        c.push("[");
        for (var f = "", g = 0; g < d; g++) c.push(f), f = b[g], me(a, a.Ck ? a.Ck.call(b, String(g), f) : f, c), f = ",";
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), ne(g, c), c.push(":"),
          me(a, a.Ck ? a.Ck.call(b, g, f) : f, c), d = ","));
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
    }
  }
  var oe = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  }, pe = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

  function ne(a, b) {
    b.push('"', a.replace(pe, function (a) {
      if (a in oe) return oe[a];
      var b = a.charCodeAt(0),
        f = "\\u";
      16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
      return oe[a] = f + b.toString(16)
    }), '"')
  };

  function qe(a) {
    return function () {
      return a
    }
  }
  var re = qe(n);

  function se(a, b) {
    a != k && this.append.apply(this, arguments)
  }
  u = se.prototype;
  u.af = "";
  u.set = function (a) {
    this.af = "" + a
  };
  u.append = function (a, b, c) {
    this.af += a;
    if (b != k) for (var d = 1; d < arguments.length; d++) this.af += arguments[d];
    return this
  };
  u.clear = function () {
    this.af = ""
  };
  u.toString = p("af");
  var te = k,
    ue = k,
    ve = k;

  function we() {};

  function xe() {
    this.Pa = Array(4);
    this.Is = Array(64);
    this.Vk = this.jh = 0;
    this.reset()
  }
  D(xe, we);
  xe.prototype.reset = function () {
    this.Pa[0] = 1732584193;
    this.Pa[1] = 4023233417;
    this.Pa[2] = 2562383102;
    this.Pa[3] = 271733878;
    this.Vk = this.jh = 0
  };

  function ye(a, b, c) {
    c || (c = 0);
    var d = Array(16);
    if (z(b)) for (var f = 0; 16 > f; ++f) d[f] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
    else for (f = 0; 16 > f; ++f) d[f] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
    var b = a.Pa[0],
      c = a.Pa[1],
      f = a.Pa[2],
      g = a.Pa[3],
      h = 0,
      h = b + (g ^ c & (f ^ g)) + d[0] + 3614090360 & 4294967295,
      b = c + (h << 7 & 4294967295 | h >>> 25),
      h = g + (f ^ b & (c ^ f)) + d[1] + 3905402710 & 4294967295,
      g = b + (h << 12 & 4294967295 | h >>> 20),
      h = f + (c ^ g & (b ^ c)) + d[2] + 606105819 & 4294967295,
      f = g + (h << 17 & 4294967295 | h >>> 15),
      h = c + (b ^ f &
        (g ^ b)) + d[3] + 3250441966 & 4294967295,
      c = f + (h << 22 & 4294967295 | h >>> 10),
      h = b + (g ^ c & (f ^ g)) + d[4] + 4118548399 & 4294967295,
      b = c + (h << 7 & 4294967295 | h >>> 25),
      h = g + (f ^ b & (c ^ f)) + d[5] + 1200080426 & 4294967295,
      g = b + (h << 12 & 4294967295 | h >>> 20),
      h = f + (c ^ g & (b ^ c)) + d[6] + 2821735955 & 4294967295,
      f = g + (h << 17 & 4294967295 | h >>> 15),
      h = c + (b ^ f & (g ^ b)) + d[7] + 4249261313 & 4294967295,
      c = f + (h << 22 & 4294967295 | h >>> 10),
      h = b + (g ^ c & (f ^ g)) + d[8] + 1770035416 & 4294967295,
      b = c + (h << 7 & 4294967295 | h >>> 25),
      h = g + (f ^ b & (c ^ f)) + d[9] + 2336552879 & 4294967295,
      g = b + (h << 12 & 4294967295 | h >>> 20),
      h =
        f + (c ^ g & (b ^ c)) + d[10] + 4294925233 & 4294967295,
      f = g + (h << 17 & 4294967295 | h >>> 15),
      h = c + (b ^ f & (g ^ b)) + d[11] + 2304563134 & 4294967295,
      c = f + (h << 22 & 4294967295 | h >>> 10),
      h = b + (g ^ c & (f ^ g)) + d[12] + 1804603682 & 4294967295,
      b = c + (h << 7 & 4294967295 | h >>> 25),
      h = g + (f ^ b & (c ^ f)) + d[13] + 4254626195 & 4294967295,
      g = b + (h << 12 & 4294967295 | h >>> 20),
      h = f + (c ^ g & (b ^ c)) + d[14] + 2792965006 & 4294967295,
      f = g + (h << 17 & 4294967295 | h >>> 15),
      h = c + (b ^ f & (g ^ b)) + d[15] + 1236535329 & 4294967295,
      c = f + (h << 22 & 4294967295 | h >>> 10),
      h = b + (f ^ g & (c ^ f)) + d[1] + 4129170786 & 4294967295,
      b = c + (h << 5 & 4294967295 |
        h >>> 27),
      h = g + (c ^ f & (b ^ c)) + d[6] + 3225465664 & 4294967295,
      g = b + (h << 9 & 4294967295 | h >>> 23),
      h = f + (b ^ c & (g ^ b)) + d[11] + 643717713 & 4294967295,
      f = g + (h << 14 & 4294967295 | h >>> 18),
      h = c + (g ^ b & (f ^ g)) + d[0] + 3921069994 & 4294967295,
      c = f + (h << 20 & 4294967295 | h >>> 12),
      h = b + (f ^ g & (c ^ f)) + d[5] + 3593408605 & 4294967295,
      b = c + (h << 5 & 4294967295 | h >>> 27),
      h = g + (c ^ f & (b ^ c)) + d[10] + 38016083 & 4294967295,
      g = b + (h << 9 & 4294967295 | h >>> 23),
      h = f + (b ^ c & (g ^ b)) + d[15] + 3634488961 & 4294967295,
      f = g + (h << 14 & 4294967295 | h >>> 18),
      h = c + (g ^ b & (f ^ g)) + d[4] + 3889429448 & 4294967295,
      c = f + (h << 20 & 4294967295 |
        h >>> 12),
      h = b + (f ^ g & (c ^ f)) + d[9] + 568446438 & 4294967295,
      b = c + (h << 5 & 4294967295 | h >>> 27),
      h = g + (c ^ f & (b ^ c)) + d[14] + 3275163606 & 4294967295,
      g = b + (h << 9 & 4294967295 | h >>> 23),
      h = f + (b ^ c & (g ^ b)) + d[3] + 4107603335 & 4294967295,
      f = g + (h << 14 & 4294967295 | h >>> 18),
      h = c + (g ^ b & (f ^ g)) + d[8] + 1163531501 & 4294967295,
      c = f + (h << 20 & 4294967295 | h >>> 12),
      h = b + (f ^ g & (c ^ f)) + d[13] + 2850285829 & 4294967295,
      b = c + (h << 5 & 4294967295 | h >>> 27),
      h = g + (c ^ f & (b ^ c)) + d[2] + 4243563512 & 4294967295,
      g = b + (h << 9 & 4294967295 | h >>> 23),
      h = f + (b ^ c & (g ^ b)) + d[7] + 1735328473 & 4294967295,
      f = g + (h << 14 & 4294967295 |
        h >>> 18),
      h = c + (g ^ b & (f ^ g)) + d[12] + 2368359562 & 4294967295,
      c = f + (h << 20 & 4294967295 | h >>> 12),
      h = b + (c ^ f ^ g) + d[5] + 4294588738 & 4294967295,
      b = c + (h << 4 & 4294967295 | h >>> 28),
      h = g + (b ^ c ^ f) + d[8] + 2272392833 & 4294967295,
      g = b + (h << 11 & 4294967295 | h >>> 21),
      h = f + (g ^ b ^ c) + d[11] + 1839030562 & 4294967295,
      f = g + (h << 16 & 4294967295 | h >>> 16),
      h = c + (f ^ g ^ b) + d[14] + 4259657740 & 4294967295,
      c = f + (h << 23 & 4294967295 | h >>> 9),
      h = b + (c ^ f ^ g) + d[1] + 2763975236 & 4294967295,
      b = c + (h << 4 & 4294967295 | h >>> 28),
      h = g + (b ^ c ^ f) + d[4] + 1272893353 & 4294967295,
      g = b + (h << 11 & 4294967295 | h >>> 21),
      h = f + (g ^
        b ^ c) + d[7] + 4139469664 & 4294967295,
      f = g + (h << 16 & 4294967295 | h >>> 16),
      h = c + (f ^ g ^ b) + d[10] + 3200236656 & 4294967295,
      c = f + (h << 23 & 4294967295 | h >>> 9),
      h = b + (c ^ f ^ g) + d[13] + 681279174 & 4294967295,
      b = c + (h << 4 & 4294967295 | h >>> 28),
      h = g + (b ^ c ^ f) + d[0] + 3936430074 & 4294967295,
      g = b + (h << 11 & 4294967295 | h >>> 21),
      h = f + (g ^ b ^ c) + d[3] + 3572445317 & 4294967295,
      f = g + (h << 16 & 4294967295 | h >>> 16),
      h = c + (f ^ g ^ b) + d[6] + 76029189 & 4294967295,
      c = f + (h << 23 & 4294967295 | h >>> 9),
      h = b + (c ^ f ^ g) + d[9] + 3654602809 & 4294967295,
      b = c + (h << 4 & 4294967295 | h >>> 28),
      h = g + (b ^ c ^ f) + d[12] + 3873151461 & 4294967295,
      g = b + (h << 11 & 4294967295 | h >>> 21),
      h = f + (g ^ b ^ c) + d[15] + 530742520 & 4294967295,
      f = g + (h << 16 & 4294967295 | h >>> 16),
      h = c + (f ^ g ^ b) + d[2] + 3299628645 & 4294967295,
      c = f + (h << 23 & 4294967295 | h >>> 9),
      h = b + (f ^ (c | ~g)) + d[0] + 4096336452 & 4294967295,
      b = c + (h << 6 & 4294967295 | h >>> 26),
      h = g + (c ^ (b | ~f)) + d[7] + 1126891415 & 4294967295,
      g = b + (h << 10 & 4294967295 | h >>> 22),
      h = f + (b ^ (g | ~c)) + d[14] + 2878612391 & 4294967295,
      f = g + (h << 15 & 4294967295 | h >>> 17),
      h = c + (g ^ (f | ~b)) + d[5] + 4237533241 & 4294967295,
      c = f + (h << 21 & 4294967295 | h >>> 11),
      h = b + (f ^ (c | ~g)) + d[12] + 1700485571 & 4294967295,
      b = c +
        (h << 6 & 4294967295 | h >>> 26),
      h = g + (c ^ (b | ~f)) + d[3] + 2399980690 & 4294967295,
      g = b + (h << 10 & 4294967295 | h >>> 22),
      h = f + (b ^ (g | ~c)) + d[10] + 4293915773 & 4294967295,
      f = g + (h << 15 & 4294967295 | h >>> 17),
      h = c + (g ^ (f | ~b)) + d[1] + 2240044497 & 4294967295,
      c = f + (h << 21 & 4294967295 | h >>> 11),
      h = b + (f ^ (c | ~g)) + d[8] + 1873313359 & 4294967295,
      b = c + (h << 6 & 4294967295 | h >>> 26),
      h = g + (c ^ (b | ~f)) + d[15] + 4264355552 & 4294967295,
      g = b + (h << 10 & 4294967295 | h >>> 22),
      h = f + (b ^ (g | ~c)) + d[6] + 2734768916 & 4294967295,
      f = g + (h << 15 & 4294967295 | h >>> 17),
      h = c + (g ^ (f | ~b)) + d[13] + 1309151649 & 4294967295,
      c = f + (h << 21 & 4294967295 | h >>> 11),
      h = b + (f ^ (c | ~g)) + d[4] + 4149444226 & 4294967295,
      b = c + (h << 6 & 4294967295 | h >>> 26),
      h = g + (c ^ (b | ~f)) + d[11] + 3174756917 & 4294967295,
      g = b + (h << 10 & 4294967295 | h >>> 22),
      h = f + (b ^ (g | ~c)) + d[2] + 718787259 & 4294967295,
      f = g + (h << 15 & 4294967295 | h >>> 17),
      h = c + (g ^ (f | ~b)) + d[9] + 3951481745 & 4294967295;
    a.Pa[0] = a.Pa[0] + b & 4294967295;
    a.Pa[1] = a.Pa[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
    a.Pa[2] = a.Pa[2] + f & 4294967295;
    a.Pa[3] = a.Pa[3] + g & 4294967295
  }
  xe.prototype.update = function (a, b) {
    y(b) || (b = a.length);
    for (var c = b - 64, d = this.Is, f = this.jh, g = 0; g < b;) {
      if (0 == f) for (; g <= c;) ye(this, a, g), g += 64;
      if (z(a)) for (; g < b;) {
          if (d[f++] = a.charCodeAt(g++), 64 == f) {
            ye(this, d);
            f = 0;
            break
          }
      } else for (; g < b;) if (d[f++] = a[g++], 64 == f) {
            ye(this, d);
            f = 0;
            break
          }
    }
    this.jh = f;
    this.Vk += b
  };

  function ze(a, b) {
    b === i && (b = j);
    switch (a.length % 4) {
    case 0:
      break;
    case 2:
      a += "..";
      break;
    case 3:
      a += ".";
      break;
    default:
      return k
    }
    var c = a;
    if (!te) {
      te = {};
      ue = {};
      ve = {};
      for (var d = 0; 65 > d; d++) te[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d), ue[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(d), ve[ue[d]] = d
    }
    for (var f = ve, d = [], g = 0; g < c.length;) {
      var h = f[c.charAt(g++)],
        l = g < c.length ? f[c.charAt(g)] : 0;
      ++g;
      var m = g < c.length ? f[c.charAt(g)] : 0;
      ++g;
      var q = g < c.length ?
        f[c.charAt(g)] : 0;
      ++g;
      (h == k || l == k || m == k || q == k) && e(Error());
      d.push(h << 2 | l >> 4);
      64 != m && (d.push(l << 4 & 240 | m >> 2), 64 != q && d.push(m << 6 & 192 | q))
    }
    c = [];
    for (g = f = 0; f < d.length;) h = d[f++], 128 > h ? c[g++] = String.fromCharCode(h) : 191 < h && 224 > h ? (l = d[f++], c[g++] = String.fromCharCode((h & 31) << 6 | l & 63)) : (l = d[f++], m = d[f++], c[g++] = String.fromCharCode((h & 15) << 12 | (l & 63) << 6 | m & 63));
    d = c.join("");
    return b ? je(d) : d
  }

  function Ae(a) {
    var b = new xe;
    b.update(La(a).toLowerCase());
    var c = Array((56 > b.jh ? 64 : 128) - b.jh);
    c[0] = 128;
    for (a = 1; a < c.length - 8; ++a) c[a] = 0;
    for (var d = 8 * b.Vk, a = c.length - 8; a < c.length; ++a) c[a] = d & 255, d /= 256;
    b.update(c);
    c = Array(16);
    for (a = d = 0; 4 > a; ++a) for (var f = 0; 32 > f; f += 8) c[d++] = b.Pa[a] >>> f & 255;
    return "https://www.gravatar.com/avatar/" + eb(c, function (a) {
      a = a.toString(16);
      return 1 < a.length ? a : "0" + a
    }).join("") + "?d=mm"
  }
  var Be = na(Object.prototype.getPrototypeOf) ? Object.prototype.getPrototypeOf : function (a) {
      return a.__proto__ || a.constructor.prototype
    };

  function Ce(a, b) {
    function c() {}
    c.prototype = a;
    var d = new c;
    b && rc(d, b);
    return d
  }
  var De = -1;

  function Ee() {
    var a = new Date,
      b = a.getTime();
    de && (b += de, a.setTime(b));
    return a
  }
  function Fe(a, b, c) {
    b.prototype.el = a;
    c && (b.prototype.ho = c);
    b.prototype.ea = ie("vline." + a + (c || ""))
  }

  function Ge(a) {
    return z(a) ? a : z(a.type) ? a.type : z(a.el) ? z(a.ho) ? a.el + a.ho : a.el : Be(a) === Object.prototype ? "" : (a = /function (.{1,})\(/.exec(a.constructor.toString())) && 1 < a.length ? a[1] : ""
  }
  var He = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759,
    2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977,
    2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755,
    2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956,
    3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
    936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
  ];

  function Ie(a) {
    return z(a) ? a : a instanceof O ? a.m() : a.path || k
  }
  function Je(a) {
    if (a) {
      if (a instanceof O) return a;
      if (oa(a)) return Ke(Le, a, i, O).yb();
      if (z(a)) return Ke(Le, k, a, O).yb()
    }
    return (new O).yb()
  }
  function Me(a, b, c, d) {
    Ne(Oe, a, "", b, c, rb(arguments, 3))
  }
  function Pe(a, b, c, d) {
    Ne(Qe, a, "", b, c, rb(arguments, 3))
  }
  function Re(a, b, c, d) {
    Ne(Le, a, "entity" === a ? "" : "Entity", b, c, rb(arguments, 3))
  }

  function Se(a, b) {
    b = y(b) ? b : j;
    oa(a) && na(a.Ma) && (a = a.Ma());
    if (oa(a)) {
      if (la(a)) {
        var c = a,
          d = b,
          f, g = [];
        for (f = 0; f < c.length; ++f) g.push(d ? Se(c[f], d) : c[f]);
        return g
      }
      if (Be(a) === Object.prototype) return Te(a, b)
    }
    return a
  }
  function Te(a, b) {
    var c, d = {};
    for (c in a) a.hasOwnProperty(c) && (y(a[c]) && !/(^_)|(_$)/.test(c)) && (d[c] = b ? Se(a[c], b) : a[c]);
    return d
  }
  function Ue(a, b, c, d) {
    var f;
    if (a.dh) {
      if (f = a.dh[b]) return f.call(a, c), j;
      if (d && (f = a.dh["$*"])) return f.call(a, b, c), j
    }
    return n
  }

  function Ve(a, b) {
    var c = y(b) ? b : j,
      d = new se;
    We(d, a, 0, c);
    return d.toString()
  }
  var Oe = {}, Qe = {}, Le = {};

  function Ne(a, b, c, d, f, g) {
    f && (d.cl = f);
    if (g && 0 < g.length) {
      var f = ba(),
        h = Be(d.prototype).dh;
      h && (f.prototype = h);
      f = d.prototype.dh = new f;
      for (h = 0; h < g.length; h += 2) f[g[h]] = g[h + 1]
    }
    d.fo = ba();
    d.fo.prototype = d.prototype;
    z(b) ? (a[b] = d, Fe(b, d, c)) : F(b, function (b) {
      a[b] = d
    })
  }

  function Ke(a, b, c, d, f) {
    c = c || b && b.type;
    b = b || {
      type: c
    };
    c && Fa(c, "x-msg-") && (c = "x-msg");
    var g = a[c] || d;
    if (!g) return g === k ? k : pc(b);
    var h = [],
      l = k;
    g.cl ? (l = {}, a = function (a, b) {
      var c = cb(g.cl, b);
      if (0 <= c) return h[c] = a, j;
      l[b] = a;
      return n
    }, ic(b, a), f && a(f, "$entity"), f = cb(g.cl, "$props"), 0 < f && (h[f] = l, l = k)) : l = b;
    var m = new g.fo;
    g.apply(m, h);
    m.dh && ic(l, function (a, b) {
      Ue(m, b, a, j)
    });
    return m
  }

  function We(a, b, c, d) {
    switch (typeof b) {
    case "string":
      if (/\s/.test(b)) {
        a.append("'", b, "'");
        return
      }
      break;
    case "object":
      if (b == k) break;
      var f = 0;
      if (la(b)) {
        a.append("[");
        F(b, function (b) {
          0 < f++ && a.append(", ");
          We(a, b, c + 1, j)
        });
        a.append("]");
        return
      }
      if (0 < c && b.toString !== Object.prototype.toString) {
        a.append(b.toString());
        return
      }
      var g = Se(b, n);
      if (oa(g)) {
        var h = Ge(b);
        d && a.append("{");
        h && a.append(h);
        Be(g) === Object.prototype && (b = kc(g), bb.sort.call(b, sb), F(b, function (b) {
          var d = g[b];
          !("type" === b && d === h) && d != k && (0 === f++ ?
            h && a.append(": ") : a.append(", "), a.append(b, "="), We(a, d, c + 1, j))
        }));
        d && a.append("}")
      } else a.append(g);
      return
    }
    a.append(String(b))
  };

  function Xe() {}
  Xe.prototype.toString = function () {
    return Ve(this)
  };
  Xe.prototype.Da = function () {
    return Ge(this)
  };
  Xe.prototype.Ma = function () {
    return Te(this, j)
  };

  function P(a, b, c) {
    ac.call(this, a, b);
    c && rc(this, c);
    b && na(b.w) && (a = b.w(j)) && (this.session = a)
  }
  D(P, ac);
  Me("event", P);
  P.prototype.Ma = function () {
    var a = {}, b;
    for (b in this) this.hasOwnProperty(b) && "currentTarget" !== b && (a[b] = this[b]);
    return a
  };
  P.prototype.toString = function () {
    return Ve(this.Ma())
  };

  function Ye(a, b, c) {
    P.call(this, a, b);
    this.stream = c
  }
  D(Ye, P);

  function Ze(a) {
    ya.call(this);
    this.Sh = a;
    this.Ka = []
  }
  D(Ze, ya);
  var $e = [];
  Ze.prototype.h = function (a, b, c, d, f) {
    ka(b) || ($e[0] = b, b = $e);
    for (var g = 0; g < b.length; g++) {
      var h = xc(a, b[g], c || this, d || n, f || this.Sh || this);
      this.Ka.push(h)
    }
    return this
  };
  Ze.prototype.Kb = function (a, b, c, d, f) {
    if (ka(b)) for (var g = 0; g < b.length; g++) this.Kb(a, b[g], c, d, f);
    else {
      a: {
        c = c || this;
        f = f || this.Sh || this;
        d = !! d;
        if (a = Bc(a, b, d)) for (b = 0; b < a.length; b++) if (!a[b].Kf && a[b].Cg == c && a[b].capture == d && a[b].Nj == f) {
              a = a[b];
              break a
            }
        a = k
      }
      a && (a = a.key, Cc(a), mb(this.Ka, a))
    }
    return this
  };

  function af(a) {
    F(a.Ka, Cc);
    a.Ka.length = 0
  }
  Ze.prototype.A = function () {
    Ze.d.A.call(this);
    af(this)
  };
  Ze.prototype.handleEvent = function () {
    e(Error("EventHandler.handleEvent not implemented"))
  };

  function bf(a) {
    P.call(this, "error");
    this.error = a
  }
  D(bf, P);
  bf.prototype.getError = p("error");

  function cf(a, b) {
    P.call(this, a, b)
  }
  D(cf, P);
  cf.prototype.U = p("target");

  function df(a, b, c, d, f) {
    P.call(this, a, b);
    this.key = c;
    this.val = d;
    this.oldVal = f
  }
  D(df, cf);
  df.prototype.getKey = p("key");
  df.prototype.da = p("val");

  function ef(a, b, c, d) {
    P.call(this, a, b);
    this.item = c;
    this.index = d
  }
  D(ef, P);
  ef.prototype.nf = ea(4);
  ef.prototype.U = p("item");

  function ff(a, b) {
    ya.call(this);
    a && this.xc(a);
    b && (this.Ob = b)
  }
  D(ff, Ic);
  ff.prototype.ea = k;
  Fe("eventTarget", ff);
  var gf = /\s+/;
  u = ff.prototype;
  u.Es = n;
  u.Ob = n;
  u.Ef = k;
  u.Fd = k;
  u.jb = "";
  u.Z = k;
  u.A = function () {
    this.Ob = n;
    this.Fd = this.Ef = k;
    this.Z && (this.Z.J(), this.Z = k);
    ff.d.A.call(this)
  };
  u.I = function () {
    return this.Z || (this.Z = new Ze(this))
  };
  u.toString = function () {
    return Ve(this)
  };
  u.F = p("jb");
  u.Oa = function (a, b) {
    var c = y(a) ? a : j,
      d = y(b) ? b : j;
    this.Ob !== c && (c ? (c = this.Le) && !c.Ob ? zc(c, "ready", this.Oa, n, this) : this.uc(d) : (this.Ob = n, d && Hc(this, "unready")))
  };
  u.uc = function (a) {
    this.Ob = j;
    a && (this.dispatchEvent("ready"), this.dispatchEvent("ready:" + Ge(this), k, j));
    this.Ef && (F(this.Ef, function (a) {
      this.dispatchEvent(a)
    }, this), this.Ef = k)
  };
  u.dispatchEvent = function (a, b, c) {
    return !this.Ob && !this.Es ? (this.Ef = this.Ef || [], this.Ef.push(a), j) : this.tj(a, b, c)
  };

  function hf(a, b, c, d, f) {
    b = new df("change:" + b, a, b, d, c);
    a.dispatchEvent(b, k, j);
    b.type = "change";
    a.dispatchEvent(b, k, f)
  }
  u.tj = function (a, b, c) {
    a.type || (a = new P(String(a), this, b));
    !c && Id.value >= Ld(this.ea).value && Nd(this.ea, "<<" + Ve(a, n) + ">>");
    c = Hc(this, a);
    if (this.Fd) for (var d = this.Fd, f = 0; c !== n && f < d.length; ++f) c = d[f].dispatchEvent(a, b, j);
    return c
  };
  u.error = function (a, b) {
    z(a) && (a = new M(a, b));
    this.ea.log(Ed, b || a.message || "ERROR", a);
    this.dispatchEvent(new bf(a));
    return a
  };
  u.on = function (a, b, c) {
    F(a.split(gf), function (a) {
      this.addEventListener(a, b, n, c)
    }, this);
    return this
  };
  u.qi = function (a, b, c) {
    F(a.split(gf), function () {
      this.removeEventListener(a, b, n, c)
    }, this);
    return this
  };
  u.Ke = function (a, b, c) {
    F(a.split(gf), function () {
      zc(this, a, b, n, c)
    }, this);
    return this
  };

  function jf(a, b) {
    a.Fd = a.Fd ? ob(a.Fd) : [];
    lb(a.Fd, b)
  }
  u.j = function (a, b) {
    if (Id.value >= Ld(this.ea).value) {
      var c;
      c = 2 === arguments.length ? b : sc.apply(k, rb(arguments, 1));
      var d = Ve(this.toString());
      c = Ve(c, n);
      Nd(this.ea, a + "<" + d + ">(" + c + ")")
    }
  };

  function kf(a) {
    ff.call(this);
    this.ca = a || k;
    this.Ub = i;
    this.Vq = 1
  }
  D(kf, ff);
  u = kf.prototype;
  u.ca = k;
  u.fj = n;
  u.toString = function () {
    return this.m()
  };
  u.Ta = function () {
    this.Vq++;
    return this
  };
  u.fa = function () {
    0 === --this.Vq && this.J()
  };
  u.yb = function () {
    Rc.push(this);
    Qc();
    return this
  };

  function Q(a, b) {
    var c = a.get(b);
    return c != k ? String(c) : ""
  }
  function lf(a, b) {
    var c = a.get(b);
    return c ? Number(c) : 0
  }
  function mf(a, b) {
    var c = a.get(b);
    return z(c) ? "true" === c.toLowerCase() ? j : n : Boolean(c)
  }
  u.m = function () {
    return this.Ub || ""
  };
  u.w = function (a) {
    var b = this.ca && this.ca.w();
    !b && !a && e(new M("ILLEGAL_STATE", "Object not in cache."));
    return b
  };
  u.A = function () {
    this.Ub = i;
    this.ca && (this.ca = k);
    kf.d.A.call(this)
  };
  u.hv = function () {
    (this.fj = n) || this.nq();
    this.fa()
  };
  u.nq = ba();
  var nf, of = !G || Ub(9),
    pf = !I && !G || G && Ub(9) || I && Sb("1.9.1"),
    qf = G && !Sb("9"),
    rf = G || Fb || J;

  function sf(a) {
    a = a.className;
    return z(a) && a.match(/\S+/g) || []
  }
  function tf(a, b) {
    for (var c = sf(a), d = rb(arguments, 1), f = c.length + d.length, g = c, h = 0; h < d.length; h++) jb(g, d[h]) || g.push(d[h]);
    a.className = c.join(" ");
    return c.length == f
  }
  function uf(a, b) {
    var c = sf(a),
      d = rb(arguments, 1),
      f, g = d;
    f = db(c, function (a) {
      return !jb(g, a)
    });
    a.className = f.join(" ");
    return f.length == c.length - d.length
  }
  function vf(a, b, c) {
    for (var d = sf(a), f = n, g = 0; g < d.length; g++) d[g] == b && (qb(d, g--, 1), f = j);
    f && (d.push(c), a.className = d.join(" "))
  }

  function wf(a, b, c) {
    c ? tf(a, b) : uf(a, b)
  };

  function xf(a, b) {
    this.x = y(a) ? a : 0;
    this.y = y(b) ? b : 0
  }
  xf.prototype.Va = function () {
    return new xf(this.x, this.y)
  };

  function yf(a, b) {
    return new xf(a.x - b.x, a.y - b.y)
  };

  function zf(a, b) {
    this.width = a;
    this.height = b
  }
  function Af(a, b) {
    return a == b ? j : !a || !b ? n : a.width == b.width && a.height == b.height
  }
  zf.prototype.Va = function () {
    return new zf(this.width, this.height)
  };
  zf.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  zf.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  zf.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };

  function Bf(a) {
    return a ? new Cf(Df(a)) : nf || (nf = new Cf)
  }
  function Ef(a, b, c) {
    return Ff(document, a, b, c)
  }
  function Gf(a, b) {
    var c = b || document;
    c.querySelectorAll && c.querySelector ? c = c.querySelector("." + a) : (c = b || document, c = (c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Ff(document, "*", a, b))[0]);
    return c || k
  }

  function Ff(a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? b.toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        for (var d = {}, f = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[f++] = h);
        d.length = f;
        return d
      }
      return a
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (g = f = 0; h = a[g]; g++) b = h.className, "function" == typeof b.split && jb(b.split(/\s+/), c) && (d[f++] = h);
      d.length = f;
      return d
    }
    return a
  }

  function Hf(a, b) {
    ic(b, function (b, d) {
      "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in If ? a.setAttribute(If[d], b) : Fa(d, "aria-") || Fa(d, "data-") ? a.setAttribute(d, b) : a[d] = b
    })
  }
  var If = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };

  function Jf(a) {
    a = (a || window).document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new zf(a.clientWidth, a.clientHeight)
  }
  function Kf(a) {
    return !J && "CSS1Compat" == a.compatMode ? a.documentElement : a.body
  }
  function Lf(a) {
    return a ? a.parentWindow || a.defaultView : window
  }
  function Mf(a, b, c) {
    return Nf(document, arguments)
  }

  function Nf(a, b) {
    var c = b[0],
      d = b[1];
    if (!of && d && (d.name || d.type)) {
      c = ["<", c];
      d.name && c.push(' name="', Na(d.name), '"');
      if (d.type) {
        c.push(' type="', Na(d.type), '"');
        var f = {};
        rc(f, d);
        delete f.type;
        d = f
      }
      c.push(">");
      c = c.join("")
    }
    c = a.createElement(c);
    d && (z(d) ? c.className = d : ka(d) ? tf.apply(k, [c].concat(d)) : Hf(c, d));
    2 < b.length && Of(a, c, b, 2);
    return c
  }

  function Of(a, b, c, d) {
    function f(c) {
      c && b.appendChild(z(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
      var g = c[d];
      if (la(g) && !(oa(g) && 0 < g.nodeType)) {
        var h = F,
          l;
        a: {
          if ((l = g) && "number" == typeof l.length) {
            if (oa(l)) {
              l = "function" == typeof l.item || "string" == typeof l.item;
              break a
            }
            if (na(l)) {
              l = "function" == typeof l.item;
              break a
            }
          }
          l = n
        }
        h(l ? ob(g) : g, f)
      } else f(g)
    }
  }
  function Pf(a, b) {
    Of(Df(a), a, arguments, 1)
  }
  function Qf(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
  }

  function Rf(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
  }
  function Sf(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
  }
  function Uf(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : k
  }
  function Vf(a) {
    if (a.firstElementChild != i) a = a.firstElementChild;
    else for (a = a.firstChild; a && 1 != a.nodeType;) a = a.nextSibling;
    return a
  }

  function Wf(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
  }
  function Df(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }
  function Xf(a) {
    return a.contentDocument || a.contentWindow.document
  }

  function Yf(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
      a.firstChild.data = b
    } else Qf(a), a.appendChild(Df(a).createTextNode(b))
  }
  function Zf(a, b) {
    var c = [];
    return $f(a, b, c, j) ? c[0] : i
  }
  function $f(a, b, c, d) {
    if (a != k) for (a = a.firstChild; a;) {
        if (b(a) && (c.push(a), d) || $f(a, b, c, d)) return j;
        a = a.nextSibling
    }
    return n
  }
  var ag = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
  }, bg = {
      IMG: " ",
      BR: "\n"
    };

  function cg(a) {
    var b = a.getAttributeNode("tabindex");
    return b && b.specified ? (a = a.tabIndex, ma(a) && 0 <= a && 32768 > a) : n
  }
  function dg(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
  }
  function eg(a) {
    if (qf && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
      var b = [];
      fg(a, b, j);
      a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    qf || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
  }

  function gg(a) {
    var b = [];
    fg(a, b, n);
    return b.join("")
  }
  function fg(a, b, c) {
    if (!(a.nodeName in ag)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
      else if (a.nodeName in bg) b.push(bg[a.nodeName]);
    else for (a = a.firstChild; a;) fg(a, b, c), a = a.nextSibling
  }
  function Cf(a) {
    this.ma = a || w.document || document
  }
  u = Cf.prototype;
  u.C = Bf;

  function hg(a) {
    return a.ma
  }
  u.e = function (a) {
    return z(a) ? this.ma.getElementById(a) : a
  };
  u.ye = ea(2);
  u.D = function (a, b, c) {
    return Nf(this.ma, arguments)
  };
  u.createElement = function (a) {
    return this.ma.createElement(a)
  };
  u.createTextNode = function (a) {
    return this.ma.createTextNode(a)
  };

  function ig(a) {
    return "CSS1Compat" == a.ma.compatMode
  }
  function jg(a) {
    return a.ma.parentWindow || a.ma.defaultView
  }
  function kg(a) {
    var b = a.ma,
      a = Kf(b),
      b = b.parentWindow || b.defaultView;
    return new xf(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
  }
  u.appendChild = function (a, b) {
    a.appendChild(b)
  };
  u.append = Pf;
  u.lu = Rf;
  u.ku = Sf;
  u.removeNode = Uf;
  u.ip = function (a) {
    return pf && a.children != i ? a.children : db(a.childNodes, function (a) {
      return 1 == a.nodeType
    })
  };
  u.kp = Vf;
  u.contains = Wf;
  G && Sb(8);

  function R(a, b) {
    function c() {}
    c.prototype = a;
    var d = new c,
      f;
    for (f in b) d[f] = b[f];
    return d
  };

  function lg() {
    return "Email Address"
  };
  var mg = {
    BAD_PARAM: t("One or more inputs is invalid."),
    BUG: t("That's a bug!"),
    TIMED_OUT: t("Timed out"),
    NOT_FOUND: t("Not found"),
    CONNECTION_FAILED: t("Connection failed"),
    AUTH_FAILED: t("Login to server failed. Check login parameters."),
    FORBIDDEN: t("Access forbidden"),
    SERVER_ERROR: t("Server error"),
    FIELD_REQUIRED: function (a) {
      return a.name + " can't be blank"
    },
    INVALID_EMAIL: t("Email is invalid"),
    INVALID_PASSWORD: t("Password must be at least six characters long"),
    PASSWORDS_DONT_MATCH: t("Passwords don't match"),
    INVALID_URL: t("Invalid URL"),
    APPID_NOT_FOUND: t("AppId not found. This app may have been deleted"),
    INVALID_TOKEN: t("This link is invalid or has expired"),
    USERID_NOT_FOUND: t("Account not found"),
    NO_RELAY_FOUND: t("No relay servers were available"),
    APPID_EXISTS: t("AppId already exists"),
    EMAIL_EXISTS: t("An account with this email address already exists"),
    INVALID_PAYLOAD: t("An invalid payload was passed in the request"),
    BAD_CREDENTIALS: t("Incorrect email or password"),
    ACCESS_DENIED: t("You do not have permission to perform this operation"),
    RSC_EXISTS: function (a) {
      return a.name + " already exists"
    },
    INVALID_CHAR: function (a) {
      return a.name + " cannot have spaces or special characters"
    },
    INVALID_FIELD: function (a) {
      return a.name + " has invalid characters"
    },
    SUBSCRIPTION_LIMIT_EXCEEDED: t("Too many subscriptions")
  };

  function M(a, b) {
    var c = a,
      d = b ? Ve(b) : k;
    d && (c += " (" + d + ")");
    Ea.call(this, c);
    this.type = a;
    oa(b) && rc(this, b)
  }
  D(M, Ea);
  Me("Error", M);
  M.prototype.Da = p("type");
  M.prototype.Ej = p("message");
  M.prototype.Ma = function () {
    return Te(this, j)
  };

  function O(a, b, c, d) {
    kf.call(this);
    this.xa = {};
    this.cb = this.Ha = k;
    c && this.set(c);
    a && this.kc(a);
    b && this.ub(b);
    if (!(a = d)) a = Ke(Qe, this.xa, k, k, this);
    a && (this.nb = a)
  }
  D(O, kf);
  u = O.prototype;
  u.nb = k;
  u.Nq = k;
  u.rd = k;
  u.Ja = 0;
  u.Od = 0;
  u.A = function () {
    this.nb && na(this.nb.J) && this.nb.J();
    if (this.ca) {
      if (this.Ja & 7) {
        var a = this.w(j);
        if (a) {
          var b = this.m();
          a.jk ? new K(b) : a.re("unsubscribe", b, b)
        }
        this.Ja = 0
      }
      this.Oa(n, n);
      var c = this.Le,
        a = this.m(),
        b = A(function (a) {
          a.Le === this && a.xc(c)
        }, this);
      ng(this.ca, b, i, a + "/", a + "0", i);
      this.xc(k);
      og(this.ca, this.Ub);
      this.ca = k;
      this.Od = 0
    }
    for (var d in this.Ha) a = this.Ha[d], this.Ha.hasOwnProperty(d) && a instanceof kf && a.fa();
    this.Ha = this.xa = k;
    this.Ls && (this.Ls = k);
    this.nb && (this.nb = k);
    O.d.A.call(this)
  };
  u.Ma = function () {
    var a = {};
    this.forEach(function (b, c) {
      a[c] = Se(b)
    });
    "path" in a && delete a.id;
    return a
  };
  u.valueOf = function () {
    return this.xa || this.Ha
  };

  function pg(a, b) {
    b !== a.Nq && (a.Nq = b, b.Ha || (b.Ha = {}), a.xa = Ce(b.xa, a.xa), a.Ha = Ce(b.Ha, a.Ha), a.I().h(b, "change", a.jw, n, a))
  }
  u.tj = function (a, b, c) {
    c = O.d.tj.call(this, a, b, c);
    this.nb instanceof ff && (z(a) || (a.target = this.nb), this.nb.tj(a, b, j));
    return c
  };
  u.remove = function () {
    return 512 !== (this.Ja & 512) ? this.w().remove(this.m()) : new K(this.m())
  };
  u.Pc = function (a) {
    return this.w().Pc(this.m(), a)
  };
  u.vc = function (a) {
    return this.w().vc(this.m(), a)
  };
  u.forEach = function (a, b) {
    var c = b || this,
      d;
    for (d in this.xa) a.call(c, this.get(d), d)
  };

  function qg(a) {
    var b = {}, c;
    for (c in a.cb) if (2 === a.cb[c]) {
        var d = a.get(c);
        b[c] = d != k ? d : k
      }
    return b
  }
  u.getParent = function () {
    var a = this.Le;
    return a instanceof O ? a : k
  };
  u.get = function (a) {
    return this.Kh(a) || this.xa[a]
  };
  u.Vm = ea(7);
  u.set = function (a, b, c) {
    if (oa(a)) for (var d in a) rg(this, d, a[d], !! b);
    else rg(this, a, b, c);
    return this
  };

  function sg(a, b, c) {
    var b = y(b) ? b : 1,
      d = lf(a, "sessionCount"),
      d = NaN === d ? b : d + b;
    rg(a, "sessionCount", d, c)
  }
  u.Da = function () {
    return this.xa.type || "entity"
  };
  u.kc = function (a) {
    var b = this.xa.type;
    b && a !== b && e(this.error(new M("BAD_PARAM", "type=" + a)));
    "entity" !== a && tg(this, "type", a);
    return this
  };
  u.ub = function (a) {
    S(this, "id", a.substr(a.lastIndexOf("/") + 1));
    return tg(this, "path", a)
  };
  u.m = function () {
    return this.Ub || this.xa.path || this.F() || ""
  };
  u.tb = function (a) {
    if ("path" in this.xa) {
      var b;
      b = this.m() || "/";
      b = ug(vg(b), a);
      tg(this, "path", b)
    }
    return tg(this, "id", a)
  };
  u.F = function () {
    return this.xa.id
  };
  u.nr = function (a) {
    return tg(this, "displayName", a)
  };
  u.be = function () {
    return this.xa.displayName || this.F()
  };
  u.rt = function () {
    return this.xa.iat
  };
  u.lp = function () {
    return this.xa.seq
  };
  u.Nx = function (a) {
    return S(this, "seq", Number(a), j)
  };
  u.uc = function (a) {
    O.d.uc.call(this, a);
    0 === this.Od && (this.Od = 1);
    for (var b in this.Ha) this.Ha.hasOwnProperty(b) && this.Ha[b].Oa(j, a);
    this.nb && this.nb instanceof ff && this.nb.Oa(j, a)
  };
  u.ll = function (a, b) {
    this.ca = a;
    this.Ub = this.m();
    a.w() && (this.Od = 2);
    var c = this.m(),
      d = this.m(),
      f = A(function (a) {
        var b = a.getParent();
        (!b || b.m().length < c.length) && a.xc(this)
      }, this);
    ng(this.ca, f, i, d + "/", d + "0", i);
    for (var d = this.ca, f = this.m(), g;;) {
      f = vg(f);
      if (1 >= f.length) break;
      if (g = d.get(f)) break
    }
    this.yn(g || d);
    b && wg(this, b, {
      props: this.xa
    })
  };

  function wg(a, b, c) {
    var d = new cf(b, a);
    a.dispatchEvent(d, c);
    c = a.Da();
    "entity" !== c && (d.type = b + ":" + c, a.dispatchEvent(d, k, j))
  }
  u.Kh = function (a) {
    return this.Ha && this.Ha[a]
  };

  function rg(a, b, c, d) {
    Ue(a, b, c) || S(a, b, c, d)
  }
  function tg(a, b, c) {
    return S(a, b, String(c), i)
  }

  function S(a, b, c, d) {
    var f = a.get(b);
    if (f === c) return a;
    var g;
    a.Ha && a.Ha.hasOwnProperty(b) && (g = a.Ha[b], a.I().Kb(g, "change", a.Eq), delete a.Ha[b]);
    y(c) ? oa(c) && (c instanceof xg || c instanceof kf) ? (a.Ha || (a.Ha = {}), a.I().h(c, "change", a.Eq, n, a), a.Ha[b] = c.Ta(), a.xa[b] = c.valueOf()) : a.xa[b] = c : a.xa.hasOwnProperty(b) && delete a.xa[b];
    !d && (2 <= a.Od && !/(^_)|(_$)|(^id$)/.test(b)) && (a.cb || (a.cb = {}), a.cb[b] = a.Od, a.fj || (a.Ta(), a.fj = j, Oc(a.hv, a)));
    a.nb && Ue(a.nb, b, c, j);
    !d && a.Ob && hf(a, b, f, c);
    g && g.fa();
    return a
  }
  u.yn = function (a) {
    this.xc(a);
    this.Oa(j, n)
  };
  u.Ig = function () {
    this.Ja |= 512;
    wg(this, "remove")
  };
  u.nq = function () {
    var a = lc(this.cb, 3);
    lc(this.cb, 2) && !a && yg(this);
    for (var b in this.cb) 1 === this.cb[b] && delete this.cb[b]
  };

  function yg(a) {
    var b = a.w(j);
    b && b.put(a.m(), qg(a))
  }
  function zg(a, b) {
    var c = a.Od;
    c && (a.Od = 1);
    try {
      var d = a.lp(),
        f = b.seq;
      if (!d || !(f && f <= d)) {
        var g = pc(a.cb);
        g.iat = "iat" in a.xa;
        for (var h in b) b.hasOwnProperty(h) && !g[h] && rg(a, h, b[h])
      }
    } finally {
      a.Od = c
    }
  }
  u.jw = function (a) {
    this.Ob && (this != a.target && !this.xa.hasOwnProperty(a.getKey())) && (this.dispatchEvent(a, k, j), a.type = "change:" + a.getKey(), this.dispatchEvent(a, k, j), a.type = "change")
  };
  u.Eq = function (a) {
    if (this.Ob) for (var b in this.Ha) if (this.Ha.hasOwnProperty(b) && this !== a.target && this.get(b) === a.target) {
          hf(this, b + "." + a.getKey(), a.oldVal, a.da(), j);
          break
        }
  };
  Re("entity", O, ["type", "path", "$props"], "id", O.prototype.tb, "type", O.prototype.kc, "seq", O.prototype.Nx, "$*", O.prototype.set);
  Fe("entity", O);

  function xg(a, b) {
    ff.call(this, b);
    this.M = a;
    a.nb = this
  }
  D(xg, ff);
  u = xg.prototype;
  u.A = function () {
    this.M = k;
    xg.d.A.call(this)
  };
  u.Ma = function () {
    return this.M.Ma()
  };
  u.toString = function () {
    return this.M.toString()
  };
  u.valueOf = function () {
    return this.M.valueOf()
  };
  u.U = p("M");
  u.Da = function () {
    return this.M.Da()
  };
  u.m = function () {
    return this.M.m()
  };
  u.F = function () {
    return this.M.F()
  };
  u.w = function (a) {
    return this.M.w(a)
  };
  u.Ca = function () {
    return this.w().Ca()
  };
  u.Ta = function () {
    this.M.Ta();
    return this
  };
  u.fa = function () {
    this.M.fa()
  };
  u.yb = function () {
    this.M.yb();
    return this
  };
  var Ag, Bg = window.navigator.getUserMedia || window.navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
  Ag = Bg ? A(Bg, window.navigator) : k;
  var Cg = window.webkitURL || window.mozURL || k;
  var Dg, Eg, Fg, Gg, Hg, Ig, Jg;
  Jg = Ig = Hg = Gg = Fg = Eg = Dg = n;
  var Kg = Bb();
  Kg && (-1 != Kg.indexOf("Firefox") ? Dg = j : -1 != Kg.indexOf("Camino") ? Eg = j : -1 != Kg.indexOf("iPhone") || -1 != Kg.indexOf("iPod") ? Fg = j : -1 != Kg.indexOf("iPad") ? Gg = j : -1 != Kg.indexOf("Android") ? Hg = j : -1 != Kg.indexOf("Chrome") ? Ig = j : -1 != Kg.indexOf("Safari") && (Jg = j));
  var Lg = Dg,
    Mg = Eg,
    Ng = Fg,
    Og = Gg,
    Pg = Hg,
    Qg = Ig,
    Rg = Jg;

  function Sg(a) {
    return (a = a.exec(Bb())) ? a[1] : ""
  }
  var Tg = function () {
    if (Lg) return Sg(/Firefox\/([0-9.]+)/);
    if (G || Fb) return Kb;
    if (Qg) return Sg(/Chrome\/([0-9.]+)/);
    if (Rg) return Sg(/Version\/([0-9.]+)/);
    if (Ng || Og) {
      var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Bb());
      if (a) return a[1] + "." + a[2]
    } else {
      if (Pg) return (a = Sg(/Android\s+([0-9.]+)/)) ? a : Sg(/Version\/([0-9.]+)/);
      if (Mg) return Sg(/Camino\/([0-9.]+)/)
    }
    return ""
  }();

  function Ug() {
    return Gb || Pg
  }
  function Vg() {
    return Lg && !(0 <= $a(Tg, 21)) ? n : !(!window.webkitRTCPeerConnection && !window.mozRTCPeerConnection)
  }
  function Wg() {
    return Qg && 0 <= $a(Tg, "24")
  };

  function Xg(a) {
    M.call(this, "CORRUPT", a)
  }
  D(Xg, M);

  function Yg(a) {
    M.call(this, "BAD_PARAM", a)
  }
  D(Yg, M);

  function Zg(a) {
    M.call(this, "BUG", a)
  }
  D(Zg, M);

  function $g(a) {
    M.call(this, "NOT_READY", a)
  }
  D($g, M);

  function ah(a) {
    this.ag[0][0][0] || this.fl();
    var b, c, d, f, g = this.ag[0][4],
      h = this.ag[1];
    b = a.length;
    var l = 1;
    4 !== b && (6 !== b && 8 !== b) && e(new Yg("invalid aes key size"));
    this.fh = [d = a.slice(0), f = []];
    for (a = b; a < 4 * b + 28; a++) {
      c = d[a - 1];
      if (0 === a % b || 8 === b && 4 === a % b) c = g[c >>> 24] << 24 ^ g[c >> 16 & 255] << 16 ^ g[c >> 8 & 255] << 8 ^ g[c & 255], 0 === a % b && (c = c << 8 ^ c >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7));
      d[a] = d[a - b] ^ c
    }
    for (b = 0; a; b++, a--) c = d[b & 3 ? a : a - 4], f[b] = 4 >= a || 4 > b ? c : h[0][g[c >>> 24]] ^ h[1][g[c >> 16 & 255]] ^ h[2][g[c >> 8 & 255]] ^ h[3][g[c & 255]]
  }
  ah.prototype = {
    ag: [
      [
        [],
        [],
        [],
        [],
        []
      ],
      [
        [],
        [],
        [],
        [],
        []
      ]
    ],
    fl: function () {
      var a = this.ag[0],
        b = this.ag[1],
        c = a[4],
        d = b[4],
        f, g, h, l = [],
        m = [],
        q, s, r, v;
      for (f = 0; 256 > f; f++) m[(l[f] = f << 1 ^ 283 * (f >> 7)) ^ f] = f;
      for (g = h = 0; !c[g]; g ^= q || 1, h = m[h] || 1) {
        r = h ^ h << 1 ^ h << 2 ^ h << 3 ^ h << 4;
        r = r >> 8 ^ r & 255 ^ 99;
        c[g] = r;
        d[r] = g;
        s = l[f = l[q = l[g]]];
        v = 16843009 * s ^ 65537 * f ^ 257 * q ^ 16843008 * g;
        s = 257 * l[r] ^ 16843008 * r;
        for (f = 0; 4 > f; f++) a[f][g] = s = s << 24 ^ s >>> 8, b[f][r] = v = v << 24 ^ v >>> 8
      }
      for (f = 0; 5 > f; f++) a[f] = a[f].slice(0), b[f] = b[f].slice(0)
    }
  };

  function bh(a, b, c) {
    a = ch(a.slice(b / 32), 32 - (b & 31)).slice(1);
    c !== i && (b = c - b, 32 * a.length < b || (a = a.slice(0, Math.ceil(b / 32)), c = a.length, b &= 31, 0 < c && b && (a[c - 1] = dh(b, a[c - 1] & 2147483648 >> b - 1, 1))));
    return a
  }
  function eh(a, b, c) {
    var d = Math.floor(-b - c & 31);
    return ((b + c - 1 ^ b) & -32 ? a[b / 32 | 0] << 32 - d ^ a[b / 32 + 1 | 0] >>> d : a[b / 32 | 0] >>> d) & (1 << c) - 1
  }
  function fh(a, b) {
    if (0 === a.length || 0 === b.length) return a.concat(b);
    var c = a[a.length - 1],
      d = Math.round(c / 1099511627776) || 32;
    return 32 === d ? a.concat(b) : ch(b, d, c | 0, a.slice(0, a.length - 1))
  }

  function gh(a) {
    var b = a.length;
    return 0 === b ? 0 : 32 * (b - 1) + (Math.round(a[b - 1] / 1099511627776) || 32)
  }
  function dh(a, b, c) {
    return 32 === a ? b : (c ? b | 0 : b << 32 - a) + 1099511627776 * a
  }
  function ch(a, b, c, d) {
    var f;
    f = 0;
    for (d === i && (d = []); 32 <= b; b -= 32) d.push(c), c = 0;
    if (0 === b) return d.concat(a);
    for (f = 0; f < a.length; f++) d.push(c | a[f] >>> b), c = a[f] << 32 - b;
    f = a.length ? a[a.length - 1] : 0;
    a = Math.round(f / 1099511627776) || 32;
    d.push(dh(b + a & 31, 32 < b + a ? c : d.pop(), 1));
    return d
  };

  function hh(a) {
    this.fh[0] || this.fl();
    a ? (this.Yi = a.Yi.slice(0), this.eh = a.eh.slice(0), this.$f = a.$f) : this.reset()
  }
  function ih(a) {
    return jh((new hh).update(a))
  }
  hh.prototype = {
    reset: function () {
      this.Yi = this.io.slice(0);
      this.eh = [];
      this.$f = 0;
      return this
    },
    update: function (a) {
      if ("string" === typeof a) {
        var b;
        b = unescape(encodeURIComponent(a));
        for (var c = [], d = 0, a = 0; a < b.length; a++) d = d << 8 | b.charCodeAt(a), 3 === (a & 3) && (c.push(d), d = 0);
        a & 3 && c.push(dh(8 * (a & 3), d));
        a = c
      }
      b = this.eh = fh(this.eh, a);
      c = this.$f;
      a = this.$f = c + gh(a);
      for (c = 512 + c & -512; c <= a; c += 512) kh(this, b.splice(0, 16));
      return this
    },
    io: [],
    fh: [],
    fl: function () {
      var a = 0,
        b = 2,
        c;
      a: for (; 64 > a; b++) {
        for (c = 2; c * c <= b; c++) if (0 === b % c) continue a;
        8 > a && (this.io[a] = 4294967296 * (Math.pow(b, 0.5) - Math.floor(Math.pow(b, 0.5))) | 0);
        this.fh[a] = 4294967296 * (Math.pow(b, 1 / 3) - Math.floor(Math.pow(b, 1 / 3))) | 0;
        a++
      }
    }
  };

  function kh(a, b) {
    var c, d, f, g = b.slice(0),
      h = a.Yi,
      l = a.fh,
      m = h[0],
      q = h[1],
      s = h[2],
      r = h[3],
      v = h[4],
      x = h[5],
      C = h[6],
      H = h[7];
    for (c = 0; 64 > c; c++) 16 > c ? d = g[c] : (d = g[c + 1 & 15], f = g[c + 14 & 15], d = g[c & 15] = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (f >>> 17 ^ f >>> 19 ^ f >>> 10 ^ f << 15 ^ f << 13) + g[c & 15] + g[c + 9 & 15] | 0), d = d + H + (v >>> 6 ^ v >>> 11 ^ v >>> 25 ^ v << 26 ^ v << 21 ^ v << 7) + (C ^ v & (x ^ C)) + l[c], H = C, C = x, x = v, v = r + d | 0, r = s, s = q, q = m, m = d + (q & s ^ r & (q ^ s)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
    h[0] = h[0] + m | 0;
    h[1] = h[1] + q | 0;
    h[2] = h[2] + s | 0;
    h[3] = h[3] + r | 0;
    h[4] = h[4] + v | 0;
    h[5] = h[5] + x | 0;
    h[6] = h[6] + C | 0;
    h[7] = h[7] + H | 0
  }
  function jh(a) {
    var b, c = a.eh,
      d = a.Yi,
      c = fh(c, [dh(1, 1)]);
    for (b = c.length + 2; b & 15; b++) c.push(0);
    c.push(Math.floor(a.$f / 4294967296));
    for (c.push(a.$f | 0); c.length;) kh(a, c.splice(0, 16));
    a.reset();
    return d
  }
  B("sjcl.hash.sha256.hash", ih);

  function lh(a, b, c) {
    var c = c || "user",
      d, f, g = (new Date).valueOf(),
      h = mh[c],
      l = nh();
    d = oh[c];
    d === i && (d = oh[c] = ph++);
    h === i && (h = mh[c] = 0);
    mh[c] = (mh[c] + 1) % qh.length;
    switch (typeof a) {
    case "number":
      break;
    case "object":
      if (b === i) for (c = b = 0; c < a.length; c++) for (f = a[c]; 0 < f;) b++, f >>>= 1;
      qh[h].update([d, rh++, 2, b, g, a.length].concat(a));
      break;
    case "string":
      b === i && (b = a.length);
      qh[h].update([d, rh++, 3, b, g, a.length]);
      qh[h].update(a);
      break;
    default:
      e(new Zg("random: addEntropy only supports number, array or string"))
    }
    sh[h] += b;
    th +=
      b;
    l === uh && (nh() !== uh && vh("seeded", Math.max(wh, th)), a = xh[yh], vh("progress", wh >= a ? 1 : th > a ? 1 : th / a))
  }
  function nh(a) {
    a = xh[a !== i ? a : yh];
    return wh && wh >= a ? sh[0] > zh && (new Date).valueOf() > Ah ? Bh | Fh : Fh : th >= a ? Bh | uh : uh
  }
  var qh = [new hh],
    sh = [0],
    Gh = 0,
    mh = {}, rh = 0,
    oh = {}, ph = 0,
    wh = 0,
    th = 0,
    Ah = 0,
    Hh = [0, 0, 0, 0, 0, 0, 0, 0],
    Ih = [0, 0, 0, 0],
    Jh = i,
    yh = 6,
    Kh = n,
    Lh = {
      My: {},
      Qy: {}
    }, uh = 0,
    Fh = 1,
    Bh = 2,
    xh = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024],
    zh = 80;

  function Mh() {
    for (var a = 0; 4 > a && !(Ih[a] = Ih[a] + 1 | 0, Ih[a]); a++);
    var b = Jh;
    4 !== Ih.length && e(new Yg("invalid aes block size"));
    var a = b.fh[0],
      c = Ih[0] ^ a[0],
      d = Ih[1] ^ a[1],
      f = Ih[2] ^ a[2],
      g = Ih[3] ^ a[3],
      h, l, m, q = a.length / 4 - 2,
      s, r = 4,
      v = [0, 0, 0, 0];
    h = b.ag[0];
    var b = h[0],
      x = h[1],
      C = h[2],
      H = h[3],
      V = h[4];
    for (s = 0; s < q; s++) h = b[c >>> 24] ^ x[d >> 16 & 255] ^ C[f >> 8 & 255] ^ H[g & 255] ^ a[r], l = b[d >>> 24] ^ x[f >> 16 & 255] ^ C[g >> 8 & 255] ^ H[c & 255] ^ a[r + 1], m = b[f >>> 24] ^ x[g >> 16 & 255] ^ C[c >> 8 & 255] ^ H[d & 255] ^ a[r + 2], g = b[g >>> 24] ^ x[c >> 16 & 255] ^ C[d >> 8 & 255] ^ H[f & 255] ^ a[r + 3],
    r += 4, c = h, d = l, f = m;
    for (s = 0; 4 > s; s++) v[s] = V[c >>> 24] << 24 ^ V[d >> 16 & 255] << 16 ^ V[f >> 8 & 255] << 8 ^ V[g & 255] ^ a[r++], h = c, c = d, d = f, f = g, g = h;
    return v
  }
  function Nh() {
    Hh = Mh().concat(Mh());
    Jh = new ah(Hh)
  }
  function Oh(a) {
    lh([a.x || a.clientX || a.offsetX, a.y || a.clientY || a.offsetY], 2, "mouse")
  }
  function Ph() {
    lh(new Date, 2, "loadtime")
  }
  function vh(a, b) {
    var c, d = Lh[a],
      f = [];
    for (c in d) d.hasOwnProperty(c) && f.push(d[c]);
    for (c = 0; c < f.length; c++) f[c](b)
  }
  try {
    var Qh = new Uint32Array(32);
    crypto.getRandomValues(Qh);
    lh(Qh, 1024, "crypto.getRandomValues")
  } catch (Rh) {};
  var Sh = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");

  function Th(a) {
    a || (a = 16);
    var b;
    b = Math.ceil(a / 4);
    var c = [],
      d;
    d = nh(i);
    var f;
    d === uh && e(new $g("generator isn't seeded"));
    if (d & Bh) {
      d = !(d & Fh);
      f = [];
      var g = 0,
        h;
      Ah = f[0] = (new Date).valueOf() + 3E4;
      for (h = 0; 16 > h; h++) f.push(4294967296 * Math.random() | 0);
      for (h = 0; h < qh.length && !(f = f.concat(jh(qh[h])), g += sh[h], sh[h] = 0, !d && Gh & 1 << h); h++);
      Gh >= 1 << qh.length && (qh.push(new hh), sh.push(0));
      th -= g;
      g > wh && (wh = g);
      Gh++;
      Hh = ih(Hh.concat(f));
      Jh = new ah(Hh);
      for (d = 0; 4 > d && !(Ih[d] = Ih[d] + 1 | 0, Ih[d]); d++);
    }
    for (d = 0; d < b; d += 4) 0 === (d + 1) % 65536 && Nh(),
    f = Mh(), c.push(f[0], f[1], f[2], f[3]);
    Nh();
    b = c.slice(0, b);
    var c = new se,
      l;
    for (f = d = 0; d < a; ++d) 0 === d % 4 && (l = b[f++]), c.append(Sh[(l & 255) % Sh.length]), l >>= 8;
    return c.toString()
  }
  if (!nh()) {
    var Uh, Vh = [];
    for (Uh = 0; 32 > Uh; ++Uh) Vh.push(Math.floor(8388607 * Math.random()));
    lh(Vh, 1024, "Math.random");
    Kh || (window.addEventListener ? (window.addEventListener("load", Ph, n), window.addEventListener("mousemove", Oh, n)) : document.attachEvent ? (document.attachEvent("onload", Ph), document.attachEvent("onmousemove", Oh)) : e(new Zg("can't attach event")), Kh = j)
  };

  function Wh(a, b) {
    ff.call(this);
    this.qb = a;
    this.Lm = b;
    this.jb = Th();
    this.Yg = k;
    this.Yj = this.Qk = this.Oi = n;
    this.Fu = this.oh = 0;
    this.vx = this.ux = n;
    this.qb.onended = A(this.tv, this);
    this.ko();
    this.Oa()
  }
  D(Wh, ff);
  Fe("mediaStream", Wh);
  u = Wh.prototype;
  u.A = function () {
    this.stop();
    this.Yg = this.qb = k;
    Wh.d.A.call(this)
  };
  u.Ma = function () {
    return {
      id: this.F(),
      label: this.qf()
    }
  };
  u.At = p("qb");

  function Xh(a) {
    return a.qb.getAudioTracks ? a.qb.getAudioTracks() : a.qb.audioTracks ? a.qb.audioTracks : []
  }

  function Yh(a) {
    return a.qb.getVideoTracks ? a.qb.getVideoTracks() : a.qb.videoTracks ? a.qb.videoTracks : []
  }
  u.qf = function () {
    return this.qb.label
  };

  function Zh(a) {
    !a.Yg && Cg && (a.Yg = Cg.createObjectURL(a.qb));
    return a.Yg || ""
  }
  u.pb = p("Lm");
  u.xu = function () {
    return !this.pb()
  };
  u.yu = p("Oi");
  u.stop = function () {
    this.j("stop");
    this.qb.stop && this.qb.stop();
    this.Qk = j;
    return this
  };

  function $h(a) {
    return !!a && 0 < a.length
  }
  u.up = function () {
    return $h(Xh(this))
  };
  u.wp = function () {
    return $h(Yh(this))
  };
  u.Uh = function () {
    return this.up()
  };
  u.de = function () {
    return this.wp()
  };

  function ai(a) {
    return fb(a, function (a) {
      return a.enabled
    })
  }
  u.Wj = function () {
    return this.pb() ? !ai(Xh(this)) : this.ux
  };
  u.Bm = function () {
    return this.pb() ? !ai(Yh(this)) : this.vx
  };
  u.En = function (a, b) {
    F(a, function (a) {
      a.enabled = b
    })
  };
  u.Og = function (a) {
    this.En(Xh(this), !a);
    a ? this.dispatchEvent("mediaStream:audiomute") : this.dispatchEvent("mediaStream:audiounmute");
    return this
  };
  u.Qg = function (a) {
    this.En(Yh(this), !a);
    a ? this.dispatchEvent("mediaStream:videomute") : this.dispatchEvent("mediaStream:videounmute");
    return this
  };

  function bi(a, b) {
    a.Yj !== b && (a.Yj = b, a.dispatchEvent(b ? "speaking:start" : "speaking:stop"))
  }
  u.qh = function (a) {
    (a = Mf(a, {
      autoplay: "autoplay",
      src: Zh(this)
    })) && this.Lm && a.setAttribute("muted", "muted");
    return a
  };

  function ci(a) {
    a.Oi || (a.Oi = j, a.dispatchEvent("mediaStream:start"))
  }
  function di(a) {
    a.Qk || (a.Qk = j, a.dispatchEvent("mediaStream:end"))
  }
  u.Jo = function () {
    return this.de() ? this.Lo() : this.Ho()
  };
  u.Ho = function () {
    this.j("createAudioElement");
    ci(this);
    return this.qh("audio")
  };
  u.Lo = function () {
    function a() {
      if (!c.Qk) {
        var g = b.currentTime,
          h = b.videoWidth,
          l = wa();
        if (g != d) f = l;
        else if (3E7 < l - f) {
          c.j("Media stream frozen - Timed out");
          di(c);
          return
        }
        0 < g && 0 < h && ci(c);
        d = g;
        window.setTimeout(a, 100)
      }
    }
    this.j("createVideoElement");
    var b, c = this,
      d = 0,
      f = wa();
    b = this.qh("video");
    a();
    return b
  };
  u.ko = function () {
    function a(a) {
      a.onmute = b;
      a.onunmute = c
    }
    var b = A(this.Sw, this),
      c = A(this.Tw, this);
    F(Xh(this), a);
    F(Yh(this), a)
  };
  u.tv = function () {
    di(this)
  };
  u.Sw = function () {
    this.dispatchEvent("mediaStreamTrack:mute")
  };
  u.Tw = function () {
    this.dispatchEvent("mediaStreamTrack:unmute")
  };

  function ei(a, b) {
    Wh.call(this, a, b)
  }
  D(ei, Wh);
  u = ei.prototype;
  u.qf = t("");
  u.qh = function (a) {
    ci(this);
    var b = Mf(a, {
      controls: n
    });
    b.mozSrcObject = this.qb;
    Nc(b.play, 0, b);
    this.Lm && Nc(function () {
      b.muted = j
    }, 0, this);
    return b
  };
  u.ko = ba();
  u.En = ba();
  u.up = t(j);
  u.wp = t(j);

  function fi() {
    O.call(this, "peerSession");
    S(this, "peerState", "pending")
  }
  D(fi, O);
  Re("peerSession", fi);
  fi.prototype.pg = function () {
    return Q(this, "peerState")
  };

  function gi(a, b) {
    O.call(this, "config", k, a);
    b && pg(this, b)
  }
  D(gi, O);

  function hi(a) {
    var b = Q(a, "apiServer");
    b || (b = "prod" === a.get("env") ? "https://api.vline.com" : "https://api." + a.get("env") + ".vline.com");
    return b
  }
  function ii(a) {
    return "prod" === a.get("env") ? "https://static.vline.com/vline.css" : "https://static." + a.get("env") + ".vline.com/vline.css"
  }
  var ji = new gi({
    env: "prod",
    skipStun: n,
    skipRelay: n,
    skipLocal: n,
    skipTcp: n,
    autoBatch: j,
    maxBackOff: 12E4,
    connectTimeout: 15E3,
    cometdLogLevel: "info",
    html5History: j,
    autoConnect: j,
    ui: n,
    noVideoPanelUI: n,
    noIncomingCallUI: n,
    noOutgoingCallUI: n
  });

  function ki(a, b, c) {
    ff.call(this);
    this.j("PeerConnection");
    this.jb = a;
    this.fb = b;
    this.va = [];
    this.wc = [];
    this.se = k;
    this.$p = n;
    c && c.loopback && (this.$p = j);
    this.kj = n;
    this.ja = this.Ko();
    li(this, "onnegotationneeded", this.xl);
    li(this, "onicecandidate", this.Gv);
    li(this, "onopen", this.bw);
    li(this, "onstatechange", this.Aq);
    li(this, "onsignalingstatechange", this.Aq);
    li(this, "onaddstream", this.$u);
    li(this, "onremovestream", this.uw);
    li(this, "onicechange", this.sq);
    li(this, "oniceconnectionstatechange", this.sq);
    li(this, "onidentityresult",
      this.Hv);
    this.om = n;
    this.Oa(j)
  }
  D(ki, ff);
  Fe("peerConnection", ki);
  u = ki.prototype;
  u.jn = n;
  u.un = n;
  u.A = function () {
    this.close();
    ki.d.A.call(this)
  };
  u.createOffer = function () {
    0 == this.va.length && e(this.error("NO_LOCAL_STREAMS"));
    return mi(this, "createOffer").G(this.or, this).$d(this.le, this)
  };

  function ni(a, b) {
    var c = a.Wd("offer", b);
    return oi(a, c).Rk(a.Ps, a.le, a)
  }
  function pi(a, b) {
    var c = a.Wd("answer", b);
    oi(a, c).$d(a.le, a)
  }
  u.addIceCandidate = function (a) {
    this.j("addIceCandidate", "candidate", a.candidate, "sdpMid", a.sdpMid);
    this.ja.addIceCandidate(a)
  };
  u.close = function () {
    this.j("close");
    this.ja && (this.ja.close(), this.ja = k, F(ob(this.va), this.removeStream, this), F(ob(this.wc), this.Yq, this), this.va.length = this.wc.length = 0)
  };
  u.Ko = function () {
    return new webkitRTCPeerConnection(qi(this), ri(this))
  };

  function qi(a) {
    a = Q(a.fb, "stunServer") || "stun." + a.fb.get("env") + ".vline.com";
    Lg && (a = "50.112.204.160");
    return {
      iceServers: [{
          url: "stun:" + a
        }
      ]
    }
  }
  function ri(a) {
    return a.$p ? i : {
      optional: [{
          DtlsSrtpKeyAgreement: "true"
        }
      ]
    }
  }
  function li(a, b, c) {
    y(a.ja[b]) && (a.ja[b] = A(c, a))
  }
  u.xl = function () {
    this.j("onNegotationNeeded");
    this.dispatchEvent("peerConnection:negotiationNeeded")
  };
  u.Gv = function (a) {
    this.j("onIceCandidate", a);
    a.candidate ? (this.om && (this.om = n, this.j("onIceCandidate", "ICE Restart")), this.dispatchEvent("peerConnection:iceCandidate", {
      candidate: a.candidate
    })) : (this.j("onIceCandidate", "ICE Done"), this.om = j, this.dispatchEvent("peerConnection:iceDone"))
  };
  u.bw = function () {
    this.j("onOpen")
  };
  u.Aq = function (a) {
    a = a.target.readyState || a.target.signalingState;
    this.j("onStateChange", "readyState", a);
    var b;
    switch (a) {
    case "active":
    case "stable":
      this.kj || (F(this.wc, function (a) {
        this.dispatchEvent(new Ye("peerConnection:addRemoteStream", this, a))
      }, this), this.kj = j);
      break;
    case "closed":
      b = "peerConnection:end"
    }
    b && this.dispatchEvent(b)
  };
  u.$u = function (a) {
    this.j("onAddStream");
    a = I ? new ei(a.stream, n) : new Wh(a.stream, n);
    this.un || (lb(this.wc, a), a.addEventListener("mediaStream:end", this.zq, n, this), this.kj && this.dispatchEvent(new Ye("peerConnection:addRemoteStream", this, a)))
  };
  u.uw = function (a) {
    this.j("onRemoveStream");
    var b = hb(this.wc, function (b) {
      return b.qb === a.stream
    });
    b && this.Yq(b)
  };
  u.sq = function (a) {
    this.ja && (this.j("onIceChange", "iceState", this.ja.iceConnectionState), Lg ? "connected" === a && this.dispatchEvent("peerConnection:start") : (a = this.ja.signalingState, ("active" === a || "stable" === a) && "connected" === this.ja.iceConnectionState && this.dispatchEvent("peerConnection:start")))
  };
  u.Hv = function () {
    this.j("onIdentityResult")
  };
  u.le = function (a) {
    this.error("PEER_CONNECTION_FAILED", a)
  };
  u.addStream = function (a) {
    this.j("addStream", a);
    !this.jn && !jb(this.va, a) && (this.ja.addStream(a.qb), this.va.push(a), a.addEventListener("mediaStream:end", this.uq, n, this))
  };
  u.removeStream = function (a) {
    this.j("removeStream", a);
    a.removeEventListener("mediaStream:end", this.uq, n, this);
    mb(this.va, a);
    this.ja && this.ja.removeStream(a.qb)
  };
  u.Yq = function (a) {
    mb(this.wc, a);
    a.removeEventListener("mediaStream:end", this.zq, n, this);
    this.dispatchEvent(new Ye("peerConnection:removeRemoteStream", this, a))
  };
  u.uq = function (a) {
    this.j("onLocalStreamEnd", a);
    this.removeStream(a.target)
  };
  u.zq = function (a) {
    this.j("onRemoteStreamEnd", a);
    this.close()
  };
  u.Oh = p("wc");
  u.Ih = p("va");
  u.or = function (a) {
    return si(this, "setLocalDescription", a)
  };

  function oi(a, b) {
    b = a.cp(b);
    if (Qg && !(0 <= $a(Tg, 27))) var c = b.sdp.replace(/a=fmtp:.*\r?\n/mg, ""),
    b = a.Wd(b.type, c);
    /sendrecv/.test(b.sdp) || (a.jn = /sendonly/.test(b.sdp), a.un = /recvonly/.test(b.sdp));
    return si(a, "setRemoteDescription", b)
  }
  u.Ps = function () {
    return mi(this, "createAnswer").G(this.or, this)
  };

  function mi(a, b) {
    a.j(b);
    var c = (new K).G(a.it, a).G(a.lt, a).G(a.jt, a).G(a.kt, a).G(a.cp, a);
    a.ja[b](A(c.ya, c), A(c.gb, c), a.se);
    return c
  }
  function si(a, b, c) {
    a.j(b, "type", c.type, "sdp", c.sdp);
    var d = new K;
    a.ja[b](c, A(d.ya, d, c), A(d.gb, d));
    a.ea.log(Kd, "description set", i);
    return d
  }
  u.Wd = function (a, b) {
    return new RTCSessionDescription({
      type: a,
      sdp: b
    })
  };
  u.it = aa();
  u.lt = function (a) {
    if (this.un) var b = a.sdp.replace(/sendrecv/g, "sendonly"),
    a = this.Wd(a.type, b);
    this.jn && (b = a.sdp.replace(/sendrecv/g, "recvonly"), a = this.Wd(a.type, b));
    return a
  };
  u.jt = function (a) {
    this.j("fixUpCrypto_", "description.type", a.type);
    if (Qg || "answer" == a.type) return a;
    var b = a.sdp;
    if (/a=crypto.*/g.test(b)) return this.j("fixUpCrypto_", "found crypto lines"), a;
    this.j("fixUpCrypto_", "adding crypto lines");
    for (var b = b.split("\r\n"), c = [], d = 0; d < b.length; d++) c.push(b[d]), -1 !== b[d].search("c=IN") && c.push("a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:BAADBAADBAADBAADBAADBAADBAADBAADBAADBAAD\\r\\n");
    b = c.join("\r\n");
    return this.Wd(a.type, b)
  };
  u.cp = function (a) {
    this.j("fixUpConfAudio_");
    for (var b = a.sdp, b = b.split("\r\n"), c = [], d = n, f = n, g = 0; g < b.length; g++) c.push(b[g]), f || (!d && -1 !== b[g].search("m=audio") ? d = j : d && -1 !== b[g].search("c=IN") && (c.push("a=x-google-flag:conference"), f = j));
    b = c.join("\r\n");
    return this.Wd(a.type, b)
  };
  u.kt = function (a) {
    for (var b = a.sdp, b = b.split("\r\n"), c = 0; c < b.length; c++) if (-1 !== b[c].search("m=audio")) {
        var d = c;
        break
      }
    if (d === k) return a;
    for (c = 0; c < b.length; c++) if (-1 !== b[c].search("opus/48000")) {
        if (c = (c = b[c].match(/:(\d+) opus\/48000/i)) && 2 == c.length ? c[1] : k) {
          for (var f = b[d].split(" "), g = [], h = 0, l = 0; l < f.length; l++) 3 === h && (g[h++] = c), f[l] !== c && (g[h++] = f[l]);
          b[d] = g.join(" ")
        }
        break
      }
    b = b.join("\r\n");
    return this.Wd(a.type, b)
  };

  function ti(a, b, c) {
    ki.call(this, a, b, c);
    this.kj = j
  }
  D(ti, ki);
  ti.prototype.Ko = function () {
    return new mozRTCPeerConnection(qi(this), ri(this))
  };
  ti.prototype.Wd = function (a, b) {
    return {
      type: a,
      sdp: b
    }
  };
  var ui = /^(.*)([:;,\.?\[\]])$/,
    vi = RegExp("([\\S\\s]*?)(\\b(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|aero|biz|cat|coop|info|int|jobs|mobi|museum|name|pro|travel|arpa|asia|xxx|[a-z][a-z])\\b)|\\b(?:(https?|ftp)://+|www\\.)\\w[:;,\\.?\\[\\]\\w/~%&=+#-@!]*|$)", "g");
  /*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/

  function wi() {}
  var xi = {
    Hy: "<",
    Cy: ">",
    uy: "&",
    Jy: " ",
    Ny: '"',
    vy: "'"
  }, yi = {
      a: 0,
      abbr: 0,
      acronym: 0,
      address: 0,
      applet: 16,
      area: 2,
      b: 0,
      base: 18,
      basefont: 18,
      bdo: 0,
      big: 0,
      blockquote: 0,
      body: 49,
      br: 2,
      button: 0,
      caption: 0,
      center: 0,
      cite: 0,
      code: 0,
      col: 2,
      colgroup: 1,
      dd: 1,
      del: 0,
      dfn: 0,
      dir: 0,
      div: 0,
      dl: 0,
      dt: 1,
      em: 0,
      fieldset: 0,
      font: 0,
      form: 0,
      frame: 18,
      frameset: 16,
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
      h6: 0,
      head: 49,
      hr: 2,
      html: 49,
      i: 0,
      iframe: 20,
      img: 2,
      input: 2,
      ins: 0,
      isindex: 18,
      kbd: 0,
      label: 0,
      legend: 0,
      li: 1,
      link: 18,
      map: 0,
      menu: 0,
      meta: 18,
      noframes: 20,
      noscript: 20,
      object: 16,
      ol: 0,
      optgroup: 0,
      option: 1,
      p: 1,
      param: 18,
      pre: 0,
      q: 0,
      s: 0,
      samp: 0,
      script: 20,
      select: 0,
      small: 0,
      span: 0,
      strike: 0,
      strong: 0,
      style: 20,
      sub: 0,
      sup: 0,
      table: 0,
      tbody: 1,
      td: 1,
      textarea: 8,
      tfoot: 1,
      th: 1,
      thead: 1,
      title: 24,
      tr: 1,
      tt: 0,
      u: 0,
      ul: 0,
      "var": 0
    }, zi = /&/g,
    Ai = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
    Bi = /</g,
    Ci = />/g,
    Di = /\"/g,
    Ei = /=/g,
    Fi = /\0/g,
    Gi = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g,
    Hi = /^#(\d+)$/,
    Ii = /^#x([0-9A-Fa-f]+)$/,
    Ji = RegExp("^\\s*(?:(?:([a-z][a-z-]*)(\\s*=\\s*(\"[^\"]*\"|'[^']*'|(?=[a-z][a-z-]*\\s*=)|[^>\"'\\s]*))?)|(/?>)|[^a-z\\s>]+)",
      "i"),
    Ki = RegExp("^(?:&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);|<[!]--[\\s\\S]*?--\>|<!\\w[^>]*>|<\\?[^>*]*>|<(/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))", "i");
  wi.prototype.parse = function (a, b) {
    var c = k,
      d = n,
      f = [],
      g, h, l;
    a.Vc = [];
    for (a.Ce = n; b;) {
      var m = b.match(d ? Ji : Ki),
        b = b.substring(m[0].length);
      if (d) if (m[1]) {
          var q = m[1].toLowerCase();
          if (m[2]) {
            m = m[3];
            switch (m.charCodeAt(0)) {
            case 34:
            case 39:
              m = m.substring(1, m.length - 1)
            }
            m = m.replace(Fi, "").replace(Gi, A(this.Ku, this))
          } else m = q;
          f.push(q, m)
        } else m[4] && (h !== i && (l ? a.Fr && a.Fr(g, f) : a.Xo && a.Xo(g)), l && h & 12 && (c = c === k ? b.toLowerCase() : c.substring(c.length - b.length), d = c.indexOf("</" + g), 0 > d && (d = b.length), h & 4 ? a.xo && a.xo(b.substring(0,
            d)) : a.Sq && a.Sq(b.substring(0, d).replace(Ai, "&amp;$1").replace(Bi, "&lt;").replace(Ci, "&gt;")), b = b.substring(d)), g = h = l = i, f.length = 0, d = n);
        else if (m[1]) Li(a, m[0]);
      else if (m[3]) l = !m[2], d = j, g = m[3].toLowerCase(), h = yi.hasOwnProperty(g) ? yi[g] : i;
      else if (m[4]) Li(a, m[4]);
      else if (m[5]) switch (m[5]) {
        case "<":
          Li(a, "&lt;");
          break;
        case ">":
          Li(a, "&gt;");
          break;
        default:
          Li(a, "&amp;")
      }
    }
    for (c = a.Vc.length; 0 <= --c;) a.pe.append("</", a.Vc[c], ">");
    a.Vc.length = 0
  };
  wi.prototype.Ku = function (a) {
    a = a.toLowerCase();
    if (xi.hasOwnProperty(a)) return xi[a];
    var b = a.match(Hi);
    return b ? String.fromCharCode(parseInt(b[1], 10)) : (b = a.match(Ii)) ? String.fromCharCode(parseInt(b[1], 16)) : ""
  };

  function Mi() {};
  /*
 Portions of this code are from the google-caja project, received by
 Google under the Apache license (http://code.google.com/p/google-caja/).
 All other code is Copyright 2009 Google, Inc. All Rights Reserved.

// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

*/

  function Ni(a, b, c) {
    this.pe = a;
    this.Vc = [];
    this.Ce = n;
    this.Or = b;
    this.qk = c
  }
  D(Ni, Mi);
  var Oi = {
    "*::class": 9,
    "*::dir": 0,
    "*::id": 4,
    "*::lang": 0,
    "*::onclick": 2,
    "*::ondblclick": 2,
    "*::onkeydown": 2,
    "*::onkeypress": 2,
    "*::onkeyup": 2,
    "*::onload": 2,
    "*::onmousedown": 2,
    "*::onmousemove": 2,
    "*::onmouseout": 2,
    "*::onmouseover": 2,
    "*::onmouseup": 2,
    "*::style": 3,
    "*::title": 0,
    "*::accesskey": 0,
    "*::tabindex": 0,
    "*::onfocus": 2,
    "*::onblur": 2,
    "a::coords": 0,
    "a::href": 1,
    "a::hreflang": 0,
    "a::name": 7,
    "a::onblur": 2,
    "a::rel": 0,
    "a::rev": 0,
    "a::shape": 0,
    "a::target": 10,
    "a::type": 0,
    "area::accesskey": 0,
    "area::alt": 0,
    "area::coords": 0,
    "area::href": 1,
    "area::nohref": 0,
    "area::onfocus": 2,
    "area::shape": 0,
    "area::tabindex": 0,
    "area::target": 10,
    "bdo::dir": 0,
    "blockquote::cite": 1,
    "br::clear": 0,
    "button::accesskey": 0,
    "button::disabled": 0,
    "button::name": 8,
    "button::onblur": 2,
    "button::onfocus": 2,
    "button::tabindex": 0,
    "button::type": 0,
    "button::value": 0,
    "caption::align": 0,
    "col::align": 0,
    "col::char": 0,
    "col::charoff": 0,
    "col::span": 0,
    "col::valign": 0,
    "col::width": 0,
    "colgroup::align": 0,
    "colgroup::char": 0,
    "colgroup::charoff": 0,
    "colgroup::span": 0,
    "colgroup::valign": 0,
    "colgroup::width": 0,
    "del::cite": 1,
    "del::datetime": 0,
    "dir::compact": 0,
    "div::align": 0,
    "dl::compact": 0,
    "font::color": 0,
    "font::face": 0,
    "font::size": 0,
    "form::accept": 0,
    "form::action": 1,
    "form::autocomplete": 0,
    "form::enctype": 0,
    "form::method": 0,
    "form::name": 7,
    "form::onreset": 2,
    "form::onsubmit": 2,
    "form::target": 10,
    "h1::align": 0,
    "h2::align": 0,
    "h3::align": 0,
    "h4::align": 0,
    "h5::align": 0,
    "h6::align": 0,
    "hr::align": 0,
    "hr::noshade": 0,
    "hr::size": 0,
    "hr::width": 0,
    "img::align": 0,
    "img::alt": 0,
    "img::border": 0,
    "img::height": 0,
    "img::hspace": 0,
    "img::ismap": 0,
    "img::longdesc": 1,
    "img::name": 7,
    "img::src": 1,
    "img::usemap": 11,
    "img::vspace": 0,
    "img::width": 0,
    "input::accept": 0,
    "input::accesskey": 0,
    "input::autocomplete": 0,
    "input::align": 0,
    "input::alt": 0,
    "input::checked": 0,
    "input::disabled": 0,
    "input::ismap": 0,
    "input::maxlength": 0,
    "input::name": 8,
    "input::onblur": 2,
    "input::onchange": 2,
    "input::onfocus": 2,
    "input::onselect": 2,
    "input::readonly": 0,
    "input::size": 0,
    "input::src": 1,
    "input::tabindex": 0,
    "input::type": 0,
    "input::usemap": 11,
    "input::value": 0,
    "ins::cite": 1,
    "ins::datetime": 0,
    "label::accesskey": 0,
    "label::for": 5,
    "label::onblur": 2,
    "label::onfocus": 2,
    "legend::accesskey": 0,
    "legend::align": 0,
    "li::type": 0,
    "li::value": 0,
    "map::name": 7,
    "menu::compact": 0,
    "ol::compact": 0,
    "ol::start": 0,
    "ol::type": 0,
    "optgroup::disabled": 0,
    "optgroup::label": 0,
    "option::disabled": 0,
    "option::label": 0,
    "option::selected": 0,
    "option::value": 0,
    "p::align": 0,
    "pre::width": 0,
    "q::cite": 1,
    "select::disabled": 0,
    "select::multiple": 0,
    "select::name": 8,
    "select::onblur": 2,
    "select::onchange": 2,
    "select::onfocus": 2,
    "select::size": 0,
    "select::tabindex": 0,
    "table::align": 0,
    "table::bgcolor": 0,
    "table::border": 0,
    "table::cellpadding": 0,
    "table::cellspacing": 0,
    "table::frame": 0,
    "table::rules": 0,
    "table::summary": 0,
    "table::width": 0,
    "tbody::align": 0,
    "tbody::char": 0,
    "tbody::charoff": 0,
    "tbody::valign": 0,
    "td::abbr": 0,
    "td::align": 0,
    "td::axis": 0,
    "td::bgcolor": 0,
    "td::char": 0,
    "td::charoff": 0,
    "td::colspan": 0,
    "td::headers": 6,
    "td::height": 0,
    "td::nowrap": 0,
    "td::rowspan": 0,
    "td::scope": 0,
    "td::valign": 0,
    "td::width": 0,
    "textarea::accesskey": 0,
    "textarea::cols": 0,
    "textarea::disabled": 0,
    "textarea::name": 8,
    "textarea::onblur": 2,
    "textarea::onchange": 2,
    "textarea::onfocus": 2,
    "textarea::onselect": 2,
    "textarea::readonly": 0,
    "textarea::rows": 0,
    "textarea::tabindex": 0,
    "tfoot::align": 0,
    "tfoot::char": 0,
    "tfoot::charoff": 0,
    "tfoot::valign": 0,
    "th::abbr": 0,
    "th::align": 0,
    "th::axis": 0,
    "th::bgcolor": 0,
    "th::char": 0,
    "th::charoff": 0,
    "th::colspan": 0,
    "th::headers": 6,
    "th::height": 0,
    "th::nowrap": 0,
    "th::rowspan": 0,
    "th::scope": 0,
    "th::valign": 0,
    "th::width": 0,
    "thead::align": 0,
    "thead::char": 0,
    "thead::charoff": 0,
    "thead::valign": 0,
    "tr::align": 0,
    "tr::bgcolor": 0,
    "tr::char": 0,
    "tr::charoff": 0,
    "tr::valign": 0,
    "ul::compact": 0,
    "ul::type": 0
  };
  Ni.prototype.Fr = function (a, b) {
    if (!this.Ce && yi.hasOwnProperty(a)) {
      var c = yi[a];
      if (!(c & 32)) if (c & 16) this.Ce = !(c & 2);
        else {
          for (var d = b, f = 0; f < d.length; f += 2) {
            var g = d[f],
              h = d[f + 1],
              l = k,
              m;
            if ((m = a + "::" + g, Oi.hasOwnProperty(m)) || (m = "*::" + g, Oi.hasOwnProperty(m))) l = Oi[m];
            if (l !== k) switch (l) {
              case 0:
                break;
              case 2:
              case 3:
                h = k;
                break;
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
                h = this.qk ? this.qk(h) : h;
                break;
              case 1:
                h = this.Or && this.Or(h);
                break;
              case 11:
                h && "#" === h.charAt(0) ? (h = this.qk ? this.qk(h) : h) && (h = "#" + h) : h = k;
                break;
              default:
                h =
                  k
            } else h = k;
            d[f + 1] = h
          }
          if (b = d) {
            c & 2 || this.Vc.push(a);
            this.pe.append("<", a);
            c = 0;
            for (d = b.length; c < d; c += 2) f = b[c], g = b[c + 1], g !== k && g !== i && this.pe.append(" ", f, '="', g.replace(zi, "&amp;").replace(Bi, "&lt;").replace(Ci, "&gt;").replace(Di, "&#34;").replace(Ei, "&#61;"), '"');
            this.pe.append(">")
          }
        }
    }
  };
  Ni.prototype.Xo = function (a) {
    if (this.Ce) this.Ce = n;
    else if (yi.hasOwnProperty(a)) {
      var b = yi[a];
      if (!(b & 50)) {
        if (b & 1) for (b = this.Vc.length; 0 <= --b;) {
            var c = this.Vc[b];
            if (c === a) break;
            if (!(yi[c] & 1)) return
        } else for (b = this.Vc.length; 0 <= --b && this.Vc[b] !== a;); if (!(0 > b)) {
          for (var d = this.Vc.length; --d > b;) c = this.Vc[d], yi[c] & 1 || this.pe.append("</", c, ">");
          this.Vc.length = b;
          this.pe.append("</", a, ">")
        }
      }
    }
  };

  function Li(a, b) {
    a.Ce || a.pe.append(b)
  }
  Ni.prototype.Sq = function (a) {
    this.Ce || this.pe.append(a)
  };
  Ni.prototype.xo = function (a) {
    this.Ce || this.pe.append(a)
  };

  function Pi(a, b, c) {
    P.call(this, a, b);
    this.message = c
  }
  D(Pi, P);
  Pi.prototype.Ej = p("message");

  function Qi(a, b, c, d, f) {
    O.call(this, a);
    b && tg(this, "iss", b);
    c && (a = c, d && (a = Na(a)), y(f) || (f = j), f && (d = a, f = new se, (new wi).parse(new Ni(f, k, k), d), a = f.toString()), S(this, "body", a));
    this.Tq = n
  }
  D(Qi, O);
  Fe("message", Qi);
  Re(["im", "x-msg", "typing"], Qi, ["type", "iss", "body"], "body", Qi.prototype.Ew);
  u = Qi.prototype;
  u.dk = k;
  u.Re = k;
  u.Y = k;
  u.A = function () {
    this.Y && this.Y.fa();
    Qi.d.A.call(this)
  };
  u.Ct = p("Re");
  u.Ij = function () {
    return this.xa.iss
  };
  u.cd = p("Y");
  u.pt = function () {
    return this.Y ? this.Y.F() : ""
  };
  u.zd = function () {
    return Q(this, "sid")
  };
  u.nt = function (a, b) {
    var c = Q(this, "body");
    if (a) {
      if (!this.dk) {
        var c = Ta(c),
          d = {};
        "rel" in d || (d.rel = "nofollow");
        "target" in d || (d.target = "_blank");
        var f = [],
          g;
        for (g in d) d.hasOwnProperty(g) && d[g] && f.push(Na(g), '="', Na(d[g]), '" ');
        var h = f.join("");
        this.dk = c.replace(vi, function (a, b, c, d, f) {
          a = [Na(b)];
          if (!c) return a[0];
          a.push("<a ", h, 'href="');
          d ? (a.push("mailto:"), c = d, d = "") : (f || a.push("http://"), (d = c.match(ui)) ? (c = d[1], d = d[2]) : d = "");
          c = Na(c);
          d = Na(d);
          a.push(c, '">', c, "</a>", d);
          return a.join("")
        })
      }
      return this.dk
    }
    return b ?
      Ta(c) : c
  };
  u.getError = function () {
    return Q(this, "err")
  };
  u.Ew = function () {
    delete this.dk
  };
  u.ll = function (a, b) {
    b && (this.Tq = j);
    Qi.d.ll.call(this, a, b)
  };
  u.uc = function (a) {
    var b, c = this.w(j);
    if (!c || !(b = this.Ij())) return Qi.d.uc.call(this, a);
    var d = b,
      f = c.ob();
    b === f && (this.Re = c.hc, b = this.m(), d = (b = /.*\/msg\/([^\/]+)/.exec(b)) && 0 < b.length ? b[1] : "");
    this.Ta();
    c.yd(d).G(function (b) {
      this.yb();
      this.Y = b;
      this.Re || (this.Re = b);
      jf(this, b);
      O.prototype.uc.call(this, a);
      if (this.Tq && !this.Re.pb()) {
        var c = new Pi("recv", b, this);
        b.dispatchEvent(c);
        c.type += ":" + this.Da();
        b.dispatchEvent(c)
      }
    }, this)
  };

  function Ri(a, b, c, d) {
    Qi.call(this, a, b);
    c && S(this, "sid", c);
    d && S(this, "mid", d)
  }
  D(Ri, Qi);
  Fe("signal", Ri);
  Re(["sig:sessionTerminate", "sig:sessionReject", "sig:sessionStart", "sig:contentReject"], Ri, ["type", "iss", "sid", "mid"]);

  function Si(a, b, c, d, f) {
    Ri.call(this, a, b, c, d);
    S(this, "sdp", f)
  }
  D(Si, Ri);
  Re(["sig:sessionInitiate", "sig:sessionAccept", "sig:contentModify", "sig:contentAccept"], Si, ["type", "iss", "sid", "mid", "sdp"]);

  function Ti(a, b, c, d, f, g, h) {
    Si.call(this, a, b, c, d, f);
    S(this, "sdpMid", g);
    S(this, "sdpMLineIndex", h)
  }
  D(Ti, Si);
  Re("sig:transportCandidate", Ti, "type iss sid mid sdp sdpMid sdpMLineIndex".split(" "));

  function Ui(a, b, c, d, f, g) {
    Ri.call(this, "relayAllocationRequest", a, b, c);
    S(this, "appId", d);
    S(this, "ufrag", f);
    S(this, "pwd", g);
    this.ub("/service/turn")
  }
  D(Ui, Ri);
  Re("relayAllocationRequest", Ui, ["iss", "mid", "appId", "ufrag", "pwd"]);

  function Vi(a, b, c, d, f) {
    Ri.call(this, "relayAllocationResponse");
    (!a || !d || !b) && e(new M("BAD_PARAM", "relayAllocationResponse=" + this));
    S(this, "ip", a);
    S(this, "udpPort", b);
    S(this, "udpExtPort", c);
    S(this, "tcpPort", d);
    f && S(this, "sslTcpPort", f)
  }
  D(Vi, Ri);
  Re("relayAllocationResponse", Vi, ["ip", "udpPort", "udpExtPort", "tcpPort", "sslTcpPort"]);

  function Wi(a, b, c, d, f) {
    Ri.call(this, "vadStateTransition", a, b, c);
    f && S(this, "streamId", f);
    S(this, "vadState", d)
  }
  D(Wi, Ri);
  Re("vadStateTransition", Wi, ["iss", "sid", "mid", "vadState", "streamId"]);

  function Xi(a) {
    xg.call(this, a);
    this.Y = this.Za = k;
    this.$b = 0;
    this.ln = k;
    this.Tj = n;
    this.hn = [];
    this.Pj = [];
    this.Bk = [];
    this.ja = this.Rc = k;
    this.Hn = this.Cr = this.Ar = this.Br = n
  }
  D(Xi, xg);
  Pe("peerSession", Xi, ["$entity"]);
  u = Xi.prototype;
  u.Lc = function (a, b, c, d) {
    this.Za = a;
    this.Y = b;
    a = Yi(a.Ca());
    this.Br = mf(a, "skipStun");
    this.Ar = mf(a, "skipLocal");
    this.Cr = mf(a, "skipTcp");
    this.Hn = mf(a, "skipRelay");
    b = this.F();
    this.ja = I ? new ti(b, a, c) : new ki(b, a, c);
    this.ja.xc(this);
    this.Tj = !d;
    this.Y && this.I().h(this.Y, "pub:sig:sessionTerminate", this.Pw).h(this.Y, "pub:sig:sessionAccept", this.mq).h(this.Y, "pub:sig:sessionReject", this.pw).h(this.Y, "pub:sig:sessionStart", this.Nw).h(this.Y, "pub:sig:transportCandidate", this.fv).h(this.Y, "pub:sig:contentModify", this.nv).h(this.Y,
      "pub:sig:contentAccept", this.lv).h(this.Y, "pub:vadStateTransition", this.bx).h(this, "error", this.stop).h(this, "peerConnection:end", this.stop).h(this, "peerConnection:iceCandidate", this.gv).h(this, "peerConnection:start", this.Zu).h(this, "peerConnection:negotiationNeeded", this.xl);
    this.Za.ca.on("pub:relayAllocationResponse", this.xq, this);
    this.Oa(j);
    d && (this.j("onInitiate", d), Zi(this, d), this.sm = Q(d, "sdp"), $i(this, 3), aj(this, "incoming"))
  };
  u.U = p("M");
  u.cd = p("Y");
  u.A = function () {
    this.stop();
    this.Rc && this.Rc.fa();
    Xi.d.A.call(this)
  };
  u.toString = function () {
    return this.F() + "#" + this.$b
  };
  u.gv = function (a) {
    a = a.candidate;
    this.fp(a);
    bj(this, a.candidate, a.sdpMid, a.sdpMLineIndex)
  };
  u.Zu = function () {
    this.j("onActive_");
    aj(this, "active")
  };

  function bj(a, b, c, d) {
    a.Br && cj.test(b) ? Nd(a.ea, "Skipping stun candidate") : (cj.test(b) && (b = b.replace(/udp \d+/, "udp " + (Number(/udp (\d+)/.exec(b)[1]) - 1))), a.Tc("sig:transportCandidate", b, c, d))
  }
  var dj = /candidate:\d+/,
    ej = /udp \d+ \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} \d+ typ host/,
    cj = /udp \d+ \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} \d+ typ srflx/,
    fj = /typ relay/,
    gj = /tcp \d+ \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} \d+ typ/;

  function hj(a, b, c) {
    a = {
      candidate: a,
      sdpMid: b,
      sdpMLineIndex: c
    };
    return Lg ? new mozRTCIceCandidate(a) : new RTCIceCandidate(a)
  }

  function ij(a, b, c, d, f) {
    var g;
    g = "relay" + Q(a.Rc, "ip") + c;
    var h;
    if ("undefined" === typeof g || 0 === g.length) g = 0;
    else {
      h || (h = 0);
      var l = 0;
      h ^= -1;
      for (var m = 0, q = g.length; m < q; m++) l = (h ^ g.charCodeAt(m)) & 255, h = h >>> 8 ^ He[l];
      g = (h ^ -1) >>> 0
    }
    b = b.replace(dj, "candidate:" + g);
    a = c + " " + d + " " + Q(a.Rc, "ip") + " " + f + " typ relay";
    return b.replace(ej, a)
  }
  u = Xi.prototype;
  u.gp = function (a) {
    var b = a.candidate;
    this.Tj && ej.test(b) && (this.Rc ? (this.j("genRelayCandidatesForRemoteCandidate", b), bj(this, ij(this, b, "udp", 1056964608, lf(this.Rc, "udpPort")), a.sdpMid, a.sdpMLineIndex), bj(this, ij(this, b, "tcp", 1016964608, lf(this.Rc, "tcpPort")), a.sdpMid, a.sdpMLineIndex)) : (Nd(this.ea, "Queuing remote host candidates for relay"), this.Bk.push(a)))
  };
  u.fp = function (a) {
    var b = a.candidate;
    this.Tj && ej.test(b) && (this.Rc ? (this.j("genRelayCandidatesForLocalCandidate", b), b = ij(this, b, "udp", 1056964608, lf(this.Rc, "udpExtPort")), a = hj(b, a.sdpMid, a.sdpMLineIndex), this.jl(a)) : (Nd(this.ea, "Queuing candidate"), this.Pj.push(a)))
  };
  u.jl = function (a) {
    this.Ar && ej.test(a.candidate) || this.Cr && gj.test(a.candidate) || this.Hn && fj.test(a.candidate) ? this.j("addIceCandidate_", "Skipping", a.candidate) : this.ja.addIceCandidate(a)
  };
  u.addStream = function (a) {
    this.ja.addStream(a)
  };
  u.removeStream = function (a) {
    this.ja.removeStream(a)
  };

  function jj(a, b) {
    a.$b !== b && e(a.error(new M("BAD_SIGNAL_STATE", {
      signalState: a.$b,
      expectedState: b
    })))
  }
  function kj(a, b, c) {
    if (Q(b, "mid") !== a.F()) return n;
    c && a.$b !== c && e(a.error(new M("BAD_SIGNAL_STATE", {
      signalState: a.$b,
      expectedState: c,
      signal: b
    })));
    a.j("onSignal", b);
    return j
  }
  function $i(a, b) {
    a.j("setSignalState", b);
    a.$b = b
  }
  function aj(a, b) {
    a.j("setPeerState", b);
    S(a.U(), "peerState", b)
  }

  function Zi(a, b) {
    var c = a.Y.F(),
      d = a.Za.ob(),
      f = b.zd();
    a.ln = "/user/" + c + "/sessions/" + f + "/msg/" + d
  }
  u.nv = function (a) {
    a = a.target;
    kj(this, a, 13) && (Zi(this, a), this.sm = Q(a, "sdp"), this.j("acceptContentChange"), $i(this, 9), ni(this.ja, this.sm).G(this.Wu, this))
  };
  u.mq = function (a) {
    this.j("onAcceptMessage_");
    a = a.target;
    kj(this, a, 2) && (aj(this, "connecting"), Zi(this, a), pi(this.ja, Q(a, "sdp")), $i(this, 6), $i(this, 13), this.Za.vc(lj(this.Y), mj(this, "sig:sessionStart", i, i, i)))
  };
  u.lv = function (a) {
    a = a.target;
    kj(this, a, 7) && (Zi(this, a), pi(this.ja, Q(a, "sdp")))
  };
  u.Nw = function (a) {
    kj(this, a.target) && (13 === this.$b || nj(this))
  };
  u.pw = function (a) {
    kj(this, a.target, 2) && ($i(this, 10), this.stop())
  };
  u.Pw = function (a) {
    kj(this, a.target) && 15 !== this.$b && ($i(this, 12), nj(this))
  };
  u.fv = function (a) {
    a = a.target;
    kj(this, a) && (a = hj(Q(a, "sdp"), Q(a, "sdpMid"), a.get("sdpMLineIndex")), 13 === this.$b ? (this.jl(a), this.gp(a)) : (Nd(this.ea, "Queueing candidate"), this.hn.push(a)))
  };
  u.xq = function (a) {
    var b = a.target;
    kj(this, b) && ((a = b.getError()) ? this.ea.log(Ed, "Error allocating relay: " + a, i) : (this.Rc = b.Ta(), F(this.Pj, this.fp, this), F(this.Bk, this.gp, this), this.Bk.length = this.Pj.length = 0))
  };
  u.bx = function (a) {
    var b = a.target;
    if (kj(this, b)) {
      var c = Q(b, "streamId");
      c ? hb(this.ja.Oh(), function (a) {
        return a.qf() === c ? (bi(a, mf(b, "vadState")), j) : n
      }, this) : (a = this.ja.Ih()) && 0 < a.length && bi(a[0], mf(b, "vadState"))
    }
  };
  u.start = function (a) {
    this.j("start", a);
    a = this.ja;
    a.se = {
      mandatory: {
        OfferToReceiveAudio: j,
        OfferToReceiveVideo: j
      }
    };
    Lg && (a.se.mandatory.MozDontOfferDataChannel = j);
    3 === this.$b ? (this.j("accept"), jj(this, 3), $i(this, 4), aj(this, "connecting"), ni(this.ja, this.sm).G(this.Xu, this)) : 0 === this.$b && (this.j("initiate"), jj(this, 0), $i(this, 1), aj(this, "outgoing"), this.ja.createOffer().G(this.Kv, this))
  };
  u.stop = function () {
    this.j("stop");
    3 === this.$b ? (this.j("reject"), jj(this, 3), this.Tc("sig:sessionReject"), $i(this, 9)) : 15 !== this.$b && (0 === this.$b || this.Tc("sig:sessionTerminate"), $i(this, 11));
    nj(this)
  };
  u.Kv = function (a) {
    $i(this, 2);
    this.Tc("sig:sessionInitiate", a.sdp);
    this.Rc || (this.j("allocateRelay"), this.Hn ? Nd(this.ea, "Skipping relay allocation") : (a && (this.pm = a.sdp.match(/ice\-ufrag\:(.+)/)[1], this.yp = a.sdp.match(/ice\-pwd\:(.+)/)[1]), this.pm && this.yp && (a = new Ui(this.Za.ob(), this.Za.F(), this.F(), this.Za.Ca().qa(), this.pm, this.yp), this.Za.vc(a.m(), a))))
  };
  u.xl = function () {
    this.j("onNegotiationNeeded");
    this.ja.createOffer().G(this.mv, this)
  };
  u.mv = function (a) {
    this.j("oContentChangeDone", a.sdp);
    this.Tc("sig:contentModify", a.sdp)
  };
  u.Xu = function (a) {
    this.j("onAcceptDone", a.sdp);
    this.Tc("sig:sessionAccept", a.sdp);
    $i(this, 5);
    $i(this, 13);
    F(this.hn, this.jl, this);
    kb(this.hn)
  };
  u.Wu = function (a) {
    this.j("onAcceptContentChangeDone", a.sdp);
    this.Tc("sig:contentAccept", a.sdp);
    $i(this, 10);
    $i(this, 13)
  };

  function nj(a) {
    a.j("close");
    a.ja && (a.ja.close(), a.ja = k);
    15 !== a.$b && (af(a.I()), a.Za.ca.qi("pub:relayAllocationResponse", a.xq, a), a.Tj = n, a.Rc = a.pm = k, a.Bk.length = a.Pj.length = 0, $i(a, 15), aj(a, "closed"), a.dispatchEvent("peerSession:end"), a.M.remove())
  }
  u.Tc = function (a, b, c, d) {
    this.ln ? this.Za.vc(this.ln, mj(this, a, b, c, d)) : this.Za.vc(lj(this.Y), mj(this, a, b, c, d))
  };

  function mj(a, b, c, d, f) {
    var g = a.F(),
      h = a.Za.F(),
      a = a.Za.ob();
    return c ? d ? new Ti(b, a, h, g, c, d, f) : new Si(b, a, h, g, c) : new Ri(b, a, h, g)
  }
  u.pg = function () {
    return this.M.pg()
  };

  function oj(a) {
    O.call(this, "mediaSession", k, k, a);
    S(this, "mediaState", "inactive")
  }
  D(oj, O);
  Re("mediaSession", oj);
  oj.prototype.Gc = function () {
    return Q(this, "mediaState")
  };

  function pj(a, b, c, d) {
    Ri.call(this, "vadStateConfidence", a, b, c);
    S(this, "vadStateList", d)
  }
  D(pj, Ri);
  Re("vadStateConfidence", pj, ["iss", "sid", "mid", "vadStateList"]);

  function qj(a) {
    xg.call(this, a);
    this.Vb = [];
    this.va = [];
    this.wc = [];
    this.Y = k;
    this.se = {
      audio: j,
      video: j,
      hd: n,
      loopback: i
    };
    this.Jp = this.Ek = this.Zn = this.Yn = this.rl = this.gi = n;
    this.yk = new K;
    this.I().h(this, "change:peerState", this.fw).h(this, "peerConnection:addRemoteStream", this.sw).h(this, "peerConnection:removeRemoteStream", this.tw).h(this, "change:mediaState", this.Zm)
  }
  D(qj, xg);
  Pe("mediaSession", qj, ["$entity"]);
  u = qj.prototype;
  u.dr = 3E4;
  u.A = function () {
    this.stop();
    qj.d.A.call(this)
  };
  u.U = p("M");

  function rj(a, b) {
    return fb(a.va, b) || fb(a.wc, b)
  }
  u.cd = p("Y");
  u.be = function () {
    return this.Y && this.Y.be() || ""
  };
  u.Bd = function () {
    return this.Y && this.Y.Bd() || k
  };
  u.Uh = function () {
    return rj(this, function (a) {
      return a.Uh()
    })
  };
  u.de = function () {
    return rj(this, function (a) {
      return a.de()
    })
  };
  u.Gc = function () {
    return this.U().Gc()
  };
  u.vu = function () {
    return "pending" === this.Gc()
  };
  u.qu = function () {
    return "incoming" === this.Gc()
  };
  u.uu = function () {
    return "outgoing" === this.Gc()
  };
  u.wm = function () {
    return "connecting" === this.Gc()
  };
  u.gd = function () {
    return "active" === this.Gc()
  };
  u.nu = function () {
    return "closed" === this.Gc()
  };
  u.Sv = function () {
    this.gi = n;
    this.error("GET_LOCAL_STREAM_FAILED");
    0 == this.va.length && this.stop()
  };
  u.Tv = function (a) {
    this.gi = n;
    this.j("onLocalStream_", a);
    this.addStream(a)
  };

  function sj(a) {
    var b = a.va;
    F(a.Vb, function (a) {
      F(b, function (b) {
        a.addStream(b)
      });
      a.start(this.se)
    }, a)
  }
  u.start = function (a) {
    var b, c, d;
    a != k ? (b = a.loopback, c = a.audio, d = a.video, a = a.hd, b && (c == k && d == k && a == k) && (c = d = j, a = n), c != k || (c = n), d != k || (d = n), a != k || (a = n)) : (c = d = j, a = n);
    this.se = {
      audio: c,
      video: d,
      hd: a,
      loopback: b
    };
    0 == this.Vb.length && tj(this);
    if (0 == this.va.length) {
      if (!this.gi) {
        this.gi = j;
        b = uj(this.Ca());
        c = this.se;
        d = A(this.Tv, this);
        a = A(this.Sv, this);
        b.j("getLocalStream", c);
        var f = c.audio,
          g = c.video,
          h = hb(b.va, function (a) {
            return a.stream.Uh() === f && a.stream.de() === g
          });
        if (h) h.Uq++, d(h.stream);
        else if (f || g) {
          var h = c.video,
            l = {
              audio: c.audio
            };
          l.video = h && c.hd && Wg() ? {
            optional: [{
                minHeight: 720
              }, {
                minWidth: 960
              }
            ]
          } : h;
          Ag(l, A(b.$w, b, d), A(b.Zw, b, a));
          b.Wi++
        } else b.error("BAD_PARAM", "no media requested"), a({
            code: -1
          });
        vj(this)
      }
    } else sj(this);
    return this.yk
  };
  u.addStream = function (a) {
    jb(this.va, a) || (this.va.push(a), a.Og(this.rl), a.Qg(this.Yn), a = new Ye("mediaSession:addLocalStream", this, a), this.dispatchEvent(a), a.type = "mediaSession:addStream", this.dispatchEvent(a, k, j), sj(this))
  };
  u.removeStream = function (a) {
    if (mb(this.va, a)) {
      F(this.Vb, function (b) {
        b.removeStream(a)
      });
      var b = uj(this.Ca());
      b.j("returnLocalStream", a);
      var c = hb(b.va, function (b) {
        return b.stream === a
      });
      c && 0 === --c.Uq && (mb(b.va, c), a.stop());
      b = new Ye("mediaSession:removeLocalStream", this, a);
      this.dispatchEvent(b);
      b.type = "mediaSession:removeStream";
      this.dispatchEvent(b, k, j)
    }
  };
  u.stop = function () {
    F(ob(this.Vb), function (a) {
      a.stop()
    });
    this.Y && (af(this.I()), this.Y.fa(), this.Y = k);
    return this
  };
  u.Wj = p("rl");
  u.Bm = p("Yn");
  u.Og = function (a) {
    this.rl = a;
    F(this.va, function (b) {
      b.Og(a)
    });
    return this
  };
  u.Qg = function (a) {
    this.Yn = a;
    F(this.va, function (b) {
      b.Qg(a)
    });
    return this
  };
  u.Au = p("Zn");

  function wj(a, b) {
    a.Zn !== b && ((a.Zn = b) ? a.dispatchEvent("videopanel:show") : a.dispatchEvent("videopanel:hide"))
  }
  u.Ih = function () {
    return ob(this.va)
  };
  u.Oh = function () {
    return ob(this.wc)
  };

  function tj(a, b) {
    a.j("createPeerSession");
    var c = uj(a.Ca()).Al(a.Y, a.se, b);
    c && (c.xc(a), a.Vb.push(c), vj(a), 1 === a.Vb.length && (a.Jp = !b, a.dispatchEvent("add:mediaSession")));
    return c
  }
  u.sw = function (a) {
    a = a.stream;
    jb(this.wc, a) || (this.wc.push(a), this.dispatchEvent(new Ye("mediaSession:addRemoteStream", this, a)))
  };
  u.tw = function (a) {
    a = a.stream;
    mb(this.wc, a);
    a && (a.stop(), this.dispatchEvent(new Ye("mediaSession:removeRemoteStream", this, a)))
  };
  u.fw = function (a) {
    a = a.target;
    vj(this);
    switch (a.pg()) {
    case "incoming":
    case "outgoing":
    case "connecting":
      break;
    case "closed":
      this.j("removePeerSession"), mb(this.Vb, a), a.yb(), 0 == this.Vb.length && (F(ob(this.va), this.removeStream, this), kb(this.va), this.M.remove());
    default:
      if (this.Ek) {
        this.Ek = n;
        a = uj(this.Ca());
        a.j("stopRinging");
        try {
          0 === --a.cr && a.Gd && (a.Gd.pause(), a.Gd.load(), a.Dy = n)
        } catch (b) {
          a.error(b, "Error stopping ringtone")
        }
      }
    }
  };
  u.Zm = function (a) {
    var b = a.oldVal,
      c = a.da();
    this.j("onMediaStateChange", "oldState", b, "newState", c);
    switch (c) {
    case "incoming":
    case "outgoing":
      if (!this.Ek) {
        this.Ek = j;
        a = uj(this.Ca());
        a.j("startRinging");
        try {
          0 === a.cr++ && a.Gd && a.Gd.play()
        } catch (d) {
          a.error(d, "Error starting ringtone")
        }
        setTimeout(A(this.yw, this), this.dr)
      }
    }
    "inactive" === b && "incoming" === c || "inactive" === b && "pending" === c ? Nc(function () {
      this.dispatchEvent("exitState:" + b);
      this.dispatchEvent("enterState:" + c)
    }, 0, this) : (this.dispatchEvent("exitState:" +
      b), this.dispatchEvent("enterState:" + c))
  };

  function vj(a) {
    var b, c = a.Vb,
      d = "inactive";
    for (b = 0; b < c.length && !(d = c[b].pg(), "active" === d); ++b);
    a.gi && "active" !== d && (d = "pending");
    S(a.U(), "mediaState", d);
    a.yk.ad || ("active" === d ? a.yk.ya(a) : "closed" === d && a.yk.gb(new M("CLOSED")))
  }
  u.yw = function () {
    var a = this.Gc();
    if ("incoming" === a || "outgoing" === a) this.j("onRingerTimeout"), this.stop()
  };
  u.qr = ca("dr");
  u.ax = function (a) {
    if (a = a.target.get("vadStateList")) for (var b = 0; b < a.length; ++b) {
        var c = a[b],
          d = c.streamName;
        hb(this.Oh(), function (a) {
          return a.qf() === d ? (a.oh = c.confidence, a.Fu = c.lastSpeechValue, a.Yj !== c.vadState && bi(a, c.vadState), j) : n
        }, this)
    } else Md(this.ea, "Signalled with null confidence data")
  };

  function xj(a, b) {
    O.call(this, "mailbox");
    a && this.Bn(a);
    b || (b = 1);
    b && S(this, "totalMessages", b)
  }
  D(xj, O);
  Fe("mailbox", xj);
  xj.prototype.Bn = function (a) {
    var b = lf(this, "readIdx");
    (!b || a > b) && S(this, "readIdx", a)
  };
  Re(["mailbox"], xj, ["readIdx", "totalMessages"], "readIdx", xj.prototype.Bn);
  xj.prototype.uc = function (a) {
    if (!this.ox) {
      this.ox = j;
      var b = this.w(j);
      if (!b) return xj.d.uc.call(this, a);
      var c = this;
      b.yd(this.xa.iss).G(function (b) {
        jf(this, b);
        O.prototype.uc.call(this, a);
        var f = lf(c, "totalMessages") - lf(c, "readIdx");
        0 < f && (b.dispatchEvent("change"), b.gd() ? yj(this.w()) : hf(b, "unreadCount", 0, f))
      }, this)
    }
  };

  function T(a) {
    xg.call(this, a);
    this.N = k;
    this.Yd = j;
    this.di = 0;
    this.ji = k;
    this.cc = n;
    this.addEventListener("pub:sig:sessionInitiate", this.Lv, n, this);
    this.addEventListener("pub:typing", this.Uw, n, this);
    this.addEventListener("change:unreadCount", this.Vw, n, this);
    this.addEventListener("change:readIdx", this.lw, n, this)
  }
  D(T, xg);
  u = T.prototype;
  u.Uo = "";
  u.hi = 0;
  u.hk = 0;
  u.Ng = 0;
  u.zm = n;
  u.pb = re;
  u.A = function () {
    this.N && this.N.stop();
    T.d.A.call(this)
  };
  u.Dt = function () {
    var a = this.M.F(),
      b = a.indexOf(":");
    return 0 < b ? a.substr(b + 1) : a
  };
  u.be = function () {
    return this.M.be() || ""
  };
  u.Ae = function () {
    return this.M.Ae() || k
  };
  u.Pg = function (a) {
    this.M.Pg(a);
    return this
  };
  u.Wl = function () {
    return this.M.Wl()
  };
  u.Bd = function () {
    return this.M.Bd()
  };
  u.Ok = function (a) {
    var b = zj(this);
    b.start(a);
    return b
  };
  u.Kn = function () {
    return this.N ? this.N.stop() : k
  };
  u.xt = p("N");
  u.Lv = function (a) {
    var b = zj(this),
      c = a.target,
      d = c.Ij(),
      f = hb(b.Vb, function (a) {
        var b = a.pg();
        return a.cd().F() === d && ("outgoing" === b || "pending" == b)
      }),
      g = tj(b, c);
    if (g || f) f && (g ? g = "pending" === f.pg() || f.F() < g.F() ? f : g : (g = k, f.mq(a)), c.Ij() !== b.w().ob() && g && (Nd(b.ea, "Glare detected. Closing session " + g.F()), g.stop())), 0 < b.va.length && sj(b), vj(b)
  };
  u.Cp = function () {
    this.hi || (Aj(this), this.hk = Nc(function () {
      var a = wa() - this.hi;
      0 < a && 4E3 >= a && Aj(this);
      this.hi = 0
    }, 4E3, this));
    this.hi = wa();
    return this
  };

  function Aj(a) {
    a.j("sendTypingMessage");
    a.Tc("", "typing")
  }
  function Bj(a) {
    a.j("emitTypingEnd");
    a.Ng && Lc.clearTimeout(a.Ng);
    a.Ng = 0;
    a.zm = n;
    a.dispatchEvent("typing:end")
  }
  u.Uw = function () {
    this.j("onTypingMessage");
    this.Ng ? (this.j("onTypingMessage", "clearing remote typing timer"), Lc.clearTimeout(this.Ng)) : (this.j("onTypingMessage", "emitting typing start"), this.zm = j, this.dispatchEvent("typing:start"));
    this.Ng = Nc(function () {
      Bj(this)
    }, 5E3, this)
  };

  function zj(a) {
    if (!a.N) {
      var b = uj(a.Ca());
      b.j("createMediaSession");
      var c;
      c = a.w().ca.Pc("/local/mediaSession", "mediaSession").Ta().nb;
      a.Ta();
      c.Y = a;
      c.I().h(a, "pub:vadStateConfidence", c.ax);
      c.xc(a);
      c.on("remove:mediaSession", b.Ym, b).on("change:mediaState", b.Zm, b);
      b.mi.push(c);
      b.Rd || (b.Rd = c);
      a.N = c;
      a.N.on("remove:mediaSession", a.Ym, a)
    }
    return a.N
  }
  u.Ym = function () {
    this.N.yb();
    this.N = k
  };
  u.postMessage = function (a, b) {
    this.j("postMessage", "payload", a, "msgType", b);
    if (Ja(Ya(a)) || y(b) && "im" != b && !Fa(b, "x-msg-")) return ed("BAD_PARAM");
    var c = b || "im",
      a = a.replace(/[\s\xa0]+$/, "");
    "im" === c && (this.hk && (Lc.clearTimeout(this.hk), this.hk = 0), this.hi = 0);
    return this.Tc(a, c)
  };
  u.yt = function (a) {
    a = y(a) ? a : 20;
    a = Math.min(a, 100);
    return this.w().Me(Cj(this.w().ob(), this.F()), new Dj(34, a, j))
  };
  u.Jh = function (a, b) {
    if (!this.ji && (this.ji = this.w().Jh(this.F(), a, b))) this.di = lf(this.ji, "totalMessages");
    return this.ji
  };

  function Ej(a) {
    if (!a.pb()) {
      var b = a.Jh();
      b && b.Bn(a.di)
    }
  }
  u.sf = function () {
    if (this.cc || this.pb()) return 0;
    var a = this.Jh();
    if (!a) return 0;
    a = this.di - lf(a, "readIdx");
    return 0 > a ? 0 : a
  };
  u.si = function (a) {
    if (!this.pb()) {
      Bj(a.Re);
      var b = !! Fj(this.w(), this.F()),
        a = lf(a, "idx");
      a > this.di && (this.Jh(j, a), this.di = a, this.cc ? (b && yj(this.w()), Ej(this)) : b && (b = this.sf(), hf(this, "unreadCount", b - 1, b)))
    }
  };
  u.Vw = function (a) {
    a.val && (a = a.val - (a.oldVal || 0), 0 < a && yj(this.w(), a))
  };
  u.lw = function (a) {
    if (a.val && (a = a.val - (a.oldVal || 0), 0 < a)) {
      var b = this.w(),
        c = b.bc;
      b.bc = y(a) ? b.bc - a : b.bc - 1;
      0 > b.bc && (b.bc = 0);
      c !== b.bc && hf(b, "totalUnreadCount", c, b.bc)
    }
  };
  u.su = function () {
    return Vg() && mf(this.M, "webrtcEnabled")
  };
  u.zu = p("zm");
  u.Kx = ca("Yd");
  u.setActive = function (a) {
    (this.cc = a) && Ej(this);
    return this
  };
  u.gd = p("cc");

  function Gj(a, b, c, d) {
    var a = a.w(),
      f = a.ob(),
      c = (new Qi(d, f, c, j, n)).yb();
    return a.put(b, c)
  };

  function ug(a, b) {
    Ga(a, "/") || (a += "/");
    var c;
    if (!(c = b)) {
      c = Ee();
      var d = c.getTime();
      d <= De ? c.setTime(++De) : De = d;
      c = [c.getUTCFullYear(), E(c.getUTCMonth() + 1, 2), E(c.getUTCDate(), 2), E(c.getUTCHours(), 2), E(c.getUTCMinutes(), 2), E(c.getUTCSeconds(), 2), E(c.getUTCMilliseconds(), 3)].join("")
    }
    return a + c
  }
  function Cj(a, b) {
    return "/user/" + a + "/msg/" + b
  }
  function Hj(a, b) {
    var c = "/app/" + a + "/account";
    b && (c += "/" + b);
    return c
  }
  function vg(a) {
    var b = a.lastIndexOf("/");
    return 0 >= b || 1 === a.length ? "/" : a.substr(0, b)
  }

  function Ij(a) {
    return /^(\/local\/)/.test(a)
  };

  function Jj(a) {
    T.call(this, a);
    this.Fk = k
  }
  D(Jj, T);
  Pe("person", Jj, ["$entity"]);
  u = Jj.prototype;
  u.Zl = function () {
    return this.M.Zl()
  };
  u.pb = function () {
    return this.F() === this.w().ob()
  };
  u.on = function (a, b, c) {
    Kj(this, "on", a);
    return Jj.d.on.call(this, a, b, c)
  };
  u.Ke = function (a, b, c) {
    Kj(this, "one", a);
    return Jj.d.Ke.call(this, a, b, c)
  };
  u.qi = function (a, b, c) {
    Kj(this, "off", a);
    return Jj.d.qi.call(this, a, b, c)
  };

  function Kj(a, b, c) {
    fb(c.split(gf), function (a) {
      return "change:presenceState" === a || "change" === a
    }) && (c = [{
        event: "change:connectionState",
        target: a.w().W()
      }, {
        event: "change:online",
        target: a.M
      }, {
        event: "change:presenceAutoState",
        target: a.M
      }, {
        event: "change:presenceState",
        target: a.M
      }
    ], a.Fk = a.Mh(), F(c, function (a) {
      if ("on" === b) a.target.on(a.event, this.Wm, this);
      else "one" === b ? a.target.Ke(a.event, this.Wm, this) : "off" === b && a.target.qi(a.event, this.Wm, this)
    }, a))
  }
  u.Wm = function (a) {
    "change:presenceState" === a.type && a.stopPropagation();
    a = this.Mh();
    a !== this.Fk && (hf(this, "presenceState", this.Fk, a), this.Fk = a)
  };
  u.Mh = function () {
    var a = this.M.Mh();
    return !this.M.zg() || !this.w().W().yf() || "invisible" === a ? "offline" : a || "online"
  };
  u.Vl = function () {
    return this.M.Vl()
  };
  u.Jk = function (a, b) {
    switch (a) {
    case "invisible":
    case "do_not_disturb":
    case "online":
      Lj(this.M, a);
      break;
    case "none":
      S(this.M, "presenceAutoState", a)
    }
    b && S(this.M, "presenceDesc", b)
  };
  u.Tc = function (a, b) {
    var c;
    if ("typing" === b) {
      c = lj(this);
      var d = this.w(),
        f = d.ob(),
        f = (new Qi(b, f, a, j, n)).yb();
      c = d.vc(c, f)
    } else d = ug(lj(this)), c = Gj(this, d, a, b), this.pb() || (d = ug(Cj(this.w().ob(), this.F())), Gj(this, d, a, b));
    return c
  };

  function lj(a) {
    return Cj(a.F(), a.w().ob())
  };

  function Mj() {};

  function Nj(a) {
    this.ki = a;
    this.lr = new le
  }
  u = Nj.prototype;
  u.ki = k;
  u.lr = k;
  u.set = function (a, b) {
    y(b) ? this.ki.set(a, this.lr.Ma(b)) : this.ki.remove(a)
  };
  u.get = function (a) {
    a = this.ki.get(a);
    if (a !== k) try {
        return je(a)
    } catch (b) {
      e("Storage: Invalid value was encountered")
    }
  };
  u.remove = function (a) {
    this.ki.remove(a)
  };

  function Oj(a) {
    Nj.call(this, a)
  }
  D(Oj, Nj);

  function Pj(a) {
    this.data = a
  }
  function Qj(a) {
    return !y(a) || a instanceof Pj ? a : new Pj(a)
  }
  Oj.prototype.set = function (a, b) {
    Oj.d.set.call(this, a, Qj(b))
  };
  Oj.prototype.$l = function (a) {
    a = Oj.d.get.call(this, a);
    if (!y(a) || a instanceof Object) return a;
    e("Storage: Invalid value was encountered")
  };
  Oj.prototype.get = function (a) {
    (a = this.$l(a)) ? (a = a.data, y(a) || e("Storage: Invalid value was encountered")) : a = i;
    return a
  };

  function Rj(a) {
    Nj.call(this, a)
  }
  D(Rj, Oj);
  Rj.prototype.set = function (a, b, c) {
    if (b = Qj(b)) {
      if (c) {
        if (c < wa()) {
          Rj.prototype.remove.call(this, a);
          return
        }
        b.expiration = c
      }
      b.creation = wa()
    }
    Rj.d.set.call(this, a, b)
  };
  Rj.prototype.$l = function (a, b) {
    var c = Rj.d.$l.call(this, a);
    if (c) {
      var d;
      if (d = !b) {
        d = c.creation;
        var f = c.expiration;
        d = !! f && f < wa() || !! d && d > wa()
      }
      if (d) Rj.prototype.remove.call(this, a);
      else return c
    }
  };

  function Sj(a) {
    Tj(this, a)
  }
  Sj.prototype = {
    Xb: 24,
    bq: 8,
    Qd: Sj,
    copy: function () {
      return new this.Qd(this)
    },
    xh: function (a) {
      "number" === typeof a && (a = new this.Qd(a));
      var b = 0,
        c;
      this.Bh();
      a.Bh();
      for (c = 0; c < this.$.length || c < a.$.length; c++) b |= Wj(this, c) ^ Wj(a, c);
      return 0 === b
    },
    toString: function () {
      this.Bh();
      var a = "",
        b, c, d = this.$;
      for (b = 0; b < this.$.length; b++) {
        for (c = d[b].toString(16); b < this.$.length - 1 && 6 > c.length;) c = "0" + c;
        a = c + a
      }
      return "0x" + a
    },
    add: function (a) {
      return Xj(this.copy(), a)
    },
    sub: function (a) {
      var b = this.copy(),
        c = a;
      "object" !== typeof c && (c =
        new b.Qd(c));
      for (var a = b.$, d = c.$, c = a.length; c < d.length; c++) a[c] = 0;
      for (c = 0; c < d.length; c++) a[c] -= d[c];
      return b
    },
    reduce: function () {
      return this
    },
    Bh: function () {
      return this.normalize()
    },
    normalize: function () {
      var a = 0,
        b, c = this.Gp,
        d, f = this.$,
        g = f.length,
        h = this.Rq;
      for (b = 0; b < g || 0 !== a && -1 !== a; b++) a = (f[b] || 0) + a, d = f[b] = a & h, a = (a - d) * c; - 1 === a && (f[b - 1] -= this.ix);
      return this
    },
    Hs: function () {
      this.Bh();
      for (var a = this.Xb * (this.$.length - 1), b = this.$[this.$.length - 1]; b; b >>= 1) a++;
      return a + 7 & -8
    }
  };

  function Yj(a) {
    var b = 0,
      c, d = a.Gp,
      f, g = a.$,
      h = g.length,
      l = a.Rq;
    for (c = 0; c < h - 1; c++) b = g[c] + b, f = g[c] = b & l, b = (b - f) * d;
    g[c] += b;
    return a
  }
  function bk(a, b) {
    "number" === typeof b && (b = new a.Qd(b));
    var c, d, f = a.$,
      g = b.$,
      h = f.length,
      l = g.length,
      m = new a.Qd,
      q = m.$,
      s, r = a.bq;
    for (c = 0; c < a.$.length + b.$.length + 1; c++) q[c] = 0;
    for (c = 0; c < h; c++) {
      s = f[c];
      for (d = 0; d < l; d++) q[c + d] += s * g[d];
      --r || (r = a.bq, Yj(m))
    }
    return Yj(m).reduce()
  }

  function Xj(a, b) {
    "object" !== typeof b && (b = new a.Qd(b));
    var c, d = a.$,
      f = b.$;
    for (c = d.length; c < f.length; c++) d[c] = 0;
    for (c = 0; c < f.length; c++) d[c] += f[c];
    return a
  }
  function Wj(a, b) {
    return b >= a.$.length ? 0 : a.$[b]
  }
  function Tj(a, b) {
    var c = 0,
      d;
    switch (typeof b) {
    case "object":
      a.$ = b.$.slice(0);
      break;
    case "number":
      a.$ = [b];
      a.normalize();
      break;
    case "string":
      b = b.replace(/^0x/, "");
      a.$ = [];
      d = a.Xb / 4;
      for (c = 0; c < b.length; c += d) a.$.push(parseInt(b.substring(Math.max(b.length - c - d, 0), b.length - c), 16));
      break;
    default:
      a.$ = [0]
    }
  }
  Sj.prototype.Gp = 1 / (Sj.prototype.ix = Math.pow(2, Sj.prototype.Xb));
  Sj.prototype.Rq = (1 << Sj.prototype.Xb) - 1;

  function ck(a, b) {
    function c(a) {
      Tj(this, a)
    }
    var d = c.prototype = new Sj,
      f, g;
    f = d.Om = Math.ceil(g = a / d.Xb);
    d.ct = a;
    d.offset = [];
    d.Yo = [];
    d.mk = f;
    d.Sl = 0;
    d.Ah = [];
    d.ep = [];
    d.je = c.je = new Sj(Math.pow(2, a));
    d.Sl = 0 | -Math.pow(2, a % d.Xb);
    for (f = 0; f < b.length; f++) d.offset[f] = Math.floor(b[f][0] / d.Xb - g), d.Ah[f] = Math.ceil(b[f][0] / d.Xb - g), d.Yo[f] = b[f][1] * Math.pow(0.5, a - b[f][0] + d.offset[f] * d.Xb), d.ep[f] = b[f][1] * Math.pow(0.5, a - b[f][0] + d.Ah[f] * d.Xb), Xj(d.je, new Sj(Math.pow(2, b[f][0]) * b[f][1])), d.mk = Math.min(d.mk, -d.offset[f]);
    d.Qd =
      c;
    Yj(d.je);
    d.reduce = function () {
      var a, b, c, d = this.Om,
        f = this.$,
        g = this.offset,
        v = this.offset.length,
        x = this.Yo,
        C;
      for (a = this.mk; f.length > d;) {
        c = f.pop();
        C = f.length;
        for (b = 0; b < v; b++) f[C + g[b]] -= x[b] * c;
        a--;
        a || (f.push(0), Yj(this), a = this.mk)
      }
      Yj(this);
      return this
    };
    d.jo = -1 === d.Sl ? d.reduce : function () {
      var a = this.$,
        b = a.length - 1,
        c, d;
      this.reduce();
      if (b === this.Om - 1) {
        d = a[b] & this.Sl;
        a[b] -= d;
        for (c = 0; c < this.Ah.length; c++) a[b + this.Ah[c]] -= this.ep[c] * d;
        this.normalize()
      }
    };
    d.Bh = function () {
      var a, b;
      this.jo();
      Xj(this, this.je);
      Xj(this,
        this.je);
      this.normalize();
      this.jo();
      for (b = this.$.length; b < this.Om; b++) this.$[b] = 0;
      a = this.je;
      "number" === typeof a && (a = new this.Qd(a));
      var c = b = 0,
        d, f, g;
      for (d = Math.max(this.$.length, a.$.length) - 1; 0 <= d; d--) f = Wj(this, d), g = Wj(a, d), c |= g - f & ~b, b |= f - g & ~c;
      a = (c | ~b) >>> 31;
      for (b = 0; b < this.$.length; b++) this.$[b] -= this.je.$[b] * a;
      Yj(this);
      return this
    };
    d.inverse = function () {
      var a = this.je.sub(2);
      "number" === typeof a ? a = [a] : a.$ !== i && (a = a.normalize().$);
      var b, c, d = new this.Qd(1),
        f = this;
      for (b = 0; b < a.length; b++) for (c = 0; c < this.Xb; c++) a[b] &
            1 << c && (d = bk(d, f)), f = bk(f, f);
      return d
    };
    c.Rl = function (a) {
      var b = c,
        b = b || Sj,
        d = new b,
        f = [],
        g = b.prototype,
        b = Math.min(b.Hs || 4294967296, gh(a)),
        r = b % g.Xb || g.Xb;
      for (f[0] = eh(a, 0, r); r < b; r += g.Xb) f.unshift(eh(a, r, g.Xb));
      d.$ = f;
      return d
    };
    return c
  }
  ck(127, [
    [0, -1]
  ]);
  ck(255, [
    [0, -19]
  ]);
  var dk = ck(192, [
    [0, -1],
    [64, -1]
  ]),
    ek = ck(224, [
      [0, 1],
      [96, -1]
    ]),
    fk = ck(256, [
      [0, -1],
      [96, 1],
      [192, 1],
      [224, -1]
    ]),
    gk = ck(384, [
      [0, -1],
      [32, 1],
      [96, -1],
      [128, -1]
    ]);
  ck(521, [
    [0, -1]
  ]);

  function hk(a, b, c) {
    b === i ? this.pu = j : (this.x = b, this.y = c, this.pu = n);
    this.Mo = a
  }
  hk.prototype = {
    Am: function () {
      return bk(this.y, this.y).xh(this.Mo.Fs.add(bk(this.x, this.Mo.rs.add(bk(this.x, this.x)))))
    }
  };

  function ik(a, b, c, d, f, g) {
    this.field = a;
    this.Oy = a.prototype.je.sub(b);
    this.rs = new a(c);
    this.Fs = new a(d);
    this.my = new hk(this, new a(f), new a(g))
  }
  ik.prototype.Rl = function (a) {
    var b = this.field.prototype.ct + 7 & -8,
      a = new hk(this, this.field.Rl(bh(a, 0, b)), this.field.Rl(bh(a, b, 2 * b)));
    a.Am() || e(new Xg("not on the curve!"));
    return a
  };
  new ik(dk, "0x662107c8eb94364e4b2dd7ce", -3, "0x64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1", "0x188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012", "0x07192b95ffc8da78631011ed6b24cdd573f977a11e794811");
  new ik(ek, "0xe95c1f470fc1ec22d6baa3a3d5c4", -3, "0xb4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4", "0xb70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21", "0xbd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34");
  new ik(fk, "0x4319055358e8617b0c46353d039cdaae", -3, "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b", "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296", "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5");
  new ik(gk, "0x389cb27e0bc8d21fa7e5f24cb74f58851313e696333ad68c", -3, "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef", "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7", "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f");

  function jk(a, b, c) {
    this.Mp = this.Oj = this.ug = k;
    b ? (this.Mp = a, this.ug = k, this.Oj = a.split(".")[0]) : (this.Mp = k, this.ug = {
      typ: "JWT",
      alg: "none"
    }, c && rc(this.ug, c), this.Oj = k)
  }
  jk.prototype.ea = k;
  Fe("JWT", jk);
  jk.prototype.Da = function () {
    !this.ug && this.Oj && (this.ug = ze(this.Oj));
    return this.ug.typ
  };

  function kk(a, b, c, d, f, g, h, l, m) {
    this.dg = a;
    this.$e = b;
    this.Pr = c;
    this.Yp = d;
    this.lx = f ? f : {};
    this.Ds = g || k;
    this.zs = h || k;
    this.gn = k;
    this.mx = l || k;
    this.Vo = m || k
  }
  D(kk, Xe);
  Me("credentials", kk, "appId authId username userToken profile oauthToken appUrl providerUrl email".split(" "));

  function lk(a) {
    a.type = "credentials";
    return Ke(Oe, a, k, i, i)
  }
  u = kk.prototype;
  u.Ma = function () {
    return {
      type: "credentials",
      appId: this.qa(),
      authId: this.bd(),
      username: this.Pr,
      userToken: this.Yp,
      profile: this.Nh(),
      oauthToken: this.Bj(),
      appUrl: this.zs,
      providerUrl: this.Gj(),
      email: this.Vo
    }
  };
  u.qa = p("dg");
  u.bd = p("$e");
  u.Bj = p("Ds");
  u.Nh = p("lx");
  u.Gj = p("mx");

  function mk(a) {
    this.Ab = a || nk
  }
  function nk(a, b) {
    return String(a) < String(b) ? -1 : String(a) > String(b) ? 1 : 0
  }
  u = mk.prototype;
  u.ia = k;
  u.Ab = k;
  u.ie = k;
  u.he = k;
  u.L = 0;
  u.add = function (a) {
    if (this.ia == k) return this.he = this.ie = this.ia = new ok(a), this.L = 1, j;
    var b = n;
    pk(this, function (c) {
      var d = k;
      if (0 < this.Ab(c.value, a)) {
        if (d = c.left, c.left == k) {
          var f = new ok(a, c);
          c.left = f;
          c == this.ie && (this.ie = f);
          b = j;
          qk(this, c)
        }
      } else 0 > this.Ab(c.value, a) && (d = c.right, c.right == k && (f = new ok(a, c), c.right = f, c == this.he && (this.he = f), b = j, qk(this, c)));
      return d
    });
    b && (this.L += 1);
    return b
  };
  u.remove = function (a) {
    var b = k;
    pk(this, function (c) {
      var d = k;
      if (0 < this.Ab(c.value, a)) d = c.left;
      else if (0 > this.Ab(c.value, a)) d = c.right;
      else if (b = c.value, c.left != k || c.right != k) {
        var f = k,
          g;
        if (c.left != k) {
          g = rk(this, c.left);
          if (g != c.left) {
            if (g.parent.right = g.left) g.left.parent = g.parent;
            g.left = c.left;
            g.left.parent = g;
            f = g.parent
          }
          g.parent = c.parent;
          g.right = c.right;
          g.right && (g.right.parent = g);
          c == this.he && (this.he = g)
        } else {
          g = sk(this, c.right);
          if (g != c.right) {
            if (g.parent.left = g.right) g.right.parent = g.parent;
            g.right = c.right;
            g.right.parent = g;
            f = g.parent
          }
          g.parent = c.parent;
          g.left = c.left;
          g.left && (g.left.parent = g);
          c == this.ie && (this.ie = g)
        }
        tk(c) ? c.parent.left = g : uk(c) ? c.parent.right = g : this.ia = g;
        qk(this, f ? f : g)
      } else tk(c) ? (this.Ty = 1, c.parent.left = k, c == this.ie && (this.ie = c.parent), qk(this, c.parent)) : uk(c) ? (c.parent.right = k, c == this.he && (this.he = c.parent), qk(this, c.parent)) : this.clear();
      return d
    });
    b && (this.L = this.ia ? this.L - 1 : 0);
    return b
  };
  u.clear = function () {
    this.he = this.ie = this.ia = k;
    this.L = 0
  };
  u.contains = function (a) {
    var b = n;
    pk(this, function (c) {
      var d = k;
      0 < this.Ab(c.value, a) ? d = c.left : 0 > this.Ab(c.value, a) ? d = c.right : b = j;
      return d
    });
    return b
  };
  u.Tb = p("L");
  u.Xa = function () {
    var a = [];
    vk(this, function (b) {
      a.push(b)
    });
    return a
  };

  function vk(a, b, c) {
    if (a.ia) {
      var d;
      c ? pk(a, function (a) {
        var b = k;
        0 < this.Ab(a.value, c) ? (b = a.left, d = a) : 0 > this.Ab(a.value, c) ? b = a.right : d = a;
        return b
      }) : d = sk(a);
      for (var a = d, f = d.left ? d.left : d; a != k;) if (a.left != k && a.left != f && a.right != f) a = a.left;
        else {
          if (a.right != f && b(a.value)) break;
          var g = a,
            a = a.right != k && a.right != f ? a.right : a.parent,
            f = g
        }
    }
  }
  function pk(a, b, c) {
    for (c = c ? c : a.ia; c && c != k;) c = b.call(a, c)
  }

  function qk(a, b) {
    pk(a, function (a) {
      var b = a.left ? a.left.height : 0,
        f = a.right ? a.right.height : 0;
      1 < b - f ? (a.left.right && (!a.left.left || a.left.left.height < a.left.right.height) && wk(this, a.left), xk(this, a)) : 1 < f - b && (a.right.left && (!a.right.right || a.right.right.height < a.right.left.height) && xk(this, a.right), wk(this, a));
      b = a.left ? a.left.height : 0;
      f = a.right ? a.right.height : 0;
      a.height = Math.max(b, f) + 1;
      return a.parent
    }, b)
  }

  function wk(a, b) {
    tk(b) ? (b.parent.left = b.right, b.right.parent = b.parent) : uk(b) ? (b.parent.right = b.right, b.right.parent = b.parent) : (a.ia = b.right, a.ia.parent = k);
    var c = b.right;
    b.right = b.right.left;
    b.right != k && (b.right.parent = b);
    c.left = b;
    b.parent = c
  }
  function xk(a, b) {
    tk(b) ? (b.parent.left = b.left, b.left.parent = b.parent) : uk(b) ? (b.parent.right = b.left, b.left.parent = b.parent) : (a.ia = b.left, a.ia.parent = k);
    var c = b.left;
    b.left = b.left.right;
    b.left != k && (b.left.parent = b);
    c.right = b;
    b.parent = c
  }

  function sk(a, b) {
    if (!b) return a.ie;
    var c = b;
    pk(a, function (a) {
      var b = k;
      a.left && (b = c = a.left);
      return b
    }, b);
    return c
  }
  function rk(a, b) {
    if (!b) return a.he;
    var c = b;
    pk(a, function (a) {
      var b = k;
      a.right && (b = c = a.right);
      return b
    }, b);
    return c
  }
  function ok(a, b) {
    this.value = a;
    this.parent = b ? b : k
  }
  ok.prototype.left = k;
  ok.prototype.right = k;
  ok.prototype.height = 1;

  function uk(a) {
    return !!a.parent && a.parent.right == a
  }
  function tk(a) {
    return !!a.parent && a.parent.left == a
  };

  function yk(a, b, c, d) {
    kf.call(this, a);
    this.Ub = b;
    this.wb = {};
    this.Bb = [];
    this.Wc = k;
    c && (this.Wb = c);
    d && zk(this, d)
  }
  D(yk, kf);
  Me("collection", yk);
  u = yk.prototype;
  u.Wb = k;
  u.ia = k;
  u.km = n;
  u.Ab = function (a, b) {
    var c = a.m(),
      d = b.m();
    return c < d ? -1 : c > d ? 1 : 0
  };
  u.A = function () {
    this.forEach(this.kn, this);
    this.Wc = this.Bb = this.wb = k;
    this.ia && (this.kn(this.ia), this.ia = k);
    yk.d.A.call(this)
  };
  u.uc = function (a) {
    yk.d.uc.call(this, a);
    F(this.Bb, function (b) {
      b.Oa(j, a)
    })
  };
  u.kn = function (a) {
    a.Fd = ob(a.Fd);
    mb(a.Fd, this);
    a.fa()
  };
  u.Ma = function () {
    return Se(this.Bb)
  };
  u.valueOf = function () {
    this.Wc === k && (this.Wc = [], Ak(this));
    return this.Wc
  };
  u.ze = p("Wb");
  u.Bt = p("ia");
  u.Da = function () {
    return this.ia && this.ia.Da() || "collection"
  };
  u.Ad = function () {
    return this.Bb.length
  };
  u.Tb = function () {
    var a = this.ia;
    return a != k ? lf(a, "cnt") : 0
  };
  u.st = p("Bb");
  u.get = function (a) {
    return this.wb[a]
  };
  u.forEach = function (a, b) {
    F(this.Bb, a, b)
  };
  u.$t = p("km");
  u.Ju = function () {
    if (!this.km) return new K(this);
    var a, b = this.ze();
    a = b.Xd ? this.Bb[0].m() : this.Bb[this.Ad() - 1].m();
    a = new Dj(b.Ja & 96, b.ge, !! b.Xd, a);
    return this.w().Wb(this.m(), a, this)
  };

  function zk(a, b) {
    var c = 0 === a.Ad() && a.ia === k;
    F(b, function (a) {
      this.Sd(a, c)
    }, a);
    if (c) {
      a.sort();
      var d = a.ia || a.ca;
      d && a.I().h(d, "add", a.$m).h(d, "remove", a.Ig).h(d, "change:cnt", a.Xm);
      if (a.Wb && (d = a.Wb.ge) && a.Ad() >= d) a.km = j;
      a.Oa(j, n)
    }
  }
  u.add = function (a) {
    this.Sd(a);
    return this
  };
  u.remove = function (a) {
    if (a.m() in this.wb) {
      delete this.wb[a.m()];
      if (this.ia === a) this.ia = k;
      else {
        var b = cb(this.Bb, a);
        bb.splice.call(this.Bb, b, 1);
        this.Wc && bb.splice.call(this.Wc, b, 1);
        this.Ob && this.dispatchEvent(new ef("removeItem", this, a, b))
      }
      this.kn(a)
    }
    return this
  };
  u.sort = function () {
    this.Ab && (bb.sort.call(this.Bb, this.Ab || sb), this.Wc && Ak(this));
    return this
  };
  u.Sd = function (a, b) {
    var c = a.m();
    if (!(c in this.wb)) {
      this.wb[c] = a.Ta();
      jf(a, this);
      var d;
      if (c === this.m() && a instanceof O) this.ia = a;
      else if (b || !this.Ab) d = this.Ad(), this.Bb.push(a), this.Wc && this.Wc.push(a.valueOf());
      else {
        var f, c = this.Bb;
        d = this.Ab || sb;
        for (var g = 0, h = c.length; g < h;) {
          var l = g + h >> 1,
            m;
          m = d(a, c[l]);
          0 < m ? g = l + 1 : (h = l, f = !m)
        }
        f = f ? g : ~g;
        d = 0 <= f ? f : ~f;
        qb(this.Bb, d, 0, a);
        this.Wc && qb(this.Wc, d, 0, a.valueOf())
      }
      y(d) && this.Ob && this.dispatchEvent(new ef("addItem", this, a, d))
    }
  };

  function Ak(a) {
    var b = a.Bb,
      a = a.Wc,
      c = b.length,
      d;
    a.Ey = c;
    for (d = 0; d < c; ++d) a[d] = b[d].valueOf()
  }
  u.$m = function (a) {
    a = a.U();
    Bk(this, a, this.Wb ? this.Wb.Ja : 17) && this.Sd(a)
  };
  u.Ig = function (a) {
    a = a.U();
    if (Bk(this, a, this.Wb ? this.Wb.Ja : 17)) a = a.m(), (a = this.m() === a ? this.ia : this.get(a)) && this.remove(a)
  };
  u.Xm = function (a) {
    this.dispatchEvent(a)
  };

  function Bk(a, b, c) {
    var b = b.m(),
      d = a.m();
    if (!Fa(b, d) || !Ck(b, d.length, c) || (c = a.Wb.Tg) && b < c) return n;
    c = a.Wb.ge;
    d = a.Ad();
    if (c && d >= c) if (a.Wb.Xd) {
        if (a = a.Bb[0].m(), b < a) return n
      } else if (a = a.Bb[d - 1].m(), b > a) return n;
    return j
  };

  function Dk(a) {
    ff.call(this);
    this.Za = a || k;
    this.wh = {};
    this.mg = new mk(Ek);
    this.L = 0;
    this.Oa(j, n)
  }
  D(Dk, ff);
  Fe("objectCache", Dk);
  u = Dk.prototype;
  u.ea = ie("vline.data.ObjectCache");

  function Ek(a, b) {
    var c = a.rd,
      d = b.rd;
    return c < d ? -1 : c > d ? 1 : 0
  }
  u.Ma = function () {
    return {
      objects: this.L
    }
  };
  u.w = p("Za");
  u.Ad = p("L");
  u.contains = function (a) {
    Fk(this, a);
    return a in this.wh
  };
  u.get = function (a) {
    Fk(this, a);
    (a = this.wh[a]) && a.Ta();
    return a
  };
  u.Me = function (a, b) {
    function c(a) {
      d.push(a);
      return g && d.length >= g
    }
    Fk(this, a);
    var d = [],
      f = b.Ja,
      g = b.ge,
      h = b.Tg;
    h && (h = Gk(h));
    96 === (f & 96) ? ng(this, c, h, h || a + "/", a + "0", !! b.Xd) : 32 === (f & 32) && this.qc(a, c, h, !! b.Xd);
    16 === (f & 16) && (f = this.get(a)) && d.push(f);
    f = new yk(this, a, b, d);
    f.Oa(j, n);
    return f
  };
  u.put = function (a, b, c) {
    return Hk(this, a, b, c)
  };
  u.Pc = function (a, b, c) {
    return Hk(this, ug(a, c), b)
  };
  u.vc = function (a, b) {
    var c = Je(b);
    c.m() || c.ub(ug(a));
    try {
      this.Sd(c, "pub")
    } finally {
      og(this, c.m())
    }
    return c
  };
  u.forEach = function (a, b, c) {
    return ng(this, a, b, k, k, c)
  };
  u.qc = function (a, b, c, d) {
    return ng(this, b, c, a + "/#", a + "/$", d)
  };

  function og(a, b) {
    Fk(a, b);
    var c = a.wh[b];
    c && (nc(a.wh, b), a.mg.remove(c), a.L--, c.rd = k)
  }
  function Hk(a, b, c, d) {
    var b = b || ug("/tmp"),
      f = a.get(b);
    f ? (a = c == k ? {} : z(c) ? {
      type: c
    } : na(c.Ma) ? c.Ma() : c, a instanceof O ? a.ub(b) : a.path = b, d ? zg(f, a) : f.set(a)) : (f = Je(c), f.ub(b), "iat" in f.xa || (b = f, c = Ee().getTime(), S(b, "iat", Number(c), i)), a.Sd(f, d ? k : "add"));
    f.Ja &= -513;
    return f
  }
  u.Sd = function (a, b) {
    var c = a.m();
    a.ll(this, b);
    a.rd = Gk(c);
    oc(this.wh, c, a);
    this.mg.add(a);
    this.L++;
    return a
  };

  function Fk(a, b) {
    (!z(b) || !Fa(b, "/") || !(1 === b.length || "/" !== b.charAt(b.length - 1))) && e(a.error("BAD_PARAM", "Invalid path: " + b))
  }
  function Gk(a) {
    var b = a.lastIndexOf("/");
    return a.substr(0, b + 1) + "#" + a.substr(b + 1)
  }

  function ng(a, b, c, d, f, g) {
    if (g) {
      var h;
      c ? (h = c.length, h = c.substr(0, h - 1) + String.fromCharCode(c.charCodeAt(h - 1) - 1)) : h = f;
      a: {
        var l;
        if (h) {
          if (0 === a.L || sk(a.mg).value.rd > h) break a;
          l = {
            rd: h
          }
        }
        h = b;
        d && (h = function (a) {
          return a.rd <= d ? j : b(a)
        });
        var c = a.mg,
          a = h,
          m = l;
        if (c.ia) {
          var q;
          m ? pk(c, A(function (a) {
            var b = k;
            0 < this.Ab(a.value, m) ? b = a.left : (0 > this.Ab(a.value, m) && (b = a.right), q = a);
            return b
          }, c)) : q = rk(c);
          l = q;
          for (h = q.right ? q.right : q; l != k;) if (l.right != k && l.right != h && l.left != h) l = l.right;
            else {
              if (l.left != h && a(l.value)) break;
              c = l;
              l = l.left != k && l.left != h ? l.left : l.parent;
              h = c
            }
        }
      }
    } else a: {
        if (l = c ? c + "!" : d) {
          if (0 === a.L || rk(a.mg).value.rd < l) break a;
          h = {
            rd: l
          }
        }
        l = b;
        f && (l = function (a) {
          return a.rd >= f ? j : b(a)
        });
        vk(a.mg, l, h)
    }
  };

  function Ik(a, b, c, d, f, g) {
    O.call(this, a);
    b && this.tb(b);
    c && this.nr(c);
    d && S(this, "profileUrl", d);
    f && S(this, "thumbnailUrl", f);
    "boolean" == typeof g && S(this, "webrtcEnabled", g)
  }
  D(Ik, O);
  u = Ik.prototype;
  u.be = function () {
    return Q(this, "displayName")
  };
  u.nr = function (a) {
    return S(this, "displayName", a)
  };
  u.Ae = function () {
    return Q(this, "status")
  };
  u.Pg = function (a) {
    return S(this, "status", a)
  };
  u.Wl = function () {
    return Q(this, "profileUrl")
  };
  u.Bd = function () {
    return Q(this, "thumbnailUrl")
  };

  function Jk(a, b, c, d, f, g, h, l) {
    Ik.call(this, "person", a, b, c, d, f);
    h && Lj(this, h);
    l && S(this, "presenceAutoState", l);
    g && S(this, "username", g)
  }
  D(Jk, Ik);
  Jk.prototype.tb = function (a) {
    a = ug("/user", a);
    return this.ub(a)
  };
  Jk.prototype.zg = function () {
    return mf(this, "online")
  };
  Jk.prototype.Mh = function () {
    return Q(this, "presenceState")
  };

  function Lj(a, b) {
    "online" === b && (b = k, S(a, "presenceAutoState", b));
    S(a, "presenceState", b)
  }
  Jk.prototype.Vl = function () {
    return Q(this, "presenceDesc") || "offline"
  };
  Ik.prototype.Zl = function () {
    return Q(this, "username")
  };
  Re("person", Jk, "id displayName profileUrl thumbnailUrl webrtcEnabled username presenceState presenceAutoState".split(" "), "id", Jk.prototype.tb);

  function Kk(a) {
    ff.call(this);
    this.aa = a;
    this.Vb = {};
    this.mi = [];
    this.rm = [];
    this.bn = [];
    this.Rd = k;
    this.Wi = 0;
    this.As = new od({
      mp3: "audio/mpeg",
      ogg: "audio/ogg"
    });
    this.zx = 3E4;
    this.cr = 0;
    this.va = [];
    this.Oa();
    xc(window, "unload", this.J, n, this)
  }
  D(Kk, ff);
  Fe("mediaController", Kk);
  u = Kk.prototype;
  u.A = function () {
    F(this.va, function (a) {
      a.stream.J()
    });
    ic(this.Vb, function (a) {
      a.J()
    });
    Kk.d.A.call(this)
  };
  u.Aj = p("Rd");
  u.Dj = p("mi");
  u.Cj = p("rm");
  u.Fj = p("bn");
  u.lm = function () {
    return 0 < this.Wi || 0 < this.rm.length || 0 < this.bn.length
  };
  u.mm = function () {
    return 0 < this.Wi
  };
  u.Ln = function () {
    F(ob(this.mi), function (a) {
      a.stop()
    })
  };
  u.Al = function (a, b, c) {
    this.j("createPeerSession");
    if (c && Q(c, "mid") in this.Vb) return k;
    a = this.aa.Al(a, b, c);
    a.on("peerSession:end", this.ew, this);
    return this.Vb[a.F()] = a
  };
  u.ew = function (a) {
    this.j("onPeerSessionEnd");
    a = a.target.F();
    delete this.Vb[a]
  };
  u.Ym = function (a) {
    this.j("onMediaSessionEnd");
    a = a.target;
    mb(this.mi, a);
    this.Rd === a && (this.Rd = k)
  };
  u.Zm = function () {
    this.j("onMediaStateChange");
    Lk(this, this.rm, "incoming");
    Lk(this, this.bn, "outgoing")
  };

  function Lk(a, b, c) {
    b.length = 0;
    F(a.mi, function (a) {
      a.Gc() === c && b.push(a)
    })
  }
  u.$w = function (a, b) {
    this.j("onUserMedia", b);
    var c = I ? new ei(b, j) : new Wh(b, j);
    this.va.push({
      stream: c,
      Uq: 1
    });
    Mk(this);
    a(c)
  };
  u.Zw = function (a, b) {
    this.j("onUserMediaFailure", b);
    Mk(this);
    a(b)
  };

  function Mk(a) {
    a.Wi--;
    0 === a.Wi && a.dispatchEvent("change")
  }
  u.qr = ca("zx");

  function Nk(a, b) {
    var c;
    try {
      c = new Audio
    } catch (d) {
      return a.error("Browser does not support audio"), k
    }
    for (var f = k, g = 0, h = [], l = [], g = 0; g < b.length; g++) {
      var m = b[g].split(".");
      if (m = a.As.get(m[m.length - 1], k)) m = c.canPlayType && c.canPlayType(m), "probably" === m ? l.push(b[g]) : "maybe" === m && h.push(b[g])
    }
    c = n;
    h = nb(l, h);
    l = k;
    for (g = 0; g < h.length; g++) {
      l = h[g];
      try {
        f = new Audio(l);
        c = j;
        break
      } catch (q) {}
    }
    c ? a.j("selected audio: ", l) : a.error("No playable audio files available");
    return f
  }

  function Ok(a) {
    return z(a) ? !a || 0 === a.length ? k : [a] : !ka(a) ? k : a
  }
  u.Cn = function (a) {
    if (a = Ok(a)) if (this.Gd && delete this.Gd, this.Gd = Nk(this, a)) this.Gd.preload = "auto", this.Gd.loop = "loop"
  };
  u.si = function (a) {
    a = a.target.Re;
    if (!a.pb() && !a.gd()) {
      this.j("ding");
      try {
        this.Yd && (this.Yd.load(), this.Yd.play())
      } catch (b) {
        this.error(b, "Error playing ding")
      }
    }
  };

  function Dj(a, b, c, d, f) {
    this.Ja = a || 17;
    c && (this.Xd = c);
    this.ge = 1E3;
    b != k && 1E3 > b && (this.ge = b);
    d && (this.Tg = d);
    f && (this.nk = f)
  }
  D(Dj, Xe);
  Me("query", Dj, ["flags", "seq", "desc", "limit", "start"]);

  function Ck(a, b, c) {
    return a.length === b ? 1 === (c & 1) : "/" === a.charAt(b) && (6 === (c & 6) || 2 === (c & 2) && a.lastIndexOf("/") === b) ? j : n
  }
  Dj.prototype.Va = function () {
    return new Dj(this.Ja, this.ge, this.Xd, this.Tg, this.nk)
  };
  Dj.prototype.xh = function (a) {
    return a.Ja === this.Ja && a.nk === this.nk && a.Xd === this.Xd && a.ge === this.ge && a.Tg === this.Tg
  };
  Dj.prototype.Ma = function () {
    return {
      flags: this.Ja,
      seq: this.nk,
      desc: this.Xd,
      limit: this.ge,
      start: this.Tg
    }
  };
  Dj.prototype.Jj = function () {
    return this.Ja & 7
  };

  function Pk(a, b, c, d) {
    this.type = a;
    this.path = b;
    this.obj = c;
    this.rid = d || Th(8)
  }
  D(Pk, Xe);
  Pk.prototype.zd = p("sid");
  Pk.prototype.qa = p("appId");
  Pk.prototype.m = p("path");

  function Qk(a) {
    return a.obj || k
  }
  Pk.prototype.pb = function () {
    return Ij(this.m())
  };

  function Rk(a, b, c, d) {
    Pk.call(this, b, c, d);
    this.eo = a
  }
  D(Rk, Pk);
  Me("Request", Rk);
  Rk.prototype.Gl = k;
  Rk.prototype.cd = function () {
    return this.eo || k
  };
  Rk.prototype.mr = ca("eo");
  Rk.prototype.Hi = function (a) {
    var b = this.cd();
    b && b.send(a.Da(), a)
  };

  function Sk(a, b, c) {
    b = new Tk(a.Da() + ".resp", a.rid, a.m(), b, c);
    a.Hi(b)
  }
  function Tk(a, b, c, d, f) {
    Pk.call(this, a, c, d, b);
    f && (this.err = f)
  }
  D(Tk, Pk);
  Tk.prototype.getError = function () {
    return this.err || k
  };

  function Uk(a, b, c, d, f, g) {
    Rk.call(this, a, "login", b);
    this.appId = c;
    this.authId = d;
    this.token = f;
    this.profile = g
  }
  D(Uk, Rk);
  Me("LoginReq", Uk);
  Uk.prototype.qa = p("appId");
  Uk.prototype.bd = p("authId");
  Uk.prototype.ib = p("token");
  Uk.prototype.Nh = p("profile");

  function Vk(a, b, c) {
    Rk.call(this, a, "get", b);
    this.query = c
  }
  D(Vk, Rk);
  Me("GetReq", Vk);
  Vk.prototype.ze = p("query");

  function Wk(a, b, c, d, f, g) {
    Tk.call(this, "get.resp", a, b, d, g);
    f && (this.res = f);
    c && (this.query = c)
  }
  D(Wk, Tk);
  Me("get_response", Wk);
  Tk.prototype.ze = function () {
    return this.query || k
  };

  function Xk(a, b, c, d) {
    xg.call(this, new O("session"), a.W());
    this.aa = a;
    this.ih = b;
    this.Ud = c;
    this.Xq = d;
    this.zb = a.W();
    this.ca = new Dk(this);
    this.jb = Th();
    this.hc = k;
    this.pn = {};
    this.Fg = k;
    this.bc = 0;
    this.addEventListener("add:im", this.si, n, this);
    this.La("get.resp", this.Av);
    this.La("put.resp", this.vq);
    this.La("post.resp", this.vq);
    this.La("publish.resp", this.ti);
    this.La("remove.resp", this.ti);
    this.La("login.resp", this.ti);
    this.La("logout.resp", this.ti);
    this.La("put", this.yq);
    this.La("post", this.yq);
    this.La("publish",
      this.qw);
    this.La("remove", this.rw);
    this.La("login.err.resp", this.Uv)
  }
  D(Xk, xg);
  Fe("session", Xk);
  u = Xk.prototype;
  u.jk = n;
  u.toString = function () {
    return this.ob() + "#" + this.F()
  };
  u.A = function () {
    this.tc();
    this.hc && (this.hc.fa(), this.hc = k);
    this.Fg && (this.Fg.fa(), this.Fg = k);
    this.Xq = this.Ud = k;
    delete this.zb;
    delete this.ca;
    Xk.d.A.call(this)
  };
  u.Ca = p("aa");
  u.W = p("zb");
  u.F = p("jb");
  u.ob = function () {
    return this.hc ? this.hc.F() : ""
  };
  u.Bj = function () {
    return this.Fc().Bj() || ""
  };
  u.Gj = function () {
    return this.Fc().Gj()
  };
  u.Fc = function () {
    return this.ih.Fc()
  };
  u.vt = p("hc");
  u.Jk = function (a, b) {
    this.hc.Jk(a, b);
    return this
  };
  u.Pg = function (a) {
    this.hc.Pg(a);
    return this
  };
  u.yd = function (a) {
    a = 0 < a.indexOf(":") ? a : this.ih.bd() + ":" + a;
    a = ug("/user", a);
    return this.get(a, "person").G(function (a) {
      a = a.nb;
      a.xc(this);
      return a
    }, this)
  };
  u.postMessage = function (a, b, c) {
    this.j("postMessage", "channelId", a, "message", b, "type", c);
    return this.yd(a).G(function (a) {
      var f = a.postMessage(b, c);
      a.fa();
      return f
    }, this)
  };
  u.Ok = function (a, b) {
    this.j("startMedia", "channelId", a, "constraints", b);
    return this.yd(a).G(function (a) {
      var d = a.Ok(b);
      a.fa();
      return d
    }, this)
  };
  u.Kn = function (a) {
    this.j("stopMedia", "channelId", a);
    return this.yd(a).G(function (a) {
      var c = a.N;
      c && c.stop();
      a.fa()
    }, this)
  };
  u.qt = function () {
    return Yk(this, this.W().qa())
  };
  u.tc = function () {
    if (!this.jk) {
      this.jk = j;
      this.ih && this.ih.tc();
      this.jk = j;
      this.M.remove();
      var a = this.zb,
        b = this.ob();
      b in a.Ii && (a.Hk--, delete a.Ii[b], mb(a.Se, this), Zk(a), a.yg() || a.dispatchEvent("logout"));
      this.dispatchEvent("logout");
      this.dispatchEvent("remove:session");
      a = this.hc.m();
      a = new Rk(this.Ud, "logout", a);
      return $k(this, a, this).G(this.J, this)
    }
    return new K(this)
  };

  function al(a, b) {
    a.j("login", "credentials", b);
    var c = b.Nh(),
      d = new Jk(b.Pr, c.displayName, c.profileUrl, c.thumbnailUrl, Vg(), c.username);
    a.hc = d.nb;
    (c = c.presenceState) && a.Jk(c);
    c = new Uk(a.Ud, d.m(), a.aa.qa(), a.ih.bd(), b.Yp, d.Ma());
    a.ca.put(d.m(), d);
    d = a.zb;
    d.Hk++;
    d.Ii[a.ob()] = a;
    d.Se.push(a);
    Zk(d);
    a.dispatchEvent("add:session");
    d = $k(a, c, a).$d(function () {
      this.tc()
    }, a);
    d = cd(d, bl(a).G(ca("Fg"), a)).G(qe(a));
    a.ca.put(ug("/local/session", a.jb), a.M);
    a.Oa(j);
    a.dispatchEvent("login");
    return d
  }
  u.get = function (a, b) {
    this.j("get", "path", a, "type", b);
    var c = this.ca.get(a);
    return c ? new K(c.Ta()) : this.Wb(a, new Dj).G(function (c) {
      !c && b && (c = this.ca.put(a, b));
      return c && c.Ta()
    }, this)
  };
  u.Me = function (a, b) {
    this.j("query", "path", a, "query", b);
    return this.Wb(a, b, new yk(this.ca, a, b))
  };
  u.put = function (a, b) {
    this.j("put", "path", a, "val", b);
    var c = !(a && this.ca.contains(a)),
      d = this.ca.put(a, b),
      f = k;
    if (c) f = d.Ma();
    else if (d.cb && !mc(d.cb)) {
      var c = {}, g;
      for (g in d.cb) 3 !== d.cb[g] && (f = d.get(g), c[g] = f != k ? f : k);
      f = c
    }
    if (f) {
      for (var h in d.cb) d.cb[h] = 3;
      d.Ta();
      return this.re("put", d, d.m(), f)
    }
    return new K(d)
  };
  u.Pc = function (a, b, c) {
    this.j("post", "path", a, "val", b);
    var d = Je(b).Ta();
    c && d.ub(ug(a, c));
    a = d.m() || a;
    return this.re("post", d, a, d.Ma()).G(function (a) {
      zg(d, a);
      d.yb();
      return this.ca.put(d.m(), d)
    }, this)
  };
  u.vc = function (a, b, c) {
    this.j("publish", "path", a, "val", b);
    b = Je(b);
    b.m() || b.ub(ug(a, c));
    return this.re("publish", b, b.m(), b.Ma())
  };
  u.call = function (a, b) {
    return this.vc("/service", b, a)
  };
  u.remove = function (a) {
    this.j("remove", "path", a);
    var b = this.ca.get(a);
    b && b.Ig();
    return this.re("remove", a, a)
  };
  u.Wb = function (a, b, c) {
    return $k(this, new Vk(this.Ud, a, b), c)
  };
  u.re = function (a, b, c, d) {
    a = new Rk(this.Ud, a, c, d);
    return $k(this, a, b)
  };

  function $k(a, b, c) {
    var d = new K;
    a.pn[b.rid] = {
      zi: d,
      Qr: c
    };
    a.Tc(b);
    return d
  }
  u.Tc = function (a) {
    if (!Ij(a.m())) {
      a.sid = this.jb;
      var b = this.aa.qa();
      a.appId = b;
      this.j("send", a);
      this.Xq.send(a.Da(), a)
    }
  };
  u.Sd = function (a, b) {
    return this.ca.put(Ie(a), a, b)
  };
  u.Av = function (a) {
    var b = cl(this, a),
      c = a.getError();
    if (c) b.zi.gb(c);
    else {
      var d = Qk(a),
        c = b.Qr,
        f = [],
        g;
      F(a.res || k, function (a) {
        f.push(this.Sd(a, j))
      }, this);
      if (d) {
        g = this.Sd(d, j);
        if (a = a.ze()) g.Ja |= a.Ja;
        f.push(g)
      }
      c ? (zk(c, f), c.Oa(j, n), b.zi.ya(c)) : b.zi.ya(g || k)
    }
  };
  u.vq = function (a) {
    var b = a.m();
    if (b = this.ca.get(b)) {
      var c = Qk(a);
      a.getError() || c && zg(b, c);
      b.yb();
      var c = n,
        d;
      for (d in b.cb) 3 === b.cb[d] ? delete b.cb[d] : c = j;
      c && yg(b)
    }
    this.ti(a)
  };
  u.ti = function (a) {
    var b = cl(this, a),
      c = a.getError();
    c ? ("AUTH_FAILED" === c.Da() && this.tc(), b.zi.gb(c)) : b.zi.ya(Qk(a) || b.Qr)
  };
  u.yq = function (a) {
    this.j("recv", a);
    var b = a.m(),
      c = Qk(a);
    (b = this.ca.get(b)) ? zg(b, c) : this.ca.put(a.m(), Qk(a))
  };
  u.qw = function (a) {
    this.j("recv", a);
    this.ca.vc(a.m(), Qk(a))
  };
  u.rw = function (a) {
    this.j("recv", a);
    (a = this.ca.get(a.m())) && a.Ig()
  };
  u.Uv = function (a) {
    this.j("recv", a);
    this.tc()
  };
  u.La = function (a, b) {
    var c = A(b, this);
    this.Ud.Gk[a] = {
      ya: c,
      Um: j
    }
  };

  function cl(a, b) {
    a.j("recv", b);
    var c = b.rid,
      d = a.pn[c];
    delete a.pn[c];
    return d
  }
  function bl(a) {
    var b = a.ob();
    return a.Me("/user/" + b + "/msg", new Dj(34))
  }
  function Yk(a, b) {
    return a.Me(Hj(b), new Dj(34))
  }
  u.Jh = function (a, b, c) {
    var d = Cj(this.ob(), a);
    if (this.Fg) {
      var f = Fj(this, a);
      !f && b && (b = {
        type: "mailbox"
      }, b.iss = a, b.totalMessages = c, f = this.ca.put(d, b));
      return f
    }
    return k
  };

  function Fj(a, b) {
    var c = Cj(a.ob(), b);
    return a.Fg.get(c) || a.ca.get(c)
  }
  u.si = function (a) {
    a.target.Re.si(a.target)
  };

  function yj(a, b) {
    var c = a.bc;
    a.bc = y(b) ? a.bc + b : a.bc + 1;
    c !== a.bc && hf(a, "totalUnreadCount", c, a.bc)
  }
  u.sf = p("bc");

  function dl(a, b, c) {
    jk.call(this, a, b, c);
    this.yr = this.zr = this.xk = this.yi = this.Lp = k;
    b ? (b = a.split("."), this.Lp = a, this.yi = k, this.xk = b[1], this.zr = k, 2 < b.length && (this.yr = b[2])) : (this.Lp = k, this.yi = a, this.yr = this.zr = this.xk = k)
  }
  D(dl, jk);
  Fe("JWS", dl);

  function el(a) {
    !a.yi && a.xk && (a.yi = ze(a.xk));
    return a.yi
  };

  function fl(a, b) {
    ff.call(this, a.W());
    this.aa = a;
    this.dg = a.qa();
    this.$e = b;
    this.Bl = this.Za = k;
    this.Oa()
  }
  D(fl, ff);
  Fe("authProvider", fl);
  u = fl.prototype;
  u.w = p("Za");
  u.tc = function () {
    this.j("logout");
    this.Bl = this.Za = k
  };
  u.bd = p("$e");
  u.qa = p("dg");
  u.Fc = p("Bl");

  function gl(a, b) {
    a.Bl = b;
    a.Za = new Xk(a.aa, a, new hl, il(a.aa));
    b.gn = a;
    a.dispatchEvent("ready:credentials")
  };

  function U(a) {
    ff.call(this);
    this.aa = a;
    this.Si = il(a);
    var b = this.fc = uj(a);
    b.zb = this;
    b.xc(this);
    this.addEventListener("add:im", b.si, n, b);
    if (!(b = a.Hb)) {
      var b = "vline_" + a.qa(),
        c = new jl;
      if (!(c = c.vm() ? b ? new kl(c, b) : c : k)) b = new ll(b || "UserDataSharedStore"), c = b.vm() ? b : k;
      b = c;
      b = a.Hb = b ? new Rj(b) : k
    }
    this.Hb = b;
    this.Rn = (a.rk || (a.rk = new Dk)).put("/local/transport", "transport").Ta();
    jf(this.Rn, this);
    this.Oa(j);
    this.Ii = {};
    this.Se = [];
    this.Hk = 0;
    this.Ep = n;
    this.aa.fb.get("autoConnect") && this.hg()
  }
  D(U, ff);
  Fe("client", U);
  u = U.prototype;
  u.qa = function () {
    return this.aa.qa()
  };
  u.Ca = p("aa");
  u.Kj = function () {
    return this.Ca().Kj()
  };
  u.mp = function () {
    return ob(this.Se)
  };
  u.Hj = function () {
    return this.aa.Hj()
  };
  u.of = function () {
    return 0 != this.Se.length ? this.Se[0] : this.aa.Hj()
  };
  u.xe = function () {
    return this.Rn.xe()
  };
  u.Dj = function () {
    return this.fc.Dj()
  };
  u.Cj = function () {
    return this.fc.Cj()
  };
  u.Fj = function () {
    return this.fc.Fj()
  };
  u.Aj = function () {
    return this.fc.Aj()
  };
  u.sf = function () {
    var a = 0;
    ic(this.Se, function (b) {
      a += b.sf()
    });
    return a
  };
  u.Zt = function () {
    return !!this.Dj().length
  };
  u.Yt = function () {
    return !!this.Cj().length
  };
  u.au = function () {
    return !!this.Fj().length
  };
  u.lm = function () {
    return this.fc.lm()
  };
  u.mm = function () {
    return this.fc.mm()
  };
  u.Wt = function () {
    return !!this.Aj()
  };
  u.Dc = function () {
    return this.aa.Dc()
  };
  u.Ln = function () {
    this.fc.Ln();
    return this
  };
  u.ka = function (a, b, c) {
    this.j("login", "authId", a, "profile", b, "token", c);
    var d = new ml(this.aa, a);
    if (c) return a = b || k, b = (b = el(new dl(c, j))) && b.sub, b == k && e(d.error(new M("BAD_PARAM", "Required property 'sub' not found in token"))), gl(d, new kk(d.dg, d.$e, b, c, a)), al(d.w(), d.Fc());
    this.j("getCredentials", "authId", a);
    var f = new K,
      g = new ml(this.aa, a);
    (c = g.Fc()) ? f.ya(c) : g.Ke("ready:credentials", function () {
      f.ya(g.Fc())
    }, this).Ke("error", function (a) {
      f.gb(a.getError())
    });
    g.ka();
    this.Oa();
    return f.G(function (a) {
      return al(a.gn.w(),
        a)
    })
  };
  u.tc = function () {
    this.j("logout");
    var a = this.Se;
    this.Se = [];
    this.Ii = {};
    this.Hk = 0;
    Zk(this);
    var b = [];
    F(a, function (a) {
      b.push(a.tc())
    });
    return cd.apply(k, b)
  };
  u.yg = function () {
    return !!this.Hk
  };
  u.yf = function () {
    return this.Rn.yf()
  };
  u.hg = function () {
    this.j("connect");
    this.Si.send("connect", {});
    return this
  };
  u.Hl = function () {
    this.j("disconnect");
    this.Si.send("disconnect", {});
    return this
  };
  u.Hx = function (a) {
    this.fc.qr(a)
  };
  u.Cn = function (a) {
    this.fc.Cn(a)
  };
  u.Jx = function (a) {
    var b = this.fc;
    if (a = Ok(a)) b.Yd && delete b.Yd, b.Yd = Nk(b, a), b.Yd && (b.Yd.preload = "auto")
  };

  function Zk(a) {
    if (a.Hb) try {
        var b = [];
        ic(a.Ii, function (a) {
          b.push(a.Fc().Ma())
        });
        a.j("saveSessions", b);
        a.Hb.set("credentials", b)
    } catch (c) {
      a.error(c, "Error saving credentials")
    }
  }
  function nl(a, b) {
    P.call(this, "recv:credentials", b);
    this.credentials = a
  }
  D(nl, P);
  nl.prototype.Fc = p("credentials");

  function ol() {}
  D(ol, Mj);
  ol.prototype.Tb = function () {
    var a = 0;
    nd(this.Pd(j), function () {
      a++
    });
    return a
  };
  ol.prototype.clear = function () {
    var a;
    a = this.Pd(j);
    if (la(a)) a = ob(a);
    else {
      a = md(a);
      var b = [];
      nd(a, function (a) {
        b.push(a)
      });
      a = b
    }
    var c = this;
    F(a, function (a) {
      c.remove(a)
    })
  };

  function pl(a) {
    this.Hb = a
  }
  D(pl, ol);
  u = pl.prototype;
  u.vm = function () {
    try {
      return !!this.Hb && !! this.Hb.getItem
    } catch (a) {}
    return n
  };
  u.set = function (a, b) {
    try {
      this.Hb.setItem(a, b)
    } catch (c) {
      e("Storage mechanism: Quota exceeded")
    }
  };
  u.get = function (a) {
    a = this.Hb.getItem(a);
    !z(a) && a !== k && e("Storage mechanism: Invalid value was encountered");
    return a
  };
  u.remove = function (a) {
    this.Hb.removeItem(a)
  };
  u.Tb = function () {
    return this.Hb.length
  };
  u.Pd = function (a) {
    var b = 0,
      c = this.Hb,
      d = new ld;
    d.next = function () {
      b >= c.length && e(kd);
      var d = c.key(b++);
      if (a) return d;
      d = c.getItem(d);
      z(d) || e("Storage mechanism: Invalid value was encountered");
      return d
    };
    return d
  };
  u.clear = function () {
    this.Hb.clear()
  };

  function jl() {
    var a = k;
    try {
      a = window.localStorage || k
    } catch (b) {}
    this.Hb = a
  }
  D(jl, pl);

  function ll(a, b) {
    if (G && !Ub(9)) {
      ql || (ql = new od);
      this.ac = ql.get(a);
      this.ac || (b ? this.ac = document.getElementById(b) : (this.ac = document.createElement("userdata"), this.ac.addBehavior("#default#userData"), document.body.appendChild(this.ac)), ql.set(a, this.ac));
      this.Nn = a;
      try {
        this.ac.load(this.Nn)
      } catch (c) {
        this.ac = k
      }
    }
  }
  D(ll, ol);
  var rl = {
    ".": ".2E",
    "!": ".21",
    "~": ".7E",
    "*": ".2A",
    "'": ".27",
    "(": ".28",
    ")": ".29",
    "%": "."
  }, ql = k;
  u = ll.prototype;
  u.ac = k;
  u.Nn = k;

  function sl(a) {
    return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function (a) {
      return rl[a]
    })
  }
  u.vm = function () {
    return !!this.ac
  };
  u.set = function (a, b) {
    this.ac.setAttribute(sl(a), b);
    tl(this)
  };
  u.get = function (a) {
    a = this.ac.getAttribute(sl(a));
    !z(a) && a !== k && e("Storage mechanism: Invalid value was encountered");
    return a
  };
  u.remove = function (a) {
    this.ac.removeAttribute(sl(a));
    tl(this)
  };
  u.Tb = function () {
    return this.Kh().attributes.length
  };
  u.Pd = function (a) {
    var b = 0,
      c = this.Kh().attributes,
      d = new ld;
    d.next = function () {
      b >= c.length && e(kd);
      var d = c[b++];
      if (a) return decodeURIComponent(d.nodeName.replace(/\./g, "%")).substr(1);
      d = d.nodeValue;
      z(d) || e("Storage mechanism: Invalid value was encountered");
      return d
    };
    return d
  };
  u.clear = function () {
    for (var a = this.Kh(), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
    tl(this)
  };

  function tl(a) {
    try {
      a.ac.save(a.Nn)
    } catch (b) {
      e("Storage mechanism: Quota exceeded")
    }
  }
  u.Kh = function () {
    return this.ac.XMLDocument.documentElement
  };

  function kl(a, b) {
    this.Gg = a;
    this.ic = b + "::"
  }
  D(kl, ol);
  u = kl.prototype;
  u.Gg = k;
  u.ic = "";
  u.set = function (a, b) {
    this.Gg.set(this.ic + a, b)
  };
  u.get = function (a) {
    return this.Gg.get(this.ic + a)
  };
  u.remove = function (a) {
    this.Gg.remove(this.ic + a)
  };
  u.Pd = function (a) {
    var b = this.Gg.Pd(j),
      c = this,
      d = new ld;
    d.next = function () {
      for (var d = b.next(); d.substr(0, c.ic.length) != c.ic;) d = b.next();
      return a ? d.substr(c.ic.length) : c.Gg.get(d)
    };
    return d
  };
  var ul = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

  function vl(a, b) {
    var c;
    if (a instanceof vl) this.Jc = y(b) ? b : a.Jc, wl(this, a.Hd), c = a.Wf, xl(this), this.Wf = c, c = a.vd, xl(this), this.vd = c, yl(this, a.Lg), this.ub(a.m()), zl(this, a.Qc.Va()), Al(this, a.Cc);
    else if (a && (c = String(a).match(ul))) {
      this.Jc = !! b;
      wl(this, c[1] || "", j);
      var d = c[2] || "";
      xl(this);
      this.Wf = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      xl(this);
      this.vd = d ? decodeURIComponent(d) : "";
      yl(this, c[4]);
      this.ub(c[5] || "", j);
      zl(this, c[6] || "", j);
      Al(this, c[7] || "", j)
    } else this.Jc = !! b, this.Qc = new Bl(k, 0, this.Jc)
  }
  u = vl.prototype;
  u.Hd = "";
  u.Wf = "";
  u.vd = "";
  u.Lg = k;
  u.Ub = "";
  u.Cc = "";
  u.wu = n;
  u.Jc = n;
  u.toString = function () {
    var a = [],
      b = this.Hd;
    b && a.push(Cl(b, Dl), ":");
    if (b = this.vd) {
      a.push("//");
      var c = this.Wf;
      c && a.push(Cl(c, Dl), "@");
      a.push(encodeURIComponent(String(b)));
      b = this.Lg;
      b != k && a.push(":", String(b))
    }
    if (b = this.m()) this.vd && "/" != b.charAt(0) && a.push("/"), a.push(Cl(b, "/" == b.charAt(0) ? El : Fl));
    (b = this.Qc.toString()) && a.push("?", b);
    (b = this.Cc) && a.push("#", Cl(b, Gl));
    return a.join("")
  };
  u.Va = function () {
    return new vl(this)
  };

  function wl(a, b, c) {
    xl(a);
    a.Hd = c ? b ? decodeURIComponent(b) : "" : b;
    a.Hd && (a.Hd = a.Hd.replace(/:$/, ""))
  }
  function yl(a, b) {
    xl(a);
    b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Lg = b) : a.Lg = k
  }
  u.m = p("Ub");
  u.ub = function (a, b) {
    xl(this);
    this.Ub = b ? a ? decodeURIComponent(a) : "" : a;
    return this
  };

  function zl(a, b, c) {
    xl(a);
    b instanceof Bl ? (a.Qc = b, a.Qc.vn(a.Jc)) : (c || (b = Cl(b, Hl)), a.Qc = new Bl(b, 0, a.Jc))
  }
  u.ze = function () {
    return this.Qc.toString()
  };

  function Il(a, b, c) {
    xl(a);
    ka(c) || (c = [String(c)]);
    Jl(a.Qc, b, c)
  }

  function Al(a, b, c) {
    xl(a);
    a.Cc = c ? b ? decodeURIComponent(b) : "" : b
  }
  function xl(a) {
    a.wu && e(Error("Tried to modify a read-only Uri"))
  }
  u.vn = function (a) {
    this.Jc = a;
    this.Qc && this.Qc.vn(a);
    return this
  };

  function Kl(a) {
    return a instanceof vl ? a.Va() : new vl(a, i)
  }

  function Ll(a, b) {
    a instanceof vl || (a = Kl(a));
    b instanceof vl || (b = Kl(b));
    var c = a,
      d = b,
      f = c.Va(),
      g = !! d.Hd;
    g ? wl(f, d.Hd) : g = !! d.Wf;
    if (g) {
      var h = d.Wf;
      xl(f);
      f.Wf = h
    } else g = !! d.vd;
    g ? (h = d.vd, xl(f), f.vd = h) : g = d.Lg != k;
    h = d.m();
    if (g) yl(f, d.Lg);
    else if (g = !! d.Ub) if ("/" != h.charAt(0) && (c.vd && !c.Ub ? h = "/" + h : (c = f.m().lastIndexOf("/"), -1 != c && (h = f.m().substr(0, c + 1) + h))), ".." == h || "." == h) h = "";
      else if (-1 != h.indexOf("./") || -1 != h.indexOf("/.")) {
      for (var c = Fa(h, "/"), h = h.split("/"), l = [], m = 0; m < h.length;) {
        var q = h[m++];
        "." == q ? c && m == h.length &&
          l.push("") : ".." == q ? ((1 < l.length || 1 == l.length && "" != l[0]) && l.pop(), c && m == h.length && l.push("")) : (l.push(q), c = j)
      }
      h = l.join("/")
    }
    g ? f.ub(h) : g = "" !== d.Qc.toString();
    g ? zl(f, d.Qc.toString() ? decodeURIComponent(d.Qc.toString()) : "") : g = !! d.Cc;
    g && Al(f, d.Cc);
    return f
  }
  function Cl(a, b) {
    return z(a) ? encodeURI(a).replace(b, Ml) : k
  }
  function Ml(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
  }
  var Dl = /[#\/\?@]/g,
    Fl = /[\#\?:]/g,
    El = /[\#\?]/g,
    Hl = /[\#\?@]/g,
    Gl = /#/g;

  function Bl(a, b, c) {
    this.pc = a || k;
    this.Jc = !! c
  }
  function Nl(a) {
    if (!a.Ra && (a.Ra = new od, a.L = 0, a.pc)) for (var b = a.pc.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("="),
          f = k,
          g = k;
        0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
        f = Ma(f);
        f = Ol(a, f);
        a.add(f, g ? Ma(g) : "")
    }
  }
  u = Bl.prototype;
  u.Ra = k;
  u.L = k;
  u.Tb = function () {
    Nl(this);
    return this.L
  };
  u.add = function (a, b) {
    Nl(this);
    this.pc = k;
    var a = Ol(this, a),
      c = this.Ra.get(a);
    c || this.Ra.set(a, c = []);
    c.push(b);
    this.L++;
    return this
  };
  u.remove = function (a) {
    Nl(this);
    a = Ol(this, a);
    return this.Ra.sd(a) ? (this.pc = k, this.L -= this.Ra.get(a).length, this.Ra.remove(a)) : n
  };
  u.clear = function () {
    this.Ra = this.pc = k;
    this.L = 0
  };
  u.sd = function (a) {
    Nl(this);
    a = Ol(this, a);
    return this.Ra.sd(a)
  };
  u.pf = function () {
    Nl(this);
    for (var a = this.Ra.Xa(), b = this.Ra.pf(), c = [], d = 0; d < b.length; d++) for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
    return c
  };
  u.Xa = function (a) {
    Nl(this);
    var b = [];
    if (a) this.sd(a) && (b = nb(b, this.Ra.get(Ol(this, a))));
    else for (var a = this.Ra.Xa(), c = 0; c < a.length; c++) b = nb(b, a[c]);
    return b
  };
  u.set = function (a, b) {
    Nl(this);
    this.pc = k;
    a = Ol(this, a);
    this.sd(a) && (this.L -= this.Ra.get(a).length);
    this.Ra.set(a, [b]);
    this.L++;
    return this
  };
  u.get = function (a, b) {
    var c = a ? this.Xa(a) : [];
    return 0 < c.length ? String(c[0]) : b
  };

  function Jl(a, b, c) {
    a.remove(b);
    0 < c.length && (a.pc = k, a.Ra.set(Ol(a, b), ob(c)), a.L += c.length)
  }
  u.toString = function () {
    if (this.pc) return this.pc;
    if (!this.Ra) return "";
    for (var a = [], b = this.Ra.pf(), c = 0; c < b.length; c++) for (var d = b[c], f = encodeURIComponent(String(d)), d = this.Xa(d), g = 0; g < d.length; g++) {
        var h = f;
        "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
        a.push(h)
    }
    return this.pc = a.join("&")
  };
  u.Va = function () {
    var a = new Bl;
    a.pc = this.pc;
    this.Ra && (a.Ra = this.Ra.Va());
    return a
  };

  function Ol(a, b) {
    var c = String(b);
    a.Jc && (c = c.toLowerCase());
    return c
  }
  u.vn = function (a) {
    a && !this.Jc && (Nl(this), this.pc = k, jd(this.Ra, function (a, c) {
      var d = c.toLowerCase();
      c != d && (this.remove(c), Jl(this, d, a))
    }, this));
    this.Jc = a
  };

  function Pl(a, b) {
    ac.call(this, "navigate");
    this.nc = a;
    this.tu = b
  }
  D(Pl, ac);

  function Ql(a, b) {
    ya.call(this);
    this.la = a || window;
    this.Xk = b || k;
    xc(this.la, "popstate", this.ri, n, this);
    xc(this.la, "hashchange", this.ri, n, this)
  }
  D(Ql, Ic);

  function Rl() {
    var a = window;
    return !(!a.history || !a.history.pushState)
  }
  u = Ql.prototype;
  u.Fa = n;
  u.Vi = j;
  u.Jg = "/";
  u.Na = function (a) {
    a != this.Fa && (this.Fa = a) && this.dispatchEvent(new Pl(this.ib(), n))
  };
  u.ib = function () {
    if (this.Vi) {
      var a = this.la.location.href,
        b = a.indexOf("#");
      return 0 > b ? "" : a.substring(b + 1)
    }
    return this.Xk ? this.Xk.Py(this.Jg, this.la.location) : this.la.location.pathname.substr(this.Jg.length)
  };
  u.sr = function (a, b) {
    a != this.ib() && (this.la.history.pushState(k, b || this.la.document.title || "", Sl(this, a)), this.dispatchEvent(new Pl(a, n)))
  };
  u.mn = function (a, b) {
    this.la.history.replaceState(k, b || this.la.document.title || "", Sl(this, a));
    this.dispatchEvent(new Pl(a, n))
  };
  u.A = function () {
    Ac(this.la, "popstate", this.ri, n, this);
    this.Vi && Ac(this.la, "hashchange", this.ri, n, this)
  };
  u.sc = p("Jg");

  function Sl(a, b) {
    return a.Vi ? "#" + b : a.Xk ? a.Xk.xy(b, a.Jg, a.la.location) : a.Jg + b + a.la.location.search
  }
  u.ri = function () {
    this.Fa && this.dispatchEvent(new Pl(this.ib(), j))
  };

  function ml(a, b) {
    fl.call(this, a, b);
    var c = Tl();
    if (c.sd("authToken")) {
      var d = c.get("authToken");
      c.remove("authToken");
      c = c.toString();
      try {
        var f = ze(d, n),
          g = je(f),
          h = lk(g);
        this.$e = h.bd();
        gl(this, h)
      } catch (l) {
        this.error(l, "Unable to parse auth credentials")
      }
      d = window.location.pathname;
      c && (d = d + "?" + c);
      Rl() && window.history.replaceState(k, "", d)
    }
  }
  D(ml, fl);
  Fe("queryParamProvider", ml);
  ml.prototype.ka = function () {
    if (this.bd() === this.qa()) {
      var a = new K;
      a.G(function (a) {
        "managed" === a ? (this.aa.W().Ke("recv:credentials", function (a) {
          (a = a.Fc()) ? gl(this, a) : this.dispatchEvent(new bf(new M("cancel")))
        }, this), this.aa.Dc().md(new ac(Ul))) : Tl().sd("authToken") || (window.location.href = hi(this.aa.fb) + "/v1/auth/" + this.dg + "/" + this.$e)
      }, this);
      this.aa.W().Hj().call("getAuthType", {}).G(function (b) {
        (b = b.authType) ? a.ya(b) : a.gb("NOT_FOUND")
      }).$d(function (b) {
        a.gb(b)
      })
    } else Tl().sd("authToken") || (window.location.href =
        hi(this.aa.fb) + "/v1/auth/" + this.dg + "/" + this.$e)
  };

  function Tl() {
    var a = window.location.search;
    Fa(a, "?") && (a = a.slice(1));
    return new Bl(a)
  };

  function Vl() {
    ya.call(this);
    this.Gk = {}
  }
  D(Vl, ya);
  Vl.prototype.kk = Sd("goog.messaging.AbstractChannel");
  Vl.prototype.hg = function (a) {
    a && a()
  };
  Vl.prototype.yf = t(j);

  function Wl(a, b, c) {
    var d;
    d = a.Gk[b];
    d || (a.Qo ? d = {
      ya: va(a.Qo, b),
      Um: oa(c)
    } : (Md(a.kk, 'Unknown service name "' + b + '"'), d = k));
    if (d) {
      var f;
      a: {
        var g = d.Um;
        if (g && z(c)) try {
            f = je(c);
            break a
        } catch (h) {
          Md(a.kk, "Expected JSON payload for " + b + ', was "' + c + '"');
          f = k;
          break a
        } else if (!g && !z(c)) {
          f = ke(c);
          break a
        }
        f = c
      }
      f != k && d.ya(f)
    }
  }
  Vl.prototype.A = function () {
    Vl.d.A.call(this);
    Da(this.kk);
    delete this.kk;
    delete this.Gk;
    delete this.Qo
  };

  function hl() {
    Vl.call(this)
  }
  D(hl, Vl);
  hl.prototype.ea = k;
  Fe("MessageChannel", hl);
  hl.prototype.send = function (a, b) {
    Wl(this, a, b)
  };

  function Xl() {
    if (this && this.fr) {
      var a = this.fr;
      a && "SCRIPT" == a.tagName && Yl(a, j, this.Ug)
    }
  }
  function Yl(a, b, c) {
    c != k && w.clearTimeout(c);
    a.onload = ha;
    a.onerror = ha;
    a.onreadystatechange = ha;
    b && window.setTimeout(function () {
      Uf(a)
    }, 0)
  }
  function Zl(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    Ea.call(this, c);
    this.code = a
  }
  D(Zl, Ea);

  function $l(a, b) {
    this.dy = new vl(a);
    this.Js = b ? b : "callback";
    this.Ug = 5E3
  }
  var am = 0;
  $l.prototype.send = function (a, b, c, d) {
    var f = a || k,
      g = d || "_" + (am++).toString(36) + wa().toString(36);
    w._callbacks_ || (w._callbacks_ = {});
    a = this.dy.Va();
    if (f) for (var h in f)(!f.hasOwnProperty || f.hasOwnProperty(h)) && Il(a, h, f[h]);
    b && (w._callbacks_[g] = function (a) {
      bm(g, j);
      b.apply(i, arguments)
    }, Il(a, this.Js, "_callbacks_." + g));
    var l = a.toString(),
      m = {
        timeout: this.Ug,
        Ms: j
      };
    h = m.document || document;
    var q = document.createElement("SCRIPT"),
      a = {
        fr: q,
        Ug: i
      }, s = new Uc(Xl, a),
      r = k,
      d = m.timeout != k ? m.timeout : 5E3;
    0 < d && (r = window.setTimeout(function () {
      Yl(q,
        j);
      s.gb(new Zl(1, "Timeout reached for loading script " + l))
    }, d), a.Ug = r);
    q.onload = q.onreadystatechange = function () {
      if (!q.readyState || "loaded" == q.readyState || "complete" == q.readyState) Yl(q, m.Ms || n, r), s.ya(k)
    };
    q.onerror = function () {
      Yl(q, j, r);
      s.gb(new Zl(0, "Error while loading script " + l))
    };
    Hf(q, {
      type: "text/javascript",
      charset: "UTF-8",
      src: l
    });
    a = h.getElementsByTagName("HEAD");
    (!a || 0 == a.length ? h.documentElement : a[0]).appendChild(q);
    s.il(function () {
      bm(g, n);
      c && c(f)
    });
    return {
      jb: g,
      Gl: s
    }
  };
  $l.prototype.cancel = function (a) {
    a && (a.Gl && a.Gl.cancel(), a.jb && bm(a.jb, n))
  };

  function bm(a, b) {
    w._callbacks_[a] && (b ? delete w._callbacks_[a] : w._callbacks_[a] = ha)
  };

  function cm() {}
  cm.prototype.uo = k;

  function dm(a) {
    var b;
    if (!(b = a.uo)) b = {}, em(a) && (b[0] = j, b[1] = j), b = a.uo = b;
    return b
  };
  var fm;

  function gm() {}
  D(gm, cm);

  function hm(a) {
    return (a = em(a)) ? new ActiveXObject(a) : new XMLHttpRequest
  }
  function em(a) {
    if (!a.Ap && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          return new ActiveXObject(d), a.Ap = d
        } catch (f) {}
      }
      e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
    }
    return a.Ap
  }
  fm = new gm;

  function im(a) {
    ya.call(this);
    this.headers = new od;
    this.bl = a || k
  }
  D(im, Ic);
  im.prototype.ea = Sd("goog.net.XhrIo");
  var jm = /^https?$/i,
    km = [];

  function lm(a) {
    a.J();
    mb(km, a)
  }
  u = im.prototype;
  u.cc = n;
  u.Aa = k;
  u.al = k;
  u.Im = "";
  u.Np = "";
  u.ci = 0;
  u.Fe = "";
  u.Kl = n;
  u.Sj = n;
  u.qm = n;
  u.xf = n;
  u.Sk = 0;
  u.Vf = k;
  u.$q = "";
  u.iy = n;
  u.send = function (a, b, c, d) {
    this.Aa && e(Error("[goog.net.XhrIo] Object is active with another request"));
    b = b ? b.toUpperCase() : "GET";
    this.Im = a;
    this.Fe = "";
    this.ci = 0;
    this.Np = b;
    this.Kl = n;
    this.cc = j;
    this.Aa = this.bl ? hm(this.bl) : hm(fm);
    this.al = this.bl ? dm(this.bl) : dm(fm);
    this.Aa.onreadystatechange = A(this.wq, this);
    try {
      Nd(this.ea, mm(this, "Opening Xhr")), this.qm = j, this.Aa.open(b, a, j), this.qm = n
    } catch (f) {
      Nd(this.ea, mm(this, "Error opening Xhr: " + f.message));
      nm(this, f);
      return
    }
    var a = c || "",
      g = this.headers.Va();
    d && jd(d, function (a,
      b) {
      g.set(b, a)
    });
    d = w.FormData && a instanceof w.FormData;
    "POST" == b && (!g.sd("Content-Type") && !d) && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    jd(g, function (a, b) {
      this.Aa.setRequestHeader(b, a)
    }, this);
    this.$q && (this.Aa.responseType = this.$q);
    "withCredentials" in this.Aa && (this.Aa.withCredentials = this.iy);
    try {
      this.Vf && (Lc.clearTimeout(this.Vf), this.Vf = k), 0 < this.Sk && (Nd(this.ea, mm(this, "Will abort after " + this.Sk + "ms if incomplete")), this.Vf = Lc.setTimeout(A(this.Ug, this), this.Sk)),
      Nd(this.ea, mm(this, "Sending request")), this.Sj = j, this.Aa.send(a), this.Sj = n
    } catch (h) {
      Nd(this.ea, mm(this, "Send error: " + h.message)), nm(this, h)
    }
  };
  u.Ug = function () {
    "undefined" != typeof fa && this.Aa && (this.Fe = "Timed out after " + this.Sk + "ms, aborting", this.ci = 8, Nd(this.ea, mm(this, this.Fe)), this.dispatchEvent("timeout"), this.abort(8))
  };

  function nm(a, b) {
    a.cc = n;
    a.Aa && (a.xf = j, a.Aa.abort(), a.xf = n);
    a.Fe = b;
    a.ci = 5;
    om(a);
    pm(a)
  }
  function om(a) {
    a.Kl || (a.Kl = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
  }
  u.abort = function (a) {
    this.Aa && this.cc && (Nd(this.ea, mm(this, "Aborting")), this.cc = n, this.xf = j, this.Aa.abort(), this.xf = n, this.ci = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), pm(this))
  };
  u.A = function () {
    this.Aa && (this.cc && (this.cc = n, this.xf = j, this.Aa.abort(), this.xf = n), pm(this, j));
    im.d.A.call(this)
  };
  u.wq = function () {
    !this.qm && !this.Sj && !this.xf ? this.mw() : qm(this)
  };
  u.mw = function () {
    qm(this)
  };

  function qm(a) {
    if (a.cc && "undefined" != typeof fa) if (a.al[1] && 4 == rm(a) && 2 == a.Ae()) Nd(a.ea, mm(a, "Local request error detected and ignored"));
      else if (a.Sj && 4 == rm(a)) Lc.setTimeout(A(a.wq, a), 0);
    else if (a.dispatchEvent("readystatechange"), 4 == rm(a)) {
      Nd(a.ea, mm(a, "Request complete"));
      a.cc = n;
      try {
        if (sm(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
          a.ci = 6;
          var b;
          try {
            b = 2 < rm(a) ? a.Aa.statusText : ""
          } catch (c) {
            Nd(a.ea, "Can not get status: " + c.message), b = ""
          }
          a.Fe = b + " [" + a.Ae() + "]";
          om(a)
        }
      } finally {
        pm(a)
      }
    }
  }

  function pm(a, b) {
    if (a.Aa) {
      var c = a.Aa,
        d = a.al[0] ? ha : k;
      a.Aa = k;
      a.al = k;
      a.Vf && (Lc.clearTimeout(a.Vf), a.Vf = k);
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d
      } catch (f) {
        a.ea.log(Ed, "Problem encountered resetting onreadystatechange: " + f.message, i)
      }
    }
  }
  u.gd = function () {
    return !!this.Aa
  };

  function sm(a) {
    var b = a.Ae(),
      c;
    a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 304:
    case 1223:
      c = j;
      break a;
    default:
      c = n
    }
    if (!c) {
      if (b = 0 === b) a = String(a.Im).match(ul)[1] || k, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !jm.test(a ? a.toLowerCase() : "");
      c = b
    }
    return c
  }
  function rm(a) {
    return a.Aa ? a.Aa.readyState : 0
  }
  u.Ae = function () {
    try {
      return 2 < rm(this) ? this.Aa.status : -1
    } catch (a) {
      return Md(this.ea, "Can not get status: " + a.message), -1
    }
  };

  function tm(a) {
    if (a.Aa) return je(a.Aa.responseText)
  }
  function mm(a, b) {
    return b + " [" + a.Np + " " + a.Im + " " + a.Ae() + "]"
  };
  B("setDeobfuscateFunctionName", ba());

  function um() {
    O.call(this, "transport", "/local/transport");
    vm(this, "disconnected");
    this.Od = 1
  }
  D(um, O);
  Re("transport", um);
  um.prototype.xe = function () {
    return this.get("connectionState")
  };

  function vm(a, b) {
    S(a, "connectionState", b)
  }
  um.prototype.yf = function () {
    return "connected" === this.xe()
  };
  um.prototype.wm = function () {
    return "connecting" === this.xe()
  };

  function wm(a) {
    this.mb = {};
    this.L = 0;
    if (a) {
      for (var b = id(a), c = hd(a), d = 0; d < b.length; d++) this.set(b[d], c[d]);
      this.L = a.Tb()
    }
  }
  u = wm.prototype;
  u.xb = i;
  u.set = function (a, b) {
    xm(this, a, b, n)
  };
  u.add = function (a, b) {
    xm(this, a, b, j)
  };

  function xm(a, b, c, d) {
    for (var f = a, g = 0; g < b.length; g++) {
      var h = b.charAt(g);
      f.mb[h] || (f.mb[h] = new wm);
      f = f.mb[h]
    }
    d && f.xb !== i && e(Error('The collection already contains the key "' + b + '"'));
    f.xb = c;
    d && a.L++
  }
  u.get = function (a) {
    for (var b = this, c = 0; c < a.length; c++) {
      var d = a.charAt(c);
      if (!b.mb[d]) return;
      b = b.mb[d]
    }
    return b.xb
  };

  function ym(a, b) {
    var c = a,
      d = {}, f = 0;
    c.xb !== i && (d[f] = c.xb);
    for (; f < b.length; f++) {
      var g = b.charAt(f);
      if (!(g in c.mb)) break;
      c = c.mb[g];
      c.xb !== i && (d[f] = c.xb)
    }
    return d
  }
  u.Xa = function () {
    var a = [];
    zm(this, a);
    return a
  };

  function zm(a, b) {
    a.xb !== i && b.push(a.xb);
    for (var c in a.mb) zm(a.mb[c], b)
  }
  u.pf = function (a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var f = a.charAt(d);
        if (!c.mb[f]) return [];
        c = c.mb[f]
      }
      Am(c, a, b)
    } else Am(this, "", b);
    return b
  };

  function Am(a, b, c) {
    a.xb !== i && c.push(b);
    for (var d in a.mb) Am(a.mb[d], b + d, c)
  }
  u.sd = function (a) {
    return this.get(a) !== i
  };
  u.clear = function () {
    this.mb = {};
    this.xb = i;
    this.L = 0
  };
  u.remove = function (a) {
    for (var b = this, c = [], d = 0; d < a.length; d++) {
      var f = a.charAt(d);
      b.mb[f] || e(Error('The collection does not have the key "' + a + '"'));
      c.push([b, f]);
      b = b.mb[f]
    }
    a = b.xb;
    delete b.xb;
    for (this.L--; 0 < c.length;) if (f = c.pop(), b = f[0], f = f[1], mc(b.mb[f].mb)) if (b.xb) break;
        else delete b.mb[f];
        else break;
    return a
  };
  u.Va = function () {
    return new wm(this)
  };
  u.Tb = p("L");

  function Bm(a, b, c) {
    xg.call(this, a.put("/local/transport", "transport"));
    this.ii = {};
    this.Ld = new wm;
    this.Kg = [];
    this.ca = a;
    this.Ud = b;
    this.fb = c;
    this.Ry = this.lj = 0;
    this.La("connect", this.jv);
    this.La("disconnect", this.ov);
    this.La("login", this.Vv);
    this.La("logout", this.Wv);
    this.La("get", this.Bv);
    this.La("unsubscribe", this.Ww);
    this.La("put", this.$m);
    this.La("post", this.iw);
    this.La("publish", this.kw);
    this.La("remove", this.Ig)
  }
  D(Bm, xg);
  u = Bm.prototype;
  u.U = p("M");
  u.ea = ie("vline.Transport");
  u.Hi = function (a, b, c) {
    (a = Cm(this, a)) && Sk(a, b, c)
  };
  u.uc = function (a) {
    Bm.d.uc.call(this, a);
    ic(this.ii, function (a, c) {
      if (this.ii.hasOwnProperty(c)) {
        var d = {};
        a.Nh().webrtcEnabled && (d.webrtcEnabled = j);
        var d = new Uk(k, a.m(), a.qa(), a.bd(), a.ib(), d),
          f = a.zd();
        d.sid = f;
        this.ka(d)
      }
    }, this);
    F(this.Ld.Xa(), function (a) {
      if (a.response) {
        var c = new Vk(k, a.path, new Dj(a.ue | (a.ue & 7) << 4, i, i, i, a.bk || i));
        c.sid = a.Gx;
        this.j("reSubscribe", c);
        Dm(this, c, j)
      }
    }, this);
    a = this.Kg;
    this.Kg = [];
    F(a, function (a) {
      try {
        Wl(this.Ud, a.Da(), a)
      } catch (c) {
        this.error(c)
      }
    }, this)
  };

  function Em(a, b) {
    a.j(a.Ob ? "request" : "queue", b);
    a.Kg.push(b);
    return a.Ob
  }
  function Cm(a, b) {
    a.j("response", "rid", b);
    var c = k,
      d = ib(a.Kg, function (a) {
        return a.rid === b
      });
    0 <= d && (c = a.Kg[d], bb.splice.call(a.Kg, d, 1));
    return c
  }
  function Fm(a, b, c, d) {
    var f, g = new Rk(k, b, c, d);
    d && (f = d.seq);
    var h = [];
    ic(ym(a.Ld, c), function (a, b) {
      Ck(c, Number(b) + 1, a.ue) && (f && Gm(this, a, f), F(a.gj, function (a) {
        lb(h, a)
      }))
    }, a);
    F(h, function (a) {
      a.send(g.Da(), g)
    })
  }

  function Gm(a, b, c) {
    c && !(b.Gm && c <= b.Gm) && (b.bk = b.Gm = c, a.j("updateLastSeq_", "path", b.path, "seq", b.bk))
  }
  function Hm(a, b, c, d) {
    a.j("addSubscription", "session", d.zd(), "path", b);
    1E3 <= a.Ld.Tb() && e(a.error("SUBSCRIPTION_LIMIT_EXCEEDED"));
    var f = a.Ld.get(b);
    f ? ((f.ue & c) !== c && (f.ue |= c, f.bk = k), lb(f.gj, d.cd())) : (f = {
      response: n,
      path: b,
      Gx: d.zd(),
      ue: c,
      bk: k,
      Gm: k,
      gj: [d.cd()]
    }, a.Ld.add(b, f))
  }
  u.Jj = function (a, b, c) {
    var d = 0,
      f = ym(this.Ld, a),
      g = a.length;
    b & 6 ? a += "/*/*" : b & 2 && (a += "/*");
    ic(f, function (b, f) {
      var m = Number(f) + 1;
      c && m === g || Ck(a, m, b.ue) && (d |= b.ue)
    }, this);
    b &= ~d;
    b & 6 && (b |= 2);
    return b
  };

  function Im(a, b, c) {
    a.j("removeSubscription", "session", c.zd(), "path", b.path);
    mb(b.gj, c.cd());
    return 0 === b.gj.length ? (a.Ld.remove(b.path), j) : n
  }
  u.Vv = function (a) {
    Hm(this, a.m(), 1, a);
    Hm(this, a.m() + "/msg", 6, a);
    Hm(this, a.m() + "/sessions", 6, a);
    Em(this, a) && this.ka(a)
  };
  u.Wv = function (a) {
    F(this.Ld.Xa(), function (b) {
      Im(this, b, a)
    }, this);
    if (Em(this, a)) {
      var b = a.zd();
      delete this.ii[b];
      sg(this.U(), y(i) ? NaN : -1, i);
      this.Ob && this.tc(a)
    }
  };
  u.Bv = function (a) {
    Em(this, a) && Dm(this, a)
  };

  function Dm(a, b, c) {
    var d = b.ze();
    if (d.Ja & 7) {
      var d = d.Va(),
        f = a.Jj(b.m(), d.Jj(), c);
      c || Hm(a, b.m(), d.Jj(), b);
      d.Ja = d.Ja & -8 | f
    }(!c || f) && a.get(b, d)
  }
  u.Ww = function (a) {
    var b = this.Ld.get(a.m());
    b && Im(this, b, a) && this.Ob && (a = {
      op: Jm(a),
      subscription: a.m()
    }, this.Wa.publish("/meta/unsubscribe", k, a))
  };
  u.$m = function (a) {
    Em(this, a) && this.put(a)
  };
  u.iw = function (a) {
    Em(this, a) && this.Pc(a)
  };
  u.kw = function (a) {
    Em(this, a) && this.vc(a)
  };
  u.Ig = function (a) {
    Em(this, a) && this.remove(a)
  };
  u.pq = function () {
    this.j("onConnecting");
    vm(this.U(), "connecting");
    this.hg()
  };

  function Km(a) {
    a.j("onDisconnected");
    vm(a.U(), "disconnected");
    a.Oa(n)
  }
  function Lm(a) {
    a.j("onDisconnecting");
    vm(a.U(), "disconnecting");
    a.Hl()
  }
  u.jv = function () {
    this.j("onConnect", "connectCount", this.lj);
    0 === this.lj++ && this.pq()
  };
  u.ov = function () {
    this.j("onDisconnect", "connectCount", this.lj);
    0 === --this.lj && Lm(this)
  };
  u.La = function (a, b) {
    var c = A(b, this);
    this.Ud.Gk[a] = {
      ya: c,
      Um: j
    }
  };

  function Mm() {
    ya.call(this);
    this.Z = new Ze(this);
    Yb && (Zb ? this.Z.h($b ? document.body : window, ["online", "offline"], this.qp) : (this.Gq = this.zg(), this.sa = new Kc(Nm), this.Z.h(this.sa, Mc, this.Ut), this.sa.start()))
  }
  D(Mm, Ic);
  var Nm = 250;
  Mm.prototype.zg = function () {
    return Yb ? navigator.onLine : j
  };
  Mm.prototype.Ut = function () {
    var a = this.zg();
    a != this.Gq && (this.Gq = a, this.qp())
  };
  Mm.prototype.qp = function () {
    var a = this.zg() ? "online" : "offline";
    this.dispatchEvent(a)
  };
  Mm.prototype.A = function () {
    Mm.d.A.call(this);
    this.Z.J();
    delete this.Z;
    this.sa && (this.sa.J(), delete this.sa)
  };

  function Om(a, b, c) {
    Bm.call(this, a, b, c);
    this.Dl = k;
    this.Ky = navigator.onLine ? "online" : "offline";
    this.pk = n;
    this.Sm = 0;
    this.jq = 1E3;
    this.dq = 3E4;
    this.Mu = 6E4;
    this.Iy = 12E4;
    this.lq = new Mm;
    xc(this.lq, ["online", "offline"], A(this.Uu, this));
    org.cometd.JSON.toJSON = ke;
    org.cometd.JSON.fromJSON = je;
    this.Wa = new org.cometd.Cometd;
    this.Ak = 0;
    org.cometd.WebSocket && (this.Wa.websocketEnabled = j, this.Wa.registerTransport("websocket", new org.cometd.WebSocketTransport, 0));
    this.Wa.registerTransport("long-polling", new Pm);
    this.Wa.registerTransport("callback-polling",
      new Qm);
    this.Wa.registerExtension("ackExt", new org.cometd.AckExtension);
    this.Wa.registerExtension("timesync", new org.cometd.TimeSyncExtension);
    this.Pn = this.Wa.getExtension("timesync");
    this.Wa.addListener("/meta/disconnect", A(this.Ws, this));
    this.Wa.addListener("/meta/connect", A(this.Ou, this));
    this.Wa.addListener("/meta/subscribe", A(this.Zx, this));
    this.Wa.addListener("/meta/publish", A(this.xx, this));
    this.Wa.addListener("/meta/unsuccessful", A(this.cy, this));
    this.Wa.addListener("/**", A(this.Yx, this))
  }
  D(Om, Bm);
  Fe("cometdTransport", Om);

  function Pm() {
    var a = new org.cometd.LongPollingTransport,
      a = org.cometd.Transport.derive(a);
    a.xhrSend = function (a) {
      function c(c) {
        c = c.target;
        if (sm(c)) a.onSuccess(tm(c));
        else a.onError(z(c.Fe) ? c.Fe : String(c.Fe))
      }
      var d = a.headers;
      d["Content-Type"] = "application/json;charset=UTF-8";
      var f = a.url,
        g = a.body,
        h = new im;
      km.push(h);
      c && xc(h, "complete", c);
      xc(h, "ready", va(lm, h));
      h.send(f, "POST", g, d)
    };
    return a
  }

  function Qm() {
    var a = new org.cometd.CallbackPollingTransport,
      a = org.cometd.Transport.derive(a);
    a.jsonpSend = function (a) {
      (new $l(a.url, "jsonp")).send({
        message: a.body
      }, function (c) {
        a.onSuccess(c)
      }, function () {
        a.onError("unknown JSONP error")
      })
    };
    return a
  }
  u = Om.prototype;
  u.Lc = ba();

  function Rm(a) {
    if (a.pk) {
      if (5E3 > (new Date).getTime() - a.Sm) return a.jq;
      a.pk = n;
      a.Sm = 0
    }
    return a.dq + Math.floor(Math.random() * (a.Mu - a.dq))
  }
  u.ka = function (a) {
    var b = Jm(a),
      c = {};
    c.appId = a.qa();
    c.authId = a.bd();
    c.token = a.ib();
    c.profile = a.Nh();
    Sm(this, "/service/login", c, b)
  };
  u.tc = function (a) {
    a = Jm(a);
    Sm(this, "/service/logout", {}, a)
  };
  u.get = function (a, b) {
    var c = Jm(a);
    if (a.ze()) {
      var d = Se(b);
      rc(c, d)
    }
    Sm(this, "/service/get", {}, c)
  };
  u.put = function (a) {
    var b = Jm(a),
      c = Qk(a);
    c != k ? Sm(this, "/service/put", c, b) : Md(this.ea, "Put with null data: " + a)
  };
  u.vc = function (a) {
    var b = Jm(a),
      c = Qk(a);
    c != k ? (a = a.m(), Sm(this, Fa(a, "/service/") ? a : "/service/publish", c, b)) : Md(this.ea, "Publish with null data: " + a)
  };
  u.Pc = function (a) {
    var b = Jm(a),
      c = Qk(a);
    c != k ? Sm(this, "/service/post", c, b) : Md(this.ea, "Post with null data: " + a)
  };
  u.remove = function (a) {
    a = Jm(a);
    Sm(this, "/service/delete", k, a)
  };
  u.join = ba();

  function Jm(a) {
    var b = {};
    b.sid = a.zd();
    b.appId = a.qa();
    b.rid = a.rid;
    b.path = a.m();
    b.type = a.Da();
    return b
  }

  function Sm(a, b, c, d) {
    a.j("publish", "channel", b, "payload", c, "op", d);
    a.Wa.publish(b, c, {
      op: d
    })
  }
  u.Yx = function (a) {
    var b = a.channel;
    /^\/meta\//.test(b) || /^\/service\//.test(b) || Oc(function () {
      this.j("subscribeCallback", a);
      var c = a.data,
        d = a.op,
        f = d.type;
      d && f && Fm(this, f, b, c)
    }, this)
  };
  u.Uu = function () {
    var a = this.lq.zg();
    this.j("networkStateChanged - isOnline : ", a);
    a ? (this.Wa.resetBackOff(), this.pk = j, this.Sm = (new Date).getTime(), vm(this.U(), "connecting"), this.hg(this.jq)) : ("disconnected" !== this.U().xe() && "disconnecting" !== this.U().xe() && (Lm(this), Km(this)), this.pk = n)
  };
  u.hg = function () {
    Tm(this);
    this.Wa.handshake()
  };

  function Tm(a) {
    var b;
    b = Th(8);
    b = Ha(Q(a.fb, "messageServer") || "https://%s.message." + a.fb.get("env") + ".vline.com/cometd", b);
    a.Dl = b;
    a.j("connect", a.Dl);
    b = a.fb.get("autoBatch");
    var c = a.fb.get("maxBackOff"),
      d = a.fb.get("cometdLogLevel"),
      f = a.fb.get("connectTimeout");
    a.Wa.configure({
      url: a.Dl,
      autoBatch: b,
      backoffIncrement: Rm(a),
      maxBackoff: c,
      connectTimeout: f,
      logLevel: d
    })
  }
  u.Hl = function () {
    this.j("disconnect");
    this.Wa.disconnect()
  };
  u.Ou = function (a) {
    try {
      this.j("metaconnectHandler", a);
      this.Pn && this.Pn.getTimeOffset() && (de = this.Pn.getTimeOffset());
      if (this.Wa.isDisconnected() || !a.successful) this.Ak++, 1 < this.Ak && (Nd(this.ea, "Keep-Alive failed, trying to reconnect..."), this.Ak = 0, Km(this), Tm(this));
      a.successful && !this.Wa.isDisconnected() && (this.Ak = 0, this.j("Keep-Alive Timeoffset ", de), this.U().yf() || (this.j("onConnected"), vm(this.U(), "connected"), this.Oa(j)))
    } catch (b) {
      this.error(b)
    }
  };
  u.Ws = function () {
    Km(this)
  };
  u.Zx = function (a) {
    this.j("subscribeHandler", a)
  };
  u.xx = function (a) {
    Oc(function () {
      this.j("responseHandler", a);
      var b = a.channel,
        c = Um(this, a);
      if (!a.failure && !Vm(c)) if ("/service/get" === b) {
          var b = a.op.rid,
            d = a.data,
            f = k,
            g = [];
          d && (f = d.root, g = d.results);
          d = f;
          if (b = Cm(this, b)) {
            if (f = this.Ld.get(b.m())) f.response = j;
            var h = 0,
              l;
            d && (l = d.seq) && (h = l);
            g && F(g, function (a) {
              (l = a.seq) && l > h && (h = l)
            });
            h && Gm(this, f, h);
            c = new Wk(b.rid, b.m(), b.ze(), d, g, c);
            b.Hi(c)
          } else d && Fm(this, "put", Ie(d), d), g && F(g, function (a) {
              Fm(this, "put", Ie(a), a)
            }, this)
        } else if ("/service/login" === b) {
        g = a.op;
        a: {
          d =
            g.sid;
          b = a.data;
          if (g = Cm(this, g.rid)) d = g.zd(), this.ii[d] = g, sg(this.U()), Sk(g, k, c);
          else if (g = this.ii[d], c) {
            g.cd().send("login.err.resp", c);
            break a
          }
          g && b && Fm(this, "put", g.m(), b)
        }
      } else "/service/logout" === b ? this.Hi(a.op.rid, k, c) : this.Hi(a.op.rid, a.data, c)
    }, this)
  };
  u.cy = function (a) {
    this.j("unsuccessfulHandler", a);
    "/meta/handshake" === a.channel && a.failure === j && Tm(this);
    a = Um(this, a);
    Vm(a) && this.U().yf() && (Lm(this), this.U().Ke("change:connectionState", A(function () {
      "disconnected" === this.U().xe() && setTimeout(A(this.pq, this), 0)
    }, this)))
  };

  function Vm(a) {
    return a && ("402" === a.Da() || "403" === a.Da())
  }
  var Wm = {
    400: "BAD_PARAM",
    401: "AUTH_FAILED",
    403: "FORBIDDEN",
    500: "SERVER_ERROR",
    601: "BAD_CREDENTIALS",
    603: "ACCESS_DENIED",
    604: "NO_RELAY_FOUND",
    605: "RSC_EXISTS",
    610: "INVALID_EMAIL",
    611: "EMAIL_EXISTS",
    612: "APPID_NOT_FOUND",
    613: "APPID_EXISTS",
    614: "INVALID_PASSWORD",
    615: "USERID_NOT_FOUND",
    616: "INVALID_TOKEN",
    617: "INVALID_PAYLOAD"
  };

  function Um(a, b) {
    var c = b.error,
      d = b.errors;
    if (!c && !d) return k;
    var f = Xm(c);
    d && ic(d, function (a, b) {
      var c = Xm(a),
        d = f.map;
      d || (d = f.map = {});
      d[b] = c
    }, a);
    return f
  }

  function Xm(a) {
    if (!a) return new M("NONE");
    var b = a.split(":"),
      a = Ya(b[0]),
      c = Ya(b[1]),
      b = Ya(b[2]);
    a in Wm && (a = Wm[a]);
    var d = c;
    !Ja(c) && !Ja(b) && (d += " - ");
    return new M(a, d + b)
  };

  function Ym(a) {
    ya.call(this);
    this.la = a || window;
    this.ek = xc(this.la, "resize", this.St, n, this);
    this.Sg = Jf(this.la);
    if (J && Ab || Fb && this.la.self != this.la.top) this.$k = window.setInterval(A(this.yo, this), Zm)
  }
  D(Ym, Ic);
  var Zm = 500;
  u = Ym.prototype;
  u.ek = k;
  u.la = k;
  u.Sg = k;
  u.$k = k;
  u.Ad = function () {
    return this.Sg ? this.Sg.Va() : k
  };
  u.A = function () {
    Ym.d.A.call(this);
    this.ek && (Cc(this.ek), this.ek = k);
    this.$k && (window.clearInterval(this.$k), this.$k = k);
    this.Sg = this.la = k
  };
  u.St = function () {
    this.yo()
  };
  u.yo = function () {
    var a = Jf(this.la);
    Af(a, this.Sg) || (this.Sg = a, this.dispatchEvent("resize"))
  };

  function $m(a, b, c, d) {
    ya.call(this);
    a && !b && e(Error("Can't use invisible history without providing a blank page."));
    var f;
    c ? f = c : (f = "history_state" + an, document.write(Ha(bn, f, f)), f = z(f) ? document.getElementById(f) : f);
    this.Xh = f;
    this.la = c ? Lf(Df(c)) : window;
    this.Gs = this.la.location.href.split("#")[0];
    this.Rj = b;
    G && !b && (this.Rj = "https" == window.location.protocol ? "https:///" : 'javascript:""');
    this.sa = new Kc(cn);
    this.Xf = !a;
    this.Z = new Ze(this);
    if (a || dn) d ? a = d : (a = "history_iframe" + an, b = this.Rj ? 'src="' + Na(this.Rj) + '"' :
        "", document.write(Ha(en, a, b)), a = z(a) ? document.getElementById(a) : a), this.kb = a, this.Nr = j;
    dn && (this.Z.h(this.la, "load", this.pv), this.vr = this.Il = n);
    this.Xf ? fn(this, this.ib(), j) : gn(this, this.Xh.value);
    an++
  }
  D($m, Ic);
  $m.prototype.Fa = n;
  $m.prototype.Eg = n;
  $m.prototype.Bg = k;
  var hn = G && Ub(8) || I && Sb("1.9.2") || J && Sb("532.1"),
    dn = G && !Ub(8),
    jn = dn;
  u = $m.prototype;
  u.Dg = k;
  u.A = function () {
    $m.d.A.call(this);
    this.Z.J();
    this.Na(n)
  };
  u.Na = function (a) {
    if (a != this.Fa) if (dn && !this.Il) this.vr = a;
      else if (a) if (Fb ? this.Z.h(this.la.document, kn, this.ex) : I && this.Z.h(this.la, "pageshow", this.an), hn && this.Xf) this.Z.h(this.la, "hashchange", this.Dv), this.Fa = j, this.dispatchEvent(new Pl(this.ib(), n));
      else {
        if (!G || this.Il) this.Z.h(this.sa, Mc, A(this.Xc, this, j)), this.Fa = j, dn || (this.Bg = this.ib(), this.dispatchEvent(new Pl(this.ib(), n))), this.sa.start()
      } else this.Fa = n, af(this.Z), this.sa.stop()
  };
  u.pv = function () {
    this.Il = j;
    this.Xh.value && gn(this, this.Xh.value, j);
    this.Na(this.vr)
  };
  u.an = function (a) {
    a.Sb.persisted && (this.Na(n), this.Na(j))
  };
  u.Dv = function () {
    var a = ln(this.la);
    a != this.Bg && this.re(a, j)
  };
  u.ib = function () {
    return this.Dg != k ? this.Dg : this.Xf ? ln(this.la) : mn(this) || ""
  };
  u.sr = function (a, b) {
    nn(this, a, n, b)
  };
  u.mn = function (a, b) {
    nn(this, a, j, b)
  };

  function ln(a) {
    var a = a.location.href,
      b = a.indexOf("#");
    return 0 > b ? "" : a.substring(b + 1)
  }

  function nn(a, b, c, d) {
    a.ib() != b && (a.Xf ? (fn(a, b, c), hn || G && gn(a, b, c, d), a.Fa && a.Xc(n)) : (gn(a, b, c), a.Dg = a.Bg = a.Xh.value = b, a.dispatchEvent(new Pl(b, n))))
  }
  function fn(a, b, c) {
    var d = a.la.location,
      a = a.Gs,
      f = -1 != d.href.indexOf("#");
    if (jn || f || b) a += "#" + b;
    a != d.href && (c ? d.replace(a) : d.href = a)
  }

  function gn(a, b, c, d) {
    if (a.Nr || b != mn(a)) if (a.Nr = n, b = encodeURIComponent(String(b)), G) {
        var f = Xf(a.kb);
        f.open("text/html", c ? "replace" : i);
        f.write(Ha(on, Na(d || a.la.document.title), b));
        f.close()
      } else if (b = a.Rj + "#" + b, a = a.kb.contentWindow) c ? a.location.replace(b) : a.location.href = b
  }

  function mn(a) {
    if (G) return a = Xf(a.kb), a.body ? Ma(a.body.innerHTML) : k;
    var b = a.kb.contentWindow;
    if (b) {
      var c;
      try {
        c = Ma(ln(b))
      } catch (d) {
        return a.Eg || (a.Eg != j && a.sa.setInterval(pn), a.Eg = j), k
      }
      a.Eg && (a.Eg != n && a.sa.setInterval(cn), a.Eg = n);
      return c || k
    }
    return k
  }
  u.Xc = function (a) {
    if (this.Xf) {
      var b = ln(this.la);
      b != this.Bg && this.re(b, a)
    }
    if (!this.Xf || dn) if (b = mn(this) || "", this.Dg == k || b == this.Dg) this.Dg = k, b != this.Bg && this.re(b, a)
  };
  u.re = function (a, b) {
    this.Bg = this.Xh.value = a;
    this.Xf ? (dn && gn(this, a), fn(this, a)) : gn(this, a);
    this.dispatchEvent(new Pl(this.ib(), b))
  };
  u.ex = function () {
    this.sa.stop();
    this.sa.start()
  };
  var kn = ["mousedown", "keydown", "mousemove"],
    on = "<title>%s</title><body>%s</body>",
    en = '<iframe id="%s" style="display:none" %s></iframe>',
    bn = '<input type="text" name="%s" id="%s" style="display:none">',
    an = 0,
    cn = 150,
    pn = 1E4;

  function qn(a, b) {
    a.setAttribute("role", b)
  }
  function rn(a, b, c) {
    a.setAttribute("aria-" + b, c)
  };

  function sn(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  }
  sn.prototype.Va = function () {
    return new sn(this.top, this.right, this.bottom, this.left)
  };
  sn.prototype.contains = function (a) {
    return !this || !a ? n : a instanceof sn ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
  };

  function tn(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
  }
  tn.prototype.Va = function () {
    return new tn(this.left, this.top, this.width, this.height)
  };
  tn.prototype.contains = function (a) {
    return a instanceof tn ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
  };
  tn.prototype.Ad = function () {
    return new zf(this.width, this.height)
  };

  function un(a, b, c) {
    z(b) ? vn(a, c, b) : ic(b, va(vn, a))
  }
  function vn(a, b, c) {
    a.style[ab(c)] = b
  }
  function wn(a, b) {
    var c = Df(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
  }
  function xn(a, b) {
    return a.currentStyle ? a.currentStyle[b] : k
  }
  function yn(a, b) {
    return wn(a, b) || xn(a, b) || a.style && a.style[b]
  }
  function zn(a) {
    return yn(a, "position")
  }

  function An(a, b, c) {
    var d, f = I && (zb || Jb) && Sb("1.9");
    b instanceof xf ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = Bn(d, f);
    a.style.top = Bn(b, f)
  }
  function Cn(a) {
    var b = a.getBoundingClientRect();
    G && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
  }

  function Fn(a) {
    if (G && !Ub(8)) return a.offsetParent;
    for (var b = Df(a), c = yn(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode) if (c = yn(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return k
  }

  function Hn(a) {
    for (var b = new sn(0, Infinity, Infinity, 0), c = Bf(a), d = c.ma.body, f = c.ma.documentElement, g = Kf(c.ma); a = Fn(a);) if ((!G || 0 != a.clientWidth) && (!J || 0 != a.clientHeight || a != d) && a != d && a != f && "visible" != yn(a, "overflow")) {
        var h = In(a),
          l;
        l = a;
        if (I && !Sb("1.9")) {
          var m = parseFloat(wn(l, "borderLeftWidth"));
          if (Jn(l)) var q = l.offsetWidth - l.clientWidth - m - parseFloat(wn(l, "borderRightWidth")),
          m = m + q;
          l = new xf(m, parseFloat(wn(l, "borderTopWidth")))
        } else l = new xf(l.clientLeft, l.clientTop);
        h.x += l.x;
        h.y += l.y;
        b.top = Math.max(b.top,
          h.y);
        b.right = Math.min(b.right, h.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
        b.left = Math.max(b.left, h.x)
      }
    d = g.scrollLeft;
    g = g.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, g);
    c = Jf(jg(c));
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, g + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : k
  }

  function In(a) {
    var b, c = Df(a),
      d = yn(a, "position"),
      f = I && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
      g = new xf(0, 0),
      h;
    b = c ? Df(c) : document;
    h = G && !Ub(9) && !ig(Bf(b)) ? b.body : b.documentElement;
    if (a == h) return g;
    if (a.getBoundingClientRect) b = Cn(a), a = kg(Bf(c)), g.x = b.left + a.x, g.y = b.top + a.y;
    else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
    else {
      b = a;
      do {
        g.x += b.offsetLeft;
        g.y +=
          b.offsetTop;
        b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
        if (J && "fixed" == zn(b)) {
          g.x += c.body.scrollLeft;
          g.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      } while (b && b != a);
      if (Fb || J && "absolute" == d) g.y -= c.body.offsetTop;
      for (b = a;
      (b = Fn(b)) && b != c.body && b != h;) if (g.x -= b.scrollLeft, !Fb || "TR" != b.tagName) g.y -= b.scrollTop
    }
    return g
  }
  function Kn(a, b, c) {
    b instanceof zf ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
    Ln(a, b);
    Mn(a, c)
  }

  function Bn(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
  }
  function Mn(a, b) {
    a.style.height = Bn(b, j)
  }
  function Ln(a, b) {
    a.style.width = Bn(b, j)
  }
  function Nn(a) {
    if ("none" != yn(a, "display")) return On(a);
    var b = a.style,
      c = b.display,
      d = b.visibility,
      f = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = On(a);
    b.display = c;
    b.position = f;
    b.visibility = d;
    return a
  }

  function On(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = J && !b && !c;
    return (!y(b) || d) && a.getBoundingClientRect ? (a = Cn(a), new zf(a.right - a.left, a.bottom - a.top)) : new zf(b, c)
  }
  function Pn(a) {
    var b = In(a),
      a = Nn(a);
    return new tn(b.x, b.y, a.width, a.height)
  }
  function Qn(a, b) {
    var c = a.style;
    "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
  }
  function Rn(a, b) {
    a.style.display = b ? "" : "none"
  }
  function Jn(a) {
    return "rtl" == yn(a, "direction")
  }
  var Sn = I ? "MozUserSelect" : J ? "WebkitUserSelect" : k;

  function Tn(a, b, c) {
    c = !c ? a.getElementsByTagName("*") : k;
    if (Sn) {
      if (b = b ? "none" : "", a.style[Sn] = b, c) for (var a = 0, d; d = c[a]; a++) d.style[Sn] = b
    } else if (G || Fb) if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
  }

  function Un(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
      d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var f = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return f
  }

  function Vn(a) {
    if (G) {
      var b = Un(a, xn(a, "paddingLeft")),
        c = Un(a, xn(a, "paddingRight")),
        d = Un(a, xn(a, "paddingTop")),
        a = Un(a, xn(a, "paddingBottom"));
      return new sn(d, c, a, b)
    }
    b = wn(a, "paddingLeft");
    c = wn(a, "paddingRight");
    d = wn(a, "paddingTop");
    a = wn(a, "paddingBottom");
    return new sn(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
  }
  var Wn = {
    thin: 2,
    medium: 4,
    thick: 6
  };

  function Xn(a, b) {
    if ("none" == xn(a, b + "Style")) return 0;
    var c = xn(a, b + "Width");
    return c in Wn ? Wn[c] : Un(a, c)
  }

  function Yn(a) {
    if (G) {
      var b = Xn(a, "borderLeft"),
        c = Xn(a, "borderRight"),
        d = Xn(a, "borderTop"),
        a = Xn(a, "borderBottom");
      return new sn(d, c, a, b)
    }
    b = wn(a, "borderLeftWidth");
    c = wn(a, "borderRightWidth");
    d = wn(a, "borderTopWidth");
    a = wn(a, "borderBottomWidth");
    return new sn(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
  }
  var Zn = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

  function $n() {}
  ia($n);
  $n.prototype.Vu = 0;
  $n.Ga();

  function ao(a) {
    ya.call(this);
    this.vb = a || Bf();
    this.Pe = bo
  }
  D(ao, Ic);
  ao.prototype.fu = $n.Ga();
  var bo = k;

  function co(a, b) {
    switch (a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
    }
    e(Error("Invalid component state"))
  }
  u = ao.prototype;
  u.jb = k;
  u.Q = n;
  u.H = k;
  u.Pe = k;
  u.Pm = k;
  u.Ea = k;
  u.eb = k;
  u.Yc = k;
  u.ao = n;
  u.F = function () {
    return this.jb || (this.jb = ":" + (this.fu.Vu++).toString(36))
  };
  u.tb = function (a) {
    this.Ea && this.Ea.Yc && (nc(this.Ea.Yc, this.jb), oc(this.Ea.Yc, a, this));
    this.jb = a
  };
  u.e = p("H");
  u.ye = ea(1);
  u.I = function () {
    return this.sg || (this.sg = new Ze(this))
  };
  u.Nf = function (a) {
    this == a && e(Error("Unable to set parent component"));
    a && (this.Ea && this.jb && eo(this.Ea, this.jb) && this.Ea != a) && e(Error("Unable to set parent component"));
    this.Ea = a;
    ao.d.xc.call(this, a)
  };
  u.getParent = p("Ea");
  u.xc = function (a) {
    this.Ea && this.Ea != a && e(Error("Method not supported"));
    ao.d.xc.call(this, a)
  };
  u.C = p("vb");
  u.D = function () {
    this.H = this.vb.createElement("div")
  };
  u.Pb = function (a) {
    fo(this, a)
  };

  function fo(a, b, c) {
    a.Q && e(Error("Component already rendered"));
    a.H || a.D();
    b ? b.insertBefore(a.H, c || k) : a.vb.ma.body.appendChild(a.H);
    (!a.Ea || a.Ea.Q) && a.B()
  }
  u.oa = function (a) {
    this.Q && e(Error("Component already rendered"));
    if (a && this.Mb(a)) {
      this.ao = j;
      if (!this.vb || this.vb.ma != Df(a)) this.vb = Bf(a);
      this.R(a);
      this.B()
    } else e(Error("Invalid element to decorate"))
  };
  u.Mb = t(j);
  u.R = ca("H");
  u.B = function () {
    this.Q = j;
    this.qc(function (a) {
      !a.Q && a.e() && a.B()
    })
  };
  u.pa = function () {
    this.qc(function (a) {
      a.Q && a.pa()
    });
    this.sg && af(this.sg);
    this.Q = n
  };
  u.A = function () {
    ao.d.A.call(this);
    this.Q && this.pa();
    this.sg && (this.sg.J(), delete this.sg);
    this.qc(function (a) {
      a.J()
    });
    !this.ao && this.H && Uf(this.H);
    this.Ea = this.Pm = this.H = this.Yc = this.eb = k
  };
  u.Je = function (a) {
    return this.F() + "." + a
  };
  u.Fh = function (a) {
    this.Q || e(Error("Operation not supported while component is not in document"));
    return this.vb.e(this.Je(a))
  };
  u.ta = function (a, b) {
    this.qd(a, go(this), b)
  };
  u.qd = function (a, b, c) {
    a.Q && (c || !this.Q) && e(Error("Component already rendered"));
    (0 > b || b > go(this)) && e(Error("Child component index out of bounds"));
    if (!this.Yc || !this.eb) this.Yc = {}, this.eb = [];
    if (a.getParent() == this) {
      var d = a.F();
      this.Yc[d] = a;
      mb(this.eb, a)
    } else oc(this.Yc, a.F(), a);
    a.Nf(this);
    qb(this.eb, b, 0, a);
    a.Q && this.Q && a.getParent() == this ? (c = this.ua(), c.insertBefore(a.e(), c.childNodes[b] || k)) : c ? (this.H || this.D(), b = ho(this, b + 1), fo(a, this.ua(), b ? b.H : k)) : this.Q && (!a.Q && a.H && a.H.parentNode) && a.B()
  };
  u.ua = p("H");

  function io(a) {
    a.Pe == k && (a.Pe = Jn(a.Q ? a.H : a.vb.ma.body));
    return a.Pe
  }
  u.Of = function (a) {
    this.Q && e(Error("Component already rendered"));
    this.Pe = a
  };

  function go(a) {
    return a.eb ? a.eb.length : 0
  }
  function eo(a, b) {
    var c;
    a.Yc && b ? (c = a.Yc, c = (b in c ? c[b] : i) || k) : c = k;
    return c
  }
  function ho(a, b) {
    return a.eb ? a.eb[b] || k : k
  }
  u.qc = function (a, b) {
    this.eb && F(this.eb, a, b)
  };

  function jo(a, b) {
    return a.eb && b ? cb(a.eb, b) : -1
  }
  u.removeChild = function (a, b) {
    if (a) {
      var c = z(a) ? a : a.F(),
        a = eo(this, c);
      c && a && (nc(this.Yc, c), mb(this.eb, a), b && (a.pa(), a.H && Uf(a.H)), a.Nf(k))
    }
    a || e(Error("Child is not in parent component"));
    return a
  };

  function ko(a, b) {
    ao.call(this, b);
    this.jd = a || ""
  }
  D(ko, ao);
  ko.prototype.xd = k;
  var lo = "placeholder" in document.createElement("input");
  u = ko.prototype;
  u.Vh = n;
  u.D = function () {
    this.H = this.C().D("input", {
      type: "text"
    })
  };
  u.R = function (a) {
    ko.d.R.call(this, a);
    this.jd || (this.jd = a.getAttribute("label") || "");
    var b;
    a: {
      var c = Df(a);
      try {
        b = c && c.activeElement;
        break a
      } catch (d) {}
      b = k
    }
    b == a && (this.Vh = j, uf(this.e(), this.bh));
    lo ? this.e().placeholder = this.jd : rn(this.e(), "label", this.jd)
  };
  u.B = function () {
    ko.d.B.call(this);
    var a = new Ze(this);
    a.h(this.e(), "focus", this.sp);
    a.h(this.e(), "blur", this.Ft);
    if (lo) this.Z = a;
    else {
      I && a.h(this.e(), ["keypress", "keydown", "keyup"], this.Kt);
      var b = Df(this.e());
      a.h(Lf(b), "load", this.Vt);
      this.Z = a;
      mo(this)
    }
    this.Xc();
    this.e().Du = this
  };
  u.pa = function () {
    ko.d.pa.call(this);
    this.Z && (this.Z.J(), this.Z = k);
    this.e().Du = k
  };

  function mo(a) {
    !a.mt && (a.Z && a.e().form) && (a.Z.h(a.e().form, "submit", a.Lt), a.mt = j)
  }
  u.A = function () {
    ko.d.A.call(this);
    this.Z && (this.Z.J(), this.Z = k)
  };
  u.bh = "label-input-label";
  u.sp = function () {
    this.Vh = j;
    uf(this.e(), this.bh);
    if (!lo && !no(this) && !this.hu) {
      var a = this,
        b = function () {
          a.e().value = ""
        };
      G ? Nc(b, 10) : b()
    }
  };
  u.Ft = function () {
    lo || (this.Z.Kb(this.e(), "click", this.sp), this.xd = k);
    this.Vh = n;
    this.Xc()
  };
  u.Kt = function (a) {
    27 == a.keyCode && ("keydown" == a.type ? this.xd = this.e().value : "keypress" == a.type ? this.e().value = this.xd : "keyup" == a.type && (this.xd = k), a.preventDefault())
  };
  u.Lt = function () {
    no(this) || (this.e().value = "", Nc(this.Et, 10, this))
  };
  u.Et = function () {
    no(this) || (this.e().value = this.jd)
  };
  u.Vt = function () {
    this.Xc()
  };

  function no(a) {
    return !!a.e() && "" != a.e().value && a.e().value != a.jd
  }
  u.clear = function () {
    this.e().value = "";
    this.xd != k && (this.xd = "")
  };
  u.reset = function () {
    no(this) && (this.clear(), this.Xc())
  };
  u.ga = function (a) {
    this.xd != k && (this.xd = a);
    this.e().value = a;
    this.Xc()
  };
  u.da = function () {
    return this.xd != k ? this.xd : no(this) ? this.e().value : ""
  };
  u.qf = p("jd");
  u.Xc = function () {
    lo ? this.e().placeholder != this.jd && (this.e().placeholder = this.jd) : (mo(this), rn(this.e(), "label", this.jd));
    no(this) ? uf(this.e(), this.bh) : (!this.hu && !this.Vh && tf(this.e(), this.bh), lo || Nc(this.yx, 10, this))
  };
  u.Na = function (a) {
    this.e().disabled = !a;
    wf(this.e(), this.bh + "-disabled", !a)
  };
  u.isEnabled = function () {
    return !this.e().disabled
  };
  u.yx = function () {
    this.e() && (!no(this) && !this.Vh) && (this.e().value = this.jd)
  };

  function oo(a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return n;
    switch (a.keyCode) {
    case 18:
    case 20:
    case 93:
    case 17:
    case 40:
    case 35:
    case 27:
    case 36:
    case 45:
    case 37:
    case 224:
    case 91:
    case 144:
    case 12:
    case 34:
    case 33:
    case 19:
    case 255:
    case 44:
    case 39:
    case 145:
    case 16:
    case 38:
    case 224:
    case 92:
      return n;
    case 0:
      return !I;
    default:
      return 166 > a.keyCode || 183 < a.keyCode
    }
  }

  function po(a, b, c, d, f) {
    if (!G && (!J || !Sb("525"))) return j;
    if (zb && f) return qo(a);
    if (f && !d || !c && (17 == b || 18 == b) || G && d && b == a) return n;
    switch (a) {
    case 13:
      return !(G && Ub(9));
    case 27:
      return !J
    }
    return qo(a)
  }
  function qo(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || J && 0 == a) return j;
    switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
      return j;
    default:
      return n
    }
  }

  function ro(a) {
    switch (a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
    }
  };

  function so(a, b) {
    ya.call(this);
    a && to(this, a, b)
  }
  D(so, Ic);
  u = so.prototype;
  u.H = k;
  u.Zj = k;
  u.Dm = k;
  u.$j = k;
  u.Ge = -1;
  u.Ee = -1;
  u.nl = n;
  var uo = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
  }, vo = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    }, wo = G || J && Sb("525"),
    xo = zb && I;
  u = so.prototype;
  u.Mt = function (a) {
    if (J && (17 == this.Ge && !a.ctrlKey || 18 == this.Ge && !a.altKey)) this.Ee = this.Ge = -1;
    wo && !po(a.keyCode, this.Ge, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Ee = I ? ro(a.keyCode) : a.keyCode, xo && (this.nl = a.altKey))
  };
  u.Ot = function (a) {
    this.Ee = this.Ge = -1;
    this.nl = a.altKey
  };
  u.handleEvent = function (a) {
    var b = a.Sb,
      c, d, f = b.altKey;
    G && "keypress" == a.type ? (c = this.Ee, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Ee, d = 0 <= b.charCode && 63232 > b.charCode && qo(c) ? b.charCode : 0) : Fb ? (c = this.Ee, d = qo(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ee, d = b.charCode || 0, xo && (f = this.nl), zb && (63 == d && 224 == c) && (c = 191));
    var g = c,
      h = b.keyIdentifier;
    c ? 63232 <= c && c in uo ? g = uo[c] : 25 == c && a.shiftKey && (g = 9) : h && h in vo && (g = vo[h]);
    a = g == this.Ge;
    this.Ge = g;
    b = new yo(g, d, a, b);
    b.altKey = f;
    this.dispatchEvent(b)
  };
  u.e = p("H");

  function to(a, b, c) {
    a.$j && a.detach();
    a.H = b;
    a.Zj = xc(a.H, "keypress", a, c);
    a.Dm = xc(a.H, "keydown", a.Mt, c, a);
    a.$j = xc(a.H, "keyup", a.Ot, c, a)
  }
  u.detach = function () {
    this.Zj && (Cc(this.Zj), Cc(this.Dm), Cc(this.$j), this.$j = this.Dm = this.Zj = k);
    this.H = k;
    this.Ee = this.Ge = -1
  };
  u.A = function () {
    so.d.A.call(this);
    this.detach()
  };

  function yo(a, b, c, d) {
    d && this.Lc(d, i);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
  }
  D(yo, dc);

  function zo(a, b, c, d, f, g, h, l, m) {
    var q, s;
    if (q = c.offsetParent) {
      var r = "HTML" == q.tagName || "BODY" == q.tagName;
      if (!r || "static" != zn(q)) s = In(q), r || (r = (r = Jn(q)) && I ? -q.scrollLeft : r && (!G || !Sb("8")) ? q.scrollWidth - q.clientWidth - q.scrollLeft : q.scrollLeft, s = yf(s, new xf(r, q.scrollTop)))
    }
    q = s || new xf;
    s = Pn(a);
    if (r = Hn(a)) {
      var v = new tn(r.left, r.top, r.right - r.left, r.bottom - r.top),
        r = Math.max(s.left, v.left),
        x = Math.min(s.left + s.width, v.left + v.width);
      if (r <= x) {
        var C = Math.max(s.top, v.top),
          v = Math.min(s.top + s.height, v.top + v.height);
        C <= v && (s.left = r, s.top = C, s.width = x - r, s.height = v - C)
      }
    }
    r = Bf(a);
    C = Bf(c);
    if (r.ma != C.ma) {
      var x = r.ma.body,
        C = jg(C),
        v = new xf(0, 0),
        H = Lf(Df(x)),
        V = x;
      do {
        var L;
        if (H == C) L = In(V);
        else {
          L = V;
          var Wa = new xf;
          if (1 == L.nodeType) {
            if (L.getBoundingClientRect) {
              var pa = Cn(L);
              Wa.x = pa.left;
              Wa.y = pa.top
            } else {
              var pa = kg(Bf(L)),
                Ca = In(L);
              Wa.x = Ca.x - pa.x;
              Wa.y = Ca.y - pa.y
            }
            I && !Sb(12) && (pa = i, G ? pa = "-ms-transform" : J ? pa = "-webkit-transform" : Fb ? pa = "-o-transform" : I && (pa = "-moz-transform"), Ca = i, pa && (Ca = yn(L, pa)), Ca || (Ca = yn(L, "transform")), Ca ? (L = Ca.match(Zn),
              L = !L ? new xf(0, 0) : new xf(parseFloat(L[1]), parseFloat(L[2]))) : L = new xf(0, 0), Wa = new xf(Wa.x + L.x, Wa.y + L.y))
          } else pa = na(L.ot), Ca = L, L.targetTouches ? Ca = L.targetTouches[0] : pa && L.Sb.targetTouches && (Ca = L.Sb.targetTouches[0]), Wa.x = Ca.clientX, Wa.y = Ca.clientY;
          L = Wa
        }
        v.x += L.x;
        v.y += L.y
      } while (H && H != C && (V = H.frameElement) && (H = H.parent));
      x = yf(v, In(x));
      G && !ig(r) && (x = yf(x, kg(r)));
      s.left += x.x;
      s.top += x.y
    }
    a = (b & 4 && Jn(a) ? b ^ 2 : b) & -5;
    b = new xf(a & 2 ? s.left + s.width : s.left, a & 1 ? s.top + s.height : s.top);
    b = yf(b, q);
    f && (b.x += (a & 2 ? -1 : 1) * f.x,
      b.y += (a & 1 ? -1 : 1) * f.y);
    var N;
    if (h) if (m) N = m;
      else if (N = Hn(c)) N.top -= q.y, N.right -= q.x, N.bottom -= q.y, N.left -= q.x;
    a: {
      m = b.Va();
      f = 0;
      a = (d & 4 && Jn(c) ? d ^ 2 : d) & -5;
      d = Nn(c);
      l = l ? l.Va() : d.Va();
      if (g || 0 != a) a & 2 ? m.x -= l.width + (g ? g.right : 0) : g && (m.x += g.left), a & 1 ? m.y -= l.height + (g ? g.bottom : 0) : g && (m.y += g.top);
      if (h) {
        if (N) {
          g = m;
          f = 0;
          if (65 == (h & 65) && (g.x < N.left || g.x >= N.right)) h &= -2;
          if (132 == (h & 132) && (g.y < N.top || g.y >= N.bottom)) h &= -5;
          g.x < N.left && h & 1 && (g.x = N.left, f |= 1);
          g.x < N.left && (g.x + l.width > N.right && h & 16) && (l.width = Math.max(l.width -
            (g.x + l.width - N.right), 0), f |= 4);
          g.x + l.width > N.right && h & 1 && (g.x = Math.max(N.right - l.width, N.left), f |= 1);
          h & 2 && (f |= (g.x < N.left ? 16 : 0) | (g.x + l.width > N.right ? 32 : 0));
          g.y < N.top && h & 4 && (g.y = N.top, f |= 2);
          g.y >= N.top && (g.y + l.height > N.bottom && h & 32) && (l.height = Math.max(l.height - (g.y + l.height - N.bottom), 0), f |= 8);
          g.y + l.height > N.bottom && h & 4 && (g.y = Math.max(N.bottom - l.height, N.top), f |= 2);
          h & 8 && (f |= (g.y < N.top ? 64 : 0) | (g.y + l.height > N.bottom ? 128 : 0));
          h = f
        } else h = 256;
        f = h;
        if (f & 496) {
          c = f;
          break a
        }
      }
      An(c, m);
      Af(d, l) || (g = ig(Bf(Df(c))), G &&
        (!g || !Sb("8")) ? (h = c.style, g ? (g = Vn(c), c = Yn(c), h.pixelWidth = l.width - c.left - g.left - g.right - c.right, h.pixelHeight = l.height - c.top - g.top - g.bottom - c.bottom) : (h.pixelWidth = l.width, h.pixelHeight = l.height)) : (c = c.style, I ? c.MozBoxSizing = "border-box" : J ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(l.width, 0) + "px", c.height = Math.max(l.height, 0) + "px"));
      c = f
    }
    return c
  };

  function Ao() {}
  Ao.prototype.Lf = ba();

  function Bo(a, b, c) {
    this.element = a;
    this.oj = b;
    this.fx = c
  }
  D(Bo, Ao);
  Bo.prototype.Lf = function (a, b, c) {
    zo(this.element, this.oj, a, b, i, c, this.fx)
  };

  function Co(a, b, c, d) {
    Bo.call(this, a, b);
    this.ak = c ? 5 : 0;
    this.cn = d || i
  }
  D(Co, Bo);
  Co.prototype.ut = p("ak");
  Co.prototype.Lf = function (a, b, c, d) {
    var f = zo(this.element, this.oj, a, b, k, c, 10, d, this.cn);
    if (f & 496) {
      var g = Do(f, this.oj),
        b = Do(f, b),
        f = zo(this.element, g, a, b, k, c, 10, d, this.cn);
      f & 496 && (g = Do(f, g), b = Do(f, b), zo(this.element, g, a, b, k, c, this.ak, d, this.cn))
    }
  };

  function Do(a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
  };

  function Eo(a, b, c, d) {
    Co.call(this, a, b, c || d);
    if (c || d) this.ak = 65 | (d ? 32 : 132)
  }
  D(Eo, Co);

  function Fo() {}
  var Go;
  ia(Fo);
  u = Fo.prototype;
  u.Ec = ba();
  u.D = function (a) {
    var b = a.C().D("div", this.we(a).join(" "), a.Ba);
    Ho(this, a, b);
    return b
  };
  u.ua = aa();
  u.vh = function (a, b, c) {
    if (a = a.e ? a.e() : a) if (G && !Sb("7")) {
        var d = Io(sf(a), b);
        d.push(b);
        va(c ? tf : uf, a).apply(k, d)
      } else wf(a, b, c)
  };
  u.Mb = t(j);
  u.oa = function (a, b) {
    b.id && a.tb(b.id);
    var c = this.ua(b);
    c && c.firstChild ? (c = c.firstChild.nextSibling ? ob(c.childNodes) : c.firstChild, a.Ba = c) : a.Ba = k;
    var d = 0,
      f = this.P(),
      g = this.P(),
      h = n,
      l = n,
      c = n,
      m = sf(b);
    F(m, function (a) {
      !h && a == f ? (h = j, g == f && (l = j)) : !l && a == g ? l = j : d |= this.Yl(a)
    }, this);
    a.yc = d;
    h || (m.push(f), g == f && (l = j));
    l || m.push(g);
    var q = a.$c;
    q && m.push.apply(m, q);
    if (G && !Sb("7")) {
      var s = Io(m);
      0 < s.length && (m.push.apply(m, s), c = j)
    }
    if (!h || !l || q || c) b.className = m.join(" ");
    Ho(this, a, b);
    return b
  };
  u.wg = function (a) {
    io(a) && this.Of(a.e(), j);
    a.isEnabled() && this.ne(a, a.ha)
  };

  function Ho(a, b, c) {
    b.isEnabled() || a.pd(c, 1, j);
    Jo(b, 8) && a.pd(c, 8, j);
    b.lb & 16 && a.pd(c, 16, Jo(b, 16));
    b.lb & 64 && a.pd(c, 64, Jo(b, 64))
  }
  u.Te = function (a, b) {
    Tn(a, !b, !G && !Fb)
  };
  u.Of = function (a, b) {
    this.vh(a, this.P() + "-rtl", b)
  };
  u.fe = function (a) {
    var b;
    return a.lb & 32 && (b = a.hb()) ? cg(b) : n
  };
  u.ne = function (a, b) {
    var c;
    if (a.lb & 32 && (c = a.hb())) {
      if (!b && Jo(a, 32)) {
        try {
          c.blur()
        } catch (d) {}
        Jo(a, 32) && a.tf(k)
      }
      cg(c) != b && dg(c, b)
    }
  };
  u.ra = function (a, b) {
    Rn(a, b)
  };
  u.Zb = function (a, b, c) {
    var d = a.e();
    if (d) {
      var f = this.Dh(b);
      f && this.vh(a, f, c);
      this.pd(d, b, c)
    }
  };
  u.pd = function (a, b, c) {
    Go || (Go = {
      1: "disabled",
      8: "selected",
      16: "checked",
      64: "expanded"
    });
    (b = Go[b]) && rn(a, b, c)
  };
  u.Yb = function (a, b) {
    var c = this.ua(a);
    if (c && (Qf(c), b)) if (z(b)) Yf(c, b);
      else {
        var d = function (a) {
          if (a) {
            var b = Df(c);
            c.appendChild(z(a) ? b.createTextNode(a) : a)
          }
        };
        ka(b) ? F(b, d) : la(b) && !("nodeType" in b) ? F(ob(b), d) : d(b)
      }
  };
  u.hb = function (a) {
    return a.e()
  };
  u.P = t("vl-control");
  u.we = function (a) {
    var b = this.P(),
      c = [b],
      d = this.P();
    d != b && c.push(d);
    b = a.yc;
    for (d = []; b;) {
      var f = b & -b;
      d.push(this.Dh(f));
      b &= ~f
    }
    c.push.apply(c, d);
    (a = a.$c) && c.push.apply(c, a);
    G && !Sb("7") && c.push.apply(c, Io(c));
    return c
  };

  function Io(a, b) {
    var c = [];
    b && (a = a.concat([b]));
    F([], function (d) {
      gb(d, va(jb, a)) && (!b || jb(d, b)) && c.push(d.join("_"))
    });
    return c
  }
  u.Dh = function (a) {
    this.hj || Ko(this);
    return this.hj[a]
  };
  u.Yl = function (a) {
    if (!this.Ir) {
      this.hj || Ko(this);
      var b = this.hj,
        c = {}, d;
      for (d in b) c[b[d]] = d;
      this.Ir = c
    }
    a = parseInt(this.Ir[a], 10);
    return isNaN(a) ? 0 : a
  };

  function Ko(a) {
    var b = a.P();
    a.hj = {
      1: b + "-disabled",
      2: b + "-hover",
      4: b + "-active",
      8: b + "-selected",
      16: b + "-checked",
      32: b + "-focused",
      64: b + "-open"
    }
  };

  function Lo() {}
  D(Lo, Fo);
  ia(Lo);
  u = Lo.prototype;
  u.Ec = t("button");
  u.pd = function (a, b, c) {
    16 == b ? rn(a, "pressed", c) : Lo.d.pd.call(this, a, b, c)
  };
  u.D = function (a) {
    var b = Lo.d.D.call(this, a),
      c = a.rg();
    c && this.Qf(b, c);
    (c = a.da()) && this.ga(b, c);
    a.lb & 16 && this.pd(b, 16, Jo(a, 16));
    return b
  };
  u.oa = function (a, b) {
    var b = Lo.d.oa.call(this, a, b),
      c = this.da(b);
    a.xb = c;
    a.Qn = this.rg(b);
    a.lb & 16 && this.pd(b, 16, Jo(a, 16));
    return b
  };
  u.da = ha;
  u.ga = ha;
  u.rg = function (a) {
    return a.title
  };
  u.Qf = function (a, b) {
    a && (a.title = b || "")
  };
  u.P = t("vl-button");

  function Mo(a, b) {
    a || e(Error("Invalid class name " + a));
    na(b) || e(Error("Invalid decorator function " + b));
    No[a] = b
  }
  function Oo(a) {
    for (var b = sf(a), c = 0, d = b.length; c < d; c++) if (a = b[c] in No ? No[b[c]]() : k) return a;
    return k
  }
  var Po = {}, No = {};

  function Qo(a, b, c) {
    ao.call(this, c);
    if (!b) {
      for (var b = this.constructor, d; b;) {
        d = qa(b);
        if (d = Po[d]) break;
        b = b.d ? b.d.constructor : k
      }
      b = d ? na(d.Ga) ? d.Ga() : new d : k
    }
    this.ba = b;
    this.Ba = a
  }
  D(Qo, ao);
  u = Qo.prototype;
  u.Ba = k;
  u.yc = 0;
  u.lb = 39;
  u.Td = 255;
  u.Pi = 0;
  u.ha = j;
  u.$c = k;
  u.gm = j;
  u.aj = n;
  u.If = k;

  function Ro(a, b) {
    a.Q && b != a.gm && So(a, b);
    a.gm = b
  }
  u.hb = function () {
    return this.ba.hb(this)
  };
  u.Hh = function () {
    return this.Nc || (this.Nc = new so)
  };

  function To(a, b) {
    b && (a.$c ? jb(a.$c, b) || a.$c.push(b) : a.$c = [b], a.ba.vh(a, b, j))
  }
  u.vh = function (a, b) {
    b ? To(this, a) : a && this.$c && (mb(this.$c, a), 0 == this.$c.length && (this.$c = k), this.ba.vh(this, a, n))
  };
  u.D = function () {
    var a = this.ba.D(this);
    this.H = a;
    var b = this.If || this.ba.Ec();
    b && qn(a, b);
    this.aj || this.ba.Te(a, n);
    this.ha || this.ba.ra(a, n)
  };
  u.zn = ca("If");
  u.ua = function () {
    return this.ba.ua(this.e())
  };
  u.Mb = function (a) {
    return this.ba.Mb(a)
  };
  u.R = function (a) {
    this.H = a = this.ba.oa(this, a);
    var b = this.If || this.ba.Ec();
    b && qn(a, b);
    this.aj || this.ba.Te(a, n);
    this.ha = "none" != a.style.display
  };
  u.B = function () {
    Qo.d.B.call(this);
    this.ba.wg(this);
    if (this.lb & -2 && (this.gm && So(this, j), this.lb & 32)) {
      var a = this.hb();
      if (a) {
        var b = this.Hh();
        to(b, a);
        this.I().h(b, "key", this.ed).h(a, "focus", this.Mj).h(a, "blur", this.tf)
      }
    }
  };

  function So(a, b) {
    var c = a.I(),
      d = a.e();
    b ? (c.h(d, "mouseover", a.im).h(d, "mousedown", a.uf).h(d, "mouseup", a.vf).h(d, "mouseout", a.hm), a.Rh != ha && c.h(d, "contextmenu", a.Rh), G && c.h(d, "dblclick", a.rp)) : (c.Kb(d, "mouseover", a.im).Kb(d, "mousedown", a.uf).Kb(d, "mouseup", a.vf).Kb(d, "mouseout", a.hm), a.Rh != ha && c.Kb(d, "contextmenu", a.Rh), G && c.Kb(d, "dblclick", a.rp))
  }
  u.pa = function () {
    Qo.d.pa.call(this);
    this.Nc && this.Nc.detach();
    this.ha && this.isEnabled() && this.ba.ne(this, n)
  };
  u.A = function () {
    Qo.d.A.call(this);
    this.Nc && (this.Nc.J(), delete this.Nc);
    delete this.ba;
    this.$c = this.Ba = k
  };
  u.Yb = function (a) {
    this.ba.Yb(this.e(), a);
    this.Ba = a
  };
  u.og = function () {
    var a = this.Ba;
    if (!a) return "";
    a = z(a) ? a : ka(a) ? eb(a, gg).join("") : eg(a);
    return Ka(a)
  };
  u.Of = function (a) {
    Qo.d.Of.call(this, a);
    var b = this.e();
    b && this.ba.Of(b, a)
  };
  u.Te = function (a) {
    this.aj = a;
    var b = this.e();
    b && this.ba.Te(b, a)
  };
  u.ra = function (a, b) {
    if (b || this.ha != a && this.dispatchEvent(a ? "show" : "hide")) {
      var c = this.e();
      c && this.ba.ra(c, a);
      this.isEnabled() && this.ba.ne(this, a);
      this.ha = a;
      return j
    }
    return n
  };
  u.isEnabled = function () {
    return !Jo(this, 1)
  };
  u.Na = function (a) {
    var b = this.getParent();
    if ((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Uo(this, 1, !a)) a || (this.setActive(n), this.ld(n)), this.ha && this.ba.ne(this, a), this.Zb(1, !a)
  };
  u.ld = function (a) {
    Uo(this, 2, a) && this.Zb(2, a)
  };
  u.gd = function () {
    return Jo(this, 4)
  };
  u.setActive = function (a) {
    Uo(this, 4, a) && this.Zb(4, a)
  };
  u.Dn = function (a) {
    Uo(this, 8, a) && this.Zb(8, a)
  };

  function Vo(a, b) {
    Uo(a, 16, b) && a.Zb(16, b)
  }
  u.$a = function (a) {
    Uo(this, 64, a) && this.Zb(64, a)
  };

  function Jo(a, b) {
    return !!(a.yc & b)
  }
  u.Zb = function (a, b) {
    this.lb & a && b != Jo(this, a) && (this.ba.Zb(this, a, b), this.yc = b ? this.yc | a : this.yc & ~a)
  };

  function Wo(a, b, c) {
    a.Q && (Jo(a, b) && !c) && e(Error("Component already rendered"));
    !c && Jo(a, b) && a.Zb(b, n);
    a.lb = c ? a.lb | b : a.lb & ~b
  }
  function Xo(a, b) {
    return !!(a.Td & b) && !! (a.lb & b)
  }

  function Uo(a, b, c) {
    return !!(a.lb & b) && Jo(a, b) != c && (!(a.Pi & b) || a.dispatchEvent(co(b, c))) && !a.ud
  }
  u.im = function (a) {
    !Yo(a, this.e()) && (this.dispatchEvent("enter") && this.isEnabled() && Xo(this, 2)) && this.ld(j)
  };
  u.hm = function (a) {
    !Yo(a, this.e()) && this.dispatchEvent("leave") && (Xo(this, 4) && this.setActive(n), Xo(this, 2) && this.ld(n))
  };
  u.Rh = ha;

  function Yo(a, b) {
    return !!a.relatedTarget && Wf(b, a.relatedTarget)
  }
  u.uf = function (a) {
    this.isEnabled() && (Xo(this, 2) && this.ld(j), fc(a) && (Xo(this, 4) && this.setActive(j), this.ba.fe(this) && this.hb().focus()));
    !this.aj && fc(a) && a.preventDefault()
  };
  u.vf = function (a) {
    this.isEnabled() && (Xo(this, 2) && this.ld(j), this.gd() && (this.Ff(a) && Xo(this, 4)) && this.setActive(n))
  };
  u.rp = function (a) {
    this.isEnabled() && this.Ff(a)
  };
  u.Ff = function (a) {
    Xo(this, 16) && Vo(this, !Jo(this, 16));
    Xo(this, 8) && this.Dn(j);
    Xo(this, 64) && this.$a(!Jo(this, 64));
    var b = new ac("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.fn = a.fn);
    return this.dispatchEvent(b)
  };
  u.Mj = function () {
    Xo(this, 32) && Uo(this, 32, j) && this.Zb(32, j)
  };
  u.tf = function () {
    Xo(this, 4) && this.setActive(n);
    Xo(this, 32) && Uo(this, 32, n) && this.Zb(32, n)
  };
  u.ed = function (a) {
    return this.ha && this.isEnabled() && this.Hc(a) ? (a.preventDefault(), a.stopPropagation(), j) : n
  };
  u.Hc = function (a) {
    return 13 == a.keyCode && this.Ff(a)
  };
  na(Qo) || e(Error("Invalid component class " + Qo));
  na(Fo) || e(Error("Invalid renderer class " + Fo));
  var Zo = qa(Qo);
  Po[Zo] = Fo;
  Mo("vl-control", function () {
    return new Qo(k)
  });

  function $o() {}
  D($o, Lo);
  ia($o);
  u = $o.prototype;
  u.Ec = ba();
  u.D = function (a) {
    Ro(a, n);
    a.Td &= -256;
    Wo(a, 32, n);
    return a.C().D("button", {
      "class": this.we(a).join(" "),
      disabled: !a.isEnabled(),
      title: a.rg() || "",
      value: a.da() || ""
    }, a.og() || "")
  };
  u.Mb = function (a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
  };
  u.oa = function (a, b) {
    Ro(a, n);
    a.Td &= -256;
    Wo(a, 32, n);
    b.disabled && tf(b, this.Dh(1));
    return $o.d.oa.call(this, a, b)
  };
  u.wg = function (a) {
    a.I().h(a.e(), "click", a.Ff)
  };
  u.Te = ha;
  u.Of = ha;
  u.fe = function (a) {
    return a.isEnabled()
  };
  u.ne = ha;
  u.Zb = function (a, b, c) {
    $o.d.Zb.call(this, a, b, c);
    if ((a = a.e()) && 1 == b) a.disabled = c
  };
  u.da = function (a) {
    return a.value
  };
  u.ga = function (a, b) {
    a && (a.value = b)
  };
  u.pd = ha;

  function ap(a, b, c) {
    Qo.call(this, a, b || $o.Ga(), c)
  }
  D(ap, Qo);
  u = ap.prototype;
  u.da = p("xb");
  u.ga = function (a) {
    this.xb = a;
    this.ba.ga(this.e(), a)
  };
  u.rg = p("Qn");
  u.Qf = function (a) {
    this.Qn = a;
    this.ba.Qf(this.e(), a)
  };
  u.A = function () {
    ap.d.A.call(this);
    delete this.xb;
    delete this.Qn
  };
  u.B = function () {
    ap.d.B.call(this);
    if (this.lb & 32) {
      var a = this.hb();
      a && this.I().h(a, "keyup", this.Hc)
    }
  };
  u.Hc = function (a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ff(a) : 32 == a.keyCode
  };
  Mo("vl-button", function () {
    return new ap(k)
  });

  function bp() {}
  D(bp, Fo);
  ia(bp);
  bp.prototype.D = function (a) {
    return a.C().D("div", this.P())
  };
  bp.prototype.oa = function (a, b) {
    b.id && a.tb(b.id);
    if ("HR" == b.tagName) {
      var c = b,
        b = this.D(a);
      Rf(b, c);
      Uf(c)
    } else tf(b, this.P());
    return b
  };
  bp.prototype.Yb = ba();
  bp.prototype.P = t("vl-menuseparator");

  function cp(a, b) {
    Qo.call(this, k, a || bp.Ga(), b);
    Wo(this, 1, n);
    Wo(this, 2, n);
    Wo(this, 4, n);
    Wo(this, 32, n);
    this.yc = 1
  }
  D(cp, Qo);
  cp.prototype.B = function () {
    cp.d.B.call(this);
    qn(this.e(), "separator")
  };
  Mo("vl-menuseparator", function () {
    return new cp
  });

  function dp() {}
  ia(dp);
  u = dp.prototype;
  u.Ec = ba();
  u.D = function (a) {
    return a.C().D("div", this.we(a).join(" "))
  };
  u.ua = aa();
  u.Mb = function (a) {
    return "DIV" == a.tagName
  };
  u.oa = function (a, b) {
    b.id && a.tb(b.id);
    var c = this.P(),
      d = n,
      f = sf(b);
    f && F(f, function (b) {
      b == c ? d = j : b && (b == c + "-disabled" ? a.Na(n) : b == c + "-horizontal" ? ep(a, fp) : b == c + "-vertical" && ep(a, gp))
    }, this);
    d || tf(b, c);
    hp(this, a, this.ua(b));
    return b
  };

  function hp(a, b, c) {
    if (c) for (var d = c.firstChild, f; d && d.parentNode == c;) {
        f = d.nextSibling;
        if (1 == d.nodeType) {
          var g = a.Eh(d);
          g && (g.H = d, b.isEnabled() || g.Na(n), b.ta(g), g.oa(d))
        } else(!d.nodeValue || "" == La(d.nodeValue)) && c.removeChild(d);
        d = f
    }
  }
  u.Eh = function (a) {
    return Oo(a)
  };
  u.wg = function (a) {
    a = a.e();
    Tn(a, j, I);
    G && (a.hideFocus = j);
    var b = this.Ec();
    b && qn(a, b)
  };
  u.hb = function (a) {
    return a.e()
  };
  u.P = t("vl-container");
  u.we = function (a) {
    var b = this.P(),
      c = [b, a.Df == fp ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
  };
  u.jp = function () {
    return gp
  };

  function ip(a, b, c) {
    ao.call(this, c);
    this.ba = b || dp.Ga();
    this.Df = a || this.ba.jp()
  }
  D(ip, ao);
  var fp = "horizontal",
    gp = "vertical";
  u = ip.prototype;
  u.Em = k;
  u.Nc = k;
  u.ba = k;
  u.Df = k;
  u.ha = j;
  u.Fa = j;
  u.Pl = j;
  u.Db = -1;
  u.sb = k;
  u.ke = n;
  u.ws = n;
  u.dx = j;
  u.Vd = k;
  u.hb = function () {
    return this.Em || this.ba.hb(this)
  };
  u.Hh = function () {
    return this.Nc || (this.Nc = new so(this.hb()))
  };
  u.D = function () {
    this.H = this.ba.D(this)
  };
  u.ua = function () {
    return this.ba.ua(this.e())
  };
  u.Mb = function (a) {
    return this.ba.Mb(a)
  };
  u.R = function (a) {
    this.H = this.ba.oa(this, a);
    "none" == a.style.display && (this.ha = n)
  };
  u.B = function () {
    ip.d.B.call(this);
    this.qc(function (a) {
      a.Q && jp(this, a)
    }, this);
    var a = this.e();
    this.ba.wg(this);
    this.ra(this.ha, j);
    this.I().h(this, "enter", this.cm).h(this, "highlight", this.dm).h(this, "unhighlight", this.jm).h(this, "open", this.Rt).h(this, "close", this.Ht).h(a, "mousedown", this.uf).h(Df(a), "mouseup", this.Jt).h(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.Gt);
    this.fe() && kp(this, j)
  };

  function kp(a, b) {
    var c = a.I(),
      d = a.hb();
    b ? c.h(d, "focus", a.Mj).h(d, "blur", a.tf).h(a.Hh(), "key", a.ed) : c.Kb(d, "focus", a.Mj).Kb(d, "blur", a.tf).Kb(a.Hh(), "key", a.ed)
  }
  u.pa = function () {
    lp(this, -1);
    this.sb && this.sb.$a(n);
    this.ke = n;
    ip.d.pa.call(this)
  };
  u.A = function () {
    ip.d.A.call(this);
    this.Nc && (this.Nc.J(), this.Nc = k);
    this.ba = this.sb = this.Vd = this.Em = k
  };
  u.cm = t(j);
  u.dm = function (a) {
    var b = jo(this, a.target);
    if (-1 < b && b != this.Db) {
      var c = ho(this, this.Db);
      c && c.ld(n);
      this.Db = b;
      c = ho(this, this.Db);
      this.ke && c.setActive(j);
      this.dx && (this.sb && c != this.sb) && (c.lb & 64 ? c.$a(j) : this.sb.$a(n))
    }
    rn(this.e(), "activedescendant", a.target.e().id)
  };
  u.jm = function (a) {
    a.target == ho(this, this.Db) && (this.Db = -1);
    rn(this.e(), "activedescendant", "")
  };
  u.Rt = function (a) {
    if ((a = a.target) && a != this.sb && a.getParent() == this) this.sb && this.sb.$a(n), this.sb = a
  };
  u.Ht = function (a) {
    a.target == this.sb && (this.sb = k)
  };
  u.uf = function (a) {
    this.Fa && (this.ke = j);
    var b = this.hb();
    b && cg(b) ? b.focus() : a.preventDefault()
  };
  u.Jt = function () {
    this.ke = n
  };
  u.Gt = function (a) {
    var b;
    a: {
      b = a.target;
      if (this.Vd) for (var c = this.e(); b && b !== c;) {
          var d = b.id;
          if (d in this.Vd) {
            b = this.Vd[d];
            break a
          }
          b = b.parentNode
      }
      b = k
    }
    if (b) switch (a.type) {
      case "mousedown":
        b.uf(a);
        break;
      case "mouseup":
        b.vf(a);
        break;
      case "mouseover":
        b.im(a);
        break;
      case "mouseout":
        b.hm(a);
        break;
      case "contextmenu":
        b.Rh(a)
    }
  };
  u.Mj = ba();
  u.tf = function () {
    lp(this, -1);
    this.ke = n;
    this.sb && this.sb.$a(n)
  };
  u.ed = function (a) {
    return this.isEnabled() && this.ha && (0 != go(this) || this.Em) && this.Hc(a) ? (a.preventDefault(), a.stopPropagation(), j) : n
  };
  u.Hc = function (a) {
    var b = ho(this, this.Db);
    if (b && "function" == typeof b.ed && b.ed(a) || this.sb && this.sb != b && "function" == typeof this.sb.ed && this.sb.ed(a)) return j;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return n;
    switch (a.keyCode) {
    case 27:
      if (this.fe()) this.hb().blur();
      else return n;
      break;
    case 36:
      mp(this, function (a, b) {
        return (a + 1) % b
      }, go(this) - 1);
      break;
    case 35:
      mp(this, function (a, b) {
        a--;
        return 0 > a ? b - 1 : a
      }, 0);
      break;
    case 38:
      if (this.Df == gp) np(this);
      else return n;
      break;
    case 37:
      if (this.Df == fp) io(this) ? op(this) :
          np(this);
      else return n;
      break;
    case 40:
      if (this.Df == gp) op(this);
      else return n;
      break;
    case 39:
      if (this.Df == fp) io(this) ? np(this) : op(this);
      else return n;
      break;
    default:
      return n
    }
    return j
  };

  function jp(a, b) {
    var c = b.e(),
      c = c.id || (c.id = b.F());
    a.Vd || (a.Vd = {});
    a.Vd[c] = b
  }
  u.ta = function (a, b) {
    ip.d.ta.call(this, a, b)
  };
  u.qd = function (a, b, c) {
    a.Pi |= 2;
    a.Pi |= 64;
    (this.fe() || !this.ws) && Wo(a, 32, n);
    Ro(a, n);
    ip.d.qd.call(this, a, b, c);
    a.Q && this.Q && jp(this, a);
    b <= this.Db && this.Db++
  };
  u.removeChild = function (a, b) {
    if (a = z(a) ? eo(this, a) : a) {
      var c = jo(this, a); - 1 != c && (c == this.Db ? a.ld(n) : c < this.Db && this.Db--);
      (c = a.e()) && (c.id && this.Vd) && nc(this.Vd, c.id)
    }
    a = ip.d.removeChild.call(this, a, b);
    Ro(a, j);
    return a
  };

  function ep(a, b) {
    a.e() && e(Error("Component already rendered"));
    a.Df = b
  }
  u.ra = function (a, b) {
    if (b || this.ha != a && this.dispatchEvent(a ? "show" : "hide")) {
      this.ha = a;
      var c = this.e();
      if (c) {
        Rn(c, a);
        if (this.fe() && (c = this.hb())) c.tabIndex = this.Fa && this.ha ? 0 : -1;
        b || this.dispatchEvent(this.ha ? "aftershow" : "afterhide")
      }
      return j
    }
    return n
  };
  u.isEnabled = p("Fa");
  u.Na = function (a) {
    if (this.Fa != a && this.dispatchEvent(a ? "enable" : "disable")) if (a ? (this.Fa = j, this.qc(function (a) {
        a.Sr ? delete a.Sr : a.Na(j)
      })) : (this.qc(function (a) {
        a.isEnabled() ? a.Na(n) : a.Sr = j
      }), this.ke = this.Fa = n), this.fe()) {
        var b = this.hb();
        b && (b.tabIndex = a && this.ha ? 0 : -1)
      }
  };
  u.fe = p("Pl");
  u.ne = function (a) {
    a != this.Pl && this.Q && kp(this, a);
    this.Pl = a;
    if (this.Fa && this.ha) {
      var b = this.hb();
      b && (b.tabIndex = a ? 0 : -1)
    }
  };

  function lp(a, b) {
    var c = ho(a, b);
    c ? c.ld(j) : -1 < a.Db && ho(a, a.Db).ld(n)
  }
  u.ld = function (a) {
    lp(this, jo(this, a))
  };

  function op(a) {
    mp(a, function (a, c) {
      return (a + 1) % c
    }, a.Db)
  }
  function np(a) {
    mp(a, function (a, c) {
      a--;
      return 0 > a ? c - 1 : a
    }, a.Db)
  }
  function mp(a, b, c) {
    for (var c = 0 > c ? jo(a, a.sb) : c, d = go(a), c = b.call(a, c, d), f = 0; f <= d;) {
      var g = ho(a, c);
      if (g && a.vo(g)) {
        lp(a, c);
        break
      }
      f++;
      c = b.call(a, c, d)
    }
  }
  u.vo = function (a) {
    return a.ha && a.isEnabled() && !! (a.lb & 2)
  };

  function pp() {}
  D(pp, Fo);
  ia(pp);
  pp.prototype.P = t("vl-menuheader");

  function qp(a, b, c) {
    Qo.call(this, a, c || pp.Ga(), b);
    Wo(this, 1, n);
    Wo(this, 2, n);
    Wo(this, 4, n);
    Wo(this, 32, n);
    this.yc = 1
  }
  D(qp, Qo);
  Mo("vl-menuheader", function () {
    return new qp(k)
  });

  function rp() {
    this.zo = []
  }
  D(rp, Fo);
  ia(rp);

  function sp(a, b) {
    var c = a.zo[b];
    if (!c) {
      switch (b) {
      case 0:
        c = a.P() + "-highlight";
        break;
      case 1:
        c = a.P() + "-checkbox";
        break;
      case 2:
        c = a.P() + "-content"
      }
      a.zo[b] = c
    }
    return c
  }
  u = rp.prototype;
  u.Ec = t("menuitem");
  u.D = function (a) {
    var b = a.C().D("div", this.we(a).join(" "), tp(this, a.Ba, a.C()));
    up(this, a, b, !! (a.lb & 8) || !! (a.lb & 16));
    return b
  };
  u.ua = function (a) {
    return a && a.firstChild
  };
  u.oa = function (a, b) {
    var c = Vf(b),
      d = sp(this, 2);
    c && jb(sf(c), d) || b.appendChild(tp(this, b.childNodes, a.C()));
    jb(sf(b), "vl-option") && (a.Ik(j), this.Ik(a, b, j));
    return rp.d.oa.call(this, a, b)
  };
  u.Yb = function (a, b) {
    var c = this.ua(a),
      d = vp(this, a) ? c.firstChild : k;
    rp.d.Yb.call(this, a, b);
    d && !vp(this, a) && c.insertBefore(d, c.firstChild || k)
  };

  function tp(a, b, c) {
    a = sp(a, 2);
    return c.D("div", a, b)
  }
  u.Ik = function (a, b, c) {
    b && (qn(b, c ? "menuitemcheckbox" : this.Ec()), up(this, a, b, c))
  };

  function vp(a, b) {
    var c = a.ua(b);
    if (c) {
      var c = c.firstChild,
        d = sp(a, 1);
      return !!c && jb(sf(c), d)
    }
    return n
  }
  function up(a, b, c, d) {
    d != vp(a, c) && (wf(c, "vl-option", d), c = a.ua(c), d ? (a = sp(a, 1), c.insertBefore(b.C().D("div", a), c.firstChild || k)) : c.removeChild(c.firstChild))
  }
  u.Dh = function (a) {
    switch (a) {
    case 2:
      return sp(this, 0);
    case 16:
    case 8:
      return "vl-option-selected";
    default:
      return rp.d.Dh.call(this, a)
    }
  };
  u.Yl = function (a) {
    var b = sp(this, 0);
    switch (a) {
    case "vl-option-selected":
      return 16;
    case b:
      return 2;
    default:
      return rp.d.Yl.call(this, a)
    }
  };
  u.P = t("vl-menuitem");

  function wp(a, b, c, d) {
    Qo.call(this, a, d || rp.Ga(), c);
    this.ga(b)
  }
  D(wp, Qo);
  u = wp.prototype;
  u.da = function () {
    var a = this.Pm;
    return a != k ? a : this.og()
  };
  u.ga = ca("Pm");
  u.Ik = function (a) {
    Wo(this, 16, a);
    var b = this.e();
    b && this.ba.Ik(this, b, a)
  };
  u.og = function () {
    var a = this.Ba;
    return ka(a) ? (a = eb(a, function (a) {
      var c = sf(a);
      return jb(c, "vl-menuitem-accel") || jb(c, "vl-menuitem-mnemonic-separator") ? "" : gg(a)
    }).join(""), Ka(a)) : wp.d.og.call(this)
  };
  u.vf = function (a) {
    var b = this.getParent();
    if (b) {
      var c = b.Jq;
      b.Jq = k;
      if (b = c && ma(a.clientX)) b = new xf(a.clientX, a.clientY), b = c == b ? j : !c || !b ? n : c.x == b.x && c.y == b.y;
      if (b) return
    }
    wp.d.vf.call(this, a)
  };
  u.Hc = function (a) {
    return a.keyCode == this.eq && this.Ff(a) ? j : wp.d.Hc.call(this, a)
  };
  u.zt = p("eq");
  Mo("vl-menuitem", function () {
    return new wp(k)
  });

  function xp() {}
  D(xp, dp);
  ia(xp);
  u = xp.prototype;
  u.Ec = t("menu");
  u.Mb = function (a) {
    return "UL" == a.tagName || xp.d.Mb.call(this, a)
  };
  u.Eh = function (a) {
    return "HR" == a.tagName ? new cp : xp.d.Eh.call(this, a)
  };
  u.df = function (a, b) {
    return Wf(a.e(), b)
  };
  u.P = t("vl-menu");
  u.wg = function (a) {
    xp.d.wg.call(this, a);
    a = a.e();
    rn(a, "haspopup", "true")
  };
  Mo("vl-menuseparator", function () {
    return new cp
  });

  function yp(a, b) {
    ip.call(this, gp, b || xp.Ga(), a);
    this.ne(n)
  }
  D(yp, ip);
  u = yp.prototype;
  u.ml = j;
  u.xs = n;
  u.P = function () {
    return this.ba.P()
  };
  u.df = function (a) {
    if (this.ba.df(this, a)) return j;
    for (var b = 0, c = go(this); b < c; b++) {
      var d = ho(this, b);
      if ("function" == typeof d.df && d.df(a)) return j
    }
    return n
  };
  u.Xe = function (a) {
    this.ta(a, j)
  };
  u.cg = function (a, b) {
    this.qd(a, b, j)
  };
  u.removeItem = function (a) {
    (a = this.removeChild(a, j)) && a.J()
  };
  u.Gh = function (a) {
    return ho(this, a)
  };
  u.Ul = function () {
    return go(this)
  };
  u.ra = function (a, b, c) {
    (b = yp.d.ra.call(this, a, b)) && (a && this.Q && this.ml) && this.hb().focus();
    this.Jq = a && c && ma(c.clientX) ? new xf(c.clientX, c.clientY) : k;
    return b
  };
  u.cm = function (a) {
    this.ml && this.hb().focus();
    return yp.d.cm.call(this, a)
  };
  u.vo = function (a) {
    return (this.xs || a.isEnabled()) && a.ha && !! (a.lb & 2)
  };
  u.R = function (a) {
    var b = this.ba,
      c;
    c = this.C();
    c = Ff(c.ma, "div", b.P() + "-content", a);
    for (var d = c.length, f = 0; f < d; f++) hp(b, this, c[f]);
    yp.d.R.call(this, a)
  };
  u.Hc = function (a) {
    var b = yp.d.Hc.call(this, a);
    b || this.qc(function (c) {
      !b && (c.zt && c.eq == a.keyCode) && (this.isEnabled() && this.ld(c), b = c.ed(a))
    }, this);
    return b
  };

  function zp() {}
  D(zp, Lo);
  ia(zp);
  u = zp.prototype;
  u.D = function (a) {
    var b = {
      "class": "vl-inline-block " + this.we(a).join(" "),
      title: a.rg() || ""
    }, b = a.C().D("div", b, this.ph(a.Ba, a.C()));
    Ho(this, a, b);
    return b
  };
  u.Ec = t("button");
  u.ua = function (a) {
    return a && a.firstChild.firstChild
  };
  u.ph = function (a, b) {
    return b.D("div", "vl-inline-block " + (this.P() + "-outer-box"), b.D("div", "vl-inline-block " + (this.P() + "-inner-box"), a))
  };
  u.Mb = function (a) {
    return "DIV" == a.tagName
  };
  u.oa = function (a, b) {
    Ap(b, j);
    Ap(b, n);
    var c;
    a: {
      c = a.C().kp(b);
      var d = this.P() + "-outer-box";
      if (c && jb(sf(c), d) && (c = a.C().kp(c), d = this.P() + "-inner-box", c && jb(sf(c), d))) {
        c = j;
        break a
      }
      c = n
    }
    c || b.appendChild(this.ph(b.childNodes, a.C()));
    tf(b, "vl-inline-block", this.P());
    return zp.d.oa.call(this, a, b)
  };
  u.P = t("vl-custom-button");

  function Ap(a, b) {
    if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
        d = b ? c.nextSibling : c.previousSibling;
        if (3 == c.nodeType) {
          var f = c.nodeValue;
          if ("" == La(f)) a.removeChild(c);
          else {
            c.nodeValue = b ? f.replace(/^[\s\xa0]+/, "") : f.replace(/[\s\xa0]+$/, "");
            break
          }
        } else break;
        c = d
    }
  };

  function Bp() {}
  D(Bp, zp);
  ia(Bp);
  I && (Bp.prototype.Yb = function (a, b) {
    var c = Bp.d.ua.call(this, a && a.firstChild);
    if (c) {
      var d = this.createCaption(b, Bf(a)),
        f = c.parentNode;
      f && f.replaceChild(d, c)
    }
  });
  u = Bp.prototype;
  u.ua = function (a) {
    a = Bp.d.ua.call(this, a && a.firstChild);
    I && (a && a.__goog_wrapper_div) && (a = a.firstChild);
    return a
  };
  u.oa = function (a, b) {
    var c = Ef("*", "vl-menu", b)[0];
    if (c) {
      Rn(c, n);
      Df(c).body.appendChild(c);
      var d = new yp;
      d.oa(c);
      a.Ji(d)
    }
    return Bp.d.oa.call(this, a, b)
  };
  u.ph = function (a, b) {
    return Bp.d.ph.call(this, [this.createCaption(a, b), b.D("div", "vl-inline-block " + (this.P() + "-dropdown"), " ")], b)
  };
  u.createCaption = function (a, b) {
    return b.D("div", "vl-inline-block " + (this.P() + "-caption"), a)
  };
  u.P = t("vl-menu-button");

  function Cp(a, b, c, d) {
    ap.call(this, a, c || Bp.Ga(), d);
    Wo(this, 64, j);
    this.lk = new Eo(k, 5);
    b && this.Ji(b);
    this.Nu = k;
    this.sa = new Kc(500);
    if ((Ng || Og) && !Sb("533.17.9")) this.Xj = j
  }
  D(Cp, ap);
  u = Cp.prototype;
  u.Xj = n;
  u.wx = n;
  u.B = function () {
    Cp.d.B.call(this);
    this.V && Dp(this, this.V, j);
    rn(this.e(), "haspopup", "true")
  };
  u.pa = function () {
    Cp.d.pa.call(this);
    if (this.V) {
      this.$a(n);
      this.V.pa();
      Dp(this, this.V, n);
      var a = this.V.e();
      a && Uf(a)
    }
  };
  u.A = function () {
    Cp.d.A.call(this);
    this.V && (this.V.J(), delete this.V);
    delete this.Lq;
    this.sa.J()
  };
  u.uf = function (a) {
    Cp.d.uf.call(this, a);
    this.gd() && (this.$a(!Jo(this, 64), a), this.V && (this.V.ke = Jo(this, 64)))
  };
  u.vf = function (a) {
    Cp.d.vf.call(this, a);
    this.V && !this.gd() && (this.V.ke = n)
  };
  u.Ff = function () {
    this.setActive(n);
    return j
  };
  u.It = function (a) {
    this.V && (this.V.ha && !this.df(a.target)) && this.$a(n)
  };
  u.df = function (a) {
    return a && Wf(this.e(), a) || this.V && this.V.df(a) || n
  };
  u.Hc = function (a) {
    if (32 == a.keyCode) {
      if (a.preventDefault(), "keyup" != a.type) return j
    } else if ("key" != a.type) return n;
    if (this.V && this.V.ha) {
      var b = this.V.ed(a);
      return 27 == a.keyCode ? (this.$a(n), j) : b
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode ? (this.$a(j), j) : n
  };
  u.fm = function () {
    this.$a(n)
  };
  u.Pt = function () {
    this.gd() || this.$a(n)
  };
  u.tf = function (a) {
    this.Xj || this.$a(n);
    Cp.d.tf.call(this, a)
  };

  function Ep(a) {
    a.V || a.Ji(new yp(a.C()));
    return a.V || k
  }
  u.Ji = function (a) {
    var b = this.V;
    if (a != b && (b && (this.$a(n), this.Q && Dp(this, b, n), delete this.V), a)) {
      this.V = a;
      a.Nf(this);
      a.ra(n);
      var c = this.Xj;
      (a.ml = c) && a.ne(j);
      this.Q && Dp(this, a, j)
    }
    return b
  };
  u.Xe = function (a) {
    Ep(this).ta(a, j)
  };
  u.cg = function (a, b) {
    Ep(this).qd(a, b, j)
  };
  u.removeItem = function (a) {
    (a = Ep(this).removeChild(a, j)) && a.J()
  };
  u.Gh = function (a) {
    return this.V ? ho(this.V, a) : k
  };
  u.Ul = function () {
    return this.V ? go(this.V) : 0
  };
  u.ra = function (a, b) {
    var c = Cp.d.ra.call(this, a, b);
    c && !this.ha && this.$a(n);
    return c
  };
  u.Na = function (a) {
    Cp.d.Na.call(this, a);
    this.isEnabled() || this.$a(n)
  };
  u.$a = function (a, b) {
    Cp.d.$a.call(this, a);
    if (this.V && Jo(this, 64) == a) {
      if (a) this.V.Q || (this.wx ? this.V.Pb(this.e().parentNode) : this.V.Pb()), this.Zf = Hn(this.e()), this.bf = Pn(this.e()), Fp(this), lp(this.V, -1);
      else if (this.setActive(n), this.V.ke = n, this.e() && rn(this.e(), "activedescendant", ""), this.vk != k) {
        this.vk = i;
        var c = this.V.e();
        c && Kn(c, "", "")
      }
      this.V.ra(a, n, b);
      if (!this.ud) {
        var c = this.I(),
          d = a ? c.h : c.Kb;
        d.call(c, hg(this.C()), "mousedown", this.It, j);
        this.Xj && d.call(c, this.V, "blur", this.Pt);
        d.call(c, this.sa, Mc,
          this.Qw);
        a ? this.sa.start() : this.sa.stop()
      }
    }
  };

  function Fp(a) {
    if (a.V.Q) {
      var b = a.Lq || a.e(),
        c = a.lk;
      a.lk.element = b;
      b = a.V.e();
      a.V.ha || (b.style.visibility = "hidden", Rn(b, j));
      !a.vk && (a.lk.ut && a.lk.ak & 32) && (a.vk = Nn(b));
      c.Lf(b, c.oj ^ 1, a.Nu, a.vk);
      a.V.ha || (Rn(b, n), b.style.visibility = "visible")
    }
  }
  u.Qw = function () {
    var a = Pn(this.e()),
      b = Hn(this.e());
    if (!(this.bf == a || (!this.bf || !a ? 0 : this.bf.left == a.left && this.bf.width == a.width && this.bf.top == a.top && this.bf.height == a.height)) || !(this.Zf == b || (!this.Zf || !b ? 0 : this.Zf.top == b.top && this.Zf.right == b.right && this.Zf.bottom == b.bottom && this.Zf.left == b.left))) this.bf = a, this.Zf = b, Fp(this)
  };

  function Dp(a, b, c) {
    var d = a.I(),
      c = c ? d.h : d.Kb;
    c.call(d, b, "action", a.fm);
    c.call(d, b, "highlight", a.dm);
    c.call(d, b, "unhighlight", a.jm)
  }
  u.dm = function (a) {
    rn(this.e(), "activedescendant", a.target.e().id)
  };
  u.jm = function () {
    ho(this.V, this.V.Db) || rn(this.e(), "activedescendant", "")
  };
  Mo("vl-menu-button", function () {
    return new Cp(k)
  });

  function Gp() {}
  D(Gp, Bp);
  ia(Gp);
  Gp.prototype.ua = function (a) {
    return a ? Ef("*", this.P() + "-caption", a)[0] : k
  };
  Gp.prototype.Mb = function (a) {
    return "DIV" == a.tagName
  };
  Gp.prototype.ph = function (a, b) {
    var c = this.P();
    return b.D("div", "vl-inline-block ", b.D("div", [c + "-caption", "vl-inline-block"], a), b.D("div", [c + "-dropdown", "vl-inline-block"]))
  };
  Gp.prototype.P = t("vl-css3-button");
  Mo("vl-css3-menu-button", function () {
    return new Cp(k, k, Gp.Ga())
  });

  function Hp(a, b, c, d, f) {
    ao.call(this, f);
    this.width = a;
    this.height = b;
    this.ff = c || k;
    this.zl = d || k
  }
  D(Hp, ao);
  u = Hp.prototype;
  u.kh = k;
  u.mj = 0;
  u.nj = 0;
  u.Ad = function () {
    return this.rf()
  };
  u.rf = function () {
    return this.Q ? Nn(this.e()) : ma(this.width) && ma(this.height) ? new zf(this.width, this.height) : k
  };

  function Ip(a) {
    var b = a.rf();
    return b ? b.width / (a.ff ? new zf(a.ff, a.zl) : a.rf()).width : 0
  };

  function Jp(a, b) {
    ya.call(this);
    this.H = a;
    this.bm = b;
    this.El = n
  }
  D(Jp, Ic);
  u = Jp.prototype;
  u.bm = k;
  u.H = k;
  u.e = p("H");
  u.addEventListener = function (a, b, c, d) {
    xc(this.H, a, b, c, d)
  };
  u.removeEventListener = function (a, b, c, d) {
    Ac(this.H, a, b, c, d)
  };
  u.A = function () {
    Jp.d.A.call(this);
    Ec(this.H)
  };

  function Kp(a, b, c, d) {
    Jp.call(this, a, b);
    this.Xx = c;
    a = this.bm;
    b = this.e();
    c ? (b.setAttribute("stroke", c.Ns), c = c.np(), z(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", parseFloat(c) / Ip(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
    this.fill = d;
    c = this.bm;
    a = this.e();
    if (d instanceof Lp) {
      var b = "lg-" + d.Tr + "-" + d.Vr + "-" + d.Ur + "-" + d.Wr + "-" + d.Bo + "-" + d.Co,
        f = b in c.hf ? c.hf[b] : k;
      if (!f) {
        var f = Mp(c, "linearGradient", {
          x1: d.Tr,
          y1: d.Vr,
          x2: d.Ur,
          y2: d.Wr,
          gradientUnits: "userSpaceOnUse"
        }),
          g = "stop-color:" +
            d.Bo;
        ma(d.Hq) && (g += ";stop-opacity:" + d.Hq);
        g = Mp(c, "stop", {
          offset: "0%",
          style: g
        });
        f.appendChild(g);
        g = "stop-color:" + d.Co;
        ma(d.Iq) && (g += ";stop-opacity:" + d.Iq);
        d = Mp(c, "stop", {
          offset: "100%",
          style: g
        });
        f.appendChild(d);
        b in c.hf ? f = c.hf[b] : (d = "_svgdef_" + Np++, f.setAttribute("id", d), c.hf[b] = d, c.sj.appendChild(f), f = d)
      }
      a.setAttribute("fill", "url(#" + f + ")")
    } else a.setAttribute("fill", "none")
  }
  D(Kp, Jp);
  Kp.prototype.fill = k;
  Kp.prototype.Xx = k;

  function Op(a, b) {
    Jp.call(this, a, b)
  }
  D(Op, Jp);

  function Pp(a, b, c, d) {
    Kp.call(this, a, b, c, d)
  }
  D(Pp, Kp);

  function Qp(a, b) {
    this.size = a;
    this.ft = b
  }
  Qp.prototype.bold = n;
  Qp.prototype.Bu = n;

  function Rp() {};

  function Lp(a, b, c, d, f, g, h, l) {
    this.Tr = a;
    this.Vr = b;
    this.Ur = c;
    this.Wr = d;
    this.Bo = f;
    this.Co = g;
    this.Hq = y(h) ? h : k;
    this.Iq = y(l) ? l : k
  }
  D(Lp, Rp);

  function Sp(a, b) {
    this.hy = a;
    this.Ns = b
  }
  Sp.prototype.np = p("hy");

  function Tp(a, b) {
    Jp.call(this, a, b)
  }
  D(Tp, Op);
  Tp.prototype.clear = function () {
    Qf(this.e())
  };

  function Up(a, b, c, d) {
    Kp.call(this, a, b, c, d)
  }
  D(Up, Pp);

  function Vp(a, b, c, d, f) {
    Hp.call(this, a, b, c, d, f);
    this.hf = {};
    this.Vn = J && !Sb(526);
    this.Sh = new Ze(this)
  }
  var Wp;
  D(Vp, Hp);
  var Np = 0;

  function Mp(a, b, c) {
    a = a.vb.ma.createElementNS("http://www.w3.org/2000/svg", b);
    if (c) for (var d in c) a.setAttribute(d, c[d]);
    return a
  }
  u = Vp.prototype;
  u.D = function () {
    var a = Mp(this, "svg", {
      width: this.width,
      height: this.height,
      overflow: "hidden"
    }),
      b = Mp(this, "g");
    this.sj = Mp(this, "defs");
    this.kh = new Tp(b, this);
    a.appendChild(this.sj);
    a.appendChild(b);
    this.H = a;
    if (this.ff || this.mj || this.nj) this.e().setAttribute("preserveAspectRatio", "none"), this.Vn ? this.Yk() : this.e().setAttribute("viewBox", this.mj + " " + this.nj + " " + (this.ff ? this.ff + " " + this.zl : ""))
  };
  u.Yk = function () {
    if (this.Q && (this.ff || this.mj || !this.nj)) {
      var a = this.rf();
      if (0 == a.width) this.e().style.visibility = "hidden";
      else {
        this.e().style.visibility = "";
        var b = -this.mj,
          c = -this.nj,
          d = a.width / this.ff,
          a = a.height / this.zl;
        this.kh.e().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
      }
    }
  };
  u.rf = function () {
    if (!I) return this.Q ? Nn(this.e()) : Vp.d.rf.call(this);
    var a = this.width,
      b = this.height,
      c = z(a) && -1 != a.indexOf("%"),
      d = z(b) && -1 != b.indexOf("%");
    if (!this.Q && (c || d)) return k;
    var f, g;
    c && (f = this.e().parentNode, g = Nn(f), a = parseFloat(a) * g.width / 100);
    d && (f = f || this.e().parentNode, g = g || Nn(f), b = parseFloat(b) * g.height / 100);
    return new zf(a, b)
  };
  u.clear = function () {
    this.kh.clear();
    Qf(this.sj);
    this.hf = {}
  };
  u.B = function () {
    var a = this.rf();
    Vp.d.B.call(this);
    a || this.dispatchEvent("resize");
    if (this.Vn) {
      var a = this.width,
        b = this.height;
      "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && this.Sh.h(Xp(), Mc, this.Yk);
      this.Yk()
    }
  };
  u.pa = function () {
    Vp.d.pa.call(this);
    this.Vn && this.Sh.Kb(Xp(), Mc, this.Yk)
  };
  u.A = function () {
    delete this.hf;
    delete this.sj;
    delete this.kh;
    Vp.d.A.call(this)
  };

  function Xp() {
    Wp || (Wp = new Kc(400), Wp.start());
    return Wp
  };
  try {
    eval("document.namespaces")
  } catch (Yp) {};

  function Zp() {}
  D(Zp, Fo);
  ia(Zp);
  u = Zp.prototype;
  u.Ec = ba();
  u.oa = function (a, b) {
    Ro(a, n);
    a.Td &= -256;
    Wo(a, 32, n);
    Zp.d.oa.call(this, a, b);
    a.Yb(b.value);
    return b
  };
  u.D = function (a) {
    Ro(a, n);
    a.Td &= -256;
    Wo(a, 32, n);
    return a.C().D("textarea", {
      "class": this.we(a).join(" "),
      disabled: !a.isEnabled()
    }, a.Ba || "")
  };
  u.Mb = function (a) {
    return "TEXTAREA" == a.tagName
  };
  u.Of = ha;
  u.fe = function (a) {
    return a.isEnabled()
  };
  u.ne = ha;
  u.Zb = function (a, b, c) {
    Zp.d.Zb.call(this, a, b, c);
    if ((a = a.e()) && 1 == b) a.disabled = c
  };
  u.pd = ha;
  u.Yb = function (a, b) {
    a && (a.value = b)
  };
  u.P = t("vl-textarea");

  function $p(a, b, c) {
    Qo.call(this, a, b || Zp.Ga(), c);
    Ro(this, n);
    this.Te(j);
    a || (this.Ba = "")
  }
  D($p, Qo);
  var aq = I || J;
  u = $p.prototype;
  u.Ag = n;
  u.Be = 0;
  u.aq = 0;
  u.cq = 0;
  u.vp = n;
  u.ok = n;
  u.tn = n;
  u.sn = n;

  function bq(a) {
    return a.wi.top + a.wi.bottom + a.so.top + a.so.bottom
  }
  function cq(a) {
    var b = a.cq,
      c = a.e();
    b && (c && a.ok) && (b -= bq(a));
    return b
  }
  function dq(a) {
    var b = a.aq,
      c = a.e();
    b && (c && a.ok) && (b -= bq(a));
    return b
  }
  u.ga = function (a) {
    this.Yb(String(a))
  };
  u.da = function () {
    return this.e().value
  };
  u.Yb = function (a) {
    $p.d.Yb.call(this, a);
    this.e() && this.tg()
  };
  u.Na = function (a) {
    $p.d.Na.call(this, a);
    this.e().disabled = !a
  };
  u.B = function () {
    $p.d.B.call(this);
    var a = this.e();
    un(a, {
      overflowY: "hidden",
      overflowX: "auto",
      boxSizing: "border-box",
      MsBoxSizing: "border-box",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box"
    });
    this.wi = Vn(a);
    this.so = Yn(a);
    this.I().h(a, "scroll", this.tg).h(a, "focus", this.tg).h(a, "keyup", this.tg).h(a, "mouseup", this.Su);
    this.e() && this.tg()
  };

  function eq(a) {
    if (!a.vp) {
      var b = a.e().cloneNode(n);
      un(b, {
        position: "absolute",
        height: "auto",
        top: "-9999px",
        margin: "0",
        padding: "1px",
        border: "1px solid #000",
        overflow: "hidden"
      });
      hg(a.C()).body.appendChild(b);
      var c = b.scrollHeight;
      b.style.padding = "10px";
      var d = b.scrollHeight;
      a.tn = d > c;
      b.style.borderWidth = "10px";
      a.sn = b.scrollHeight > d;
      b.style.height = "100px";
      100 != b.offsetHeight && (a.ok = j);
      Uf(b);
      a.vp = j
    }
    var b = a.e(),
      c = a.e().scrollHeight,
      f = a.e(),
      d = f.offsetHeight - f.clientHeight;
    if (!a.tn) var g = a.wi,
    d = d - (g.top + g.bottom);
    a.sn || (f = Yn(f), d -= f.top + f.bottom);
    c += 0 < d ? d : 0;
    a.ok ? c -= bq(a) : (a.tn || (d = a.wi, c += d.top + d.bottom), a.sn || (a = Yn(b), c += a.top + a.bottom));
    return c
  }
  function fq(a, b) {
    a.Be != b && (a.Be = b, a.e().style.height = b + "px")
  }
  function gq(a) {
    a = a.e();
    a.style.height = "auto";
    var b = a.value.match(/\n/g) || [];
    a.rows = b.length + 1
  }
  u.tg = function () {
    if (!this.Ag) {
      var a = n;
      this.Ag = j;
      var b = this.e(),
        c = this.Be;
      if (b.scrollHeight) {
        var d = n,
          f = n,
          g = eq(this),
          h = b.offsetHeight,
          l = cq(this),
          m = dq(this);
        l && g < l ? (fq(this, l), d = j) : m && g > m ? (fq(this, m), b.style.overflowY = "", f = j) : h != g ? fq(this, g) : this.Be || (this.Be = g);
        !d && (!f && aq) && (a = j)
      } else gq(this);
      this.Ag = n;
      a && (a = this.e(), this.Ag || (this.Ag = j, b = n, a.value || (a.value = " ", b = j), (f = a.scrollHeight) ? (g = eq(this), d = cq(this), h = dq(this), !(d && g <= d) && !(h && g >= h) && (h = this.wi, a.style.paddingBottom = h.bottom + 1 + "px", eq(this) ==
        g && (a.style.paddingBottom = h.bottom + f + "px", a.scrollTop = 0, f = eq(this) - f, f >= d ? fq(this, f) : fq(this, d)), a.style.paddingBottom = h.bottom + "px")) : gq(this), b && (a.value = ""), this.Ag = n));
      c != this.Be && this.dispatchEvent("resize")
    }
  };
  u.Su = function () {
    var a = this.e(),
      b = a.offsetHeight;
    a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
    b != this.Be && (this.Be = this.cq = b)
  };

  function hq(a, b, c, d) {
    Qo.call(this, "", k, d);
    this.Za = a;
    this.Y = k;
    this.Fa = j;
    b != k && (this.Fa = b);
    this.Dp = c;
    this.Gi = this.Ib = k;
    this.tm = "";
    this.am = new so;
    To(this, "vl-msg-input")
  }
  D(hq, Qo);
  u = hq.prototype;
  u.mr = function (a) {
    this.Y = a;
    this.Ib && this.Q && this.Ib.Yb(a.Uo)
  };
  u.Lx = function (a) {
    this.Za.yd(a).G(function (a) {
      this.mr(a)
    }, this)
  };
  u.D = function () {
    hq.d.D.call(this);
    this.qh()
  };
  u.qh = function () {
    var a = this.Ib = new $p("", k, this.C());
    a.aq = 300;
    a.e() && a.tg();
    this.ta(this.Ib, j);
    this.Gi = new ap("Send", k, this.C());
    To(this.Gi, "vl-textarea-submit");
    this.ta(this.Gi, j)
  };
  u.B = function () {
    Ro(this, n);
    hq.d.B.call(this);
    this.I().h(this, "action", this.Dw, n, this).h(this, "resize", this.rb, n, this).h(this.am, "key", this.Cv, j, this);
    to(this.am, this.vb.ma, j);
    Ug() || this.Ib.e().focus();
    this.tm = Nn(this.Ib.e()).height + "px";
    this.Fa || (this.Ib.Na(n), this.Ib.Te(n), this.Gi.Na(n), this.Gi.ra(n));
    this.Dp ? this.Ib.ga(this.Dp) : this.Y && this.Ib.Yb(this.Y.Uo);
    var a = this.tm;
    Mn(this.Ib.e(), a);
    this.rb()
  };
  u.pa = function () {
    hq.d.pa.call(this);
    this.am.detach()
  };
  u.Dw = function () {
    var a = this.Ib.da();
    this.Y && !Ja(Ya(a)) && (this.Y.postMessage(a), this.Ib.ga(""), a = this.tm, Mn(this.Ib.e(), a), this.rb())
  };
  u.rb = function () {
    var a = this.e(),
      b = Nn(this.Ib.e()).height;
    Mn(a, b);
    rf ? a = a.parentElement : (a = a.parentNode, a = oa(a) && 1 == a.nodeType ? a : k);
    Mn(a, b)
  };
  u.Cv = function (a) {
    if (oo(a) && !(a.ctrlKey && 67 === a.keyCode || a.ctrlKey && 86 === a.keyCode)) Ug() || this.Ib.e().focus()
  };
  u.Hc = function (a) {
    this.Y && oo(a) && this.Y.Cp();
    return a.shiftKey ? n : hq.d.Hc.call(this, a)
  };

  function iq(a, b) {
    return new jq(a.Ca(), b)
  }
  function jq(a, b) {
    this.Ao = a;
    this.Ao.Tn = this;
    if (this.mo = b) b.aa = this;
    this.fb = new gi(k, a.fb);
    var c;
    if (Rl()) {
      c = new Ql;
      var d = this.fb.get("pathPrefix") || "";
      c.Jg = String(d);
      this.fb.get("html5History") && (d = c, d.Vi != n && (Ac(d.la, "hashchange", d.ri, n, d), d.Vi = n))
    } else c = new $m;
    this.du = c;
    this.Nk = new Ym
  }
  u = jq.prototype;
  u.W = function () {
    return this.Ao.W()
  };
  u.Dc = p("mo");
  u.rc = p("du");
  u.Qs = function (a, b, c) {
    return new hq(a, b, c)
  };
  u.Rs = function (a, b) {
    var c, d, f = new Vp("100%", "100%");
    f.D();
    var g = new Lp(0, 0, 0, 80, "#26A2DF", "#2A87Cb");
    d = new Qp(80, "Helvetica");
    d.bold = j;
    var h;
    h = 0 + d.size / 2;
    c = k;
    var l = 180 * Math.atan2(h - h, 0) / Math.PI % 360,
      l = Math.round(0 > 360 * l ? l + 360 : l),
      m = h - h;
    Math.round(Math.sqrt(0 + m * m));
    var q = d.size,
      m = {
        "font-family": d.ft,
        "font-size": q
      }, s = Math.round(0.85 * q),
      q = Math.round(h - q / 2 + s);
    m.x = 0;
    m.y = q;
    d.bold && (m["font-weight"] = "bold");
    d.Bu && (m["font-style"] = "italic");
    0 != l && (m.transform = "rotate(" + l + " 0 " + h + ")");
    d = Mp(f, "text", m);
    d.appendChild(f.vb.ma.createTextNode(a));
    c == k && (I && zb) && (c = new Sp(1, "black"));
    c = new Up(d, f, c, g);
    f.kh.e().appendChild(c.e());
    g = document.getElementById(b);
    f.Pb(g);
    d = c.e().getBBox();
    c = d.width;
    d = d.height;
    un(g, {
      width: c + "px",
      height: d + "px"
    });
    return f
  };
  Mo("vl-label-input", function () {
    return new ko
  });
  var Ul = "cmd:signin";

  function kq(a, b, c) {
    P.call(this, "cmd:nav", c);
    this.href = a;
    this.replaceState = b || n
  }
  D(kq, P);

  function lq(a, b, c) {
    P.call(this, a, c);
    this.map = b || k
  }
  D(lq, P);
  lq.prototype.get = function (a) {
    return this.map ? this.map.get(a) : k
  };

  function mq(a, b) {
    P.call(this, "cmd:signupexists", b);
    this.Zd = a
  }
  D(mq, P);

  function nq(a, b, c) {
    ya.call(this);
    this.target = a;
    this.handle = b || a;
    this.ck = c || new tn(NaN, NaN, NaN, NaN);
    this.ma = Df(a);
    this.Z = new Ze(this);
    xc(this.handle, ["touchstart", "mousedown"], this.Er, n, this)
  }
  D(nq, Ic);
  var oq = G || I && Sb("1.9.3");
  u = nq.prototype;
  u.clientX = 0;
  u.clientY = 0;
  u.screenX = 0;
  u.screenY = 0;
  u.Gr = 0;
  u.Hr = 0;
  u.ig = 0;
  u.jg = 0;
  u.Fa = j;
  u.kf = n;
  u.xp = 0;
  u.Ru = 0;
  u.gu = n;
  u.Wn = n;
  u.I = p("Z");
  u.Na = ca("Fa");
  u.A = function () {
    nq.d.A.call(this);
    Ac(this.handle, ["touchstart", "mousedown"], this.Er, n, this);
    af(this.Z);
    oq && this.ma.releaseCapture();
    this.Z = this.handle = this.target = k
  };

  function pq(a) {
    y(a.Pe) || (a.Pe = Jn(a.target));
    return a.Pe
  }
  u.Er = function (a) {
    var b = "mousedown" == a.type;
    if (this.Fa && !this.kf && (!b || fc(a))) {
      qq(a);
      if (0 == this.xp) if (this.dispatchEvent(new rq("start", this, a.clientX, a.clientY, a))) this.kf = j, a.preventDefault();
        else return;
        else a.preventDefault();
      var b = this.ma,
        c = b.documentElement,
        d = !oq;
      this.Z.h(b, ["touchmove", "mousemove"], this.Qt, d);
      this.Z.h(b, ["touchend", "mouseup"], this.vj, d);
      oq ? (c.setCapture(n), this.Z.h(c, "losecapture", this.vj)) : this.Z.h(Lf(b), "blur", this.vj);
      G && this.gu && this.Z.h(b, "dragstart", bc);
      this.Ax && this.Z.h(this.Ax,
        "scroll", this.zw, d);
      this.clientX = this.Gr = a.clientX;
      this.clientY = this.Hr = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      this.Wn ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, !c && "fixed" == zn(a) && (c = Df(a).documentElement), c ? (I ? (d = Yn(c), b += d.left) : Ub(8) && (d = Yn(c), b -= d.left), a = Jn(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
      this.ig = a;
      this.jg = this.target.offsetTop;
      this.dn = kg(Bf(this.ma));
      this.Ru = wa()
    } else this.dispatchEvent("earlycancel")
  };
  u.vj = function (a, b) {
    af(this.Z);
    oq && this.ma.releaseCapture();
    if (this.kf) {
      qq(a);
      this.kf = n;
      var c = sq(this, this.ig),
        d = tq(this, this.jg);
      this.dispatchEvent(new rq("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
    } else this.dispatchEvent("earlycancel");
    ("touchend" == a.type || "touchcancel" == a.type) && a.preventDefault()
  };

  function qq(a) {
    var b = a.type;
    "touchstart" == b || "touchmove" == b ? a.Lc(a.Sb.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.Lc(a.Sb.changedTouches[0], a.currentTarget)
  }
  u.Qt = function (a) {
    if (this.Fa) {
      qq(a);
      var b = (this.Wn && pq(this) ? -1 : 1) * (a.clientX - this.clientX),
        c = a.clientY - this.clientY;
      this.clientX = a.clientX;
      this.clientY = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      if (!this.kf) {
        var d = this.Gr - this.clientX,
          f = this.Hr - this.clientY;
        if (d * d + f * f > this.xp) if (this.dispatchEvent(new rq("start", this, a.clientX, a.clientY, a))) this.kf = j;
          else {
            this.ud || this.vj(a);
            return
          }
      }
      c = uq(this, b, c);
      b = c.x;
      c = c.y;
      this.kf && this.dispatchEvent(new rq("beforedrag", this, a.clientX, a.clientY, a,
        b, c)) && (vq(this, a, b, c), a.preventDefault())
    }
  };

  function uq(a, b, c) {
    var d = kg(Bf(a.ma)),
      b = b + (d.x - a.dn.x),
      c = c + (d.y - a.dn.y);
    a.dn = d;
    a.ig += b;
    a.jg += c;
    b = sq(a, a.ig);
    a = tq(a, a.jg);
    return new xf(b, a)
  }
  u.zw = function (a) {
    var b = uq(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    vq(this, a, b.x, b.y)
  };

  function vq(a, b, c, d) {
    a.Wn && pq(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
    a.target.style.top = d + "px";
    a.dispatchEvent(new rq("drag", a, b.clientX, b.clientY, b, c, d))
  }

  function sq(a, b) {
    var c = a.ck,
      d = !isNaN(c.left) ? c.left : k,
      c = !isNaN(c.width) ? c.width : 0;
    return Math.min(d != k ? d + c : Infinity, Math.max(d != k ? d : -Infinity, b))
  }
  function tq(a, b) {
    var c = a.ck,
      d = !isNaN(c.top) ? c.top : k,
      c = !isNaN(c.height) ? c.height : 0;
    return Math.min(d != k ? d + c : Infinity, Math.max(d != k ? d : -Infinity, b))
  }
  function rq(a, b, c, d, f, g, h, l) {
    ac.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.wy = f;
    this.left = y(g) ? g : b.ig;
    this.top = y(h) ? h : b.jg;
    this.Ay = b;
    this.zy = !! l
  }
  D(rq, ac);

  function wq(a) {
    ya.call(this);
    this.H = a;
    a = G ? "focusout" : "blur";
    this.Gu = xc(this.H, G ? "focusin" : "focus", this, !G);
    this.Hu = xc(this.H, a, this, !G)
  }
  D(wq, Ic);
  wq.prototype.handleEvent = function (a) {
    var b = new dc(a.Sb);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
  };
  wq.prototype.A = function () {
    wq.d.A.call(this);
    Cc(this.Gu);
    Cc(this.Hu);
    delete this.H
  };

  function xq(a, b) {
    ao.call(this, b);
    this.ey = !! a
  }
  D(xq, ao);
  u = xq.prototype;
  u.Ol = k;
  u.ha = n;
  u.oc = k;
  u.Lb = k;
  u.nd = k;
  u.P = t("vl-modalpopup");
  u.mf = p("oc");
  u.D = function () {
    xq.d.D.call(this);
    var a = this.e();
    tf(a, this.P());
    dg(a, j);
    Rn(a, n);
    yq(this);
    zq(this)
  };

  function yq(a) {
    if (a.ey && !a.Lb) {
      var b;
      b = a.C().D("iframe", {
        frameborder: 0,
        style: "border:0;vertical-align:bottom;",
        src: 'javascript:""'
      });
      a.Lb = b;
      a.Lb.className = a.P() + "-bg";
      Rn(a.Lb, n);
      Qn(a.Lb, 0)
    }
    a.oc || (a.oc = a.C().D("div", a.P() + "-bg"), Rn(a.oc, n))
  }

  function zq(a) {
    a.nd || (a.nd = a.C().createElement("span"), Rn(a.nd, n), dg(a.nd, j), a.nd.style.position = "absolute")
  }
  u.Mb = function (a) {
    return !!a && "DIV" == a.tagName
  };
  u.R = function (a) {
    xq.d.R.call(this, a);
    tf(this.e(), this.P());
    yq(this);
    zq(this);
    Rn(this.e(), n)
  };
  u.B = function () {
    this.Lb && Rf(this.Lb, this.e());
    Rf(this.oc, this.e());
    xq.d.B.call(this);
    Sf(this.nd, this.e());
    this.Ol = new wq(hg(this.C()));
    this.I().h(this.Ol, "focusin", this.vv)
  };
  u.pa = function () {
    this.ha && this.ra(n);
    Da(this.Ol);
    xq.d.pa.call(this);
    Uf(this.Lb);
    Uf(this.oc);
    Uf(this.nd)
  };
  u.ra = function (a) {
    a != this.ha && (this.Hf && this.Hf.stop(), this.fg && this.fg.stop(), this.Gf && this.Gf.stop(), this.eg && this.eg.stop(), a ? this.Sx() : this.cu())
  };
  u.ur = function (a, b, c, d) {
    this.Hf = a;
    this.Gf = b;
    this.fg = c;
    this.eg = d
  };
  u.Sx = function () {
    this.dispatchEvent("beforeshow") && (this.qn(), this.Lf(), this.I().h(jg(this.C()), "resize", this.qn), Aq(this, j), this.focus(), this.ha = j, this.Hf && this.fg ? (zc(this.Hf, "end", this.tk, n, this), this.fg.play(), this.Hf.play()) : this.tk())
  };
  u.cu = function () {
    this.dispatchEvent("beforehide") && (this.I().Kb(jg(this.C()), "resize", this.qn), this.ha = n, this.Gf && this.eg ? (zc(this.Gf, "end", this.sk, n, this), this.eg.play(), this.Gf.play()) : this.sk())
  };

  function Aq(a, b) {
    a.Lb && Rn(a.Lb, b);
    a.oc && Rn(a.oc, b);
    Rn(a.e(), b);
    Rn(a.nd, b)
  }
  u.tk = function () {
    this.dispatchEvent("show")
  };
  u.sk = function () {
    Aq(this, n);
    this.dispatchEvent("hide")
  };
  u.focus = function () {
    this.dp()
  };
  u.qn = function () {
    this.Lb && Rn(this.Lb, n);
    this.oc && Rn(this.oc, n);
    var a = hg(this.C()),
      b = Jf(Lf(a) || window),
      c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
      a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.Lb && (Rn(this.Lb, j), Kn(this.Lb, c, a));
    this.oc && (Rn(this.oc, j), Kn(this.oc, c, a))
  };
  u.Lf = function () {
    var a = hg(this.C()),
      b = Lf(a) || window;
    if ("fixed" == zn(this.e())) var c = a = 0;
    else c = kg(this.C()), a = c.x, c = c.y;
    var d = Nn(this.e()),
      b = Jf(b),
      a = Math.max(a + b.width / 2 - d.width / 2, 0),
      c = Math.max(c + b.height / 2 - d.height / 2, 0);
    An(this.e(), a, c);
    An(this.nd, a, c)
  };
  u.vv = function (a) {
    a.target == this.nd && Nc(this.dp, 0, this)
  };
  u.dp = function () {
    try {
      G && hg(this.C()).body.focus(), this.e().focus()
    } catch (a) {}
  };
  u.A = function () {
    Da(this.Hf);
    this.Hf = k;
    Da(this.Gf);
    this.Gf = k;
    Da(this.fg);
    this.fg = k;
    Da(this.eg);
    this.eg = k;
    xq.d.A.call(this)
  };

  function Bq(a, b, c) {
    xq.call(this, b, c);
    this.Nb = a || "modal-dialog";
    this.bb = Cq(Cq(new Dq, Eq, j), Fq, n, j)
  }
  D(Bq, xq);
  u = Bq.prototype;
  u.bt = j;
  u.nm = j;
  u.fq = j;
  u.Ys = j;
  u.ej = 0.5;
  u.Ue = "";
  u.Ba = "";
  u.te = k;
  u.Xs = n;
  u.Jb = k;
  u.Nd = k;
  u.Tk = k;
  u.qe = k;
  u.Bc = k;
  u.ab = k;
  u.If = "dialog";
  u.P = p("Nb");
  u.za = function (a) {
    this.Ue = a;
    this.Nd && Yf(this.Nd, a)
  };
  u.qg = p("Ue");
  u.Yb = function (a) {
    this.Ba = a;
    this.Bc && (this.Bc.innerHTML = a)
  };
  u.zn = ca("If");
  u.ua = function () {
    this.e() || this.Pb();
    return this.Bc
  };
  u.mf = function () {
    this.e() || this.Pb();
    return Bq.d.mf.call(this)
  };

  function Gq(a, b) {
    a.ej = b;
    if (a.e()) {
      var c = a.mf();
      c && Qn(c, a.ej)
    }
  }
  u.Io = function () {
    return new nq(this.e(), this.Jb)
  };

  function Hq(a, b) {
    a.e() && wf(a.Jb, a.Nb + "-title-draggable", b);
    b && !a.te ? (a.te = a.Io(), tf(a.Jb, a.Nb + "-title-draggable"), xc(a.te, "start", a.Ix, n, a)) : !b && a.te && (a.te.J(), a.te = k)
  }
  u.D = function () {
    Bq.d.D.call(this);
    var a = this.e(),
      b = this.C();
    this.Jb = b.D("div", {
      className: this.Nb + "-title",
      id: this.F()
    }, this.Nd = b.D("span", this.Nb + "-title-text", this.Ue), this.qe = b.D("span", this.Nb + "-title-close"));
    Pf(a, this.Jb, this.Bc = b.D("div", this.Nb + "-content"), this.ab = b.D("div", this.Nb + "-buttons"));
    this.Tk = this.Jb.id;
    qn(a, this.If);
    rn(a, "labelledby", this.Tk || "");
    this.Ba && (this.Bc.innerHTML = this.Ba);
    Rn(this.qe, this.nm);
    this.bb && (a = this.bb, a.H = this.ab, a.Pb());
    Rn(this.ab, !! this.bb);
    Gq(this, this.ej)
  };
  u.R = function (a) {
    Bq.d.R.call(this, a);
    a = this.Nb + "-content";
    (this.Bc = Ef(k, a, this.e())[0]) ? this.Ba = this.Bc.innerHTML : (this.Bc = this.C().D("div", a), this.Ba && (this.Bc.innerHTML = this.Ba), this.e().appendChild(this.Bc));
    var a = this.Nb + "-title",
      b = this.Nb + "-title-text",
      c = this.Nb + "-title-close";
    (this.Jb = Ef(k, a, this.e())[0]) ? (this.Nd = Ef(k, b, this.Jb)[0], this.qe = Ef(k, c, this.Jb)[0], this.Jb.id || (this.Jb.id = this.F())) : (this.Jb = this.C().D("div", {
      className: a,
      id: this.F()
    }), this.e().insertBefore(this.Jb, this.Bc));
    this.Tk =
      this.Jb.id;
    this.Nd ? this.Ue = eg(this.Nd) : (this.Nd = this.C().D("span", b, this.Ue), this.Jb.appendChild(this.Nd));
    rn(this.e(), "labelledby", this.Tk || "");
    this.qe || (this.qe = this.C().D("span", c), this.Jb.appendChild(this.qe));
    Rn(this.qe, this.nm);
    a = this.Nb + "-buttons";
    (this.ab = Ef(k, a, this.e())[0]) ? (this.bb = new Dq(this.C()), this.bb.oa(this.ab)) : (this.ab = this.C().D("div", a), this.e().appendChild(this.ab), this.bb && (a = this.bb, a.H = this.ab, a.Pb()), Rn(this.ab, !! this.bb));
    Gq(this, this.ej)
  };
  u.B = function () {
    Bq.d.B.call(this);
    this.I().h(this.e(), "keydown", this.tq).h(this.e(), "keypress", this.tq);
    this.I().h(this.ab, "click", this.dv);
    Hq(this, this.Ys);
    this.I().h(this.qe, "click", this.Rw);
    qn(this.e(), this.If);
    "" !== this.Nd.id && rn(this.e(), "labelledby", this.Nd.id);
    if (!this.fq && (this.fq = n, this.Q)) {
      var a = this.C(),
        b = this.mf();
      a.removeNode(this.Lb);
      a.removeNode(b)
    }
  };
  u.pa = function () {
    this.ha && this.ra(n);
    Hq(this, n);
    Bq.d.pa.call(this)
  };
  u.ra = function (a) {
    a != this.ha && (this.Q || this.Pb(), Bq.d.ra.call(this, a))
  };
  u.tk = function () {
    Bq.d.tk.call(this);
    this.dispatchEvent(Iq)
  };
  u.sk = function () {
    Bq.d.sk.call(this);
    this.dispatchEvent(Jq);
    this.Xs && this.J()
  };
  u.focus = function () {
    Bq.d.focus.call(this);
    if (this.bb) {
      var a = this.bb.qj;
      if (a) for (var b = hg(this.C()), c = this.ab.getElementsByTagName("button"), d = 0, f; f = c[d]; d++) if (f.name == a) {
            try {
              if (J || Fb) {
                var g = b.createElement("input");
                g.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
                this.e().appendChild(g);
                g.focus();
                this.e().removeChild(g)
              }
              f.focus()
            } catch (h) {}
            break
          }
    }
  };
  u.Ix = function () {
    var a = hg(this.C()),
      b = Jf(Lf(a) || window),
      c = Math.max(a.body.scrollWidth, b.width),
      a = Math.max(a.body.scrollHeight, b.height),
      d = Nn(this.e());
    "fixed" == zn(this.e()) ? (b = new tn(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)), this.te.ck = b || new tn(NaN, NaN, NaN, NaN)) : this.te.ck = new tn(0, 0, c - d.width, a - d.height) || new tn(NaN, NaN, NaN, NaN)
  };
  u.Rw = function () {
    if (this.nm) {
      var a = this.bb,
        b = a && a.wl;
      b ? (a = a.get(b), this.dispatchEvent(new Kq(b, a)) && this.ra(n)) : this.ra(n)
    }
  };
  u.A = function () {
    this.ab = this.qe = k;
    Bq.d.A.call(this)
  };
  u.dv = function (a) {
    a: {
      for (a = a.target; a != k && a != this.ab;) {
        if ("BUTTON" == a.tagName) break a;
        a = a.parentNode
      }
      a = k
    }
    if (a && !a.disabled) {
      var a = a.name,
        b = this.bb.get(a);
      this.dispatchEvent(new Kq(a, b)) && this.ra(n)
    }
  };
  u.tq = function (a) {
    var b = n,
      c = n,
      d = this.bb,
      f = a.target;
    if ("keydown" == a.type) if (this.bt && 27 == a.keyCode) {
        var g = d && d.wl,
          f = "SELECT" == f.tagName && !f.disabled;
        g && !f ? (c = j, b = d.get(g), b = this.dispatchEvent(new Kq(g, b))) : f || (b = j)
      } else 9 == a.keyCode && (a.shiftKey && f == this.e()) && (c = j);
      else if (13 == a.keyCode) {
      if ("BUTTON" == f.tagName) g = f.name;
      else if (d) {
        var h = d.qj,
          l;
        if (l = h) a: {
            l = d.H.getElementsByTagName("BUTTON");
            for (var m = 0, q; q = l[m]; m++) if (q.name == h || q.id == h) {
                l = q;
                break a
              }
            l = k
        }
        f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName) && !f.disabled;
        l && (!l.disabled && !f) && (g = h)
      }
      g && d && (c = j, b = this.dispatchEvent(new Kq(g, String(d.get(g)))))
    }
    if (b || c) a.stopPropagation(), a.preventDefault();
    b && this.ra(n)
  };

  function Kq(a, b) {
    this.type = Lq;
    this.key = a;
    this.caption = b
  }
  D(Kq, ac);
  var Lq = "dialogselect",
    Jq = "afterhide",
    Iq = "aftershow";

  function Dq(a) {
    this.vb = a || Bf();
    od.call(this)
  }
  D(Dq, od);
  u = Dq.prototype;
  u.Nb = "vl-buttonset";
  u.qj = k;
  u.H = k;
  u.wl = k;
  u.set = function (a, b, c, d) {
    od.prototype.set.call(this, a, b);
    c && (this.qj = a);
    d && (this.wl = a);
    return this
  };

  function Cq(a, b, c, d) {
    return a.set(b.key, b.caption, c, d)
  }
  u.Pb = function () {
    if (this.H) {
      this.H.innerHTML = "";
      var a = Bf(this.H);
      jd(this, function (b, c) {
        var d = a.D("button", {
          name: c
        }, b);
        c == this.qj && (d.className = this.Nb + "-default");
        this.H.appendChild(d)
      }, this)
    }
  };
  u.oa = function (a) {
    if (a && 1 == a.nodeType) {
      this.H = a;
      for (var a = this.H.getElementsByTagName("button"), b = 0, c, d, f; c = a[b]; b++) if (d = c.name || c.id, f = eg(c) || c.value, d) {
          var g = 0 == b;
          this.set(d, f, g, c.name == Mq);
          g && tf(c, this.Nb + "-default")
        }
    }
  };
  u.e = p("H");
  u.C = p("vb");
  var Mq = "cancel",
    Nq = xa("OK"),
    Oq = xa("Cancel"),
    Pq = xa("Yes"),
    Qq = xa("No"),
    Rq = xa("Save"),
    Sq = xa("Continue"),
    Eq = {
      key: "ok",
      caption: Nq
    }, Fq = {
      key: Mq,
      caption: Oq
    }, Tq = {
      key: "yes",
      caption: Pq
    }, Uq = {
      key: "no",
      caption: Qq
    }, Vq = {
      key: "save",
      caption: Rq
    }, Wq = {
      key: "continue",
      caption: Sq
    };
  "undefined" != typeof document && (Cq(new Dq, Eq, j, j), Cq(Cq(new Dq, Eq, j), Fq, n, j), Cq(Cq(new Dq, Tq, j), Uq, n, j), Cq(Cq(Cq(new Dq, Tq), Uq, j), Fq, n, j), Cq(Cq(Cq(new Dq, Wq), Vq), Fq, j, j));

  function Xq(a, b) {
    Bq.call(this, a || "vl-dialog", n, b);
    this.ef = k;
    this.nn = this.Cd = n;
    this.jj = i
  }
  D(Xq, Bq);

  function Yq(a, b) {
    a.ta(b, n);
    if (a.Cd) {
      var c = a.e();
      b.load().G(function () {
        return b.ud ? new K("disposed") : Zq(c, n, "fade", 0.13)
      }, a).G(function () {
        return b.ud ? new K("disposed") : $q(this, b)
      }, a).G(function () {
        b.ud || (Zq(c, j, "fade", 0.13), b.focus())
      })
    } else $q(a, b)
  }
  function $q(a, b) {
    a.ef && a.removeChild(a.ef, j);
    a.ef = b;
    var c = b.qg();
    c && a.za(c);
    a.e() && (b.Pb(a.ua()), a.Lf())
  }
  u = Xq.prototype;
  u.show = function (a) {
    function b(a) {
      f.J();
      !d.ad && d.ya(a)
    }
    function c() {
      f.J();
      !d.ad && d.gb(Ud)
    }
    this.nn = j;
    a && a !== this.jj && (this.jj = a, this.dispatchEvent(a));
    var d = new K,
      f = new Ze;
    f.h(this, Lq, function (a) {
      a.key === Ud ? c() : b(a.key)
    });
    this.Kk && f.h(this, "action", function (a) {
      a = a.key || a.target && a.target.da();
      b(a)
    });
    f.h(this, "hide", c);
    f.h(this, "cmd:nav", function (a) {
      b(a.type)
    });
    this.bb || (a = new ar, Cq(a, Fq, n, j), this.bb = a, this.ab && (this.bb ? (a = this.bb, a.H = this.ab, a.Pb()) : this.ab.innerHTML = "", Rn(this.ab, !! this.bb)));
    this.Cd ?
      this.ra(j) : this.load().G(function () {
      Nc(function () {
        this.ra(this.nn)
      }, 0, this)
    }, this);
    return d
  };
  u.Yh = function () {
    this.nn = n;
    this.ra(n)
  };
  u.load = function () {
    var a = k;
    this.Cd || (this.Cd = j, a = this.o());
    return a || new K(this)
  };
  u.o = function () {
    return br(this)
  };
  u.D = function () {
    Xq.d.D.call(this);
    this.ef && this.ef.Pb(this.ua());
    if (this.bb && this.Kk) {
      var a = this.C();
      jd(this.bb, function (b, c) {
        var g = new ap(b, new cr, a);
        g.ga(c);
        this.ta(g, n);
        g.Pb(this.ab)
      }, this)
    } else Rn(this.ab, n);
    var b = this.mf(),
      c = this.e();
    this.ur(dr(c, 0.13), er(c, 0.13), dr(b, 0.13), er(b, 0.13))
  };
  u.Lf = function () {
    var a = hg(this.C()),
      b = Lf(a) || window;
    if ("fixed" == zn(this.e())) var c = a = 0;
    else c = kg(this.C()), a = c.x, c = c.y;
    var d = Nn(this.e()),
      b = Jf(b),
      a = Math.max(a + b.width / 2 - d.width / 2, 0),
      c = Math.max(c + b.height / 2 - d.height / 2, 0),
      c = Math.min(c, b.height / 5);
    An(this.e(), a, c);
    An(this.nd, a, c)
  };
  u.focus = function () {
    Xq.d.focus.call(this);
    this.ef && this.ef.focus()
  };

  function ar(a) {
    Dq.call(this, a)
  }
  D(ar, Dq);
  ar.prototype.Pb = ha;

  function cr() {}
  D(cr, Lo);
  ia(cr);
  u = cr.prototype;
  u.ua = aa();
  u.D = function (a) {
    var b = {
      "class": "vl-inline-block " + this.we(a).join(" "),
      title: a.rg() || ""
    };
    return a.C().D("div", b, a.Ba)
  };
  u.Mb = function (a) {
    return "DIV" == a.tagName
  };
  u.oa = function (a, b) {
    tf(b, "vl-inline-block", this.P());
    return cr.d.oa.call(this, a, b)
  };
  u.P = t("vl-css3-button");
  Mo("vl-css3-button", function () {
    return new ap(k, cr.Ga())
  });
  Mo("vl-css3-toggle-button", function () {
    var a = new ap(k, cr.Ga());
    Wo(a, 16, j);
    return a
  });

  function fr(a, b, c) {
    ap.call(this, a, b || zp.Ga(), c)
  }
  D(fr, ap);
  Mo("vl-custom-button", function () {
    return new fr(k)
  });

  function gr() {
    ya.call(this);
    this.yc = hr;
    this.$s = this.startTime = k
  }
  D(gr, Ic);
  var hr = 0;
  var ir;

  function jr(a, b) {
    a.style.WebkitTransition = b;
    a.style.MozTransition = b;
    a.style.qy = b;
    a.style.ds = b;
    a.style.ay = b
  };

  function kr(a, b, c, d, f) {
    gr.call(this);
    this.H = a;
    this.Zs = b;
    this.ju = c;
    this.ap = d;
    this.Vg = ka(f) ? f : [f]
  }
  D(kr, gr);
  u = kr.prototype;
  u.play = function () {
    if (1 == this.yc) return n;
    this.dispatchEvent("begin");
    this.dispatchEvent("play");
    this.startTime = wa();
    this.yc = 1;
    if (!y(ir)) if (G) ir = Sb("10.0");
      else {
        var a = document.createElement("div");
        a.innerHTML = '<div style="-webkit-transition:opacity 1s linear;-moz-transition:opacity 1s linear;-o-transition:opacity 1s linear;transition:opacity 1s linear">';
        a = a.firstChild;
        ir = y(a.style.ay) || y(a.style.WebkitTransition) || y(a.style.MozTransition) || y(a.style.ds)
      }
    if (ir) return un(this.H, this.ju), this.Md = Nc(this.jx,
        i, this), j;
    this.Mn(n);
    return n
  };
  u.jx = function () {
    var a = this.H,
      b = this.Vg;
    ka(b) || (b = [b]);
    b = eb(b, function (a) {
      return z(a) ? a : a.Mq + " " + a.duration + "s " + a.timing + " " + a.Ro + "s"
    });
    jr(a, b.join(","));
    un(this.H, this.ap);
    this.Md = Nc(A(this.Mn, this, n), 1E3 * this.Zs)
  };
  u.stop = function () {
    1 == this.yc && this.Mn(j)
  };
  u.Mn = function (a) {
    jr(this.H, "");
    Lc.clearTimeout(this.Md);
    un(this.H, this.ap);
    this.$s = wa();
    this.yc = hr;
    a ? this.dispatchEvent("stop") : this.dispatchEvent("finish");
    this.dispatchEvent("end")
  };
  u.A = function () {
    this.stop();
    kr.d.A.call(this)
  };

  function lr(a, b, c, d, f) {
    return new kr(a, b, {
      opacity: d
    }, {
      opacity: f
    }, {
      Mq: "opacity",
      duration: b,
      timing: c,
      Ro: 0
    })
  }
  function dr(a, b) {
    return lr(a, b, "ease-out", 0, 1)
  }
  function er(a, b) {
    return lr(a, b, "ease-in", 1, 0)
  };

  function mr(a, b, c) {
    for (var a = a.firstChild, d = c || w; a;) {
      if (oa(a) && 1 == a.nodeType) {
        var f = a;
        b.call(d, f) || mr(f, b, c)
      }
      a = a.nextSibling
    }
  }
  function nr(a, b) {
    return a.querySelectorAll && a.querySelector ? a.querySelector("#" + b) : Zf(a, function (a) {
      return oa(a) && 1 == a.nodeType && a.id === b
    })
  }
  function or(a) {
    return "none" !== (a.style[ab("display")] || "") && "hidden" !== (a.style[ab("visibility")] || "")
  }
  function pr(a, b) {
    var c = a.getAttribute(b);
    Ja(Ya(c)) && (c = k);
    return c
  }

  function qr(a, b) {
    return "perspective(400) translateZ(-" + b + "px) rotateY(" + a + "rad)"
  }
  function rr(a, b) {
    un(a, G ? "transition" : J ? "-webkit-transition" : "transition", b)
  }
  function Zq(a, b, c, d) {
    var f, g = new K;
    if (or(a) !== b) {
      d = y(d) ? d : 0.13;
      switch (c) {
      case "fade":
        b ? (un(a, "opacity", 0), Rn(a, j), f = dr(a, d)) : f = er(a, d);
        break;
      case "slide":
        f = b ? sr(a, d, "ease-out", j) : sr(a, d, "ease-in", n)
      }(!b || !f) && g.bg(function () {
        Rn(a, b);
        un(a, "visibility", "")
      })
    }
    f ? (zc(f, "end", function () {
      g.ya(a)
    }), Nc(f.play, 10, f)) : g.ya(a);
    return g
  }

  function sr(a, b, c, d) {
    d && un(a, {
      display: "",
      height: "0"
    });
    un(a, {
      overflow: "hidden",
      position: "relative"
    });
    var f = "",
      g = Gf("vl-content", a);
    g && (f = g.offsetHeight);
    var h;
    d ? (g = 0, h = 1, d = 0) : (g = 1, h = 0, d = f, f = 0);
    return new kr(a, b, {
      height: d + "px",
      opacity: g
    }, {
      height: f + "px",
      opacity: h
    }, {
      Mq: "all",
      duration: b,
      timing: c,
      Ro: 0
    })
  }
  function tr(a) {
    var b = a.getAttribute("vl-fx");
    if (Ja(Ya(b))) {
      if ("absolute" === wn(a, "position")) return "fade";
      if ("DIV" === a.tagName) return "slide"
    } else return b;
    return "none"
  };

  function W(a) {
    ao.call(this, a);
    this.Cd = n;
    this.aa = k;
    this.g = {};
    this.ni = k;
    this.M = new O;
    this.tb("vl-" + qa(this))
  }
  D(W, ao);
  u = W.prototype;
  u.K = k;
  u.ea = ie("vline.ui");
  u.Mg = k;
  u.Qm = n;
  u.Hm = k;
  u.ah = k;
  u.A = function () {
    this.g = this.mo = k;
    this.M.fa();
    this.M = k;
    this.ah && (this.ah.J(), this.ah = k);
    this.Mg && (F(this.Mg, function (a) {
      a.fa()
    }), this.Mg = k);
    W.d.A.call(this)
  };
  u.tb = function (a) {
    this.g.id = a;
    W.d.tb.call(this, a)
  };
  u.Ca = p("aa");
  u.getData = p("g");
  u.U = p("M");
  u.qg = function () {
    return this.g.title
  };
  u.za = function (a) {
    this.g.title = a
  };

  function X(a) {
    var b;
    b = a.M.get("r");
    b = b != k && b instanceof O ? b : k;
    b || (b = new O, ur(a, b), b.fa());
    return b
  }
  function ur(a, b) {
    a.M.set("r", b);
    a.g.Gb = b && b.F()
  }
  u.W = function () {
    return this.aa.W()
  };
  u.Dc = function () {
    return this.aa.Dc()
  };
  u.rc = function () {
    return this.aa.rc()
  };
  u.w = function () {
    return this.W().of()
  };
  u.Nf = function (a) {
    W.d.Nf.call(this, a);
    for (a = this.getParent(); a && !(a instanceof W);) a = a.getParent();
    a && vr(this, a)
  };

  function vr(a, b) {
    a.aa = b.Ca();
    a.g = Ce(b.getData(), a.g);
    pg(a.M, b.U())
  }
  u.Je = function (a) {
    return this.F() + "-" + a
  };
  u.xg = p("Cd");
  u.load = function (a, b) {
    var c, d;
    if (!this.Cd) {
      a && (this.H = d = z(a) ? document.getElementById(a) : a);
      var f = function () {
        this.Cd = j;
        this.Q ? this.show() : d && (b ? this.oa(d) : (this.H = d, this.B()))
      };
      (c = this.o()) ? (c.G(f, this), a && !this.getParent() && c.$d(f, this)) : f.call(this)
    }
    return c || new K(this)
  };
  u.o = function () {
    return br(this)
  };

  function br(a) {
    var b = [];
    a.qc(function (a) {
      a instanceof W ? b.push(a.load()) : br(a)
    });
    return 0 < b.length ? cd.apply(k, b) : new K(a)
  }
  u.qd = function (a, b, c) {
    W.d.qd.call(this, a, b, c);
    a instanceof W || wr(this, a)
  };

  function wr(a, b) {
    b.qc(function (b) {
      b instanceof W ? vr(b, a) : wr(a, b)
    })
  }
  u.navigate = function (a, b) {
    this.dispatchEvent(new kq(a, b))
  };

  function xr(a, b, c, d) {
    for (var b = b.split("."), f = a.M.xa, g = 0; g < b.length && !(f = f[b[g]], f == k); g++);
    b = f || "";
    if ("INPUT" === d.tagName) d.setAttribute("value", b);
    else {
      f = !Ja(b);
      g = d;
      1 === d.parentNode.childNodes.length && (g = d.parentNode);
      var h = !Ja(eg(d));
      if (f || c != k || !h) if (or(g) === f) Yf(d, b);
        else {
          var l;
          a.Q && (l = tr(g));
          f && Yf(d, b);
          Zq(g, f, l)
        }
    }
  }
  function yr(a, b, c, d) {
    a.ah || (a.ah = new Ze);
    a.ah.h(a.U(), "change:" + b, c, n, d || a)
  }
  u.show = function (a, b, c) {
    var d = this.e();
    return d ? Zq(d, a, b, c) : ed()
  };
  u.D = function () {
    this.R(zr(this))
  };
  u.oa = function (a) {
    Ar(this, a)
  };

  function Ar(a, b) {
    a.Q && e(Error("Component already rendered"));
    if (b && a.Mb(b)) {
      a.ao = j;
      if (!a.vb || a.vb.ma != Df(b)) a.vb = Bf(b);
      a.R(b);
      var c = a.getParent();
      (!c || c.Q) && a.B()
    } else e(Error("Invalid element to decorate"))
  }
  u.R = function (a) {
    W.d.R.call(this, a);
    Br(this, this, a);
    this.Cd || this.show(n)
  };
  u.B = function () {
    W.d.B.call(this);
    this.Qm && (this.ni = new Ym(jg(this.C())), this.I().h(this.ni, "resize", this.rb), this.rb());
    this.M.Oa(j, n)
  };
  u.pa = function () {
    this.ni && (this.ni.J(), this.ni = k);
    W.d.pa.call(this)
  };

  function Br(a, b, c) {
    mr(c, function (c) {
      var f;
      a: {
        f = c;
        if (z(f) && (f = b.Fh(f), !f)) {
          f = k;
          break a
        }
        var g = f.getAttribute("id"),
          h = eo(a, g) || Oo(f);
        h ? (h.e() || (g && h.tb(g), h.getParent() != a && a.ta(h, n), h instanceof Cr ? Br(h, b, f) : mr(f, function (a) {
          Dr(b, a)
        }), Ar(h, f)), f = h) : f = k
      }
      g = b;
      f && f instanceof W && (g = f);
      Dr(g, c);
      return !!f
    })
  }
  function Dr(a, b) {
    var c = b.getAttribute("vl-bind");
    if (c) {
      var d = b;
      z(d) && (d = a.Fh(d));
      xr(a, c, k, d);
      yr(a, c, function (a) {
        return xr(this, c, a.oldVal, d)
      }, a)
    }
  }

  function zr(a) {
    var b = a.C().createElement("DIV"),
      c = a.K;
    c && (c = c(a.g), Fa(c, "<tr") && (b = a.C().createElement("TBODY")), b.innerHTML = c, 1 === b.childNodes.length && (b = b.firstChild));
    b.id = a.F();
    return b
  }
  u.refresh = ea(6);
  u.focus = function () {
    return Ug() ? n : Er(this)
  };

  function Er(a) {
    var b = k;
    a.eb && (b = hb(a.eb, function (a) {
      return a instanceof W ? a.focus() : Er(a)
    }));
    return !!b
  }
  u.Fh = function (a) {
    var b, a = this.Je(a);
    return this.Q ? this.C().e(a) : (b = this.e()) ? nr(b, a) : k
  };
  u.ye = ea(0);
  u.getElementById = function (a) {
    return Zf(this.e(), function (b) {
      return b.id === a
    })
  };
  u.rb = function () {
    var a;
    a = this.e();
    a = new zf(a.offsetWidth, a.offsetHeight);
    if (!this.Hm || !Af(this.Hm, a)) this.Hm = a, this.rn(a)
  };
  u.rn = ba();

  function Y(a) {
    W.call(this, a);
    this.Mm = k;
    this.ic = "";
    this.Qb = {}
  }
  D(Y, W);
  u = Y.prototype;
  u.ar = n;
  u.Uc = function (a, b, c) {
    this.Mm = a;
    this.Qb = b;
    this.M.set(b);
    return this.load(c, j)
  };
  u.Lh = p("ic");
  u.An = ca("ic");
  u.B = function () {
    Y.d.B.call(this);
    Ug() || this.focus()
  };

  function Fr(a) {
    Y.call(this, a);
    this.Dd = this.Kc = this.Ua = k;
    this.Fi = [];
    this.Oo = [];
    this.Qq = this.Pq = this.Bi = this.Rb = this.Cl = k;
    this.zp = "vl-"
  }
  D(Fr, Y);
  u = Fr.prototype;
  u.ar = j;
  u.qg = function () {
    return this.Ua && this.Ua.qg() || Fr.d.qg.call(this)
  };
  u.An = function (a) {
    Fr.d.An.call(this, a);
    Ja(a) || (this.zp = "vl" + a.replace(/[\/\.]/g, "-") + "-")
  };
  u.Uc = function (a, b, c) {
    return Fr.d.Uc.call(this, a, b, c).G(function () {
      return this.Wg(this.Mm)
    }, this)
  };
  u.R = function (a) {
    Fr.d.R.call(this, a);
    this.Ua && !this.Ua.Q && Gr(this)
  };
  u.Lj = function () {
    return this.e()
  };
  u.refresh = ea(5);
  u.Wg = function (a, b) {
    this.Mm = a;
    if (G && !(0 <= $a(Tg, 10))) {
      var c = window.location.hash || "";
      if (Kl(window.location.href).m() === Hr() || Fa(c, "#_vline_")) return this.dispatchEvent(new P("cmd:unsupportedbrowser")), new K("NONE")
    }
    if (!(0 < this.Fi.length)) return this.Rb = a, new K("NONE");
    var d = a.m(),
      d = d.substr(this.Lh().length),
      f, g = this.W().yg();
    if ((c = hb(this.Fi, function (a) {
      f = a.test(d, g);
      return !!f
    })) && c.Nm && !g) if (this.Dc().Rf) c = k;
      else return ed("LOGIN_REQUIRED");
    c || (c = hb(this.Oo, function (a) {
      return !y(a.Nm) || a.Nm === g
    })) &&
      c.qx && this.rc().mn(this.Lh() + c.m());
    f = f || {};
    f.path = a.m();
    return c ? Ir(this, c, a, f || {}, b) : ed("NOT_FOUND")
  };

  function Ir(a, b, c, d, f) {
    if (a.Cl === b && a.Ua && a.Ua.ar && !f) return a.Ua.Uc(c, d).G(function () {
        this.Rb = c;
        this.Cl = b
      }, a);
    if (a.Kc || a.Bi) return a.Bi = b, a.Pq = d, a.Qq = c, new K(a);
    a.Ua && (a.Ua.tb("out-" + a.Ua.F()), a.Dd = a.Ua, a.Ua = k);
    f = b.et();
    f.tb(b.Eo.zp + b.jb + "-view");
    f.An(b.Lh());
    b.K && (f.K = b.K);
    b.Ue && f.za(b.Ue);
    b.g && rc(f.getData(), b.g);
    a.Kc = f;
    a.ta(a.Kc, n);
    f = k;
    if (!a.Dd && a.e()) {
      var g = a.Lj();
      g && (f = nr(g, a.Kc.F()))
    }
    return a.Kc.Uc(c, d, f).G(function () {
      this.Rb = c;
      this.Cl = b;
      this.Kc && (this.Ua = this.Kc, this.Kc = k, this.e() && Gr(this))
    },
      a).$d(function (a) {
      Jr(this, this.Kc);
      this.Kc = k;
      if (this.Ua = this.Dd) this.Ua.tb(this.Ua.F().substr(4)), this.Dd = k;
      if ("NOT_FOUND" === a.type) return this.Uc("", {})
    }, a).Ze(function () {
      Nc(function () {
        if (this.Bi) {
          var a = this.Bi;
          this.Bi = k;
          Ir(this, a, this.Qq, this.Pq)
        }
      }, 0, this)
    }, a)
  }
  function Jr(a, b) {
    b && (a.removeChild(b, n), b.J())
  }

  function Gr(a) {
    a.Dd && a.removeChild(a.Dd, n);
    if (!a.Ua.e()) {
      a.Ua.D();
      var b = a.Lj(),
        c = b.firstChild,
        d = a.Ua.e();
      c ? (b.replaceChild(d, c), J && Nc(function () {
        un(d, "border-color", "transparent")
      })) : b.appendChild(d)
    }
    a.Dd && (a.Dd.J(), a.Dd = k);
    a.Q && a.Ua.B()
  }
  u.gr = function () {
    var a, b = this.C(),
      c = Kf(b.ma),
      d = 0,
      f = 0,
      g = this.Rb.Cc,
      h;
    if (h = !Ja(g)) h = a = hb(b.ma.anchors, function (a) {
        return a.name === g
      });
    h && (a = In(a), d = a.x, f = a.y);
    c.scrollTop = f;
    c.scrollLeft = d
  };

  function Kr(a, b) {
    this.oi = b || "";
    this.$i = a || ""
  }
  var Lr = /[()<>@,;:\\\".\[\]]/,
    Mr = /\"/g,
    Nr = /\\\"/g,
    Or = /\\/g,
    Pr = /\\\\/g;
  Kr.prototype.getName = p("oi");
  Kr.prototype.xn = ca("oi");
  Kr.prototype.toString = function () {
    var a = this.getName(),
      a = a.replace(Mr, "");
    Lr.test(a) && (a = '"' + a.replace(Or, "\\\\") + '"');
    return "" == a ? this.$i : "" == this.$i ? a : a + " <" + this.$i + ">"
  };
  Kr.prototype.Am = function () {
    return /^[+a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,6}$/.test(this.$i)
  };

  function Qr(a, b) {
    if ('"' != a.charAt(b)) return n;
    for (var c = 0, d = b - 1; 0 <= d && "\\" == a.charAt(d); d--) c++;
    return 0 != c % 2
  };

  function Rr(a) {
    ya.call(this);
    this.De = [];
    a && (F(a, function (a) {
      Sr(this, a, n)
    }, this), pb(this.De, a))
  }
  D(Rr, Ic);
  u = Rr.prototype;
  u.Kd = k;
  u.jr = k;
  u.Ul = function () {
    return this.De.length
  };
  u.Gh = function (a) {
    return this.De[a] || k
  };
  u.Xe = function (a) {
    this.cg(a, this.Ul())
  };
  u.cg = function (a, b) {
    a && (Sr(this, a, n), qb(this.De, b, 0, a))
  };
  u.removeItem = function (a) {
    a && mb(this.De, a) && a == this.Kd && (this.Kd = k, this.dispatchEvent("select"))
  };
  u.Ph = p("Kd");
  u.Pf = function (a) {
    a != this.Kd && (Sr(this, this.Kd, n), this.Kd = a, Sr(this, a, j));
    this.dispatchEvent("select")
  };
  u.Xl = function () {
    return this.Kd ? cb(this.De, this.Kd) : -1
  };
  u.rr = function (a) {
    this.Pf(this.Gh(a))
  };
  u.clear = function () {
    kb(this.De);
    this.Kd = k
  };
  u.A = function () {
    Rr.d.A.call(this);
    delete this.De;
    this.Kd = k
  };

  function Sr(a, b, c) {
    b && ("function" == typeof a.jr ? a.jr(b, c) : "function" == typeof b.Dn && b.Dn(c))
  };

  function Tr(a, b, c, d) {
    Cp.call(this, a, b, c, d);
    this.rj = a;
    Ur(this);
    this.zn("listbox")
  }
  D(Tr, Cp);
  u = Tr.prototype;
  u.wa = k;
  u.rj = k;
  u.B = function () {
    Tr.d.B.call(this);
    Ur(this);
    Vr(this);
    rn(this.e(), "haspopup", "false")
  };
  u.R = function (a) {
    Tr.d.R.call(this, a);
    (a = this.og()) ? (this.rj = a, Ur(this)) : this.rr(0)
  };
  u.A = function () {
    Tr.d.A.call(this);
    this.wa && (this.wa.J(), this.wa = k);
    this.rj = k
  };
  u.fm = function (a) {
    this.Pf(a.target);
    Tr.d.fm.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
  };
  u.Tt = function () {
    var a = this.Ph();
    Tr.d.ga.call(this, a && a.da());
    Ur(this)
  };
  u.Ji = function (a) {
    var b = Tr.d.Ji.call(this, a);
    a != b && (this.wa && this.wa.clear(), a && (this.wa ? a.qc(function (a) {
      Wr(a);
      this.wa.Xe(a)
    }, this) : Xr(this, a)));
    return b
  };
  u.Xe = function (a) {
    Wr(a);
    Tr.d.Xe.call(this, a);
    this.wa ? this.wa.Xe(a) : Xr(this, Ep(this))
  };
  u.cg = function (a, b) {
    Wr(a);
    Tr.d.cg.call(this, a, b);
    this.wa ? this.wa.cg(a, b) : Xr(this, Ep(this))
  };
  u.removeItem = function (a) {
    Tr.d.removeItem.call(this, a);
    this.wa && this.wa.removeItem(a)
  };
  u.Pf = function (a) {
    if (this.wa) {
      var b = this.Ph();
      this.wa.Pf(a);
      a != b && this.dispatchEvent("change")
    }
  };
  u.rr = function (a) {
    this.wa && this.Pf(this.wa.Gh(a))
  };
  u.ga = function (a) {
    if (a != k && this.wa) for (var b = 0, c; c = this.wa.Gh(b); b++) if (c && "function" == typeof c.da && c.da() == a) {
          this.Pf(c);
          return
        }
    this.Pf(k)
  };
  u.Ph = function () {
    return this.wa ? this.wa.Ph() : k
  };
  u.Xl = function () {
    return this.wa ? this.wa.Xl() : -1
  };

  function Xr(a, b) {
    a.wa = new Rr;
    b && b.qc(function (a) {
      Wr(a);
      this.wa.Xe(a)
    }, a);
    Vr(a)
  }

  function Vr(a) {
    a.wa && a.I().h(a.wa, "select", a.Tt)
  }
  function Ur(a) {
    var b = a.Ph();
    a.Yb(b ? b.og() : a.rj)
  }
  function Wr(a) {
    a.zn(a instanceof wp ? "option" : "separator")
  }
  u.$a = function (a, b) {
    Tr.d.$a.call(this, a, b);
    Jo(this, 64) && lp(Ep(this), this.Xl())
  };
  Mo("vl-select", function () {
    return new Tr(k)
  });

  function Cr(a, b) {
    Qo.call(this, a || "", k, b);
    this.aa = k
  }
  D(Cr, Qo);
  Cr.prototype.w = function () {
    return this.W().of()
  };
  Cr.prototype.W = function () {
    return this.aa.W()
  };
  Cr.prototype.Ca = p("aa");
  Cr.prototype.B = function () {
    Ro(this, n);
    Cr.d.B.call(this);
    var a = this.hb();
    if (a) {
      var b = this.Hh();
      to(b, a);
      this.I().h(b, "key", this.ed)
    }
  };

  function Yr(a) {
    return "<div" + (a.id ? ' id="' + a.id + '"' : "") + 'class="vl-css3-button' + (a.className ? " " + a.className : "") + '"' + (a.nh ? 'vl-event="cmd:' + a.nh + '"' : "") + ">" + a.label + "</div>"
  }
  function Zr(a) {
    return '<div id="' + a.id + '-err" class="' + a.className + '"' + (a.Ch ? 'vl-fx="' + a.Ch + '"' : "") + '><div class="vl-content vl-err-text" vl-bind="' + a.bind + '"></div></div>'
  }

  function $r(a) {
    var b = '<div id="' + a.id + '" class="vl-form-wrap vl-' + a.Cb + '-form-wrap"><form id="' + a.id + '-form" class="vl-form vl-' + a.Cb + '-form" vl-event="cmd:submit">';
    if (a.heading || a.Mf) {
      b += '<h2 id="' + a.id + '-heading" class="vl-form-heading vl-' + a.Cb + '-form-heading">';
      if (a.heading) b += a.heading;
      else if (a.Mf) switch (a.mode) {
        case "edit":
          b += "Edit " + a.Mf;
          break;
        case "new":
          b += "Create " + a.Mf
      }
      b += "</h2>"
    }
    for (var c = "vl-form-field-label vl-" + a.Cb + "-form-field-label", b = b + "", d = R(a, {
        className: "vl-form-info",
        bind: "formInfo"
      }),
        b = b + ('<table class="vl-form-controls"><caption class="vl-form-caption">' + ('<div id="' + d.id + '-info" class="' + d.className + '"' + (d.Ch ? 'vl-fx="' + d.Ch + '"' : "") + '><div class="vl-content vl-info-text" vl-bind="' + d.bind + '"></div></div>') + Zr(R(a, {
        className: "vl-form-err vl-" + a.Cb + "-form-err",
        bind: "formErr"
      })) + '</caption><tbody class="vl-form-fields vl-' + a.Cb + '-form-fields">'), d = a.$o, f = d.length, g = 0; g < f; g++) b += as(R(d[g], {
        ec: a.ec,
        Cu: c,
        Fm: g == f - 1
      }));
    if (a.to != n) {
      c = '<td colspan="' + (a.ec ? 1 : 2) + '" class="vl-form-buttons vl-' +
        a.Cb + '-form-buttons">' + (a.Ql ? '<p class="vl-form-footer vl-' + a.Cb + '-form-footer">' + a.Ql + "</p>" : "") + (a.Nl ? a.Nl : "");
      if ("view" == a.mode) c += Yr({
          id: a.id + "-edit",
          className: "vl-form-edit-button vl-" + a.Cb + "-form-edit-button",
          nh: a.gf ? a.gf : "edit",
          label: "Edit"
        });
      else {
        c += "edit" == a.mode ? Yr({
          id: a.id + "-cancel",
          className: "vl-form-cancel-button vl-" + a.Cb + "-form-cancel-button",
          nh: a.gf ? a.gf : "cancel",
          label: "Cancel"
        }) : "";
        d = "";
        if (a.zc) d += a.zc;
        else switch (a.mode) {
          case "edit":
            d += "Save";
            break;
          case "new":
            d += "Create"
        }
        c += Yr({
          id: a.id + "-submit",
          className: "vl-css3-button-primary vl-form-submit-button vl-" + a.Cb + "-form-submit-button",
          nh: a.gf ? a.gf : "submit",
          label: d
        })
      }
      a = "<tfoot><tr>" + (c + "</td>") + "</tr></tfoot>"
    } else a = "";
    return b += "</tbody>" + a + "</table></form></div>"
  }

  function as(a) {
    var b = '<tr id="' + a.id + '" class="vl-form-field vl-' + a.Cb + '-form-field">' + (!a.ec ? '<td class="' + a.Cu + '">' + a.label + '<span style="font-weight:normal;">:</span></td>' : ""),
      c = '<td id="' + a.id + '-val" class="vl-form-field-val vl-' + a.Cb + '-form-field-val">';
    if ("view" == a.mode) c += "url" == a.type ? '<a href="#_link_" vl-bind="r.' + a.key + '"></a>' : '<span vl-bind="r.' + a.key + '"></span>';
    else if ("edit" == a.mode && !a.uh) c += "url" == a.type && !a.uh ? '<div class="' + (!a.Fm ? " vl-input-wrap-internal" : "") + '"><a href="#_link_" vl-bind="r.' +
        a.key + '"></a></div>' : '<div class="' + (!a.Fm ? " vl-input-wrap-internal" : "") + '" vl-bind="r.' + a.key + '"></div>';
    else {
      c += '<div id="' + a.id + '-input-wrap" class="vl-input-wrap vl-' + a.Cb + "-form-input-wrap" + (!a.Fm ? " vl-input-wrap-internal" : "") + '">';
      if ("select" == a.type) {
        for (var c = c + ((a.ec ? '<span class="vl-select-label">' + a.label + ":</span>" : "") + '<div id="' + a.id + '-select" class="vl-select"><ul class="vl-menu">'), a = a.dc, d = a.length, f = 0; f < d; f++) var g = a[f],
        c = c + ("<li class='vl-menuitem' value=\"" + g.id + '">' + g.name + "</li>");
        c += "</ul></div>"
      } else c += '<input id="' + a.id + '-input" type="' + a.type + '" class="vl-label-input vl-form-input vl-' + a.Cb + '-form-input" name="key"' + ("edit" == a.mode && "password" == a.type ? 'label="&bull;&bull;&bull;&bull;&bull;&bull;"' : a.ec ? 'label="' + a.label + '"' : a.Uj ? 'label="' + a.Uj + '"' : "") + 'vl-bind="r.' + a.key + '">' + Zr(R(a, {
          className: "vl-form-field-err vl-" + a.Cb + "-form-field-err",
          bind: "fieldErr"
        }));
      c += "</div>"
    }
    return b + (c + "</td>") + "</tr>"
  };

  function bs(a, b, c) {
    for (var b = a = "", d = 0; d < c.length;) {
      var f;
      f = c.charAt(d);
      var g = '"<(['.indexOf(f);
      if (!(-1 == g || Qr(c, d))) {
        for (var g = '">)]'.charAt(g), h = c.indexOf(g, d + 1); 0 <= h && Qr(c, h);) h = c.indexOf(g, h + 1);
        f = 0 <= h ? c.substring(d, h + 1) : f
      }
      "<" == f.charAt(0) && -1 != f.indexOf(">") ? b = f.substring(1, f.indexOf(">")) : "" == b && (a += f);
      d += f.length
    }
    "" == b && -1 != a.indexOf("@") && (b = a, a = "");
    a = Ia(a);
    a = Va(a, "'");
    a = Va(a, '"');
    a = a.replace(Nr, '"');
    a = a.replace(Pr, "\\");
    b = Ia(b);
    if (!(new Kr(b, a)).Am()) return "INVALID_EMAIL"
  }

  function cs(a, b, c) {
    if (6 > c.length) return "INVALID_PASSWORD"
  }
  function ds() {}
  function es(a, b, c) {
    a = fs(this.yj, "password");
    if (a != k && c !== a.da()) return "PASSWORDS_DONT_MATCH"
  }
  function gs(a, b, c) {
    if (Na(c) !== c) return "INVALID_FIELD"
  }
  function hs(a, b, c) {
    a = new vl(c);
    b = a.toString();
    if (!a.Hd || b !== c) return "INVALID_URL"
  }
  function is(a, b, c, d, f) {
    W.call(this, f);
    this.yj = a;
    this.Rr = [];
    this.g.key = b;
    this.g.label = c || b;
    this.g.Uj = i;
    this.g.name = this.g.label;
    this.g.type = d || "text";
    this.g.uh = j;
    this.g.required = n
  }
  D(is, W);
  u = is.prototype;
  u.K = as;
  u.getKey = function () {
    return this.g.key
  };
  u.kc = function (a) {
    this.g.type = a;
    "email" === a ? js(this, bs) : "password" === a && js(this, cs)
  };
  u.qf = function () {
    return this.g.label
  };
  u.getName = function () {
    return this.g.name
  };
  u.xn = function (a) {
    this.g.name = a
  };

  function ks(a, b) {
    a.U().set("valid", b);
    a.g.Sy && a.uj("vl-form-field-valid", "vl-form-input-valid", b)
  }
  function ls(a, b) {
    a.U().set("invalid", b);
    a.uj("vl-form-field-invalid", "vl-form-input-invalid", b)
  }
  u.uj = function (a, b, c) {
    (b = this.e()) && wf(b, a, c)
  };

  function ms(a) {
    return "new" === ns(a.yj) || a.g.uh
  }
  u.clear = function () {
    this.ga("");
    this.kd();
    ks(this, n);
    ls(this, n)
  };
  u.kd = function (a) {
    var b = !Ja(Ya(a)),
      a = b && (a in mg ? mg[a](this.g) : a);
    this.M.set("fieldErr", a);
    ls(this, b);
    b && ks(this, n)
  };

  function js(a, b) {
    lb(a.Rr, b)
  }
  u.cv = function () {
    this.Yf(j)
  };
  u.cx = function (a) {
    this.ga(a.da())
  };
  u.o = function () {
    ks(this, n);
    ls(this, n);
    return new K(this)
  };

  function os(a, b, c, d, f) {
    is.call(this, a, b, c, d, f);
    this.Mc = k
  }
  D(os, is);
  u = os.prototype;
  u.uj = function (a, b, c) {
    os.d.uj.call(this, a, b, c);
    (a = this.Mc && this.Mc.e()) && wf(a, b, c)
  };
  u.R = function (a) {
    os.d.R.call(this, a);
    this.Mc = eo(this, this.Je("input"))
  };
  u.B = function () {
    os.d.B.call(this);
    if (this.Mc) {
      yr(this, "value", this.cx);
      var a = this.Mc.e();
      this.I().h(a, "blur", this.cv, n, this)
    }
  };
  u.da = function () {
    return this.Mc ? Ka(this.Mc.da()) : ""
  };
  u.ga = function (a) {
    this.Mc && this.Mc.ga(a)
  };
  u.Yf = function (a) {
    var b = j,
      c = n;
    if (this.Mc) {
      var d, f = this.da(),
        g = this.qf();
      Ja(f) ? !a && this.g.required && (d = "FIELD_REQUIRED", c = b = n) : (fb(this.Rr, function (a) {
        (d = a.call(this, this.F(), g, f)) && (b = n);
        return !b
      }, this), c = b);
      this.kd(d);
      ks(this, c)
    }
    return b
  };
  u.focus = function () {
    if (ms(this)) {
      if (this.Mc) {
        var a = this.Mc.e();
        a.focus();
        a.select()
      }
      return j
    }
    return n
  };

  function ps(a, b, c, d, f, g, h, l) {
    is.call(this, a, b, g, h, l);
    this.Jd = k;
    this.me = d || k;
    this.Dx = f;
    this.g.dc = c
  }
  D(ps, is);
  u = ps.prototype;
  u.nf = ea(3);
  u.R = function (a) {
    ps.d.R.call(this, a);
    this.Jd = eo(this, this.Je("select"))
  };
  u.B = function () {
    ps.d.B.call(this);
    this.Jd && (this.I().h(this.Jd, "action", function (a) {
      this.Dx(a)
    }), this.me && this.Jd.ga(this.me))
  };
  u.da = function () {
    return this.Jd ? this.Jd.da() : ""
  };
  u.ga = function (a) {
    this.Jd ? this.Jd.ga(a) : this.me = a
  };
  u.Yf = t(j);
  u.focus = function () {
    return ms(this) ? (this.Jd && this.Jd.e().focus(), j) : n
  };

  function Z(a, b) {
    W.call(this, b);
    this.by = "entity";
    this.Qi = this.ng = this.By = k;
    this.lf = [];
    this.g.$o = [];
    this.g.Cb = a
  }
  D(Z, W);
  u = Z.prototype;
  u.K = $r;
  u.sc = t(k);

  function ns(a) {
    return a.g.mode || "new"
  }
  u.kc = ca("by");
  u.kd = function (a) {
    a = a && (a in mg ? mg[a](i) : a);
    this.M.set("formErr", a)
  };

  function qs(a, b) {
    a.M.set("formInfo", b)
  }
  function rs(a, b, c, d, f, g, h) {
    b = new os(a, b, d, c, a.C());
    b.g.uh = y(g) ? g : j;
    f && (b.g.required = j);
    h && js(b, h);
    a.lf.push(b);
    a.xg() && ss(a, b);
    return b
  }
  function ss(a, b) {
    a.ng.ta(b);
    a.g.$o.push(b.getData())
  }
  function ts(a, b, c, d, f, g) {
    b = new ps(a, c, b, d, f, g, "select", a.C());
    b.g.uh = j;
    b.g.required = j;
    a.lf.push(b);
    a.xg() && ss(a, b);
    return b
  }

  function us(a, b, c, d, f, g) {
    a = rs(a, b, "text", c, d, f, i);
    g || js(a, gs);
    return a
  }
  function vs(a, b, c, d, f) {
    a = rs(a, "password", "password", b, c, d, f);
    f != k || js(a, cs);
    return a
  }
  function ws(a, b, c) {
    a = rs(a, b, "password", "Confirm Password", c, i, i);
    js(a, es)
  }
  function xs(a, b, c, d) {
    a = rs(a, b, "email", c, d, i, i);
    js(a, bs);
    return a
  }
  function ys(a, b, c, d, f) {
    a = rs(a, b, "url", c, d, f, i);
    js(a, hs);
    return a
  }
  function fs(a, b) {
    return hb(a.lf, function (a) {
      return a.getKey() === b
    })
  }
  function zs(a, b, c) {
    var d = c || a;
    F(a.lf, function (a) {
      b.call(d, a)
    })
  }
  u.da = function (a) {
    if (a = fs(this, a)) return a.da()
  };
  u.ga = function (a, b) {
    X(this).set(a, b);
    var c = fs(this, a);
    c && c.ga(b)
  };
  u.Xa = function () {
    var a = {};
    zs(this, function (b) {
      if (ms(b)) {
        var c = b.da();
        Ja(Ya(c)) && (c = i);
        a[b.getKey()] = c
      }
    }, this);
    return a
  };
  u.o = function () {
    this.ng = new Cr("");
    this.ng.Te(j);
    Wo(this.ng, 32, n);
    var a = this.ng,
      b = this.Je("form");
    a.tb(b);
    this.ta(a, n);
    F(this.lf, function (a) {
      ss(this, a)
    }, this);
    return Z.d.o.call(this)
  };
  u.R = function (a) {
    Z.d.R.call(this, a);
    this.Qi = eo(this.ng || this, this.Je("submit"))
  };
  u.B = function () {
    Z.d.B.call(this);
    this.I().h(this, "cmd:edit", this.qv).h(this, "cmd:submit", this.Dq).h(this, "cmd:cancel", this.ev);
    this.Yf(j)
  };
  u.qv = function (a) {
    a.stopPropagation();
    this.navigate(this.rc().ib() + "/edit")
  };
  u.Dq = function (a) {
    a.stopPropagation();
    this.Yf() && (this.Qi && this.Qi.Na(n), X(this).set(this.Xa()), this.lc().Rk(this.Eb, this.le, this).Ze(this.xw, this))
  };
  u.ev = function (a) {
    a.stopPropagation();
    a = this.rc().ib();
    Ga(a, "/edit") && (a = a.substr(0, a.length - 5));
    this.navigate(a)
  };
  u.Eb = ba();
  u.le = function (a) {
    a instanceof M ? "NONE" !== a.Da() && this.kd(a.Da()) : this.kd(a.message);
    zs(this, function (a) {
      ks(a, n)
    });
    this.focus();
    if (a = a.map) {
      var b = n;
      ic(a, function (a, d) {
        var f = fs(this, d);
        f.kd(a.Da());
        b || (b = f.focus())
      }, this)
    }
  };
  u.xw = function () {
    this.Qi && this.Qi.Na(j)
  };
  u.lc = function () {
    var a = this.sc();
    if (a) {
      var b = X(this);
      switch (ns(this)) {
      case "new":
        return this.w().Pc(a, b, b.F());
      case "edit":
        return this.w().put(b.m(), b)
      }
    }
    return new K({})
  };
  u.Yf = function (a) {
    var b = j;
    zs(this, function (c) {
      c.Yf(a) || (b = n)
    });
    return b
  };
  u.clear = function () {
    zs(this, function (a) {
      a.clear()
    });
    this.kd()
  };
  u.pr = function (a) {
    this.g.mode = a
  };

  function As(a) {
    return $r(R(a, {
      zc: "Create",
      ec: j
    }))
  };

  function Bs(a) {
    Z.call(this, "signin", a);
    this.kc("authRequest");
    this.za("Sign in")
  }
  D(Bs, Z);
  Bs.prototype.K = function (a) {
    return a = "" + $r(R(a, {
      zc: "Sign in",
      ec: j,
      Nl: "vline" == a.Ac.z ? '<div class="vl-css3-button vl-signin-signup" vl-cmd="register">Sign up</div>' : "",
      Ql: '<a class="vl-signin-forgot" href="#_vline_forgotpassword">Forgot password?</a>'
    }))
  };
  Bs.prototype.o = function () {
    xs(this, "email", lg(), j);
    vs(this, "Password", j, j, ds);
    return Bs.d.o.call(this)
  };
  Bs.prototype.lc = function () {
    var a = this.w(),
      b = X(this),
      b = a.vc("/service", b, "authorize");
    b.G(function (a) {
      a = lk(a);
      Hc(this.zb, new nl(a))
    }, a);
    return b
  };
  Bs.prototype.Eb = ba();

  function Hr() {
    return "/developer/app/"
  };

  function Cs(a) {
    Z.call(this, "register", a);
    this.kc("register");
    this.za("Sign Up")
  }
  D(Cs, Z);
  Cs.prototype.K = function (a) {
    return $r(R(a, {
      zc: "Sign up",
      ec: j,
      Ql: '<a class="vl-signin-forgot" href="#_vline_signin">Already have an account?</a>'
    }))
  };
  Cs.prototype.o = function () {
    this.g.z = this.W().qa();
    var a = xs(this, "email", "Enter your email address to sign up", j);
    a.xn(lg());
    a.focus();
    return Cs.d.o.call(this)
  };
  Cs.prototype.lc = function () {
    return this.w().call("register", X(this))
  };
  Cs.prototype.Eb = function () {
    this.dispatchEvent("cmd:registersuccess");
    this.clear()
  };

  function Ds(a) {
    Z.call(this, "forgotpassword", a);
    this.za("Forgot Password")
  }
  D(Ds, Z);
  Ds.prototype.K = function (a) {
    return $r(R(a, {
      ec: j,
      Mf: "Forgot Password",
      zc: "Submit"
    }))
  };
  Ds.prototype.o = function () {
    this.g.z = this.W().qa();
    xs(this, "email", "Enter your email address to reset password", j).xn(lg());
    return Ds.d.o.call(this)
  };
  Ds.prototype.lc = function () {
    return this.w().call("resetPassword", X(this))
  };
  Ds.prototype.Eb = function () {
    this.dispatchEvent("cmd:forgotpasswordsuccess");
    this.clear()
  };

  function Es(a, b) {
    Z.call(this, "accountexists", b);
    this.za("Account Exists");
    qs(this, "There is already an account associated with " + a + ".")
  }
  D(Es, Z);
  Es.prototype.K = function (a) {
    return $r(R(a, {
      zc: "Sign in",
      gf: "signin",
      ec: j
    }))
  };

  function Fs(a, b, c) {
    Z.call(this, b || "account", c);
    this.g.z = a;
    this.kc("account");
    this.od = k;
    this.Qe = Gs;
    this.Id = k;
    this.za("Create User")
  }
  D(Fs, Z);
  Fs.prototype.K = As;
  var Gs = "Gravatar",
    Hs = {
      oy: Gs,
      ly: "Custom Image"
    };
  u = Fs.prototype;
  u.R = function (a) {
    Fs.d.R.call(this, a);
    "edit" === ns(this) && (a = this.od.da(), Fa(a, "https://www.gravatar.com/avatar/") || (this.Qe = "Custom Image"));
    Is(this, this.Qe)
  };
  u.o = function () {
    this.Sp();
    return Fs.d.o.call(this)
  };
  u.B = function () {
    Fs.d.B.call(this);
    this.Id && this.Id.ga(this.Qe)
  };
  u.Sp = function () {
    us(this, "displayName", "Full Name", j);
    xs(this, "email", lg(), j);
    var a = ns(this);
    if ("view" !== a) {
      a = "new" === a;
      vs(this, "Password", a);
      ws(this, "_passwordConfirm", a);
      var b = [];
      ic(Hs, function (a, d) {
        b.push({
          id: d,
          name: a
        })
      });
      a = A(function (a) {
        this.Qe = a.target.da();
        Is(this, this.Qe)
      }, this);
      this.Id = ts(this, b, "dummy", this.Qe, a, "Thumbnail");
      this.od = ys(this, "thumbnailUrl", "Thumbnail URL", j, j)
    } else this.od = ys(this, "thumbnailUrl", "Thumbnail URL", j, n), us(this, "id", "User ID", j, n)
  };

  function Is(a, b) {
    "view" !== ns(a) && a.od && (b === Gs ? (a.od.show(n), a.od.g.required = n) : (a.od.show(j), a.od.g.required = j))
  }
  u.lc = function () {
    if ("view" !== ns(this) && this.Qe === Gs) {
      var a = Ae(fs(this, "email").da());
      this.od.ga(a)
    }
    return Fs.d.lc.call(this)
  };
  u.sc = function () {
    return "edit" === ns(this) ? Hj(this.g.z, X(this).F()) : Hj(this.g.z)
  };
  u.Eb = function () {
    "edit" == ns(this) ? this.dispatchEvent("cmd:editusersuccess") : this.dispatchEvent("cmd:addusersuccess")
  };
  u.Xa = function () {
    if ("view" !== ns(this) && this.od && this.Qe === Gs) {
      var a = Ae(fs(this, "email").da());
      this.od.ga(a)
    }
    var a = Fs.d.Xa.call(this),
      b = this.g.z,
      c = a.id;
    c && -1 == c.indexOf(":") && (a.id = b + ":" + c);
    a.dummy && delete a.dummy;
    return a
  };

  function Js(a, b, c) {
    Fs.call(this, b, "signup", c);
    this.g.nc = a;
    this.za("Create Account")
  }
  D(Js, Fs);
  u = Js.prototype;
  u.K = As;
  u.Sp = function () {
    this.g.z = this.W().qa();
    if ("vline" === this.g.z) {
      var a = this.Dc();
      a.Zh = "/developer/firstuse/app"
    } else a = this.Dc(), a.Zh = "/testcall";
    a.ia = "/";
    a = el(new dl(this.g.nc, j)).email;
    this.g.Zd = a;
    qs(this, " Email:  " + a);
    us(this, "displayName", "Full Name", j);
    js(vs(this, "Password", j), cs);
    ws(this, "_confirmPassword", j)
  };
  u.lc = function () {
    var a = X(this);
    a.set("token", this.g.nc);
    this.sc();
    switch (ns(this)) {
    case "new":
      var b = this.w(),
        c = Hj(b.aa.qa()),
        a = b.Pc(c, a);
      a.G(function (a) {
        var a = lk(a.valueOf()),
          b = this.W();
        b.j("loginWithCredentials", "credentials", a);
        b = new ml(b.aa, a.bd());
        gl(b, a);
        return al(b.w(), a)
      }, b);
      return a;
    case "edit":
      return this.w().put(a.m(), a)
    }
    return new K({})
  };
  u.Eb = function () {
    this.dispatchEvent("cmd:signupsuccess")
  };
  u.le = function (a) {
    a instanceof M && "EMAIL_EXISTS" === a.Da() ? this.dispatchEvent(new mq(this.g.Zd)) : Js.d.le.call(this, a)
  };

  function Ks(a, b, c) {
    Z.call(this, b || "invite", c);
    a && (this.g.z = a);
    this.kc("account");
    this.za("Invite Users")
  }
  D(Ks, Z);
  u = Ks.prototype;
  u.K = function (a) {
    return $r(R(a, {
      zc: "Send Invitations",
      ec: j
    }))
  };
  u.o = function () {
    xs(this, "_email1", lg(), n);
    xs(this, "_email2", lg(), n);
    xs(this, "_email3", lg(), n);
    xs(this, "_email4", lg(), n);
    return Ks.d.o.call(this)
  };
  u.sc = function () {
    return Hj(this.g.z)
  };
  u.Eb = function () {
    this.dispatchEvent("cmd:inviteusersuccess")
  };
  u.Xa = function () {
    var a = Ks.d.Xa.call(this),
      b = a.email;
    b && (a.displayName = b.substring(0, b.indexOf("@")));
    return a
  };
  u.ee = function (a) {
    var b = this.sc();
    if (b && a != k) {
      var c = {
        email: a
      };
      c.displayName = a.substring(0, a.indexOf("@"));
      c.thumbnailUrl = Ae(a);
      return this.w().Pc(b, c)
    }
    return new K({})
  };
  u.lc = function () {
    var a = this.Xa();
    return cd(this.ee(a._email1), this.ee(a._email2), this.ee(a._email3), this.ee(a._email4))
  };

  function Ls(a, b) {
    Z.call(this, "updatepassword", b);
    this.g.nc = a;
    this.za("Reset Password")
  }
  D(Ls, Z);
  u = Ls.prototype;
  u.K = function (a) {
    return $r(R(a, {
      zc: "Submit",
      ec: j
    }))
  };
  u.o = function () {
    var a = el(new dl(this.g.nc, j)).email;
    qs(this, " Email:  " + a);
    this.g.z = this.W().qa();
    js(vs(this, "Enter new password", j), cs);
    ws(this, "_confirmPassword", j);
    return Ls.d.o.call(this)
  };
  u.lc = function () {
    X(this).set("token", this.g.nc);
    return this.w().call("updatePassword", X(this))
  };
  u.Eb = function () {
    this.dispatchEvent("cmd:resetpasswordsuccess")
  };
  u.le = function (a) {
    Ls.d.le.call(this, a)
  };

  function Ms(a) {
    return '<div id="' + a.id + '"><div>Your account is ready. Sign in to get started.</div><div class="vl-css3-button vl-css3-button-primary vl-form-button-padding vl-form-submit-button" style="float:right;" vl-cmd="appsignin">Sign in</div><div style="clear:both;"></div></div>'
  }

  function Ns(a) {
    return '<div id="' + a.id + '"><div>Your password has been updated!</div><div class="vl-css3-button vl-css3-button-primary vl-form-button-padding vl-form-submit-button" style="float:right;" vl-cmd="appsignin">Sign in</div><div style="clear:both;"></div></div>'
  }

  function Os(a) {
    return '<div id="' + a.id + '"><div>Your email has been updated!</div><div class="vl-css3-button vl-css3-button-primary vl-form-button-padding vl-form-submit-button" style="float:right;" vl-cmd="appsignin">OK</div><div style="clear:both;"></div></div>'
  };

  function Ps(a, b) {
    Xq.call(this, a, b);
    this.Zi = this.Ve = this.ty = this.sh = this.bi = this.gh = this.Ni = this.oe = this.Sf = this.Oe = this.We = this.Ui = this.Di = this.ve = this.zh = this.Ne = this.Ci = this.Li = k;
    this.Ye()
  }
  D(Ps, Xq);
  u = Ps.prototype;
  u.Kk = n;
  u.A = function () {
    this.jf();
    Ps.d.A.call(this)
  };
  u.Ye = function () {
    this.I().h(this, "hide", this.jf).h(this, Ul, this.Fw).h(this, "cmd:register", this.ow).h(this, "cmd:registersuccess", this.nw).h(this, "cmd:signup", this.Jw).h(this, "cmd:signupsuccess", this.Iw).h(this, "cmd:signupexists", this.Hw).h(this, "cmd:resetpassword", this.ww).h(this, "cmd:resetpasswordsuccess", this.vw).h(this, "cmd:updateemail", this.os).h(this, "cmd:updateemailsuccess", this.Yw).h(this, "cmd:forgotpassword", this.xv).h(this, "cmd:adduser", this.bv).h(this, "cmd:edituser", this.rq).h(this, "cmd:inviteuser",
      this.Nv).h(this, "cmd:inviteusersuccess", this.Mv).h(this, "cmd:addusersuccess", this.av).h(this, "cmd:edituser", this.rq).h(this, "cmd:editusersuccess", this.Yh).h(this, "cmd:forgotpasswordsuccess", this.wv).h(this, "cmd:unsupportedbrowser", this.Xw)
  };
  u.Fw = function (a) {
    var b = this.Li || (this.Li = new Bs);
    Qs(this, a, b)
  };
  u.ow = function (a) {
    var b = this.Ci || (this.Ci = new Cs);
    Qs(this, a, b)
  };
  u.Jw = function (a) {
    var b = a.get("token"),
      b = this.Sf || (this.Sf = new Js(b));
    Qs(this, a, b)
  };
  u.ww = function (a) {
    var b = a.get("token"),
      b = this.Di || (this.Di = new Ls(b));
    Qs(this, a, b)
  };
  u.os = function (a) {
    var b = a.get("token"),
      b = this.Ui || (this.Ui = new Rs(b));
    Qs(this, a, b)
  };
  u.bv = function (a) {
    var b = this.gh || (this.gh = new Fs(a.z));
    Qs(this, a, b)
  };
  u.Nv = function (a) {
    var b = this.bi || (this.bi = new Ks(a.z));
    Qs(this, a, b)
  };
  u.rq = function (a) {
    var b = this.sh || (this.sh = new Ss(this.C()));
    b.pr("edit");
    b.Mx(a.z, a.fy);
    b.za("Edit User");
    Qs(this, a, b)
  };
  u.nw = function (a) {
    this.Ne || (this.Ne = new W, this.Ne.K = Ts, this.Ne.za("Thank You!"));
    Qs(this, a, this.Ne)
  };
  u.xv = function (a) {
    var b = this.zh || (this.zh = new Ds);
    Qs(this, a, b)
  };
  u.wv = function (a) {
    this.ve || (this.ve = new W, this.ve.K = Us, this.ve.za("Reset Password"));
    Qs(this, a, this.ve)
  };
  u.Xw = function (a) {
    this.Ve || (this.Ve = new W, this.Ve.K = Vs, this.Ve.za("Browser Not Supported"));
    Qs(this, a, this.Ve)
  };
  u.Iw = function (a) {
    this.oe || (this.oe = new W, this.oe.K = Ms, this.oe.za("Account Created"));
    Qs(this, a, this.oe)
  };
  u.Hw = function (a) {
    var b = this.Ni || (this.Ni = new Es(a.Zd));
    Qs(this, a, b)
  };
  u.vw = function (a) {
    this.Oe || (this.Oe = new W, this.Oe.K = Ns, this.Oe.za("Password Reset"));
    Qs(this, a, this.Oe)
  };
  u.Yw = function (a) {
    this.We || (this.We = new W, this.We.K = Os, this.We.za("Email updated"));
    Qs(this, a, this.We)
  };
  u.av = function () {
    this.Yh()
  };
  u.Mv = function () {
    this.Yh()
  };

  function Qs(a, b, c) {
    b.stopPropagation();
    a.jj = b.type;
    c instanceof Z && (a.Zi && (b = a.Zi.da("email")) && c.ga("email", b), a.Zi = c);
    Yq(a, c)
  }
  u.jf = function (a) {
    if (!(a && a.target !== this)) {
      this.jj = i;
      this.Zi = k;
      this.Li && (this.Li.J(), this.Li = k);
      this.Ci && (this.Ci.J(), this.Ci = k);
      this.Sf && (this.Sf.J(), this.Sf = k);
      this.Di && (this.Di.J(), this.Di = k);
      this.gh && (this.gh.J(), this.gh = k);
      this.bi && (this.bi.J(), this.bi = k);
      this.sh && (this.sh.J(), this.sh = k);
      this.Ne && (this.Ne.J(), this.Ne = k);
      this.zh && (this.zh.J(), this.zh = k);
      this.ve && (this.ve.J(), this.ve = k);
      this.Sf && (this.Sf.J(), this.oe = k);
      this.oe && (this.oe.J(), this.oe = k);
      this.Ni && (this.Ni.J(), this.Ni = k);
      this.Oe &&
        (this.Oe.J(), this.Oe = k);
      this.Ui && (this.Ui.J(), this.Ui = k);
      this.We && (this.We.J(), this.We = k);
      this.Ve && (this.Ve.J(), this.Ve = k);
      var b = this.getParent();
      b && b instanceof Ws && b.execute(function () {
        b.show(n)
      })
    }
  };

  function Ts(a) {
    return '<div id="' + a.id + '"><p class="vl-dialog-msg">Check your email to complete your signup.</p></div>'
  }
  function Us(a) {
    return '<div id="' + a.id + '"><h2 class="vl-dialog-heading">Password reset instruction sent!</h2><p class="vl-dialog-msg">Check your email and follow the link to reset your password.</p></div>'
  }

  function Vs(a) {
    return '<div id="' + a.id + '"><p class="vl-dialog-msg"> Please upgrade <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank">Internet Explorer<a/> or download <a href="https://www.google.com/chrome" target="_blank">Google Chrome</a></p></div>'
  }

  function Xs(a) {
    return '<div id="' + a.id + '"><div class="vl-call-dialog-top"><div class="vl-call-dialog-avatar"><img class="vl-avatar-huge-img" src="' + a.On + '" alt=""/></div><div class="vl-call-dialog-text"><div class="vl-call-dialog-heading" vl-bind="callDialogHeading"></div><span class="vl-call-dialog-name">' + a.kg + '</span></div></div><div class="vl-call-dialog-controls"><div class="vl-css3-button vl-css3-button-red vl-call-dialog-control-btn" vl-cmd="declinecall"><span class="btn-icon-phone-hang-up">&#57382;</span> Decline</div><div id="' +
      a.id + '-accept" class="vl-css3-button vl-accept-button vl-css3-button-green vl-call-dialog-control-btn vl-left" vl-cmd="acceptcall"><span class="btn-icon-camera">&#57383;</span> Accept</div><div id="' + a.id + '-menudrop" class="vl-menu-button vl-accept-menu-button vl-menu-button-green vl-menu-button-collapse-left vl-inline-block vl-call-dialog-control-btn vl-right" ><div class="vl-menu vl-menu-vertical"><div class="vl-menuitem vl-accept-dropdown"><span class="btn-icon-large">&#57383;</span> Accept Video</div><div class="vl-menuitem vl-accept-dropdown"><span class="btn-icon-large">&#57383;</span> Accept Video (HD)</div><div class="vl-menuitem vl-accept-dropdown"><span class="btn-icon-large">&#57385;</span> Accept Voice Only</div></div></div></div></div>'
  }

  function Ys(a) {
    return '<div id="' + a.id + '"><div class="vl-call-dialog-top"><div class="vl-call-dialog-avatar"><img class="vl-avatar-huge-img" src="' + a.On + '" alt=""/></div><div class="vl-call-dialog-text"><div class="vl-call-dialog-heading" vl-bind="callDialogHeading"></div><span class="vl-call-dialog-name">' + a.kg + '</span></div></div><div class="vl-call-dialog-controls"><div class="vl-css3-button vl-css3-button-red vl-call-dialog-control-btn" vl-cmd="declinecall"><span class="btn-icon-phone-hang-up">&#57382;</span> End Call</div></div></div>'
  };

  function Zs(a, b) {
    ya.call(this);
    this.kb = a;
    this.Xt = !! b;
    this.zf = this.ym();
    if (!this.zf) {
      var c = G && !Sb("7") ? "readystatechange" : "load";
      this.uk = xc(this.kb, c, this.tp, n, this);
      this.um = window.setInterval(A(this.tp, this), $s)
    }
  }
  D(Zs, Ic);
  var $s = 100;
  u = Zs.prototype;
  u.uk = k;
  u.xg = p("zf");

  function at(a) {
    a.um && (window.clearInterval(a.um), a.um = k)
  }
  u.A = function () {
    delete this.kb;
    at(this);
    Cc(this.uk);
    Zs.d.A.call(this)
  };
  u.ym = function () {
    var a = n;
    try {
      a = G ? "complete" == this.kb.readyState : !! Xf(this.kb).body && (!this.Xt || !! Xf(this.kb).body.firstChild)
    } catch (b) {}
    return a
  };
  u.tp = function () {
    this.ym() && (at(this), Cc(this.uk), this.uk = k, this.zf = j, this.dispatchEvent("ifload"))
  };

  function Ws(a) {
    W.call(this, a);
    this.fi = this.Qj = this.kb = k
  }
  D(Ws, W);
  u = Ws.prototype;
  u.D = function () {
    this.H = this.kb
  };
  u.o = function () {
    this.fi = new K;
    var a = A(function () {
      Nc(function () {
        this.Qj = Xf(this.e());
        this.vg = Bf(this.Qj);
        this.fi.ya(this)
      }, 0, this)
    }, this);
    this.H = this.kb = this.pj();
    var b = new bt(this.kb, j);
    b.xg() ? a() : this.I().h(b, "ifload", a);
    return this.fi
  };
  u.execute = function (a, b) {
    this.fi.bg(a, b);
    return this.fi
  };
  u.B = function () {
    Ws.d.B.call(this);
    var a = this.Dc();
    this.I().h(this.Qj, "click", a.oq, n, a)
  };
  u.pj = function () {
    return ct(this.C())
  };
  u.ua = function () {
    return this.Qj.body
  };
  u.qd = function (a, b, c) {
    Ws.d.qd.call(this, a, b, c);
    a.vb = this.vg
  };

  function bt(a, b) {
    Zs.call(this, a, b)
  }
  D(bt, Zs);
  bt.prototype.ym = function () {
    var a = Xf(this.kb).getElementById("vl-iframe-loadtest");
    return a ? 2 === a.offsetWidth : n
  };

  function ct(a, b) {
    var c = a.D("iframe", {
      frameborder: 0,
      style: "border:0;vertical-align:bottom;" + (b || ""),
      src: 'javascript:""'
    });
    c.onload = function () {
      window.isVlineFrameLoaded = j
    };
    return c
  }

  function dt(a, b, c) {
    var d = Bf(a),
      f = [];
    f.push("<!DOCTYPE html>");
    f.push('<html style="min-height:100%; overflow:hidden;"><head>', b, '</head><body style="min-height:100%; overflow:hidden;">', '<div id="vl-iframe-loadtest"></div>', "</body></html>");
    b = ct(d, c);
    a.appendChild(b);
    a = f.join("");
    f = Xf(b);
    f.open();
    f.write(a);
    f.close();
    return b
  };

  function et(a, b) {
    Ws.call(this, b)
  }
  D(et, Ws);
  et.prototype.pj = function () {
    var a = Yi(this.W().Ca()),
      b = document.body,
      a = '<link rel="stylesheet" href="' + ii(a) + '"/>';
    return dt(b, a, "width:100%;height:100%")
  };

  function ft(a, b) {
    W.call(this, b);
    this.Yg = a;
    this.za("")
  }
  D(ft, W);
  ft.prototype.o = function () {
    this.getData().Wy = this.Yg;
    var a = new et(0, this.C());
    a.Nf(this);
    return a.load().G(function () {
      this.H = a.e();
      this.rb();
      a.e().src = "https://www.youtube.com/embed/MfSqpj9byeI?autoplay=1&rel=0&autohide=1&showinfo=0";
      return W.prototype.o.call(this)
    }, this)
  };
  ft.prototype.B = function () {
    ft.d.B.call(this);
    var a = this.aa.Nk;
    this.I().h(a, "resize", this.rb);
    this.rb()
  };
  ft.prototype.rb = function () {
    var a = 0.6 * Jf().width,
      b = 0.6 * a;
    Ln(this.e(), a);
    Mn(this.e(), b)
  };

  function gt(a) {
    Xq.call(this, "vl-embed-dialog", a);
    this.rh = k;
    this.Ye()
  }
  D(gt, Xq);
  u = gt.prototype;
  u.Kk = n;
  u.Ye = function () {
    this.I().h(this, "hide", this.jf).h(this, "cmd:showembedvideo", this.rv)
  };
  u.rv = function () {
    this.rh = new ft("", this.C());
    Yq(this, this.rh)
  };
  u.B = function () {
    gt.d.B.call(this);
    var a;
    a = this.getParent().Ca().Nk;
    this.I().h(a, "resize", this.rb);
    this.rb()
  };
  u.rb = function () {
    var a = 0.6 * Jf().width,
      b = 0.6 * a;
    Ln(this.e(), a);
    Mn(this.e(), b)
  };
  u.jf = function () {
    this.rh && (this.rh.J(), this.rh = k)
  };

  function ht(a) {
    Fr.call(this, a);
    this.Rf = n;
    this.zk = this.Mi = k;
    this.ia = this.Zh = "/";
    this.So = k;
    this.pl = {};
    this.g.Ac = this.pl;
    this.bj = new O;
    this.M.set("app", this.bj);
    this.bj.fa()
  }
  D(ht, Fr);
  u = ht.prototype;
  u.o = function () {
    var a = this.W();
    this.pl.z = a.qa();
    this.I().h(a, "login", this.Hg, j).h(a, "logout", this.Hg, j).h(this, Ul, this.Mk).h(this, "cmd:appsignin", this.Mk).h(this, "cmd:register", this.md).h(this, "cmd:adduser", this.md).h(this, "cmd:inviteuser", this.md).h(this, "cmd:edituser", this.md).h(this, "cmd:signup", this.md).h(this, "cmd:resetpassword", this.md).h(this, "cmd:updateemail", this.md).h(this, "cmd:forgotpassword", this.md).h(this, "cmd:embedvideopopup", this.Ox).h(this, "cmd:unsupportedbrowser", this.md);
    this.I().h(this,
      "cmd:nav", this.aw).h(this.rc(), "navigate", this.Fv);
    this.rc().Na(j);
    it(this);
    return cd(ht.d.o.call(this), this.Wg(jt(this)))
  };

  function jt(a) {
    var a = new vl(a.rc().ib()),
      b = window.location.hash;
    b && Al(a, b);
    return a
  }
  u.Wg = function (a, b) {
    return ht.d.Wg.call(this, a, b).G(function () {
      kt(this, a)
    }, this).$d(function (b) {
      b && (b instanceof M && "LOGIN_REQUIRED" == b.type) && (this.Mi = a, this.Q && this.Mk())
    }, this)
  };
  u.R = function (a) {
    ht.d.R.call(this, a)
  };
  u.B = function () {
    ht.d.B.call(this);
    this.I().h(hg(this.C()), "click", this.oq).h(this, "action", this.Yu).h(this, "cmd:signout", this.Gw);
    this.Mi ? this.Mk() : this.zk && this.md(this.zk)
  };
  u.pa = function () {
    ht.d.pa.call(this);
    this.rc().Na(n)
  };
  u.navigate = function (a, b) {
    var c = Ll(this.rc().ib(), a);
    lt(this, c, b)
  };
  u.Fv = function (a) {
    var b = jt(this);
    a.tu && (this.Rb && b.toString() !== this.Rb.toString()) && (1 < window.location.hash.length && Al(b, window.location.hash.substr(1)), lt(this, b, j))
  };

  function lt(a, b, c) {
    a.Mi = k;
    a.Rg && a.wf(a.Rg);
    a.Uc(b, {}).G(function () {
      var a = this.rc(),
        f = this.qg(),
        g = b.toString();
      g !== a.ib() && (c ? a.mn(g, f) : a.sr(g, f), hg(this.C()).title = f);
      Nc(this.gr, 0, this)
    }, a)
  }
  u.oq = function (a) {
    var b = a.target;
    do if ("A" === b.tagName && b.hasAttribute("href")) {
        mt(this, b) && a.preventDefault();
        break
      } while (b = b.parentNode)
  };

  function mt(a, b) {
    var c = La(b.getAttribute("href")),
      d = Ll(a.rc().ib(), c);
    if (Fa(c, "#_vline_")) return d = new vl(a.rc().ib()), Al(d, c), kt(a, d), j;
    if (Fa(c, "#_link_")) return c = eg(b), window.open(c, "_blank"), j;
    if (!d.Hd) {
      if (a.Rb && a.Rb.m() === d.m() && a.Rb.Cc !== d.Cc) return a.Rb = d, a.gr(), n;
      if (0 < a.Fi.length && Rl()) return a.navigate(c), j
    }
    return n
  }

  function kt(a, b) {
    if (b && b.Cc && -1 != b.Cc.indexOf("_vline_")) {
      var c = b.Cc;
      if (Fa(c, "#_vline_") || Fa(c, "_vline_")) {
        var d = c;
        Fa(c, "#_vline_") && (d = Xa(d, "#"));
        d = Xa(d, "_vline_");
        c = k;
        if (-1 !== d.indexOf("$")) {
          var f = d.substr(d.indexOf("$") + 1);
          f && (c = new Bl(f));
          d = d.substr(0, d.indexOf("$"))
        }
        d = "cmd:" + d;
        "cmd:signup" === d && a.W().yg() || a.dispatchEvent(new lq(d, c))
      }
    }
  }
  u.Yu = function (a) {
    var b, a = a.target,
      c = a.e();
    (b = pr(c, "vl-event")) && a.dispatchEvent(b);
    (b = pr(c, "vl-cmd")) && a.dispatchEvent("cmd:" + b);
    (b = pr(c, "vl-nav")) && a.dispatchEvent(new kq(b))
  };
  u.Hg = function () {
    try {
      if (it(this), this.Rg && this.wf(this.Rg), this.Mi) lt(this, this.Mi);
      else if (this.Rf = j, this.Rb && this.Rb.Cc) {
        window.location.hash = "";
        Al(this.Rb, "");
        this.navigate(this.Zh);
        var a = this.ia;
        this.ia = this.Zh = a
      } else 0 < this.Fi.length && this.Wg(this.Rb, j)
    } finally {
      this.Rf = n
    }
  };

  function it(a) {
    var b = k,
      c = k,
      d = a.W(),
      f = d.yg();
    f && (b = d.of().hc, c = d.of().Fc().Vo);
    a.pl.Gy = f;
    a.bj.set("user", b);
    a.bj.set("email", c)
  }
  u.md = function (a) {
    var b = new K("pending");
    if (this.Rf && !a) return b;
    if (this.Q) return a = a || Ul, this.zk = k, a = this.showModalDialog(a), this.Rf ? a = new K("pending") : (a.Ze(function () {
        this.Rf = n
      }, this).$d(function () {
        Hc(this.W(), new nl(k))
      }, this), this.Rf = j), a;
    a && (this.zk = a);
    return b
  };
  u.showModalDialog = function (a) {
    return this.Ki(nt(this), a)
  };

  function nt(a) {
    a.Rg || (a.Rg = new Ps);
    return a.Rg
  }
  u.wf = function (a) {
    a.Yh()
  };
  u.Gw = function () {
    this.W().tc()
  };
  u.aw = function (a) {
    this.navigate(a.href, a.replaceState)
  };
  u.Mk = function () {
    var a = this.W();
    a.ka(a.qa())
  };
  u.Ki = function (a, b) {
    !a.getParent() && this.ta(a, n);
    return a.show(b)
  };

  function ot(a) {
    if (!a.Jl) {
      var b = pt(a);
      a.Jl = new gt(b.vg);
      a.Jl.Nf(a)
    }
    return a.Jl
  }
  u.Ox = function () {
    if (G) window.open("https://www.youtube.com/embed/MfSqpj9byeI?autoplay=1&rel=0&autohide=1&showinfo=0", "_blank");
    else {
      var a = new P("cmd:showembedvideo", k);
      this.Ki(ot(this), a)
    }
  };

  function pt(a) {
    var b;
    if (!(b = a.So)) b = new qt, a.ta(b, n), b.load().bg(b.B, b), b = a.So = b;
    return b
  }

  function rt(a, b, c) {
    var d = new K;
    c.execute(function () {
      var a;
      !b.getParent() && c.ta(b, n);
      b.xg() ? (c.show(j), a = b.show(j)) : a = b.load().G(function () {
        b.Pb();
        b.show(j);
        c.show(j)
      });
      Zc(a, d.ya, d.gb, d)
    }, a)
  }
  function st(a, b, c, d) {
    return c.execute(function () {
      b.show(n);
      d != k ? c.show(!d) : c.show(n)
    }, a)
  };

  function tt(a, b) {
    W.call(this, b);
    this.N = a || k;
    this.K = Xs;
    this.za("Incoming call")
  }
  D(tt, W);
  tt.prototype.o = function () {
    var a = this.getData();
    a.kg = this.N.be();
    a.On = this.N.Bd() || "https://www.gravatar.com/avatar?d=mm";
    this.U().set("callDialogHeading", "Incoming call");
    return tt.d.o.call(this)
  };
  tt.prototype.B = function () {
    tt.d.B.call(this);
    this.I().h(this, "cmd:acceptcall", A(function () {
      this.N.start()
    }, this));
    this.I().h(this, "cmd:declinecall", A(function () {
      this.N.stop()
    }, this));
    this.I().h(this.N, "enterState:connecting", A(function () {
      this.U().set("callDialogHeading", "Connecting")
    }, this));
    var a = eo(this, this.Je("menudrop"));
    if (a) {
      var b = this.Fh("accept");
      a && (a.Lq = b, Fp(a));
      this.I().h(a, "action", A(function (a) {
        a = a.target.da();
        Ga(a, "Accept Voice Only") ? this.N.start({
          audio: j
        }) : Ga(a, "Accept Video (HD)") ?
          this.N.start({
          audio: j,
          video: j,
          hd: j
        }) : this.N.start()
      }, this))
    }
  };

  function ut(a, b) {
    W.call(this, b);
    this.N = a || k;
    this.K = Ys;
    this.za("Outgoing call")
  }
  D(ut, W);
  ut.prototype.o = function () {
    var a = this.getData();
    a.kg = this.N.be();
    a.On = this.N.Bd() || "https://www.gravatar.com/avatar?d=mm";
    this.N.wm() ? this.U().set("callDialogHeading", "Connecting") : this.U().set("callDialogHeading", "Calling");
    return ut.d.o.call(this)
  };
  ut.prototype.B = function () {
    ut.d.B.call(this);
    this.I().h(this, "cmd:declinecall", A(function () {
      this.N.stop()
    }, this)).h(this.N, "enterState:connecting", A(function () {
      this.U().set("callDialogHeading", "Connecting")
    }, this))
  };

  function qt(a) {
    Ws.call(this, a)
  }
  D(qt, Ws);
  u = qt.prototype;
  u.pj = function () {
    var a = Yi(this.W().Ca()),
      b = document.body,
      a = '<link rel="stylesheet" href="' + ii(a) + '"/>';
    return dt(b, a, "position: absolute; z-index: 10001; top: 0 ;left : 0; max-width:100%; visibility:hidden")
  };
  u.B = function () {
    qt.d.B.call(this);
    var a = this.aa.Nk;
    this.I().h(a, "resize", this.rb).h(this, "beforeshow", this.an).h(this, "hide", this.Ev);
    this.rb()
  };
  u.rb = function () {
    var a = Jf();
    Ln(this.kb, a.width);
    Mn(this.kb, a.height)
  };
  u.an = function () {
    this.show(j)
  };
  u.Ev = function (a) {
    a && a.target !== this || this.show(n)
  };

  function vt(a, b) {
    Ws.call(this, b);
    this.en = a || document.body
  }
  D(vt, Ws);
  vt.prototype.pj = function () {
    var a = Yi(this.W().Ca()),
      b = "";
    this.en === document.body && (b += "top:0; left:0");
    b += "z-index: 10000; position:absolute; width:100%; height:100%; visibility:hidden";
    a = '<link rel="stylesheet" href="' + ii(a) + '"/>';
    b = dt(this.en, a, b);
    b.setAttribute("allowfullscreen", "allowfullscreen");
    b.setAttribute("webkitallowfullscreen", "webkitallowfullscreen");
    b.setAttribute("mozallowfullscreen", "mozallowfullscreen");
    return b
  };
  vt.prototype.B = function () {
    if (this.en === hg(this.C()).body) {
      this.Qm = j;
      var a = this.aa.Nk;
      this.I().h(a, "resize", this.rb);
      this.rb()
    }
    vt.d.B.call(this)
  };
  vt.prototype.rb = function () {
    var a = Jf();
    Ln(this.kb, a.width);
    Mn(this.kb, a.height)
  };

  function wt(a, b, c, d) {
    W.call(this, c);
    this.Ya = a;
    this.Oc = k;
    this.Bp = b || "https://www.gravatar.com/avatar?d=mm";
    this.tb(this.Ya.F());
    this.rx = y(d) ? d : j
  }
  D(wt, W);
  u = wt.prototype;
  u.pb = function () {
    return this.Ya.pb()
  };
  u.np = function () {
    var a = 640;
    this.Oc && (a = this.Oc.videoWidth);
    return a
  };
  u.B = function () {
    wt.d.B.call(this);
    this.rx && this.I().h(this.Ya, "speaking:start", this.Ux).h(this.Ya, "speaking:stop", this.Vx)
  };
  u.R = function (a) {
    wt.d.R.call(this, a);
    var b = this.Ya.pb(),
      c = b ? "local" : "remote";
    a.className = "vl-video-wrap vl-video-wrap-" + c;
    un(a, {
      overflow: "hidden",
      position: "absolute",
      "z-index": b ? 1 : 0
    });
    this.Ya.de() || (a = Mf("img", {
      src: this.Bp,
      width: "100%",
      height: "100%"
    }), this.C().appendChild(this.e(), a));
    this.Oc = this.Ya.Jo();
    this.C().appendChild(this.e(), this.Oc);
    this.Oc.className = "vl-video vl-video-" + c;
    un(this.Oc, {
      width: "100%",
      height: "100%"
    });
    b && un(this.Oc, G ? "-ms-transform" : J ? "-webkit-transform" : Fb ? "-o-transform" : I ?
      "-moz-transform" : "transform", "scaleX(-1)")
  };
  u.Ux = function (a) {
    wf(this.e(), "vl-video-wrap-frame", j);
    this.dispatchEvent(a.type)
  };
  u.Vx = function (a) {
    wf(this.e(), "vl-video-wrap-frame", n);
    this.dispatchEvent(a.type)
  };

  function xt(a) {
    return a ? a + "px" : "auto"
  }

  function yt(a, b, c, d, f, g, h) {
    var l = "",
      d = {
        width: xt(c),
        height: xt(d),
        top: xt(f),
        left: xt(g)
      }, c = Math.floor(0.05 * c);
    switch (h) {
    case 1:
      l = qr(0.05, c);
      break;
    case 2:
      c = Math.floor(1.8 * c);
      l = qr(0, c);
      break;
    case 3:
      l = qr(-0.05, c)
    }
    a.setTransform(d, l);
    b ? rr(a.e(), "all 0.75s") : rr(a.e(), "");
    un(a.e(), d)
  }
  u.setTransform = function (a, b) {
    a["-webkit-transform"] = a["-moz-transform"] = b
  };

  function zt() {}
  D(zt, bp);
  ia(zt);
  zt.prototype.D = function (a) {
    return a.C().D("div", this.P() + " vl-inline-block", " ")
  };
  zt.prototype.oa = function (a, b) {
    b = zt.d.oa.call(this, a, b);
    tf(b, "vl-inline-block");
    return b
  };
  zt.prototype.P = t("vl-toolbar-separator");

  function At() {}
  D(At, dp);
  ia(At);
  At.prototype.Ec = t("toolbar");
  At.prototype.Eh = function (a) {
    return "HR" == a.tagName ? new cp(zt.Ga()) : At.d.Eh.call(this, a)
  };
  At.prototype.P = t("vl-toolbar");
  At.prototype.jp = function () {
    return fp
  };

  function Bt(a, b, c) {
    ip.call(this, b, a || At.Ga(), c)
  }
  D(Bt, ip);

  function Ct() {}
  D(Ct, zp);
  ia(Ct);
  Ct.prototype.P = t("vl-toolbar-button");

  function Dt(a, b, c) {
    ap.call(this, a, b || Ct.Ga(), c)
  }
  D(Dt, ap);
  Mo("vl-toolbar-button", function () {
    return new Dt(k)
  });

  function Et(a, b) {
    cp.call(this, a || zt.Ga(), b)
  }
  D(Et, cp);
  Mo("vl-toolbar-separator", function () {
    return new Et
  });

  function Ft(a, b, c) {
    ap.call(this, a, b || zp.Ga(), c);
    Wo(this, 16, j)
  }
  D(Ft, ap);
  Mo("vl-toggle-button", function () {
    return new Ft(k)
  });

  function Gt(a, b, c) {
    Ft.call(this, a, b || Ct.Ga(), c)
  }
  D(Gt, Ft);
  Mo("vl-toolbar-toggle-button", function () {
    return new Gt(k)
  });

  function Ht(a, b, c) {
    Bt.call(this, i, i, c);
    this.$g = a;
    this.N = b || k;
    this.ae = k;
    this.Tl = "vl-controls-fullscreen-btn";
    this.Bf = k;
    this.gq = "vl-controls-mute-audio-btn";
    this.Cf = k;
    this.hq = "vl-controls-mute-video-btn";
    this.lg = k;
    this.Wo = "vl-controls-end-call-btn";
    this.yl = 2500;
    this.iu = 1E3;
    this.Md = 0;
    this.Rm = n;
    this.Op = 0;
    this.ha = n;
    this.To = j
  }
  D(Ht, Bt);
  u = Ht.prototype;
  u.D = function () {
    Ht.d.D.call(this);
    var a = this.C();
    this.ae = new Gt(Mf("div", It(this.Tl)), i, a);
    this.ae.Qf("Toggle Fullscreen");
    this.ta(this.ae, j);
    this.Bf = new Gt(Mf("div", It(this.gq)), i, a);
    this.Bf.Qf("Toggle Audio Mute");
    this.N && Vo(this.Bf, this.N.Wj());
    this.ta(this.Bf, j);
    this.Cf = new Gt(Mf("div", It(this.hq)), i, a);
    this.Cf.Qf("Toggle Video Mute");
    this.ta(this.Cf, j);
    this.lg = new Dt(Mf("div", It(this.Wo)), i, a);
    this.lg.Qf("End Call");
    this.ta(this.lg, j)
  };
  u.B = function () {
    Ht.d.B.call(this);
    this.I().h(this.ae, "action", this.yv).h(this.Bf, "action", this.Zv).h(this.Cf, "action", this.$v).h(this.lg, "action", this.sv).h(hg(this.$g.getParent().C()), J ? "webkitfullscreenchange" : I ? "mozfullscreenchange" : k, this.zv).h(this, "enter", this.uv).h(this, "leave", this.Qv).h(this.$g.e(), "mousemove", this.Fq).h(this.$g.e(), "click", this.Fq).h(this.N, Td("active"), this.Xv);
    this.ra(n);
    this.ha = n
  };
  u.pa = function () {
    Jt(this)
  };
  u.Xv = function () {
    Kt(this);
    Lt(this, j);
    Mt(this, this.iu)
  };
  u.uv = function () {
    this.Rm = j
  };
  u.Qv = function () {
    this.Rm = n;
    Mt(this)
  };

  function It(a) {
    return a + "-unchecked"
  }
  function Nt(a, b, c) {
    a && (b ? vf(a, It(c), c + "-checked") : vf(a, c + "-checked", It(c)))
  }
  u.zv = function () {
    var a;
    a = hg(this.$g.getParent().C());
    a = y(a.fullscreenElement) ? a.fullscreenElement : !(!a.mozFullScreen && !a.webkitIsFullScreen);
    Vo(this.ae, a);
    Nt(this.ae.Ba, a, this.Tl)
  };
  u.yv = function () {
    var a = Jo(this.ae, 16);
    uf(this.ae.e(), "vl-toolbar-button-checked");
    var b = this.ae.Ba;
    if (a) {
      var c = this.$g.getParent().e();
      na(c.webkitRequestFullScreen) ? c.webkitRequestFullScreen() : na(c.mozRequestFullScreen) ? c.mozRequestFullScreen() : na(c.requestFullScreen) && c.requestFullScreen()
    } else c = hg(this.$g.getParent().C()), J ? c.webkitCancelFullScreen() : I ? c.mozCancelFullScreen() : c.cancelFullScreen();
    Nt(b, a, this.Tl)
  };
  u.Zv = function () {
    var a = Jo(this.Bf, 16);
    this.N && this.N.Og(a);
    Nt(this.Bf.Ba, a, this.gq)
  };
  u.$v = function () {
    var a = Jo(this.Cf, 16);
    this.N && this.N.Qg(a);
    Nt(this.Cf.Ba, a, this.hq)
  };
  u.sv = function () {
    var a = Jo(this.lg, 16);
    this.N && this.N.stop();
    Nt(this.lg.Ba, a, this.Wo)
  };
  u.bu = function () {
    var a = wa() - this.Op;
    a < this.yl ? Mt(this, this.yl - a) : this.Rm || (Lt(this, n), Jt(this))
  };

  function Lt(a, b) {
    a.ha = b;
    a.Cf.ra(a.To);
    Zq(a.e(), b, "fade", 0.13).G(function () {
      this.ra(b)
    }, a)
  }
  function Jt(a) {
    a.Md && (Lc.clearTimeout(a.Md), a.Md = 0)
  }
  function Mt(a, b) {
    a.Md && Jt(a);
    a.Md = Nc(a.bu, b != k ? b : a.yl, a)
  }
  u.Fq = function () {
    this.Op = wa();
    this.ha || (Kt(this), Lt(this, j), Mt(this))
  };

  function Kt(a) {
    var b = a.N.Ih();
    b && b[0] && (a.To = b[0].de())
  };

  function Ot(a, b, c) {
    W.call(this, c);
    this.N = a || k;
    this.zb = b || k;
    this.Ie = [];
    this.Fb = [];
    this.Sa = k;
    this.ei = 0;
    this.He = -1;
    this.Go = new Ht(this, a, c)
  }
  D(Ot, W);
  Fe("videoPanel", Ot);

  function Pt(a, b, c) {
    var d = 640,
      f = 480,
      g;
    if (a.Oc) {
      if (g = a.Oc.videoWidth) d = g;
      if (a = a.Oc.videoHeight) f = a
    } else a.Bp && (f = d = 40);
    return Math.min(Math.ceil(b * (d / f)), c)
  }
  u = Ot.prototype;
  u.Qm = j;

  function Qt(a) {
    var b = k,
      c = -1;
    if (a.Fb) for (var d = 0; d < a.Fb.length; ++d) {
        var f = a.Fb[d].Ya;
        f.Yj && f.oh > c && (b = a.Fb[d], c = f.oh)
    }
    return b
  }
  u.R = function (a) {
    Ot.d.R.call(this, a);
    a.className = "vl-video-panel";
    un(a, {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      overflow: "hidden",
      "-webkit-perspective": "500px"
    });
    this.ta(this.Go, j);
    if (this.N && this.e()) {
      var a = this.N.Ih(),
        b = this.N.Oh();
      F(a, this.kl, this);
      F(b, this.kl, this);
      this.Q && Rt(this, j)
    }
  };
  u.B = function () {
    Ot.d.B.call(this);
    wj(this.N, j);
    this.N && this.I().h(this.N, "mediaSession:addLocalStream", this.Bq).h(this.N, "mediaSession:addRemoteStream", this.Bq).h(this.N, "mediaSession:removeLocalStream", this.Cq).h(this.N, "mediaSession:removeRemoteStream", this.Cq).h(this, "speaking:start", this.Lw).h(this, "speaking:stop", this.Mw);
    Nc(function () {
      Rt(this, n)
    }, 0, this)
  };
  u.pa = function () {
    -1 !== this.He && Lc.clearTimeout(this.He);
    wj(this.N, n);
    Ot.d.pa.call(this)
  };

  function Rt(a, b, c) {
    if (2 > a.Fb.length) {
      a.Sa && a.Sa.show(n, "fade");
      var c = b && a.Q,
        d = Pn(a.e()),
        b = d.width,
        d = d.height,
        f = 0.05 * d,
        g = 0,
        h = [],
        l = ob(a.Fb),
        m, q, s, r, v, x, C, H, V;
      1 === a.Ie.length && 1 <= a.Fb.length ? (m = a.Ie[0], v = Math.max(0.2 * d, 90), v = Math.min(v, d / 2), r = Pt(m, v, b), yt(m, c, r, v, d - f - v, b - f - r), wf(m.e(), "vl-video-wrap-frame", j)) : (F(a.Ie, function (a) {
        wf(a.e(), "vl-video-wrap-frame", n)
      }), l.push.apply(l, a.Ie));
      if (1 === l.length && l[0].Ya.de()) yt(l[0], c, b, d, 0, 0);
      else {
        for (m = 0; m < l.length; ++m) g += Pt(l[m], d, b);
        H = Math.max(Math.floor(g /
          b), 1);
        V = Math.floor(l.length / H);
        for (m = g = 0; g < H; ++g) {
          g === H - 1 && (V = l.length - m);
          r = 2 * f;
          x = Math.floor((b - r) / V);
          v = Math.floor(d / H);
          C = 0;
          s = h.length = 0;
          for (q = m; s < V; ++s, ++q) r = Pt(l[q], v, x), C += r, h.push(r);
          C = (b - C) / 2;
          for (s = 0; s < V; ++s, ++m) q = 1 === l.length ? 0 : 0 === s && 1 < V ? 1 : s === V - 1 && 1 < V ? 3 : 2, r = Pt(l[m], v, x), yt(l[m], c, h[s], v, v * g, C, q), C += h[s]
        }
      }
    } else {
      b = b && a.Q || n;
      f = Pn(a.e());
      d = f.width;
      f = f.height;
      h = 0.05 * f;
      r = ob(a.Ie);
      H = [];
      l = 0;
      r.push.apply(r, a.Fb);
      v = Math.max(0.2 * (f - h) - h, 90);
      m = Math.floor(2 * v);
      for (g = 0; g < r.length; ++g) H[g] = Pt(r[g], v, m),
      l = Math.max(H[g], l);
      s = Math.floor((f - 3 * h) / v);
      m = Math.max(Math.ceil(r.length / s), 1);
      for (g = 0; g < m; ++g) {
        C = g * s;
        x = 1.25 * h;
        q = h * (g + 1) + g * l;
        for (V = 0; V < s && C + V < r.length; ++V) yt(r[C + V], b, H[C + V], v, x, q), x += v + 0.1 * h
      }!c && (!a.Sa && 0 < a.Fb.length) && ((c = Qt(a)) || (c = a.Fb[0]));
      g = hb(a.Fb, function (a) {
        return this.Sa ? a.Ya === this.Sa.Ya : n
      }, a);
      c && (c !== a.Ie[0] && 0 < a.Fb.length) && (r = wa(), v = c.Ya, a.Sa ? a.Sa.Ya !== v && v.oh > a.Sa.Ya.oh || !g ? (g = a.Sa, g.Ya = v, g.Oc.setAttribute("src", Zh(v)), g.Oc.play(), a.ei = r) : a.ei < r - 2500 && (a.ei = r - 2500 + 500) : (a.Sa = new wt(v,
        k, a.C(), n), a.Sa.tb("main"), a.ta(a.Sa, j), a.ei = r));
      a.Sa && (l = (m + 1) * h + m * l, yt(a.Sa, b, d - l - h, f, 0, l), 1 > a.Fb.length ? a.Sa.show(n, "fade") : a.Sa.show(j, "fade"));
      c && St(a)
    }
    c = Pn(a.e()).width;
    a = a.Go.e();
    un(a, {
      visibility: "hidden"
    });
    b = Nn(a).width;
    a.style.visibility = "visible";
    a.style.left = (c - b) / 2 + "px"
  }
  u.kl = function (a) {
    var b = a.pb() ? this.zb.of().hc.Bd() : this.N.Bd(),
      b = new wt(a, b, this.C());
    this.ta(b, j);
    a.Oi ? Tt(this, b) : this.I().h(a, "mediaStream:start", this.Ow)
  };
  u.rn = function () {
    Rt(this, n)
  };
  u.Bq = function (a) {
    this.kl(a.stream);
    a.stream.Oi && Rt(this, j)
  };
  u.Cq = function (a) {
    var b = eo(this, a.stream.F());
    if (!this.ud) {
      if (b && (b.show(n, "fade").Ze(function () {
        !this.ud && this.removeChild(b);
        b.J()
      }, this), a = b.pb() ? this.Ie : this.Fb, mb(a, b), this.Sa && b.Ya === this.Sa.Ya)) {
        -1 !== this.He && (Lc.clearTimeout(this.He), this.He = -1);
        a = Qt(this);
        !a && 0 < this.Fb.length && (a = this.Fb[0]);
        Rt(this, j, a);
        return
      }
      Rt(this, j)
    }
  };
  u.Ow = function (a) {
    a = eo(this, a.target.F());
    Tt(this, a);
    Rt(this, j)
  };

  function Tt(a, b) {
    b.show(j, "fade");
    (b.pb() ? a.Ie : a.Fb).push(b)
  }
  u.Lw = function (a) {
    a = a.target;
    this.Sa && this.Sa.Ya !== a.Ya && St(this)
  };
  u.Mw = function (a) {
    this.Sa && this.Sa.Ya === a.target.Ya && St(this)
  };

  function St(a) {
    if (-1 === a.He) {
      var b = a.ei + 2500 - wa(),
        b = Math.max(b, 0);
      a.He = Nc(function () {
        this.He = -1;
        Rt(this, j, Qt(this))
      }, b, a)
    }
  };

  function Ut(a) {
    Xq.call(this, "vl-not-dialog", a);
    this.$h = this.vi = k;
    this.Ye()
  }
  D(Ut, Xq);
  u = Ut.prototype;
  u.Kk = n;
  u.Ye = function () {
    this.I().h(this, "hide", this.jf).h(this, "cmd:outgoingcall", this.cw).h(this, "cmd:incomingcall", this.Iv)
  };
  u.cw = function (a) {
    this.vi = new ut(a.mediaSession, this.C());
    Yq(this, this.vi)
  };
  u.Iv = function (a) {
    this.$h = new tt(a.mediaSession, this.C());
    Yq(this, this.$h)
  };
  u.A = function () {
    this.jf();
    Ut.d.A.call(this)
  };
  u.jf = function (a) {
    a && a.target !== this || (this.vi && (this.vi.J(), this.vi = k), this.$h && (this.$h.J(), this.$h = k))
  };
  u.Io = function () {
    var a = this.e();
    return new nq(a, a)
  };

  function Vt(a) {
    xq.call(this, n, a);
    this.zf = n
  }
  D(Vt, xq);
  Vt.prototype.D = function () {
    Vt.d.D.call(this);
    var a = this.e();
    a.className = "vl-call-arrow-wrapper";
    this.mf().className = "vl-dialog-bg";
    var b = Mf("div", {});
    a.appendChild(b);
    a = "vl-call-arrow animated bounce";
    Lg && (a += " vl-call-arrow-firefox");
    b.className = a;
    b = this.mf();
    a = this.e();
    this.ur(dr(a, 0.13), er(a, 0.13), dr(b, 0.13), er(b, 0.13))
  };
  Vt.prototype.show = function (a) {
    this.zf && this.ra(a);
    return new K("showing")
  };
  Vt.prototype.xg = p("zf");
  Vt.prototype.load = function () {
    this.zf = j;
    return new K("loaded")
  };

  function Wt(a, b) {
    ht.call(this, b);
    this.zb = a;
    this.Tm = this.Rd = this.dj = this.Zk = k;
    this.$n = {};
    this.gk = {};
    this.Ye()
  }
  D(Wt, ht);
  u = Wt.prototype;
  u.Ye = function () {
    if (Yi(this.zb.Ca()).get("ui")) this.zb.on("add:mediaSession", this.Yv, this)
  };
  u.navigate = function (a, b) {
    Wt.d.navigate.call(this, a, b);
    window._gaq.push(["_trackPageview", a])
  };
  u.R = function (a) {
    Wt.d.R.call(this, a)
  };
  u.Hg = function () {
    Wt.d.Hg.call(this)
  };
  u.Ki = function (a, b) {
    var c = pt(this),
      d = new K;
    c.execute(function () {
      var f;
      f = pt(this);
      !a.getParent() && f.ta(a, n);
      f = a.show(b);
      Zc(f, d.ya, d.gb, d);
      c.show(j)
    }, this);
    return d
  };
  u.wf = function (a) {
    var b = pt(this);
    b.execute(function () {
      a.Yh();
      b.show(n)
    }, this)
  };
  u.Yv = function (a) {
    a = a.target;
    if (!this.Rd) {
      this.Rd = a;
      var b = Yi(this.zb.Ca());
      !b.get("noCallingArrowUI") && a.on(Td("pending"), this.gw, this);
      if (!b.get("noCallingArrowUI")) a.on("exitState:pending", this.hw, this);
      !b.get("noIncomingCallUI") && a.on(Td("incoming"), this.Jv, this);
      !b.get("noOutgoingCallUI") && a.on(Td("outgoing"), this.dw, this);
      if (!b.get("noVideoPanelUI")) a.on(Td("connecting"), this.kv, this).on(Td("closed"), this.iv, this)
    }
  };

  function Xt(a, b) {
    if (a.gk[b.F()] == k) {
      var c = a.Zk || (a.Zk = Yt(a));
      a.gk[b.F()] = j;
      var d = new Ot(b, a.zb, c.vg);
      a.$n[b.F()] = d;
      rt(a, d, c)
    }
  }
  u.kv = function (a) {
    a = a.target;
    Zt(this, !a.Jp);
    Xt(this, a)
  };
  u.iv = function (a) {
    try {
      Zt(this);
      var b = a.target,
        c = this.Zk || (this.Zk = Yt(this));
      if (this.gk[b.F()]) {
        var d = this.$n[b.F()];
        delete this.$n[b.F()];
        delete this.gk[b.F()];
        d && st(this, d, c).G(function () {
          d.J()
        })
      }
    } catch (f) {
      e(f)
    } finally {
      this.Rd = k
    }
  };
  u.gw = function (a) {
    var b = a.target;
    Nc(function () {
      if ("pending" === b.Gc()) {
        var a = pt(this),
          d = this.dj || (this.dj = new Vt(a.vg));
        rt(this, d, a)
      }
    }, 700, this)
  };
  u.hw = function () {
    Zt(this)
  };

  function Zt(a, b) {
    var c = pt(a),
      d = a.dj || (a.dj = new Vt(c.vg));
    st(a, d, c, b)
  }
  u.Jv = function (a) {
    var a = a.target,
      b = new P("cmd:incomingcall", k, {
        mediaSession: a
      });
    a.on("exitState:incoming", function () {
      this.wf($t(this))
    }, this);
    a.on("enterState:closed", function () {
      this.wf($t(this))
    }, this);
    this.Ki($t(this), b)
  };
  u.dw = function (a) {
    var a = a.target,
      b = new P("cmd:outgoingcall", k, {
        mediaSession: a
      });
    a.on("exitState:connecting", function () {
      this.wf($t(this))
    }, this);
    a.on("enterState:closed", function () {
      this.wf($t(this))
    }, this);
    this.Ki($t(this), b);
    Xt(this, a)
  };

  function $t(a) {
    if (!a.Tm) {
      var b = pt(a);
      a.Tm = new Ut(b.vg)
    }
    return a.Tm
  }
  function Yt(a) {
    var b = Yi(a.zb.Ca()).get("videoPanelElem"),
      c = k,
      c = z(b) ? a.C().e(b) : b,
      b = new vt(c);
    a.ta(b, n);
    b.load().bg(b.B, b);
    return b
  };

  function au(a) {
    this.fb = new gi(a, ji);
    this.Tn = this.Hb = this.Si = this.er = this.zb = this.fc = this.rk = k
  }
  function Yi(a) {
    return a.fb
  }
  u = au.prototype;
  u.qa = function () {
    var a = this.fb;
    return Q(a, "serviceId") || Q(a, "appId")
  };
  u.W = function () {
    return this.zb || (this.zb = new U(this))
  };

  function il(a) {
    var b;
    if (!(b = a.Si)) b = new hl, new Om(a.rk || (a.rk = new Dk), b, a.fb), b = a.Si = b;
    return b
  }
  function uj(a) {
    return a.fc || (a.fc = new Kk(a))
  }
  u.Hj = function () {
    return this.er || (this.er = new Xk(this, k, new hl, il(this)))
  };
  u.Kj = function () {
    var a;
    if (!(a = this.Tn)) {
      a = new Wt(this.W());
      var b = new jq(this, a);
      a.load(document.body);
      a = this.Tn = b
    }
    return a
  };
  u.Dc = function () {
    return this.Kj().Dc()
  };
  u.Al = function (a, b, c) {
    var d = a.w(),
      f = c && Q(c, "mid") || Th(),
      f = d.ca.put(ug("/local/peerSession", f), "peerSession").Ta().nb;
    f.Lc(d, a, b, c);
    return f
  };

  function bu(a) {
    z(a) && (a = {
      appId: a
    });
    a = (new au(a)).W();
    if (!a.Ep) {
      a.Ep = j;
      var b = (new ml(a.aa, k)).Fc();
      if (b) al(b.gn.w(), b), a.Oa();
      else a: if (a.Hb) {
          a.j("loadCredentials");
          var c;
          try {
            c = a.Hb.get("credentials")
          } catch (d) {
            a.error(d, "Error getting saved credentials");
            break a
          }
          c && c.length && (a.j("credentials", c), F(c, function (a) {
            try {
              var b = lk(a)
            } catch (c) {
              this.error(c, "Error deserializing credentials");
              return
            }
            a = new ml(this.aa, b.bd());
            gl(a, b);
            al(a.w(), b)
          }, a), a.Oa())
        }
    }
    a.mp();
    Yi(a.Ca()).get("ui") && a.Dc();
    return a
  };
  B("vline.LogLevels.ERROR", Ed);
  B("vline.LogLevels.WARNING", Fd);
  B("vline.LogLevels.INFO", Gd);
  B("vline.LogLevels.FINE", Id);
  B("vline.LogLevels.FINER", Jd);
  B("vline.LogLevels.FINEST", Kd);
  B("vline.LogLevels.OFF", Cd);
  B("vline.MediaStates.INACTIVE", "inactive");
  B("vline.MediaStates.PENDING", "pending");
  B("vline.MediaStates.INCOMING", "incoming");
  B("vline.MediaStates.OUTGOING", "outgoing");
  B("vline.MediaStates.ACTIVE", "active");
  B("vline.PresenceStates.OFFLINE", "offline");
  B("vline.PresenceStates.ONLINE", "online");
  B("vline.PresenceStates.AWAY", "away");
  B("vline.PresenceStates.DO_NOT_DISTURB", "do_not_disturb");
  B("vline.PresenceStates.INVISIBLE", "invisible");
  B("vline.PresenceStates.NONE", "none");
  B("vline.client.create", bu);
  B("vline.config", ji);
  B("vline.ui.create", iq);
  B("vline.log.setLevel", he);
  B("vline.defer", Oc);
  B("vline.when", cd);
  B("vline.Promise.prototype", K.prototype);
  B("vline.Promise.prototype.always", K.prototype.Ze);
  B("vline.Promise.prototype.done", K.prototype.G);
  B("vline.Promise.prototype.then", K.prototype.Rk);
  B("vline.Promise.prototype.fail", K.prototype.$d);
  B("vline.EventTarget.prototype", ff.prototype);
  B("vline.EventTarget.prototype.on", ff.prototype.on);
  B("vline.EventTarget.prototype.off", ff.prototype.qi);
  B("vline.EventTarget.prototype.one", ff.prototype.Ke);
  B("vline.EventTarget.prototype.getId", ff.prototype.F);
  B("vline.Client.create", bu);
  B("vline.Client.prototype", U.prototype);
  B("vline.Client.prototype.connect", U.prototype.hg);
  B("vline.Client.prototype.disconnect", U.prototype.Hl);
  B("vline.Client.prototype.login", U.prototype.ka);
  B("vline.Client.prototype.logout", U.prototype.tc);
  B("vline.Client.prototype.isConnected", U.prototype.yf);
  B("vline.Client.prototype.isLoggedIn", U.prototype.yg);
  B("vline.Client.prototype.getConnectionState", U.prototype.xe);
  B("vline.Client.prototype.getDefaultSession", U.prototype.of);
  B("vline.Client.prototype.getSessions", U.prototype.mp);
  B("vline.Client.prototype.getMediaSessions", U.prototype.Dj);
  B("vline.Client.prototype.getIncomingMediaSessions", U.prototype.Cj);
  B("vline.Client.prototype.getOutgoingMediaSessions", U.prototype.Fj);
  B("vline.Client.prototype.getActiveMediaSession", U.prototype.Aj);
  B("vline.Client.prototype.getUnreadCount", U.prototype.sf);
  B("vline.Client.prototype.hasMediaSessions", U.prototype.Zt);
  B("vline.Client.prototype.hasActiveMediaSession", U.prototype.Wt);
  B("vline.Client.prototype.hasIncomingMediaSessions", U.prototype.Yt);
  B("vline.Client.prototype.hasOutgoingMediaSessions", U.prototype.au);
  B("vline.Client.prototype.hasPendingMediaSessions", U.prototype.lm);
  B("vline.Client.prototype.hasPendingMediaStreams", U.prototype.mm);
  B("vline.Client.prototype.stopMediaSessions", U.prototype.Ln);
  B("vline.Client.prototype.setAnswerTimeout", U.prototype.Hx);
  B("vline.Client.prototype.setRingtone", U.prototype.Cn);
  B("vline.Client.prototype.setIncomingMessageSound", U.prototype.Jx);
  B("vline.Client.prototype.getUiModule", U.prototype.Kj);
  B("vline.Session.prototype", Xk.prototype);
  B("vline.Session.prototype.logout", Xk.prototype.tc);
  B("vline.Session.prototype.getAuthToken", Xk.prototype.Bj);
  B("vline.Session.prototype.getContacts", Xk.prototype.qt);
  B("vline.Session.prototype.getProviderUrl", Xk.prototype.Gj);
  B("vline.Session.prototype.getLocalPerson", Xk.prototype.vt);
  B("vline.Session.prototype.getLocalPersonId", Xk.prototype.ob);
  B("vline.Session.prototype.getPerson", Xk.prototype.yd);
  B("vline.Session.prototype.getUnreadCount", Xk.prototype.sf);
  B("vline.Session.prototype.setPresence", Xk.prototype.Jk);
  B("vline.Session.prototype.setStatus", Xk.prototype.Pg);
  B("vline.Session.prototype.postMessage", Xk.prototype.postMessage);
  B("vline.Session.prototype.startMedia", Xk.prototype.Ok);
  B("vline.Session.prototype.stopMedia", Xk.prototype.Kn);
  B("vline.Channel.prototype", T.prototype);
  B("vline.Channel.prototype.postMessage", T.prototype.postMessage);
  B("vline.Channel.prototype.startMedia", T.prototype.Ok);
  B("vline.Channel.prototype.stopMedia", T.prototype.Kn);
  B("vline.Channel.prototype.informLocalTyping", T.prototype.Cp);
  B("vline.Channel.prototype.getId", T.prototype.F);
  B("vline.Channel.prototype.getShortId", T.prototype.Dt);
  B("vline.Channel.prototype.getDisplayName", T.prototype.be);
  B("vline.Channel.prototype.getMessages", T.prototype.yt);
  B("vline.Channel.prototype.getMediaSession", T.prototype.xt);
  B("vline.Channel.prototype.getProfileUrl", T.prototype.Wl);
  B("vline.Channel.prototype.getThumbnailUrl", T.prototype.Bd);
  B("vline.Channel.prototype.getStatus", T.prototype.Ae);
  B("vline.Channel.prototype.getUnreadCount", T.prototype.sf);
  B("vline.Channel.prototype.isMediaSupported", T.prototype.su);
  B("vline.Channel.prototype.isActive", T.prototype.gd);
  B("vline.Channel.prototype.isTyping", T.prototype.zu);
  B("vline.Channel.prototype.setMessageSoundEnabled", T.prototype.Kx);
  B("vline.Channel.prototype.setActive", T.prototype.setActive);
  B("vline.Channel.prototype.setStatus", T.prototype.Pg);
  B("vline.Channel.prototype.getPath", T.prototype.m);
  B("vline.Channel.prototype.getType", T.prototype.Da);
  B("vline.Channel.prototype.retain", T.prototype.Ta);
  B("vline.Channel.prototype.release", T.prototype.fa);
  B("vline.Channel.prototype.autorelease", T.prototype.yb);
  B("vline.Person.prototype", Jj.prototype);
  B("vline.Person.prototype.getUsername", Jj.prototype.Zl);
  B("vline.Person.prototype.getPresenceState", Jj.prototype.Mh);
  B("vline.Person.prototype.getPresenceDesc", Jj.prototype.Vl);
  B("vline.Message.prototype", Qi.prototype);
  B("vline.Message.prototype.getSender", Qi.prototype.Ct);
  B("vline.Message.prototype.getSenderId", Qi.prototype.Ij);
  B("vline.Message.prototype.getChannel", Qi.prototype.cd);
  B("vline.Message.prototype.getChannelId", Qi.prototype.pt);
  B("vline.Message.prototype.getSessionId", Qi.prototype.zd);
  B("vline.Message.prototype.getBody", Qi.prototype.nt);
  B("vline.Message.prototype.getError", Qi.prototype.getError);
  B("vline.Message.prototype.getPath", Qi.prototype.m);
  B("vline.Message.prototype.getType", Qi.prototype.Da);
  B("vline.Message.prototype.getId", Qi.prototype.F);
  B("vline.Message.prototype.retain", Qi.prototype.Ta);
  B("vline.Message.prototype.release", Qi.prototype.fa);
  B("vline.Message.prototype.autorelease", Qi.prototype.yb);
  B("vline.MediaSession.prototype", qj.prototype);
  B("vline.MediaSession.prototype.start", qj.prototype.start);
  B("vline.MediaSession.prototype.stop", qj.prototype.stop);
  B("vline.MediaSession.prototype.getChannel", qj.prototype.cd);
  B("vline.MediaSession.prototype.getDisplayName", qj.prototype.be);
  B("vline.MediaSession.prototype.getThumbnailUrl", qj.prototype.Bd);
  B("vline.MediaSession.prototype.getMediaState", qj.prototype.Gc);
  B("vline.MediaSession.prototype.getLocalStreams", qj.prototype.Ih);
  B("vline.MediaSession.prototype.getRemoteStreams", qj.prototype.Oh);
  B("vline.MediaSession.prototype.hasVideo", qj.prototype.de);
  B("vline.MediaSession.prototype.hasAudio", qj.prototype.Uh);
  B("vline.MediaSession.prototype.isPending", qj.prototype.vu);
  B("vline.MediaSession.prototype.isIncoming", qj.prototype.qu);
  B("vline.MediaSession.prototype.isOutgoing", qj.prototype.uu);
  B("vline.MediaSession.prototype.isConnecting", qj.prototype.wm);
  B("vline.MediaSession.prototype.isActive", qj.prototype.gd);
  B("vline.MediaSession.prototype.isClosed", qj.prototype.nu);
  B("vline.MediaSession.prototype.isAudioMuted", qj.prototype.Wj);
  B("vline.MediaSession.prototype.isVideoMuted", qj.prototype.Bm);
  B("vline.MediaSession.prototype.setAudioMuted", qj.prototype.Og);
  B("vline.MediaSession.prototype.setVideoMuted", qj.prototype.Qg);
  B("vline.MediaSession.prototype.isVideoPanelVisible", qj.prototype.Au);
  B("vline.MediaStream.prototype", Wh.prototype);
  B("vline.MediaStream.prototype.stop", Wh.prototype.stop);
  B("vline.MediaStream.prototype.setAudioMuted", Wh.prototype.Og);
  B("vline.MediaStream.prototype.setVideoMuted", Wh.prototype.Qg);
  B("vline.MediaStream.prototype.createMediaElement", Wh.prototype.Jo);
  B("vline.MediaStream.prototype.createVideoElement", Wh.prototype.Lo);
  B("vline.MediaStream.prototype.createAudioElement", Wh.prototype.Ho);
  B("vline.MediaStream.prototype.getNativeStream", Wh.prototype.At);
  B("vline.MediaStream.prototype.hasAudio", Wh.prototype.Uh);
  B("vline.MediaStream.prototype.hasVideo", Wh.prototype.de);
  B("vline.MediaStream.prototype.isAudioMuted", Wh.prototype.Wj);
  B("vline.MediaStream.prototype.isVideoMuted", Wh.prototype.Bm);
  B("vline.MediaStream.prototype.isStarted", Wh.prototype.yu);
  B("vline.MediaStream.prototype.isLocal", Wh.prototype.pb);
  B("vline.MediaStream.prototype.isRemote", Wh.prototype.xu);
  B("vline.Entity.prototype", O.prototype);
  B("vline.Entity.prototype.getCreationTime", O.prototype.rt);
  B("vline.Entity.prototype.getPath", O.prototype.m);
  B("vline.Entity.prototype.getType", O.prototype.Da);
  B("vline.Entity.prototype.getId", O.prototype.F);
  B("vline.Entity.prototype.retain", O.prototype.Ta);
  B("vline.Entity.prototype.release", O.prototype.fa);
  B("vline.Entity.prototype.autorelease", O.prototype.yb);
  B("vline.Delegate.prototype", xg.prototype);
  B("vline.Delegate.prototype.getId", xg.prototype.F);
  B("vline.Delegate.prototype.retain", xg.prototype.Ta);
  B("vline.Delegate.prototype.release", xg.prototype.fa);
  B("vline.Delegate.prototype.autorelease", xg.prototype.yb);
  B("vline.Collection.prototype", yk.prototype);
  B("vline.Collection.prototype.getRoot", yk.prototype.Bt);
  B("vline.Collection.prototype.getPath", yk.prototype.m);
  B("vline.Collection.prototype.getSize", yk.prototype.Ad);
  B("vline.Collection.prototype.getImpl", yk.prototype.st);
  B("vline.Collection.prototype.get", yk.prototype.get);
  B("vline.Collection.prototype.retain", yk.prototype.Ta);
  B("vline.Collection.prototype.release", yk.prototype.fa);
  B("vline.Collection.prototype.autorelease", yk.prototype.yb);
  B("vline.Collection.prototype.hasNextPage", yk.prototype.$t);
  B("vline.Collection.prototype.loadNextPage", yk.prototype.Ju);
  B("vline.UiModule.prototype", jq.prototype);
  B("vline.UiModule.prototype.createMessageInput", jq.prototype.Qs);
  B("vline.UiModule.prototype.createTextLogo", jq.prototype.Rs);
  B("vline.Browser.supportsChat", function () {
    return Vg() || Qg || Lg || Rg || Og || Ng || Pg
  });
  B("vline.Browser.supportsWebRtc", Vg);
  B("vline.Browser.supportsHd", Wg);
  B("vline.Browser.getUserAgentString", function () {
    return Bb()
  });
  B("vline.Browser.isVersion", function (a) {
    return 0 <= $a(Tg, a)
  });
  B("vline.Browser.getVersionString", function () {
    return Kb
  });
  B("vline.Browser.isFirefox", function () {
    return Lg
  });
  B("vline.Browser.isIE", function () {
    return G
  });
  B("vline.Browser.isOpera", function () {
    return Fb
  });
  B("vline.Browser.isSafari", function () {
    return Rg
  });
  B("vline.Browser.isChrome", function () {
    return Qg
  });
  B("vline.Browser.isMobile", Ug);
  B("vline.MessageInput", hq);
  B("vline.MessageInput.prototype", hq.prototype);
  B("vline.MessageInput.prototype.setPersonId", hq.prototype.Lx);
  B("vline.MessageInput.prototype.render", hq.prototype.Pb);
  B("vline.Disposable.prototype", ya.prototype);
  B("vline.Disposable.prototype.dispose", ya.prototype.J);
  "undefined" !== typeof dojo ? dojo.provide("org.cometd") : (this.org = this.org || {}, org.cometd = {});
  org.cometd.JSON = {};
  org.cometd.JSON.toJSON = org.cometd.JSON.fromJSON = function () {
    throw "Abstract";
  };
  org.cometd.Utils = {};
  org.cometd.Utils.isString = function (b) {
    return void 0 === b || null === b ? !1 : "string" === typeof b || b instanceof String
  };
  org.cometd.Utils.isArray = function (b) {
    return void 0 === b || null === b ? !1 : b instanceof Array
  };
  org.cometd.Utils.inArray = function (b, d) {
    for (var c = 0; c < d.length; ++c) if (b === d[c]) return c;
    return -1
  };
  org.cometd.Utils.setTimeout = function (b, d, c) {
    return window.setTimeout(function () {
      try {
        d()
      } catch (c) {
        b._debug("Exception invoking timed function", d, c)
      }
    }, c)
  };
  org.cometd.Utils.clearTimeout = function (b) {
    window.clearTimeout(b)
  };
  org.cometd.TransportRegistry = function () {
    var b = [],
      d = {};
    this.getTransportTypes = function () {
      return b.slice(0)
    };
    this.findTransportTypes = function (c, a, j) {
      for (var h = [], i = 0; i < b.length; ++i) {
        var f = b[i];
        !0 === d[f].accept(c, a, j) && h.push(f)
      }
      return h
    };
    this.negotiateTransport = function (c, a, j, h) {
      for (var i = 0; i < b.length; ++i) for (var f = b[i], m = 0; m < c.length; ++m) if (f === c[m]) {
            var g = d[f];
            if (!0 === g.accept(a, j, h)) return g
          }
      return null
    };
    this.add = function (c, a, j) {
      for (var h = !1, i = 0; i < b.length; ++i) if (b[i] === c) {
          h = !0;
          break
        }
      h || ("number" !==
        typeof j ? b.push(c) : b.splice(j, 0, c), d[c] = a);
      return !h
    };
    this.find = function (c) {
      for (var a = 0; a < b.length; ++a) if (b[a] === c) return d[c];
      return null
    };
    this.remove = function (c) {
      for (var a = 0; a < b.length; ++a) if (b[a] === c) return b.splice(a, 1), a = d[c], delete d[c], a;
      return null
    };
    this.clear = function () {
      b = [];
      d = {}
    };
    this.reset = function () {
      for (var c = 0; c < b.length; ++c) d[b[c]].reset()
    }
  };
  org.cometd.Transport = function () {
    var b, d;
    this.registered = function (c, a) {
      b = c;
      d = a
    };
    this.unregistered = function () {
      d = b = null
    };
    this._debug = function () {
      d._debug.apply(d, arguments)
    };
    this._mixin = function () {
      return d._mixin.apply(d, arguments)
    };
    this.getConfiguration = function () {
      return d.getConfiguration()
    };
    this.getAdvice = function () {
      return d.getAdvice()
    };
    this.setTimeout = function (c, a) {
      return org.cometd.Utils.setTimeout(d, c, a)
    };
    this.clearTimeout = function (c) {
      org.cometd.Utils.clearTimeout(c)
    };
    this.convertToMessages = function (c) {
      if (org.cometd.Utils.isString(c)) try {
          return org.cometd.JSON.fromJSON(c)
      } catch (a) {
        throw this._debug("Could not convert to JSON the following string",
          '"' + c + '"'), a;
      }
      if (org.cometd.Utils.isArray(c)) return c;
      if (void 0 === c || null === c) return [];
      if (c instanceof Object) return [c];
      throw "Conversion Error " + c + ", typeof " + typeof c;
    };
    this.accept = function () {
      throw "Abstract";
    };
    this.getType = function () {
      return b
    };
    this.send = function () {
      throw "Abstract";
    };
    this.reset = function () {
      this._debug("Transport", b, "reset")
    };
    this.abort = function () {
      this._debug("Transport", b, "aborted")
    };
    this.toString = function () {
      return this.getType()
    }
  };
  org.cometd.Transport.derive = function (b) {
    function d() {}
    d.prototype = b;
    return new d
  };
  org.cometd.RequestTransport = function () {
    function b(c) {
      for (; 0 < g.length;) {
        var a = g[0],
          d = a[0],
          a = a[1];
        if (d.url === c.url && d.sync === c.sync) g.shift(), c.messages = c.messages.concat(d.messages), this._debug("Coalesced", d.messages.length, "messages from request", a.id);
        else break
      }
    }
    function d(c, a) {
      this.transportSend(c, a);
      a.expired = !1;
      if (!c.sync) {
        var d = this.getConfiguration().maxNetworkDelay,
          g = d;
        !0 === a.metaConnect && (g += this.getAdvice().timeout);
        this._debug("Transport", this.getType(), "waiting at most", g, "ms for the response, maxNetworkDelay",
          d);
        var b = this;
        a.timeout = this.setTimeout(function () {
          a.expired = !0;
          a.xhr && a.xhr.abort();
          var d = "Request " + a.id + " of transport " + b.getType() + " exceeded " + g + " ms max network delay";
          b._debug(d);
          b.complete(a, !1, a.metaConnect);
          c.onFailure(a.xhr, c.messages, "timeout", d)
        }, g)
      }
    }
    function c(c) {
      var a = ++i,
        b = {
          id: a,
          metaConnect: !1
        };
      m.length < this.getConfiguration().maxConnections - 1 ? (m.push(b), d.call(this, c, b)) : (this._debug("Transport", this.getType(), "queueing request", a, "envelope", c), g.push([c, b]))
    }
    function a(a, d) {
      var f =
        org.cometd.Utils.inArray(a, m);
      0 <= f && m.splice(f, 1);
      if (0 < g.length) {
        var f = g.shift(),
          j = f[0],
          h = f[1];
        this._debug("Transport dequeued request", h.id);
        if (d) this.getConfiguration().autoBatch && b.call(this, j), c.call(this, j), this._debug("Transport completed request", a.id, j);
        else {
          var i = this;
          this.setTimeout(function () {
            i.complete(h, !1, h.metaConnect);
            j.onFailure(h.xhr, j.messages, "error", "Previous request failed")
          }, 0)
        }
      }
    }
    var j = new org.cometd.Transport,
      h = org.cometd.Transport.derive(j),
      i = 0,
      f = null,
      m = [],
      g = [];
    h.complete = function (c, d, g) {
      if (g) {
        c = c.id;
        this._debug("Transport", this.getType(), "metaConnect complete, request", c);
        if (null !== f && f.id !== c) throw "Longpoll request mismatch, completing request " + c;
        f = null
      } else a.call(this, c, d)
    };
    h.transportSend = function () {
      throw "Abstract";
    };
    h.transportSuccess = function (c, a, d) {
      if (!a.expired) if (this.clearTimeout(a.timeout), this.complete(a, !0, a.metaConnect), d && 0 < d.length) c.onSuccess(d);
        else c.onFailure(a.xhr, c.messages, "Empty HTTP response")
    };
    h.transportFailure = function (c, a, d, g) {
      a.expired ||
        (this.clearTimeout(a.timeout), this.complete(a, !1, a.metaConnect), c.onFailure(a.xhr, c.messages, d, g))
    };
    h.send = function (a, g) {
      if (g) {
        if (null !== f) throw "Concurrent metaConnect requests not allowed, request id=" + f.id + " not yet completed";
        var b = ++i;
        this._debug("Transport", this.getType(), "metaConnect send, request", b, "envelope", a);
        b = {
          id: b,
          metaConnect: !0
        };
        d.call(this, a, b);
        f = b
      } else c.call(this, a)
    };
    h.abort = function () {
      j.abort();
      for (var c = 0; c < m.length; ++c) {
        var a = m[c];
        this._debug("Aborting request", a);
        a.xhr && a.xhr.abort()
      }
      f &&
        (this._debug("Aborting metaConnect request", f), f.xhr && f.xhr.abort());
      this.reset()
    };
    h.reset = function () {
      j.reset();
      f = null;
      m = [];
      g = []
    };
    return h
  };
  org.cometd.LongPollingTransport = function () {
    var b = new org.cometd.RequestTransport,
      d = org.cometd.Transport.derive(b),
      c = !0;
    d.accept = function (a, d) {
      return c || !d
    };
    d.xhrSend = function () {
      throw "Abstract";
    };
    d.transportSend = function (a, d) {
      this._debug("Transport", this.getType(), "sending request", d.id, "envelope", a);
      var b = this;
      try {
        var i = !0;
        d.xhr = this.xhrSend({
          transport: this,
          url: a.url,
          sync: a.sync,
          headers: this.getConfiguration().requestHeaders,
          body: org.cometd.JSON.toJSON(a.messages),
          onSuccess: function (f) {
            b._debug("Transport",
              b.getType(), "received response", f);
            var g = !1;
            try {
              var i = b.convertToMessages(f);
              0 === i.length ? (c = !1, b.transportFailure(a, d, "no response", null)) : (g = !0, b.transportSuccess(a, d, i))
            } catch (o) {
              b._debug(o), g || (c = !1, b.transportFailure(a, d, "bad response", o))
            }
          },
          onError: function (f, g) {
            c = !1;
            i ? b.setTimeout(function () {
              b.transportFailure(a, d, f, g)
            }, 0) : b.transportFailure(a, d, f, g)
          }
        });
        i = !1
      } catch (f) {
        c = !1, this.setTimeout(function () {
          b.transportFailure(a, d, "error", f)
        }, 0)
      }
    };
    d.reset = function () {
      b.reset();
      c = !0
    };
    return d
  };
  org.cometd.CallbackPollingTransport = function () {
    var b = new org.cometd.RequestTransport,
      b = org.cometd.Transport.derive(b);
    b.accept = function () {
      return !0
    };
    b.jsonpSend = function () {
      throw "Abstract";
    };
    b.transportSend = function (d, c) {
      for (var a = this, b = 0, h = d.messages.length, i = []; 0 < h;) {
        var f = org.cometd.JSON.toJSON(d.messages.slice(b, b + h)),
          f = d.url.length + encodeURI(f).length;
        if (2E3 < f) {
          if (1 === h) {
            var m = "Bayeux message too big (" + f + " bytes, max is 2000) for transport " + this.getType();
            this.setTimeout(function () {
              a.transportFailure(d,
                c, "error", m)
            }, 0);
            return
          }--h
        } else i.push(h), b += h, h = d.messages.length - b
      }
      var g = d;
      if (1 < i.length) {
        b = 0;
        h = i[0];
        this._debug("Transport", this.getType(), "split", d.messages.length, "messages into", i.join(" + "));
        g = this._mixin(!1, {}, d);
        g.messages = d.messages.slice(b, h);
        g.onSuccess = d.onSuccess;
        g.onFailure = d.onFailure;
        for (f = 1; f < i.length; ++f) {
          var l = this._mixin(!1, {}, d),
            b = h,
            h = h + i[f];
          l.messages = d.messages.slice(b, h);
          l.onSuccess = d.onSuccess;
          l.onFailure = d.onFailure;
          this.send(l, c.metaConnect)
        }
      }
      this._debug("Transport",
        this.getType(), "sending request", c.id, "envelope", g);
      try {
        var o = !0;
        this.jsonpSend({
          transport: this,
          url: g.url,
          sync: g.sync,
          headers: this.getConfiguration().requestHeaders,
          body: org.cometd.JSON.toJSON(g.messages),
          onSuccess: function (d) {
            var b = !1;
            try {
              var f = a.convertToMessages(d);
              0 === f.length ? a.transportFailure(g, c, "no response") : (b = !0, a.transportSuccess(g, c, f))
            } catch (h) {
              a._debug(h), b || a.transportFailure(g, c, "bad response", h)
            }
          },
          onError: function (d, b) {
            o ? a.setTimeout(function () {
              a.transportFailure(g, c, d, b)
            }, 0) : a.transportFailure(g,
              c, d, b)
          }
        });
        o = !1
      } catch (u) {
        this.setTimeout(function () {
          a.transportFailure(g, c, "error", u)
        }, 0)
      }
    };
    return b
  };
  org.cometd.WebSocketTransport = function () {
    function b() {
      var c = h.getURL().replace(/^http/, "ws");
      this._debug("Transport", this.getType(), "connecting to URL", c);
      var a = this,
        d = null,
        b = h.getConfiguration().connectTimeout;
      0 < b && (d = this.setTimeout(function () {
        d = null;
        l || (a._debug("Transport", a.getType(), "timed out while connecting to URL", c, ":", b, "ms"), a.onClose(1002, "Connect Timeout"))
      }, b));
      var f = new org.cometd.WebSocket(c);
      f.onopen = function () {
        a._debug("WebSocket opened", f);
        d && (a.clearTimeout(d), d = null);
        if (f !==
          g) a._debug("Ignoring open event, WebSocket", g);
        else a.onOpen()
      };
      f.onclose = function (c) {
        var b = c ? c.code : 1E3,
          c = c ? c.reason : void 0;
        a._debug("WebSocket closed", b, "/", c, f);
        d && (a.clearTimeout(d), d = null);
        if (f !== g) a._debug("Ignoring close event, WebSocket", g);
        else a.onClose(b, c)
      };
      f.onerror = function () {
        f.onclose({
          code: 1002
        })
      };
      f.onmessage = function (c) {
        a._debug("WebSocket message", c, f);
        if (f !== g) a._debug("Ignoring message event, WebSocket", g);
        else a.onMessage(c)
      };
      g = f;
      this._debug("Transport", this.getType(), "configured callbacks on",
        f)
    }
    function d(c, a) {
      var d = org.cometd.JSON.toJSON(c.messages);
      g.send(d);
      this._debug("Transport", this.getType(), "sent", c, "metaConnect =", a);
      var b = d = this.getConfiguration().maxNetworkDelay;
      a && (b += this.getAdvice().timeout, o = !0);
      for (var f = [], h = 0; h < c.messages.length; ++h) {
        var i = c.messages[h];
        if (i.id) {
          f.push(i.id);
          var j = g;
          m[i.id] = this.setTimeout(function () {
            j && j.close(1E3, "Timeout")
          }, b)
        }
      }
      this._debug("Transport", this.getType(), "waiting at most", b, "ms for messages", f, "maxNetworkDelay", d, ", timeouts:", m)
    }
    function c(c,
      a) {
      try {
        null === g ? b.call(this) : l && d.call(this, c, a)
      } catch (f) {
        this.setTimeout(function () {
          c.onFailure(g, c.messages, "error", f)
        }, 0)
      }
    }
    var a = new org.cometd.Transport,
      j = org.cometd.Transport.derive(a),
      h, i = !0,
      f = {}, m = {}, g = null,
      l = !1,
      o = !1,
      u;
    j.onOpen = function () {
      this._debug("Transport", this.getType(), "opened", g);
      l = !0;
      this._debug("Sending pending messages", f);
      for (var c in f) {
        var a = f[c],
          b = a[0],
          a = a[1];
        u = b.onSuccess;
        d.call(this, b, a)
      }
    };
    j.onMessage = function (c) {
      this._debug("Transport", this.getType(), "received websocket message",
        c, g);
      for (var a = !1, c = this.convertToMessages(c.data), d = [], b = 0; b < c.length; ++b) {
        var h = c[b];
        if ((/^\/meta\//.test(h.channel) || void 0 === h.data || /^\/service\//.test(h.channel)) && h.id) {
          d.push(h.id);
          var i = m[h.id];
          i && (this.clearTimeout(i), delete m[h.id], this._debug("Transport", this.getType(), "removed timeout for message", h.id, ", timeouts", m))
        }
        "/meta/connect" === h.channel && (o = !1);
        "/meta/disconnect" === h.channel && !o && (a = !0)
      }
      b = !1;
      for (h = 0; h < d.length; ++h) {
        var j = d[h],
          v;
        for (v in f) {
          var i = v.split(","),
            x = org.cometd.Utils.inArray(j,
              i);
          if (0 <= x) {
            b = !0;
            i.splice(x, 1);
            j = f[v][0];
            x = f[v][1];
            delete f[v];
            0 < i.length && (f[i.join(",")] = [j, x]);
            break
          }
        }
      }
      b && this._debug("Transport", this.getType(), "removed envelope, envelopes", f);
      u.call(this, c);
      a && null !== g && l && (g.close(1E3, "Disconnect"), g = null, l = !1)
    };
    j.onClose = function (c, a) {
      this._debug("Transport", this.getType(), "closed", c, a, g);
      for (var b in m) this.clearTimeout(m[b]);
      m = {};
      for (var d in f) b = f[d][0], f[d][1] && (o = !1), b.onFailure(g, b.messages, "closed " + c + "/" + a);
      f = {};
      null !== g && l && g.close(1E3, "Close");
      l = !1;
      g = null
    };
    j.registered = function (c, b) {
      a.registered(c, b);
      h = b
    };
    j.accept = function () {
      return i && !! org.cometd.WebSocket && !1 !== h.websocketEnabled
    };
    j.send = function (a, b) {
      this._debug("Transport", this.getType(), "sending", a, "metaConnect =", b);
      for (var d = [], g = 0; g < a.messages.length; ++g) {
        var h = a.messages[g];
        h.id && d.push(h.id)
      }
      f[d.join(",")] = [a, b];
      this._debug("Transport", this.getType(), "stored envelope, envelopes", f);
      c.call(this, a, b)
    };
    j.abort = function () {
      a.abort();
      if (null !== g) try {
          g.close(1001)
      } catch (c) {
        this._debug(c)
      }
      this.reset()
    };
    j.reset = function () {
      a.reset();
      null !== g && l && g.close(1E3, "Reset");
      i = !0;
      m = {};
      f = {};
      g = null;
      l = !1;
      u = null
    };
    return j
  };
  org.cometd.Cometd = function (b) {
    function d(e) {
      return org.cometd.Utils.isString(e)
    }
    function c(e) {
      return void 0 === e || null === e ? !1 : "function" === typeof e
    }
    function a(e, a) {
      if (window.console) {
        var b = window.console[e];
        c(b) && b.apply(window.console, a)
      }
    }
    function j() {
      for (var e in w) for (var c = w[e], a = 0; a < c.length; ++a) {
          var b = c[a];
          b && !b.listener && (delete c[a], k._debug("Removed subscription", b, "for channel", e))
      }
    }
    function h(e) {
      A !== e && (k._debug("Status", A, "->", e), A = e)
    }
    function i() {
      return "disconnecting" === A || "disconnected" ===
        A
    }
    function f(e, a, b, d, f) {
      try {
        return a.call(e, d)
      } catch (g) {
        k._debug("Exception during execution of extension", b, g);
        e = k.onExtensionException;
        if (c(e)) {
          k._debug("Invoking extension exception callback", b, g);
          try {
            e.call(k, g, b, f, d)
          } catch (h) {
            k._info("Exception during execution of exception callback in extension", b, h)
          }
        }
        return d
      }
    }
    function m(e) {
      for (var a = 0; a < q.length && !(void 0 === e || null === e); ++a) {
        var b = q[a],
          d = b.extension.outgoing;
        c(d) && (b = f(b.extension, d, b.name, e, !0), e = void 0 === b ? e : b)
      }
      return e
    }
    function g(e, a) {
      var b =
        w[e];
      if (b && 0 < b.length) for (var d = 0; d < b.length; ++d) {
          var f = b[d];
          if (f) try {
              f.callback.call(f.scope, a)
          } catch (g) {
            k._debug("Exception during notification", f, a, g);
            var h = k.onListenerException;
            if (c(h)) {
              k._debug("Invoking listener exception callback", f, g);
              try {
                h.call(k, g, f.handle, f.listener, a)
              } catch (i) {
                k._info("Exception during execution of listener callback", f, i)
              }
            }
          }
      }
    }
    function l(e, a) {
      g(e, a);
      for (var b = e.split("/"), c = b.length - 1, d = c; 0 < d; --d) {
        var f = b.slice(0, d).join("/") + "/*";
        d === c && g(f, a);
        f += "*";
        g(f, a)
      }
    }
    function o() {
      null !==
        H && org.cometd.Utils.clearTimeout(H);
      H = null
    }
    function u(e) {
      o();
      var a = r.interval + p;
      k._debug("Function scheduled in", a, "ms, interval =", r.interval, "backoff =", p, e);
      H = org.cometd.Utils.setTimeout(k, e, a)
    }
    function D(e, a, b, c) {
      for (var d = 0; d < a.length; ++d) {
        var f = a[d];
        f.id = "" + ++$;
        if (B) f.clientId = B;
        f = m(f);
        void 0 !== f && null !== f ? a[d] = f : a.splice(d--, 1)
      }
      if (0 !== a.length) d = n.url, n.appendMessageTypeToURL && (d.match(/\/$/) || (d += "/"), c && (d += c)), e = {
          url: d,
          sync: e,
          messages: a,
          onSuccess: function (e) {
            try {
              Q.call(k, e)
            } catch (a) {
              k._debug("Exception during handling of messages",
                a)
            }
          },
          onFailure: function (e, a, b, c) {
            try {
              K.call(k, e, a, b, c)
            } catch (d) {
              k._debug("Exception during handling of failure", d)
            }
          }
      }, k._debug("Send", e), t.send(e, b)
    }
    function G(e) {
      0 < y || !0 === E ? C.push(e) : D(!1, [e], !1)
    }
    function O() {
      var e = C;
      C = [];
      0 < e.length && D(!1, e, !1)
    }
    function I() {
      h("connecting");
      u(function () {
        if (!i()) {
          var e = {
            channel: "/meta/connect",
            connectionType: t.getType()
          };
          if (!L) e.advice = {
              timeout: 0
          };
          h("connecting");
          k._debug("Connect sent", e);
          D(!1, [e], !0, "connect");
          h("connected")
        }
      })
    }
    function J(e) {
      e && (r = k._mixin(!1, {},
        n.advice, e), k._debug("New advice", r))
    }
    function z(e) {
      o();
      e && t.abort();
      B = null;
      h("disconnected");
      p = y = 0;
      0 < C.length && (K.call(k, void 0, C, "error", "Disconnected"), C = [])
    }
    function P(e) {
      B = null;
      j();
      i() ? (s.reset(), J(n.advice)) : J(k._mixin(!1, r, {
        reconnect: "retry"
      }));
      y = 0;
      E = !0;
      M = e;
      var e = s.findTransportTypes("1.0", F, n.url),
        a = k._mixin(!1, {}, M, {
          version: "1.0",
          minimumVersion: "0.9",
          channel: "/meta/handshake",
          supportedConnectionTypes: e,
          advice: {
            timeout: r.timeout,
            interval: r.interval
          }
        });
      t = s.negotiateTransport(e, "1.0", F, n.url);
      k._debug("Initial transport is", t.getType());
      h("handshaking");
      k._debug("Handshake sent", a);
      D(!1, [a], !1, "handshake")
    }
    function v() {
      h("handshaking");
      E = !0;
      u(function () {
        P(M)
      })
    }
    function x(e) {
      l("/meta/handshake", e);
      l("/meta/unsuccessful", e);
      !i() && "none" !== r.reconnect ? (p < n.maxBackoff && (p += n.backoffIncrement), v()) : z(!1)
    }
    function R(e) {
      l("/meta/connect", e);
      l("/meta/unsuccessful", e);
      e = i() ? "none" : r.reconnect;
      switch (e) {
      case "retry":
        I();
        p < n.maxBackoff && (p += n.backoffIncrement);
        break;
      case "handshake":
        s.reset();
        p =
          0;
        v();
        break;
      case "none":
        z(!1);
        break;
      default:
        throw "Unrecognized advice action" + e;
      }
    }
    function S(e) {
      z(!0);
      l("/meta/disconnect", e);
      l("/meta/unsuccessful", e)
    }
    function T(e) {
      l("/meta/subscribe", e);
      l("/meta/unsuccessful", e)
    }
    function U(e) {
      l("/meta/unsubscribe", e);
      l("/meta/unsuccessful", e)
    }
    function V(e) {
      l("/meta/publish", e);
      l("/meta/unsuccessful", e)
    }
    function W(e) {
      for (var a = 0; a < q.length && !(void 0 === e || null === e); ++a) {
        var b = q[n.reverseIncomingExtensions ? q.length - 1 - a : a],
          d = b.extension.incoming;
        c(d) && (b = f(b.extension,
          d, b.name, e, !1), e = void 0 === b ? e : b)
      }
      if (!(void 0 === e || null === e)) switch (J(e.advice), e.channel) {
        case "/meta/handshake":
          if (e.successful) {
            B = e.clientId;
            a = s.negotiateTransport(e.supportedConnectionTypes, e.version, F, n.url);
            if (null === a) throw "Could not negotiate transport with server; client " + s.findTransportTypes(e.version, F, n.url) + ", server " + e.supportedConnectionTypes;
            t !== a && (k._debug("Transport", t, "->", a), t = a);
            E = !1;
            O();
            e.reestablish = N;
            N = !0;
            l("/meta/handshake", e);
            e = i() ? "none" : r.reconnect;
            switch (e) {
            case "retry":
              p =
                0;
              I();
              break;
            case "none":
              z(!1);
              break;
            default:
              throw "Unrecognized advice action " + e;
            }
          } else x(e);
          break;
        case "/meta/connect":
          if (L = e.successful) switch (l("/meta/connect", e), e = i() ? "none" : r.reconnect, e) {
            case "retry":
              p = 0;
              I();
              break;
            case "none":
              z(!1);
              break;
            default:
              throw "Unrecognized advice action " + e;
          } else R(e);
          break;
        case "/meta/disconnect":
          e.successful ? (z(!1), l("/meta/disconnect", e)) : S(e);
          break;
        case "/meta/subscribe":
          e.successful ? l("/meta/subscribe", e) : T(e);
          break;
        case "/meta/unsubscribe":
          e.successful ? l("/meta/unsubscribe",
            e) : U(e);
          break;
        default:
          void 0 === e.successful ? e.data ? l(e.channel, e) : k._debug("Unknown message", e) : e.successful ? l("/meta/publish", e) : V(e)
      }
    }
    function X(e) {
      if (e = w[e]) for (var a = 0; a < e.length; ++a) if (e[a]) return !0;
      return !1
    }
    function Y(e, a) {
      var b = {
        scope: e,
        method: a
      };
      if (c(e)) b.scope = void 0, b.method = e;
      else if (d(a)) {
        if (!e) throw "Invalid scope " + e;
        b.method = e[a];
        if (!c(b.method)) throw "Invalid callback " + a + " for scope " + e;
      } else if (!c(a)) throw "Invalid callback " + a;
      return b
    }
    function Z(e, a, b, c) {
      a = Y(a, b);
      k._debug("Adding listener on",
        e, "with scope", a.scope, "and callback", a.method);
      c = {
        channel: e,
        scope: a.scope,
        callback: a.method,
        listener: c
      };
      a = w[e];
      a || (a = [], w[e] = a);
      a = a.push(c) - 1;
      c.id = a;
      c.handle = [e, a];
      k._debug("Added listener", c, "for channel", e, "having id =", a);
      return c.handle
    }
    var k = this,
      aa = b || "default",
      F = !1,
      s = new org.cometd.TransportRegistry,
      t, A = "disconnected",
      $ = 0,
      B = null,
      y = 0,
      C = [],
      E = !1,
      w = {}, p = 0,
      H = null,
      q = [],
      r = {}, M, N = !1,
      L = !1,
      n = {
        connectTimeout: 0,
        maxConnections: 2,
        backoffIncrement: 1E3,
        maxBackoff: 6E4,
        logLevel: "info",
        reverseIncomingExtensions: !0,
        maxNetworkDelay: 1E4,
        requestHeaders: {},
        appendMessageTypeToURL: !0,
        autoBatch: !1,
        advice: {
          timeout: 6E4,
          interval: 0,
          reconnect: "retry"
        }
      };
    this._mixin = function (e, a, b) {
      for (var c = a || {}, d = 2; d < arguments.length; ++d) {
        var f = arguments[d];
        if (!(void 0 === f || null === f)) for (var g in f) {
            var h = f[g],
              i = c[g];
            h !== a && void 0 !== h && (c[g] = e && "object" === typeof h && null !== h ? h instanceof Array ? this._mixin(e, i instanceof Array ? i : [], h) : this._mixin(e, "object" === typeof i && !(i instanceof Array) ? i : {}, h) : h)
        }
      }
      return c
    };
    this._warn = function () {
      a("warn",
        arguments)
    };
    this._info = function () {
      "warn" !== n.logLevel && a("info", arguments)
    };
    this._debug = function () {
      "debug" === n.logLevel && a("debug", arguments)
    };
    this._isCrossDomain = function (e) {
      return e && e !== window.location.host
    };
    var Q, K;
    this.send = G;
    this.receive = W;
    Q = function (e) {
      k._debug("Received", e);
      for (var a = 0; a < e.length; ++a) W(e[a])
    };
    K = function (e, a, b, c) {
      k._debug("handleFailure", e, a, b, c);
      for (b = 0; b < a.length; ++b) {
        var d = a[b];
        switch (d.channel) {
        case "/meta/handshake":
          x({
            successful: !1,
            failure: !0,
            channel: "/meta/handshake",
            request: d,
            xhr: e,
            advice: {
              reconnect: "retry",
              interval: p
            }
          });
          break;
        case "/meta/connect":
          c = e;
          L = !1;
          R({
            successful: !1,
            failure: !0,
            channel: "/meta/connect",
            request: d,
            xhr: c,
            advice: {
              reconnect: "retry",
              interval: p
            }
          });
          break;
        case "/meta/disconnect":
          S({
            successful: !1,
            failure: !0,
            channel: "/meta/disconnect",
            request: d,
            xhr: e,
            advice: {
              reconnect: "none",
              interval: 0
            }
          });
          break;
        case "/meta/subscribe":
          T({
            successful: !1,
            failure: !0,
            channel: "/meta/subscribe",
            request: d,
            xhr: e,
            advice: {
              reconnect: "none",
              interval: 0
            }
          });
          break;
        case "/meta/unsubscribe":
          U({
            successful: !1,
            failure: !0,
            channel: "/meta/unsubscribe",
            request: d,
            xhr: e,
            advice: {
              reconnect: "none",
              interval: 0
            }
          });
          break;
        default:
          V({
            successful: !1,
            failure: !0,
            channel: d.channel,
            request: d,
            xhr: e,
            advice: {
              reconnect: "none",
              interval: 0
            }
          })
        }
      }
    };
    this.registerTransport = function (a, b, d) {
      if (d = s.add(a, b, d)) this._debug("Registered transport", a), c(b.registered) && b.registered(a, this);
      return d
    };
    this.getTransportTypes = function () {
      return s.getTransportTypes()
    };
    this.unregisterTransport = function (a) {
      var b = s.remove(a);
      null !== b && (this._debug("Unregistered transport",
        a), c(b.unregistered) && b.unregistered());
      return b
    };
    this.unregisterTransports = function () {
      s.clear()
    };
    this.findTransport = function (a) {
      return s.find(a)
    };
    this.configure = function (a) {
      k._debug("Configuring cometd object with", a);
      d(a) && (a = {
        url: a
      });
      a || (a = {});
      n = k._mixin(!1, n, a);
      if (!n.url) throw "Missing required configuration parameter 'url' specifying the Bayeux server URL";
      var b = /(^https?:\/\/)?(((\[[^\]]+\])|([^:\/\?#]+))(:(\d+))?)?([^\?#]*)(.*)?/.exec(n.url),
        a = b[8],
        c = b[9];
      F = k._isCrossDomain(b[2]);
      if (n.appendMessageTypeToURL) if (void 0 !==
          c && 0 < c.length) k._info("Appending message type to URI " + a + c + " is not supported, disabling 'appendMessageTypeToURL' configuration"), n.appendMessageTypeToURL = !1;
        else if (b = a.split("/"), c = b.length - 1, a.match(/\/$/) && (c -= 1), 0 <= b[c].indexOf(".")) k._info("Appending message type to URI " + a + " is not supported, disabling 'appendMessageTypeToURL' configuration"), n.appendMessageTypeToURL = !1
    };
    this.init = function (a, b) {
      this.configure(a);
      this.handshake(b)
    };
    this.handshake = function (a) {
      h("disconnected");
      N = !1;
      P(a)
    };
    this.disconnect = function (a, b) {
      if (!i()) {
        void 0 === b && "boolean" !== typeof a && (b = a, a = !1);
        var c = this._mixin(!1, {}, b, {
          channel: "/meta/disconnect"
        });
        h("disconnecting");
        D(!0 === a, [c], !1, "disconnect")
      }
    };
    this.startBatch = function () {
      ++y
    };
    this.endBatch = function () {
      --y;
      if (0 > y) throw "Calls to startBatch() and endBatch() are not paired";
      0 === y && !i() && !E && O()
    };
    this.batch = function (a, b) {
      var c = Y(a, b);
      this.startBatch();
      try {
        c.method.call(c.scope), this.endBatch()
      } catch (d) {
        throw this._debug("Exception during execution of batch", d), this.endBatch(),
        d;
      }
    };
    this.addListener = function (a, b, c) {
      if (2 > arguments.length) throw "Illegal arguments number: required 2, got " + arguments.length;
      if (!d(a)) throw "Illegal argument type: channel must be a string";
      return Z(a, b, c, !0)
    };
    this.removeListener = function (a) {
      if (!org.cometd.Utils.isArray(a)) throw "Invalid argument: expected subscription, not " + a;
      var b = w[a[0]];
      b && (delete b[a[1]], k._debug("Removed listener", a))
    };
    this.clearListeners = function () {
      w = {}
    };
    this.subscribe = function (a, b, f, g) {
      if (2 > arguments.length) throw "Illegal arguments number: required 2, got " +
          arguments.length;
      if (!d(a)) throw "Illegal argument type: channel must be a string";
      if (i()) throw "Illegal state: already disconnected";
      c(b) && (g = f, f = b, b = void 0);
      var h = !X(a),
        j = Z(a, b, f, !1);
      h && (h = this._mixin(!1, {}, g, {
        channel: "/meta/subscribe",
        subscription: a
      }), G(h));
      return j
    };
    this.unsubscribe = function (a, b) {
      if (1 > arguments.length) throw "Illegal arguments number: required 1, got " + arguments.length;
      if (i()) throw "Illegal state: already disconnected";
      this.removeListener(a);
      var c = a[0];
      X(c) || (c = this._mixin(!1, {}, b, {
        channel: "/meta/unsubscribe",
        subscription: c
      }), G(c))
    };
    this.clearSubscriptions = function () {
      j()
    };
    this.publish = function (a, b, c) {
      if (1 > arguments.length) throw "Illegal arguments number: required 1, got " + arguments.length;
      if (!d(a)) throw "Illegal argument type: channel must be a string";
      if (i()) throw "Illegal state: already disconnected";
      var f = this._mixin(!1, {}, c, {
        channel: a,
        data: b
      });
      G(f)
    };
    this.getStatus = function () {
      return A
    };
    this.isDisconnected = i;
    this.setBackoffIncrement = function (a) {
      n.backoffIncrement = a
    };
    this.getBackoffIncrement = function () {
      return n.backoffIncrement
    };
    this.getBackoffPeriod = function () {
      return p
    };
    this.resetBackOff = function () {
      p = 0
    };
    this.setLogLevel = function (a) {
      n.logLevel = a
    };
    this.registerExtension = function (a, b) {
      if (2 > arguments.length) throw "Illegal arguments number: required 2, got " + arguments.length;
      if (!d(a)) throw "Illegal argument type: extension name must be a string";
      for (var f = !1, g = 0; g < q.length; ++g) if (q[g].name === a) {
          f = !0;
          break
        }
      if (f) return this._info("Could not register extension with name", a, "since another extension with the same name already exists"), !1;
      q.push({
        name: a,
        extension: b
      });
      this._debug("Registered extension", a);
      c(b.registered) && b.registered(a, this);
      return !0
    };
    this.unregisterExtension = function (a) {
      if (!d(a)) throw "Illegal argument type: extension name must be a string";
      for (var b = !1, f = 0; f < q.length; ++f) {
        var g = q[f];
        if (g.name === a) {
          q.splice(f, 1);
          b = !0;
          this._debug("Unregistered extension", a);
          a = g.extension;
          c(a.unregistered) && a.unregistered();
          break
        }
      }
      return b
    };
    this.getExtension = function (a) {
      for (var b = 0; b < q.length; ++b) {
        var c = q[b];
        if (c.name === a) return c.extension
      }
      return null
    };
    this.getName = function () {
      return aa
    };
    this.getClientId = function () {
      return B
    };
    this.getURL = function () {
      return n.url
    };
    this.getTransport = function () {
      return t
    };
    this.getConfiguration = function () {
      return this._mixin(!0, {}, n)
    };
    this.getAdvice = function () {
      return this._mixin(!0, {}, r)
    };
    org.cometd.WebSocket = window.WebSocket;
    if (!org.cometd.WebSocket) org.cometd.WebSocket = window.MozWebSocket
  };
  "undefined" != typeof dojo && dojo.provide("org.cometd.AckExtension");
  org.cometd.AckExtension = function () {
    var b, d = !1,
      c = -1;
    this.registered = function (a, c) {
      b = c;
      b._debug("AckExtension: executing registration callback", void 0)
    };
    this.unregistered = function () {
      b._debug("AckExtension: executing unregistration callback", void 0);
      b = null
    };
    this.incoming = function (a) {
      var j = a.channel;
      if ("/meta/handshake" == j) d = a.ext && a.ext.ack, b._debug("AckExtension: server supports acks", d);
      else if (d && "/meta/connect" == j && a.successful && (j = a.ext) && "number" === typeof j.ack) c = j.ack, b._debug("AckExtension: server sent ack id",
          c);
      return a
    };
    this.outgoing = function (a) {
      var j = a.channel;
      if ("/meta/handshake" == j) {
        if (!a.ext) a.ext = {};
        a.ext.ack = b && !1 !== b.ackEnabled;
        c = -1
      } else if (d && "/meta/connect" == j) {
        if (!a.ext) a.ext = {};
        a.ext.ack = c;
        b._debug("AckExtension: client sending ack id", c)
      }
      return a
    }
  };
  "undefined" != typeof dojo && dojo.provide("org.cometd.TimeSyncExtension");
  org.cometd.TimeSyncExtension = function (b) {
    var d, c = b && b.maxSamples || 10,
      a = [],
      j = [],
      h = 0,
      i = 0;
    this.registered = function (a, b) {
      d = b;
      d._debug("TimeSyncExtension: executing registration callback", void 0)
    };
    this.unregistered = function () {
      d._debug("TimeSyncExtension: executing unregistration callback", void 0);
      d = null;
      a = [];
      j = []
    };
    this.incoming = function (b) {
      var m = b.channel;
      if (m && 0 === m.indexOf("/meta/") && b.ext && b.ext.timesync) {
        var g = b.ext.timesync;
        d._debug("TimeSyncExtension: server sent timesync", g);
        m = ((new Date).getTime() -
          g.tc - g.p) / 2;
        g = g.ts - g.tc - m;
        a.push(m);
        j.push(g);
        j.length > c && (j.shift(), a.shift());
        for (var m = j.length, l = g = 0, o = 0; o < m; ++o) g += a[o], l += j[o];
        h = parseInt((g / m).toFixed());
        i = parseInt((l / m).toFixed());
        d._debug("TimeSyncExtension: network lag", h)
      }
      return b
    };
    this.outgoing = function (a) {
      var b = a.channel;
      if (b && 0 === b.indexOf("/meta/")) {
        if (!a.ext) a.ext = {};
        a.ext.timesync = {
          tc: (new Date).getTime(),
          l: h,
          o: i
        };
        b = org.cometd.JSON.toJSON(a.ext.timesync);
        d._debug("TimeSyncExtension: client sending timesync", b)
      }
      return a
    };
    this.getTimeOffset = function () {
      return i
    };
    this.getTimeOffsetSamples = function () {
      return j
    };
    this.getNetworkLag = function () {
      return h
    };
    this.getServerTime = function () {
      return (new Date).getTime() + i
    };
    this.getServerDate = function () {
      return new Date(this.getServerTime())
    };
    this.setTimeout = function (a, b) {
      var c = (b instanceof Date ? b.getTime() : 0 + b) - i - (new Date).getTime();
      0 >= c && (c = 1);
      return org.cometd.Utils.setTimeout(d, a, c)
    }
  };
})();