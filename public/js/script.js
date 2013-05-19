var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-32947876-1"]);_gaq.push(["_setDomainName","teamdstn.vline.com"]);_gaq.push(["_trackPageview"]);(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();
if(vline.Browser.isIE()){var script=document.createElement("script");script.type="text/javascript";script.onreadystatechange=function(){if("loaded"==script.readyState||"complete"==script.readyState)script.onreadystatechange=null,CFInstall.check({mode:"overlay",url:"https://www.google.com/chromeframe/?redirect=true"})};script.src="https://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js";document.getElementsByTagName("head")[0].appendChild(script)};
var uvOptions={};(function(){var a=document.createElement("script"),b=document.location.host;a.type="text/javascript";a.async=!0;a.src=("https:"==document.location.protocol?"https://":"http://")+b+"/js/cdn/vline.uservoice.js";b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();

//Initialize
(vline.config.set("env", "prod"), vline.config.set("autoConnect", false), function (window, document, undefined) {
  console.log("Initialize");

  function setNs(e, n) {
    var r = document.createElement(e || "div")
      , i;
    for (i in n) {
      r[i] = n[i];
    }
    return r;
  }

  function u(e) {
    for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]);
    return e
  }

  function f(e, t, n, r) {
    var o = ["opacity", t, ~~(e * 100), n, r].join("-")
      , u = .01 + n / r * 100
      , f = Math.max(1 - (1 - e) / t * (100 - u), e)
      , l = s.substring(0, s.indexOf("Animation")).toLowerCase()
      , c = l && "-" + l + "-" || ""
      ;//-----
    return i[o] || (a.insertRule("@" + c + "keyframes " + o + "{" + "0%{opacity:" + f + "}" + u + "%{opacity:" + e + "}" + (u + .01) + "%{opacity:1}" + (u + t) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + f + "}" + "}", 0), i[o] = 1), o
  }

  function l(e, t) {
    var i = e.style
      , s
      , o
      ;//-----

    if (i[t] !== undefined) return t;
    t = t.charAt(0).toUpperCase() + t.slice(1);
    for (o = 0; o < _browsers.length; o++) {
      s = _browsers[o] + t;
      if (i[s] !== undefined) return s
    }
  }

  function c(e, t) {
    for (var n in t) {
      e.style[l(e, n) || n] = t[n];
    }
    return e
  }

  function spinning(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) e[i] === undefined && (e[i] = r[i])
    }
    return e
  }

  function setPos(e) {
    var t = {
      x:e.offsetLeft,
      y:e.offsetTop
    };
    while (e = e.offsetParent) t.x += e.offsetLeft, t.y += e.offsetTop;
    return t
  }

  var _browsers = ["webkit", "Moz", "ms", "O"]
    , i = {}
    , s
    ;//-----

  var a = function () {
    var e = setNs("style");
    return u(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
  }();

  var _spinner = { lines:12, length:7, width:5, radius:10, rotate:0, color:"#666", speed:1, trail:100, opacity:.25, fps:20, zIndex:2e9, className:"vl-spinner", top:"auto", left:"auto" };

  var _spinning = function m(e) {
    if (!this.spin) return new m(e);
    this.opts = spinning(e || {}, m.defaults, _spinner)
  };

  _spinning.defaults = {};

  spinning(_spinning.prototype, {
    spin:function (e) {
      this.stop();

      var _self = this
        , _opts = _self.opts
        , _elem = _self.el = c(setNs(0, { className:_opts.className }), { position:"relative",  zIndex:_opts.zIndex})
        , i = _opts.radius + _opts.length + _opts.width
        , u
        , a
        ;//-----

      e && (e.insertBefore(_elem, e.firstChild || null), a = setPos(e), u = setPos(_elem), c(_elem, {
        left:(_opts.left == "auto" ? a.x - u.x + (e.offsetWidth >> 1) : _opts.left + i) + "px",
        top:(_opts.top == "auto" ? a.y - u.y + (e.offsetHeight >> 1) : _opts.top + i) + "px"
      })), _elem.setAttribute("aria-role", "progressbar"), _self.lines(_elem, _self.opts);
      if (!s) {
        var f = 0,
          l = _opts.fps,
          h = l / _opts.speed,
          d = (1 - _opts.opacity) / (h * _opts.trail / 100),
          v = h / _opts.lines
          ;//---

        (function m() {
          f++;
          for (var e = _opts.lines; e; e--) {
            var i = Math.max(1 - (f + e * v) % h * d, _opts.opacity);
            _self.opacity(_elem, _opts.lines - e, i, _opts)
          }
          _self.timeout = _self.el && setTimeout(m, ~~(1e3 / l))
        })()
      }
      return _self
    },
    stop:function () {
      var e = this.el;
      return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = undefined), this
    },
    lines:function (e, t) {
      function i(e, r) {
        return c(setNs(), {
          position:"absolute",
          width:t.length + t.width + "px",
          height:t.width + "px",
          background:e,
          boxShadow:r,
          transformOrigin:"left",
          transform:"rotate(" + ~~(360 / t.lines * n + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",
          borderRadius:(t.width >> 1) + "px"
        })
      }

      for (var n = 0, r; n < t.lines; n++) {
        r = c(setNs(), { position:"absolute", top:1 + ~(t.width / 2) + "px", transform:t.hwaccel ? "translate3d(0,0,0)" : "", opacity:t.opacity, animation:s && f(t.opacity, t.trail, n, t.lines) + " " + 1 / t.speed + "s linear infinite"});
        t.shadow && u(r, c(i("#000", "0 0 4px #000"), { top:"2px" })), u(e, u(r, i(t.color, "0 0 1px rgba(0,0,0,.1)")));
      }
      return e
    },
    opacity:function (e, t, n) {
      t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
    }
  });

  (function () {
    function e(e, t) {
      return setNs("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
    }

    var t = c(setNs("group"), { behavior:"url(#default#VML)" });

    if (!l(t, "transform") && t.adj) {
      a.addRule(".spin-vml", "behavior:url(#default#VML)"),
        _spinning.prototype.lines = function (t, n) {
          function s() {
            return c(e("group", { coordsize:i + " " + i, coordorigin:-r + " " + -r }), { width:i, height:i});
          }

          function l(t, i, o) {
            u(a, u(c(s(), { rotation:360 / n.lines * t + "deg", left:~~i }), u(c(e("roundrect", { arcsize:1 }), { width:r, height:n.width, left:n.radius, top:-n.width >> 1, filter:o}), e("fill", { color:n.color, opacity:n.opacity }), e("stroke", { opacity:0 }))))
          }

          var r = n.length + n.width
            , i = 2 * r
            , o = -(n.width + n.length) * 2 + "px"
            , a = c(s(), { position:"absolute", top:o, left:o})
            , f
            ;//-----
          if (n.shadow) {
            for (f = 1; f <= n.lines; f++) {
              l(f, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            }
          }
          for (f = 1; f <= n.lines; f++) {
            l(f);
          }
          return u(t, a)
        };
      _spinning.prototype.opacity = function (e, t, n, r) {
        var i = e.firstChild;
        r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
      }
    } else {
      s = l(t, "animation")
    }
  })();

  window.Spinner = _spinning;

})(window, document);