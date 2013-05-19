window.UserVoice = {
  events: window.UserVoice || [],
  push: function (x) {
    window.UserVoice.events.push(x)
  },
  account: {
    "campaign": "footer_poweredby",
    "white_labeled": false,
    "subdomain_ssl_host":   "vline.uservoice.com",
    "subdomain_site_host":  "vline.uservoice.com",
    "subdomain_key": "vline",
    "subdomain_id": 154155,
    "client_key": "k4VeWKmMAaskMveiiaj7A",
    "client_options": null
  },
  client_widgets: {}
};
if (typeof (UserVoice) === "undefined" || !UserVoice.showLightbox) {
  (function (window, document, undefined) {
    var Babayaga = (function (window, undefined) {
      function base64Encode(input) {
        function uTF8Encode(string) {
          string = string.replace(/\x0d\x0a/g, "\x0a");
          var output = "";
          for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
              output += String.fromCharCode(c)
            } else {
              if ((c > 127) && (c < 2048)) {
                output += String.fromCharCode((c >> 6) | 192);
                output += String.fromCharCode((c & 63) | 128)
              } else {
                output += String.fromCharCode((c >> 12) | 224);
                output += String.fromCharCode(((c >> 6) & 63) | 128);
                output += String.fromCharCode((c & 63) | 128)
              }
            }
          }
          return output
        }
        var keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = uTF8Encode(input);
        while (i < input.length) {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;
          if (isNaN(chr2)) {
            enc3 = enc4 = 64
          } else {
            if (isNaN(chr3)) {
              enc4 = 64
            }
          }
          output = output + keyString.charAt(enc1) + keyString.charAt(enc2) + keyString.charAt(enc3) + keyString.charAt(enc4)
        }
        return output
      }
      var jsonStringify = null;
      var jsonParse = null;
      (function () {
        function f(n) {
          return n < 10 ? "0" + n : n
        }
        if (typeof Date.prototype.toJSON !== "function") {
          Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
          };
          String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
            return this.valueOf()
          }
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
          }, rep;

        function quote(string) {
          escapable.lastIndex = 0;
          return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
          }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
          var i, k, v, length, mind = gap,
            partial, value = holder[key];
          if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
          }
          if (typeof rep === "function") {
            value = rep.call(holder, key, value)
          }
          switch (typeof value) {
          case "string":
            return quote(value);
          case "number":
            return isFinite(value) ? String(value) : "null";
          case "boolean":
          case "null":
            return String(value);
          case "object":
            if (!value) {
              return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
              length = value.length;
              for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || "null"
              }
              v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
              gap = mind;
              return v
            }
            if (rep && typeof rep === "object") {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                k = rep[i];
                if (typeof k === "string") {
                  v = str(k, value);
                  if (v) {
                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                  }
                }
              }
            } else {
              for (k in value) {
                if (Object.hasOwnProperty.call(value, k)) {
                  v = str(k, value);
                  if (v) {
                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                  }
                }
              }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
          }
        }
        jsonStringify = function (value, replacer, space) {
          var i;
          gap = "";
          indent = "";
          if (typeof space === "number") {
            for (i = 0; i < space; i += 1) {
              indent += " "
            }
          } else {
            if (typeof space === "string") {
              indent = space
            }
          }
          rep = replacer;
          if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
            throw new Error("JSON.stringify")
          }
          return str("", {
            "": value
          })
        };
        jsonParse = function (text, reviver) {
          var j;

          function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && typeof value === "object") {
              for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                  v = walk(value, k);
                  if (v !== undefined) {
                    value[k] = v
                  } else {
                    delete value[k]
                  }
                }
              }
            }
            return reviver.call(holder, key, value)
          }
          text = String(text);
          cx.lastIndex = 0;
          if (cx.test(text)) {
            text = text.replace(cx, function (a) {
              return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            })
          }
          if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            j = eval("(" + text + ")");
            return typeof reviver === "function" ? walk({
              "": j
            }, "") : j
          }
          throw new SyntaxError("JSON.parse")
        }
      }());

      function extend(obj) {
        var extenders = Array.prototype.slice.call(arguments, 1),
          l = extenders.length,
          i = 0;
        for (; i < l; i++) {
          for (var k in extenders[i]) {
            if (extenders[i].hasOwnProperty(k)) {
              obj[k] = extenders[i][k]
            }
          }
        }
        return obj
      }
      function values(obj) {
        var results = [],
          k;
        if (obj == null) {
          return results
        }
        for (k in obj) {
          if (obj.hasOwnProperty(k)) {
            results.push(obj[k])
          }
        }
        return results
      }
      function sanitizeHash(hash) {
        var sanHash = {}, k, v;
        if (typeof (hash) !== "object") {
          return sanHash
        } else {
          for (k in hash) {
            if (hash.hasOwnProperty(k)) {
              v = hash[k];
              if (typeof (v) === "string" || typeof (v) === "number") {
                sanHash[k] = v
              } else {
                if (v && typeof (v) === "object" && v.constructor === Date && v.getTime) {
                  sanHash[k] = Math.floor(v.getTime() / 1000)
                }
              }
            }
          }
        }
        return sanHash
      }
      function setCookie(name, value, opts) {
        opts = extend({
          path: "/",
          domain: "",
          expires: new Date()
        }, opts || {});
        var cookie = [name, "=", encodeURIComponent(value), "; path=", opts.path, "; domain=", opts.domain];
        if (opts.expires) {
          opts.expires.setFullYear(opts.expires.getFullYear() + 1);
          cookie.push("; expires=");
          cookie.push(opts.expires.toUTCString())
        }
        document.cookie = cookie.join("");
        return value
      }
      function getCookie(name) {
        var cookies = (document.cookie || "").split(";"),
          l = cookies.length,
          i = 0,
          cookie;
        for (; i < l; i++) {
          cookie = trim(cookies[i]);
          if (cookie.substr(0, name.length + 1) === (name + "=")) {
            return decodeURIComponent(cookie.substr(name.length + 1))
          }
        }
      }
      var localStorage = (function () {
        var storage = null,
          localStorageEnabled = false,
          testValue = "__uvx";
        try {
          localStorageEnabled = ("localStorage" in window && window.localStorage)
        } catch (err) {}
        if (!localStorageEnabled) {
          return null
        }
        try {
          storage = window.localStorage;
          storage.setItem(testValue, testValue);
          if (storage.getItem(testValue) !== testValue) {
            return null
          }
          storage.removeItem(testValue)
        } catch (e) {
          return null
        }
        return {
          set: function (k, v) {
            storage.setItem(k, jsonStringify(v))
          },
          get: function (k) {
            var v = storage.getItem(k);
            if (typeof v !== "string") {
              return undefined
            }
            return jsonParse(v)
          }
        }
      }());

      function getInLocalStorage(k) {
        if (localStorage) {
          return localStorage.get(k)
        } else {
          return undefined
        }
      }
      function setInLocalStorage(k, v) {
        if (localStorage) {
          localStorage.set(k, v)
        }
      }
      function trim(str) {
        var nativeTrim = String.prototype.trim;
        if (nativeTrim) {
          return nativeTrim.apply(str)
        }
        return str.replace(/^\s+|\s+$/g, "")
      }
      function lpad(number, length) {
        var str = "" + number;
        while (str.length < length) {
          str = "0" + str
        }
        return str
      }
      function getTzOffset() {
        var offset = new Date().getTimezoneOffset(),
          signed = offset > 0 ? "-" : "+",
          hour = Math.floor(Math.abs(offset) / 60),
          minute = Math.abs(offset) % 60;
        return signed + lpad(hour, 2) + ":" + lpad(minute, 2)
      }
      function log() {
        if (typeof console !== "undefined" && typeof console.log !== "undefined" && typeof console.log.apply !== "undefined") {
          console.log.apply(console, arguments)
        }
      }
      var babayagaCount = 0;
      window.__babas = window.__babas || [];

      function Babayaga(subdomain, config) {
        this.subdomain = subdomain;
        this.config = extend({}, Babayaga.default_config, config || {});
        this.props = {};
        this.isReady = false;
        this.tracks = [];
        this.identified = false;
        this.babaId = babayagaCount++;
        this.firedUvts = false;
        this.firedSession = false;
        this.setInitialSession();
        window.__babas.push(this)
      }
      byproto = Babayaga.prototype;
      byproto.identify = function (hash) {
        var accountHash, prefixedAccountHash = {}, wasIdentified = this.identified,
          k;
        hash = hash || {};
        if (hash.account) {
          accountHash = sanitizeHash(hash.account);
          delete hash.account;
          for (k in accountHash) {
            if (accountHash.hasOwnProperty(k)) {
              prefixedAccountHash["account_" + k] = accountHash[k]
            }
          }
        }
        sanitizeHash(accountHash);
        extend(this.props, sanitizeHash(hash));
        extend(this.props, prefixedAccountHash);
        this.identified = false;
        if (wasIdentified) {
          this.flush()
        }
      };
      byproto.sessionCallbackName = function () {
        var self = this;
        if (this.callbackName) {
          return this.callbackName
        } else {
          this.callbackName = "__uvSessionData" + this.babaId;
          window[this.callbackName] = function (sess) {
            self.setSession(sess)
          };
          return this.callbackName
        }
      };
      byproto.cookieDomain = function (hostname) {
        hostname = hostname || window.location.hostname;
        hostname = hostname.split(".").slice(-2);
        hostname = hostname.length > 1 ? "." + hostname.join(".") : hostname.join(".");
        return hostname
      };
      byproto.setInitialSession = function () {
        var uvts = getCookie(this.config.cookie_name),
          uvf = getCookie("uvf"),
          hasStoredSession = uvts && uvf,
          persistedSession, i, k, v;
        if (uvts) {
          this.setUvts(uvts)
        }
        if (hasStoredSession) {
          persistedSession = {
            uvts: uvts
          };
          for (i = 0; i < SessionKeys.length; i += 1) {
            k = SessionKeys[i];
            v = getInLocalStorage(k);
            if (v) {
              persistedSession[k] = v
            }
          }
          this.setSession(persistedSession, true)
        }
      };
      byproto.getSession = function () {
        return this.session
      };
      byproto.setSession = function (sess, fromCache) {
        this.log("SET SESSION: ", sess, "(from cache: " + (fromCache || false) + ")");
        this.hasSession = true;
        this.updateSession(sess);
        this.setUvts(this.session.uvts);
        if (!this.firedSession) {
          if (typeof this.config.onSession === "function") {
            this.config.onSession(this.session)
          }
          this.firedSession = true
        }
        if (!fromCache) {
          setCookie("uvf", "1", {
            expires: null
          });
          var loginCount = this.session.loginCount || 0;
          this.updateSession({
            loginCount: parseInt(loginCount) + 1
          });
          this.flush()
        }
      };
      byproto.setUvts = function (uvts) {
        this.session = extend(this.session || {}, {
          uvts: uvts
        });
        setCookie(this.config.cookie_name, uvts, {
          domain: this.cookieDomain()
        });
        if (!this.firedUvts) {
          if (typeof this.config.onUvts === "function") {
            this.config.onUvts(uvts)
          }
          this.firedUvts = true
        }
      };
      byproto.getUvts = function () {
        if (this.session) {
          return this.session.uvts
        } else {
          return null
        }
      };
      byproto.updateSession = function (hash) {
        var i, k;
        this.session = extend(this.session || {}, hash);
        for (i = 0; i < SessionKeys.length; i += 1) {
          k = SessionKeys[i];
          if (hash[k] !== undefined) {
            setInLocalStorage(k, hash[k])
          }
        }
      };
      byproto.setConfig = function (hash) {
        this.config = extend(this.config, hash)
      };
      byproto.setChannel = function (channel) {
        this.setConfig({
          channel: channel
        })
      };
      byproto.track = function (evt, props, channel) {
        var e = {
          evt: evt,
          props: props
        };
        if (channel) {
          e.channel = channel
        }
        this.tracks.push(e);
        this.flush()
      };
      byproto.trackExternalView = function () {
        if (this.config.channel === "external") {
          this.track("view_page", {
            u: document.location.toString(),
            r: document.referrer
          })
        }
      };
      byproto.flush = function () {
        if (!this.isReady || !this.config.enabled) {
          return
        }
        var i, hasIdentity = values(this.props).length > 0,
          track, uvts = this.getUvts(),
          l;
        if ((this.tracks.length === 0) && (!uvts || (hasIdentity && !this.identified))) {
          this.tracks.push({
            evt: "identify"
          })
        }
        l = this.tracks.length;
        for (i = 0; i < l; i += 1) {
          track = this.tracks.shift();
          if (!this.identified && (hasIdentity || !uvts)) {
            this.sendTrack(track.channel || this.config.channel, track.evt, track.props, this.props);
            this.identified = true;
            break
          } else {
            this.sendTrack(track.channel || this.config.channel, track.evt, track.props)
          }
        }
      };
      byproto.sendTrack = function (channel, evt, eventProps, props) {
        var url = [this.config.domain, "/t/", this.subdomain, "/", ChannelMinifier[channel] || "_", "/", EventMinifier[evt] || "_"],
          data = {}, uvts = this.getUvts();
        if (uvts) {
          url.push("/");
          url.push(uvts)
        }
        url.push("/track.js?_=" + new Date().getTime());
        url.push("&s=" + (this.hasSession ? "1" : "0"));
        url = url.join("");
        if (props && values(props).length > 0) {
          data.u = extend(props, {
            o: getTzOffset()
          })
        }
        if (eventProps && values(eventProps).length > 0) {
          data.e = eventProps
        }
        this.log("SENDING TRACK: ", url, data);
        if (values(data).length > 0) {
          data = encodeURIComponent(base64Encode(jsonStringify(data)))
        } else {
          data = null
        } if (false && CORS) {} else {
          var embed, script, params;
          params = ["&c=", this.sessionCallbackName()];
          if (data) {
            params.push("&d=");
            params.push(data)
          }
          embed = document.getElementsByTagName("script")[0];
          script = document.createElement("script");
          script.type = "application/javascript";
          script.async = true;
          script.defer = true;
          script.src = url + params.join("");
          embed.parentNode.insertBefore(script, embed)
        }
      };
      byproto.ready = function () {
        this.isReady = true;
        this.flush()
      };
      byproto.log = function () {
        if (this.config.logging_enabled) {
          log.apply(null, arguments)
        }
      };
      var ChannelMinifier = {
        external: "x",
        classic_widget: "w",
        smartvote_widget: "e",
        instant_answers_widget: "o",
        satisfaction_widget: "t",
        site2: "s",
        admin: "a"
      };
      var EventMinifier = {
        view_page: "p",
        view_forum: "m",
        view_topic: "c",
        view_kb: "k",
        view_channel: "o",
        view_idea: "i",
        view_article: "f",
        view_comparison: "a",
        authenticate: "u",
        search_ideas: "s",
        search_articles: "r",
        vote_idea: "v",
        vote_article: "z",
        submit_ticket: "t",
        submit_idea: "d",
        subscribe_idea: "b",
        rate_satisfaction: "e",
        identify: "x",
        comment_idea: "h"
      };
      var SessionKeys = ["created_at", "last_sat_at", "last_smartvote_at", "dismissed_sat_at", "dismissed_smartvote_at", "loginCount", "sat_prompted", "smartvote_prompted"];
      Babayaga.default_config = {
        cookie_name: "uvts",
        domain: "https://by.uservoice.com",
        channel: "external",
        enabled: true,
        logging_enabled: false
      };
      Babayaga.helpers = {
        base64Encode: base64Encode,
        jsonStringify: jsonStringify,
        jsonParse: jsonParse,
        extend: extend,
        values: values,
        sanitizeHash: sanitizeHash,
        setCookie: setCookie,
        getCookie: getCookie,
        getTzOffset: getTzOffset,
        lpad: lpad,
        trim: trim,
        log: log
      };
      return Babayaga
    }(this));
    var base64Encode = Babayaga.helpers.base64Encode,
      jsonStringify = Babayaga.helpers.jsonStringify,
      jsonParse = Babayaga.helpers.jsonParse,
      extend = Babayaga.helpers.extend,
      values = Babayaga.helpers.values,
      sanitizeHash = Babayaga.helpers.sanitizeHash,
      setCookie = Babayaga.helpers.setCookie,
      getCookie = Babayaga.helpers.getCookie,
      getTzOffset = Babayaga.helpers.getTzOffset,
      lpad = Babayaga.helpers.lpad,
      trim = Babayaga.helpers.trim,
      log = Babayaga.helpers.log;
    var widgetEnvironmentCss = ".uv-tray{position:fixed;-webkit-font-smothing:antialias;z-index:100000}.uv-tray.uv-bottom-right{bottom:10px;right:10px}.uv-tray.uv-top-right{top:10px;right:10px}.uv-tray.uv-bottom-left{bottom:10px;left:10px}.uv-tray.uv-top-left{top:10px;left:10px}.uv-tray-item{background:rgba(46,49,51,0.6);border-radius:24px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;color:white;cursor:pointer;font-family:sans-serif;font-size:14px;font-weight:100;-webkit-font-smoothing:antialias;line-height:1;margin-left:4px;padding:0 24px;position:relative;-webkit-transition:all 300ms;-moz-transition:all 300ms;-o-transition:all 300ms;transition:all 300ms;width:48px;height:48px;vertical-align:middle;white-space:nowrap}.uv-ie8 .uv-tray-item{background:url(//widget.uservoice.com/images/clients/widget_environment/sixty_percent.png)}.uv-tray-item-hoverinfo{display:block;opacity:0;-webkit-transition:opacity 100ms;-moz-transition:opacity 100ms;-o-transition:opacity 100ms;transition:opacity 100ms;padding-right:48px;overflow:hidden;line-height:48px}.uv-top-left .uv-tray-item-hoverinfo,.uv-bottom-left .uv-tray-item-hoverinfo{padding-left:24px}.uv-top-right .uv-tray-item-hoverinfo,.uv-bottom-right .uv-tray-item-hoverinfo{padding-left:48px}.uv-tray-item-icon{position:absolute;top:0;opacity:0.8;-webkit-transition:opacity 100ms;-moz-transition:opacity 100ms;-o-transition:opacity 100ms;transition:opacity 100ms}.uv-top-right .uv-tray-item-icon,.uv-bottom-right .uv-tray-item-icon{right:0}.uv-top-left .uv-tray-item-icon,.uv-bottom-left .uv-tray-item-icon{left:0}.uv-tray-item-icon svg{width:48px;height:48px}.uv-init .uv-tray-item{background:rgba(46,49,51,0.9);width:245px}.uv-init .uv-tray-item .uv-tray-item-hoverinfo{opacity:1;-webkit-transition:opacity 400ms;-webkit-transition-delay:100ms;-moz-transition:opacity 400ms 100ms;-o-transition:opacity 400ms 100ms;transition:opacity 400ms 100ms}.uv-init .uv-tray-item .uv-tray-item-icon{opacity:1}.uv-ie8 .uv-init .uv-tray-item{background:url(//widget.uservoice.com/images/clients/widget_environment/ninety_percent.png)}.uv-init.uv-top-right .uv-tray-item-hoverinfo,.uv-init.uv-bottom-right .uv-tray-item-hoverinfo{padding-left:0}.uv-tray-item{background:rgba(46,49,51,0.6);width:48px}.uv-ie8 .uv-tray-item{background:url(//widget.uservoice.com/images/clients/widget_environment/sixty_percent.png)}.uv-tray-item:hover{background:rgba(46,49,51,0.9)}.uv-ie8 .uv-tray-item:hover{background:url(//widget.uservoice.com/images/clients/widget_environment/ninety_percent.png)}.uv-tray-item .uv-tray-item-hoverinfo{opacity:0}.uv-tray-item .uv-tray-item-icon{opacity:1}.uv-tray-item.uv-is-selected{background:rgba(46,49,51,0.75)}.uv-ie8 .uv-tray-item.uv-is-selected{background:url(//widget.uservoice.com/images/clients/widget_environment/seventy_five_percent.png)}.uv-tray-item.uv-is-selected:hover{background:rgba(46,49,51,0.9)}.uv-ie8 .uv-tray-item.uv-is-selected:hover{background:url(//widget.uservoice.com/images/clients/widget_environment/ninety_percent.png)}.uv-popover{position:absolute;color:black;z-index:100001}.uv-top-right .uv-popover{top:54px;right:4px}.uv-top-left .uv-popover{top:54px;left:4px}.uv-bottom-right .uv-popover{bottom:54px;right:4px}.uv-bottom-left .uv-popover{bottom:54px;left:4px}@media screen and (max-device-width: 480px){.uv-popover{position:fixed;bottom:10px;right:10px;left:10px;top:10px}}.uv-popover-content{-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background:#f0f3f7;width:325px;-webkit-transition:background 200ms;-moz-transition:background 200ms;-o-transition:background 200ms;transition:background 200ms}.uv-top-left .uv-popover-content,.uv-top-right .uv-popover-content,.uv-below .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-bottom-left .uv-popover-content,.uv-bottom-right .uv-popover-content,.uv-above .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px}@media screen and (max-device-width: 480px){.uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.6) 0 10px 60px,rgba(0,0,0,0.2) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.6) 0 10px 60px,rgba(0,0,0,0.2) 0 0 20px;box-shadow:rgba(0,0,0,0.6) 0 10px 60px,rgba(0,0,0,0.2) 0 0 20px;height:100%;width:100%}}@media only screen and (min-device-width: 768px) and (max-device-width: 1024px){.uv-popover-content{width:380px}}.uv-ie8 .uv-popover-content{position:relative}.uv-ie8 .uv-popover-content .uv-popover-content-shadow{display:block;background:black;content:'';position:absolute;left:-15px;top:-15px;width:100%;height:100%;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=15,MakeShadow=true,ShadowOpacity=0.30);z-index:-1}.uv-popover-tail{border:8px solid transparent;width:0;z-index:10;position:relative;-webkit-transition:border-top-color 200ms;-moz-transition:border-top-color 200ms;-o-transition:border-top-color 200ms;transition:border-top-color 200ms}.uv-top-left .uv-popover-tail,.uv-bottom-left .uv-popover-tail{margin-left:12px}.uv-top-right .uv-popover-tail,.uv-bottom-right .uv-popover-tail{margin-left:297px}.uv-bottom-left .uv-popover-tail,.uv-bottom-right .uv-popover-tail,.uv-above .uv-popover-tail{border-bottom:none;border-top:12px solid #f0f3f7}.uv-top-left .uv-popover-tail,.uv-top-right .uv-popover-tail,.uv-below .uv-popover-tail{border-top:none;border-bottom:12px solid #f0f3f7}@media screen and (max-device-width: 480px){.uv-popover-tail{display:none}}@media only screen and (min-device-width: 768px) and (max-device-width: 1024px){.uv-popover-tail{margin-left:350px}}.uv-popover-iframe-container{height:325px}@media screen and (max-device-width: 480px){.uv-popover-iframe-container{height:290px}.uv-popover-controls-hidden .uv-popover-iframe-container{height:auto}}@media only screen and (min-device-width: 768px) and (max-device-width: 1024px){.uv-popover-iframe-container{height:380px}}.uv-popover-iframe{-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;overflow:hidden}.uv-popover-controls{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 10px 3px;text-align:center;-webkit-transition:all 600ms;-webkit-transition-delay:600ms;-moz-transition:all 600ms 600ms;-o-transition:all 600ms 600ms;transition:all 600ms 600ms;height:42px;overflow:hidden}.uv-popover-controls-hidden .uv-popover-controls{opacity:0;height:0;padding:0 10px}.uv-popover-button{display:inline-block;border-top:1px solid #c8dbef;font-size:13px;line-height:1;padding:13px 18px;color:#297bcc;font-weight:500;margin:0 5px}.uv-popover-button:focus{outline:none}.uv-popover-button:hover{border-top:1px solid #a0c1e4;color:#314f70}.uv-reversed .uv-popover-button{-webkit-transition:all 200ms;-moz-transition:all 200ms;-o-transition:all 200ms;transition:all 200ms;color:white !important;border-top-color:white !important}.uv-bubble{position:absolute;text-align:center;z-index:100002}.uv-top-right .uv-bubble,.uv-top-left .uv-bubble{top:48px;padding-top:12px}.uv-bottom-right .uv-bubble,.uv-bottom-left .uv-bubble{bottom:48px;padding-bottom:12px}.uv-bubble-content{font-family:sans-serif;font-size:13px;line-height:28px;background:rgba(46,49,51,0.9);-webkit-border-radius:14px;-moz-border-radius:14px;-ms-border-radius:14px;-o-border-radius:14px;border-radius:14px;padding:0 10px;text-align:left}.uv-ie8 .uv-bubble-content{background:url(//widget.uservoice.com/images/clients/widget_environment/ninety_percent.png)}.uv-bubble-dismiss{display:inline-block;opacity:0.5;width:28px;-webkit-transition:all 200ms;-moz-transition:all 200ms;-o-transition:all 200ms;transition:all 200ms;text-align:center;margin:0 -10px 0 -6px}.uv-bubble-dismiss:hover{opacity:1;-webkit-transform:rotateZ(90deg);-moz-transform:rotateZ(90deg);-ms-transform:rotateZ(90deg);-o-transform:rotateZ(90deg);transform:rotateZ(90deg)}.uv-bubble-tail{border:6px solid transparent;position:absolute;margin:0 auto;width:0}.uv-bottom-left .uv-bubble-tail,.uv-bottom-right .uv-bubble-tail{border-top:8px solid rgba(46,49,51,0.9);border-bottom:none}.uv-top-left .uv-bubble-tail,.uv-top-right .uv-bubble-tail{border-bottom:8px solid rgba(46,49,51,0.9);border-top:none;top:4px}.uv-ie8 .uv-bubble-tail{border:none;background:url(//widget.uservoice.com/images/clients/widget_environment/bubble_tail.png);width:12px;height:8px}.uv-ie8.uv-top-left .uv-bubble-tail,.uv-ie8.uv-top-right .uv-bubble-tail{background:url(//widget.uservoice.com/images/clients/widget_environment/bubble_tail_up.png)}.uv-is-hidden{display:none}.uv-is-invisible{display:block !important;visibility:hidden !important}.uv-is-transitioning{display:block !important}.uv-no-transition{-moz-transition:none !important;-webkit-transition:none !important;-o-transition:color 0 ease-in !important;transition:none !important}.uv-fade{opacity:1;-webkit-transition:opacity 200ms ease-out;-moz-transition:opacity 200ms ease-out;-o-transition:opacity 200ms ease-out;transition:opacity 200ms ease-out}.uv-fade.uv-is-hidden{opacity:0}.uv-scale-top{opacity:1;-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-top.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%);-moz-transform:scale(0.8) translateY(-15%);-ms-transform:scale(0.8) translateY(-15%);-o-transform:scale(0.8) translateY(-15%);transform:scale(0.8) translateY(-15%)}.uv-scale-top-left{opacity:1;-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-top-left.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%) translateX(-10%);-moz-transform:scale(0.8) translateY(-15%) translateX(-10%);-ms-transform:scale(0.8) translateY(-15%) translateX(-10%);-o-transform:scale(0.8) translateY(-15%) translateX(-10%);transform:scale(0.8) translateY(-15%) translateX(-10%)}.uv-scale-top-right{opacity:1;-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-top-right.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%) translateX(10%);-moz-transform:scale(0.8) translateY(-15%) translateX(10%);-ms-transform:scale(0.8) translateY(-15%) translateX(10%);-o-transform:scale(0.8) translateY(-15%) translateX(10%);transform:scale(0.8) translateY(-15%) translateX(10%)}.uv-scale-bottom{opacity:1;-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-bottom.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%);-moz-transform:scale(0.8) translateY(15%);-ms-transform:scale(0.8) translateY(15%);-o-transform:scale(0.8) translateY(15%);transform:scale(0.8) translateY(15%)}.uv-scale-bottom-left{opacity:1;-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-bottom-left.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%) translateX(-10%);-moz-transform:scale(0.8) translateY(15%) translateX(-10%);-ms-transform:scale(0.8) translateY(15%) translateX(-10%);-o-transform:scale(0.8) translateY(15%) translateX(-10%);transform:scale(0.8) translateY(15%) translateX(-10%)}.uv-scale-bottom-right{opacity:1;-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-bottom-right.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%) translateX(10%);-moz-transform:scale(0.8) translateY(15%) translateX(10%);-ms-transform:scale(0.8) translateY(15%) translateX(10%);-o-transform:scale(0.8) translateY(15%) translateX(10%);transform:scale(0.8) translateY(15%) translateX(10%)}.uv-slide-top{-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-slide-top.uv-is-hidden{-webkit-transform:translateY(-100%);-moz-transform:translateY(-100%);-ms-transform:translateY(-100%);-o-transform:translateY(-100%);transform:translateY(-100%)}.uv-slide-bottom{-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-slide-bottom.uv-is-hidden{-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%);transform:translateY(100%)}.uv-slide-left{-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-slide-left.uv-is-hidden{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}.uv-slide-right{-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-slide-right.uv-is-hidden{-webkit-transform:translateX(100%);-moz-transform:translateX(100%);-ms-transform:translateX(100%);-o-transform:translateX(100%);transform:translateX(100%)}\n";
    var PostMessageHandler = (function () {
      function PostMessageHandler(events) {
        this.events = events;
        this.timer = null;
        this.last_hash = null
      }
      PostMessageHandler.prototype.listen = function () {
        var manager = this;
        if ("postMessage" in window) {
          if ("addEventListener" in window) {
            window.addEventListener("message", function (evt) {
              manager.dispatchEvent.apply(manager, [evt])
            }, false)
          } else {
            window.attachEvent("onmessage", function (evt) {
              manager.dispatchEvent.apply(manager, [evt])
            })
          }
        }
        return this
      };
      PostMessageHandler.prototype.dispatchEvent = function (evt) {
        var message = evt.data;
        try {
          message = jsonParse(message)
        } catch (e) {}
        if (message === Object(message)) {
          for (var key in message) {
            if (message.hasOwnProperty(key) && this.events.hasOwnProperty(key)) {
              this.events[key](message[key])
            }
          }
        } else {
          if (this.events.hasOwnProperty(message)) {
            this.events[message]()
          }
        }
      };
      PostMessageHandler.getHash = function () {
        var match = window.location.href.match(/#(.*)$/);
        return match ? match[1] : ""
      };
      return PostMessageHandler
    }());
    var UA = {};
    if ((/IEMobile/i).test(navigator.userAgent)) {
      UA.ieMobile = true
    } else {
      if ((/msie (\d+\.\d+);/i).test(navigator.userAgent)) {
        UA.ie = true;
        UA.version = parseInt(RegExp.$1, 10);
        if (UA.version === 8) {
          UA.ie8 = true
        }
        if (UA.version === 7) {
          UA.ie7 = true
        }
        if (UA.version === 6) {
          UA.ie6 = true
        }
        if (UA.version === 7 && (/Trident/i).test(navigator.userAgent)) {
          UA.ieCompatibility = true
        }
        if (document.compatMode && document.compatMode === "BackCompat") {
          UA.ieQuirks = true
        }
      } else {
        if (("ontouchstart" in window) && (/like Mac OS X/i).test(navigator.userAgent)) {
          UA.iOS = true
        } else {
          if ("ontouchstart" in window) {
            UA.touch = true
          }
        }
      }
    }
    var uniqIdCount = 0;

    function uniqId() {
      uniqIdCount += 1;
      return "uv-" + uniqIdCount
    }
    function identify(el) {
      var id = el.getAttribute("id");
      if (id) {
        return id
      } else {
        id = uniqId();
        el.setAttribute("id", id);
        return id
      }
    }
    var data = (function () {
      var d = {};

      function data(el, key, value) {
        var id = identify(el);
        d[id] = d[id] || {};
        if (arguments.length > 2) {
          return d[id][key] = value
        } else {
          return d[id][key]
        }
      }
      return data
    })();

    function onEvent(el, name, f) {
      if ("addEventListener" in el) {
        el.addEventListener(name, f, false)
      } else {
        el.attachEvent(name, f)
      }
    }
    function offEvent(el, name, f) {
      if ("removeEventListener" in el) {
        el.removeEventListener(name, f, false)
      } else {
        el.detachEvent(name, f)
      }
    }
    function oneEvent(el, name, f) {
      var wrapper = function () {
        f(arguments);
        offEvent(el, name, wrapper)
      };
      onEvent(el, name, wrapper)
    }
    function onMouseEnter(el, f) {
      onEvent(el, "mouseover", function (e) {
        var e = e || window.event,
          rel = e.relatedTarget || e.fromElement;
        while (rel && rel !== el) {
          rel = rel.parentNode
        }
        if (rel === el) {
          return
        }
        f(e)
      })
    }
    function onMouseLeave(el, f) {
      onEvent(el, "mouseout", function (e) {
        var e = e || window.event,
          rel = e.relatedTarget || e.toElement;
        while (rel && rel !== el) {
          rel = rel.parentNode
        }
        if (rel === el) {
          return
        }
        setTimeout(function () {
          f(e)
        }, 0)
      })
    }
    function prepareTransition(el) {
      if ("getComputedStyle" in window) {
        var props = ["transitionDuration", "MozTransitionDuration", "WebkitTransitionDuration", "OTransitionDuration", "msTransitionDuration"],
          duration = 0;
        for (var i = 0, l = props.length; i < l; i++) {
          var prop = props[i],
            value = window.getComputedStyle(el)[prop] || el.style[prop];
          if (value) {
            duration = 1000 * parseFloat(value);
            break
          }
        }
        if (duration != 0) {
          var timer = data(el, "transition-timer"),
            timeoutAt = data(el, "transition-timeout-at"),
            finishAt = +new Date() + duration;
          addClassName(el, "uv-is-transitioning");
          el.offsetWidth;
          if (timer === undefined || (finishAt > timeoutAt)) {
            clearTimeout(timer);
            data(el, "transition-timer", setTimeout(function () {
              removeClassName(el, "uv-is-transitioning");
              el.offsetWidth
            }, duration));
            data(el, "transition-timeout-at", finishAt)
          }
        }
      }
    }
    function domReady(fun) {
      if (document.addEventListener) {
        if ("complete" === document.readyState) {
          fun()
        } else {
          document.addEventListener("DOMContentLoaded", fun, false);
          window.addEventListener("load", fun, false)
        }
      } else {
        if (document.attachEvent) {
          document.attachEvent("onreadystatechange", fun);
          window.attachEvent("onload", fun);
          var topf = false;
          try {
            topf = (window.frameElement === null)
          } catch (e) {}
          if (document.documentElement.doScroll && topf) {
            function scrollCheck() {
              try {
                document.documentElement.doScroll("left")
              } catch (e) {
                setTimeout(scrollCheck, 1);
                return
              }
              fun()
            }
          }
        }
      }
    }
    function render(template, params) {
      return template.replace(/\#\{([^{}]*)\}/g, function (a, b) {
        var r = params[b];
        return typeof r === "string" || typeof r === "number" ? r : a
      })
    }
    function insertHtml(html) {
      var dummy = document.createElement("div");
      dummy.innerHTML = html;
      document.body.insertBefore(dummy.firstChild, document.body.firstChild);
      return document.body.firstChild
    }
    function htmlentities(str) {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function param(obj, encoder) {
      encoder || (encoder = function (identity) {
        return identity
      });
      var params = [];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var param = encoder(key) + "=" + encoder(obj[key]);
          params.push(param)
        }
      }
      return params.join("&")
    }
    function deepMerge(obj) {
      var extenders = Array.prototype.slice.call(arguments, 1),
        l = extenders.length,
        i = 0;
      for (; i < l; i++) {
        for (var k in extenders[i]) {
          if (extenders[i].hasOwnProperty(k)) {
            if (typeof obj[k] === "object" && typeof extenders[i][k] === "object") {
              deepMerge(obj[k], extenders[i][k])
            } else {
              obj[k] = extenders[i][k]
            }
          }
        }
      }
      return obj
    }
    function queryTagClass() {
      var element, tagName, className;
      if (arguments.length == 2) {
        element = arguments[0];
        tagName = "div";
        className = arguments[1]
      } else {
        element = arguments[0];
        tagName = arguments[1];
        className = arguments[2]
      } if (element.querySelector) {
        return element.querySelector(tagName + "." + className)
      } else {
        var elements = element.getElementsByTagName(tagName),
          regexp = new RegExp("\b" + className + "\b", "gmi");
        for (var i = 0; i < elements.length; i++) {
          if (regexp.test(elements[i].className)) {
            return elements[i]
          }
        }
        return null
      }
    }
    function includeCss(css, media) {
      var styles = document.createElement("style");
      styles.type = "text/css";
      styles.media = media || "screen";
      if (styles.styleSheet) {
        styles.styleSheet.cssText = css
      } else {
        styles.appendChild(document.createTextNode(css))
      }
      document.getElementsByTagName("head")[0].appendChild(styles)
    }
    function includePrintCss() {
      includeCss("#uvTab {display:none !important;}", "print")
    }
    function htmlElement() {
      return document.getElementsByTagName("html")[0]
    }
    function addClassName(element, className) {
      if ((new RegExp("(^|\\s+)" + className + "(\\s+|$)")).test(element.className)) {
        return
      }
      element.className += (element.className ? " " : "") + className
    }
    function removeClassName(element, className) {
      element.className = element.className.replace(new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)", "g"), " ")
    }
    function hasClassName(element, className) {
      return element.className.indexOf(className) > -1
    }
    function pageDimensions() {
      var de = document.documentElement;
      var width = window.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
      var height = window.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
      return {
        width: width,
        height: height
      }
    }
    function elementDimensions(element) {
      var display = element.display;
      if (display !== "none" && display !== null) {
        return {
          width: element.offsetWidth,
          height: element.offsetHeight
        }
      }
      var els = element.style;
      var originalVisibility = els.visibility;
      var originalPosition = els.position;
      var originalDisplay = els.display;
      els.visibility = "hidden";
      els.position = "absolute";
      els.display = "block";
      var originalWidth = element.clientWidth;
      var originalHeight = element.clientHeight;
      els.display = originalDisplay;
      els.position = originalPosition;
      els.visibility = originalVisibility;
      return {
        width: originalWidth,
        height: originalHeight
      }
    }
    function elementOffset(element) {
      var e = element,
        o = {
          top: 0,
          left: 0
        };
      while (e) {
        o.top += e.offsetTop;
        o.left += e.offsetLeft;
        e = e.offsetParent
      }
      return o
    }
    function getScrollTop() {
      var scrollTop;
      if (typeof (window.pageYOffset) === "number") {
        scrollTop = window.pageYOffset
      } else {
        if (document.body && (document.body.scrollTop)) {
          scrollTop = document.body.scrollTop
        } else {
          if (document.documentElement && (document.documentElement.scrollTop)) {
            scrollTop = document.documentElement.scrollTop
          }
        }
      }
      return scrollTop
    }
    function getDocumentHeight() {
      var D = document;
      return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight))
    }
    var assetHost = [("https:" === document.location.protocol ? "https://" : "http://"), "widget.uservoice.com"].join("");
    var tabCss = {
      "tab-light-bottom-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};",
      "tab-dark-bottom-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};",
      "tab-light-top-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};",
      "tab-dark-top-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};",
      "tab-light-bottom-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};",
      "tab-dark-bottom-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};",
      "tab-light-top-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};",
      "tab-dark-top-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};",
      "tab-light-middle-left": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid red;border-left:none;-moz-border-radius:0 4px 4px 0;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:0;top:50%;z-index:9999;background-color:##{color};border-color:##{color};",
      "tab-dark-middle-left": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid #FFF;border-left:none;-moz-border-radius:0 4px 4px 0;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:0;top:50%;z-index:9999;background-color:##{color};",
      "tab-light-middle-right": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid red;border-right:none;-moz-border-radius:4px 0 0 4px;-webkit-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:0;top:50%;z-index:9999;background-color:##{color};border-color:##{color};",
      "tab-dark-middle-right": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid #FFF;border-right:none;-moz-border-radius:4px 0 0 4px;-webkit-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:0;top:50%;z-index:9999;background-color:##{color};",
      "link-vertical": "display:block;padding:39px 5px 10px 5px;text-decoration:none;",
      "link-horizontal": "display:block;padding:6px 10px 2px 42px;text-decoration:none;",
      "link-vertical-no-bullhorn": "display:block;padding:10px 5px 10px 5px;text-decoration:none;",
      "link-horizontal-no-bullhorn": "display:block;padding:6px 10px 2px 10px;text-decoration:none;"
    };
    var dialogCss = "    html.uvw-dialog-open object,    html.uvw-dialog-open iframe,    html.uvw-dialog-open embed {      visibility: hidden;    }    html.uvw-dialog-open iframe.uvw-dialog-iframe {      visibility: visible;    }    ";
    var Tab = (function () {
      function Tab(widget) {
        this.widget = widget;
        this.template = '<div id="uvTab" style="#{tabStyle}"><a id="uvTabLabel" style="background-color: transparent; #{linkStyle}" href="javascript:return false;"><img src="#{imgSrc}" alt="#{tab_label}" style="border:0; background-color: transparent; padding:0; margin:0;" /></a></div>';
        this.setOptions()
      }
      Tab.prototype.load = function () {
        if (this.element) {
          this.element.parentNode.removeChild(this.element)
        }
        var img = new Image();
        var self = this;
        img.onload = function () {
          self.createElement();
          self.show()
        };
        img.src = this.options.imgSrc;
        includePrintCss()
      };
      Tab.prototype.createElement = function () {
        var el = this.element = insertHtml(render(this.template, this.options)),
          a = el.getElementsByTagName("a")[0],
          self = this;
        addClassName(el, "uv-tab uv-slide-" + this.edge);
        this.hide(false);
        this.dimensions = elementDimensions(el);
        a.onclick = function (e) {
          e && e.preventDefault();
          self.widget.show();
          return false
        };
        if (UA.touch) {
          this.bindTouchEvents()
        }
      };
      Tab.prototype.hide = function (animate) {
        var el = this.element;
        animate = animate == undefined ? true : animate;
        if (animate) {
          prepareTransition(el)
        }
        addClassName(el, "uv-is-hidden");
        el.offsetWidth
      };
      Tab.prototype.show = function () {
        var el = this.element;
        prepareTransition(el);
        removeClassName(el, "uv-is-hidden");
        el.offsetWidth
      };
      Tab.prototype.setOptions = function () {
        var defaults = {
          tab_color: "CC6D00",
          tab_label: "feedback",
          tab_position: "middle-right",
          tab_inverted: false
        };
        var opts = extend(defaults, this.widget.options);
        if (typeof opts.tab_color === "string" && opts.tab_color.match(/^#/)) {
          opts.tab_color = opts.tab_color.substring(1)
        }
        var posArray = /([^\-]+)-([^\-]+)/.exec(opts.tab_position);
        var verticalPos = posArray[1];
        var horizontalPos = posArray[2];
        var rotation = posArray[1] === "middle" ? 90 : 0;
        var whiteLabel = UserVoice.account.white_labeled ? "-no-bullhorn" : "";
        var tabStyle = ["tab-", opts.inverted ? "light-" : "dark-", opts.tab_position].join("");
        var linkStyle = [rotation ? "link-vertical" : "link-horizontal", whiteLabel].join("");
        var image = [assetHost, "/dcache", "/widget/feedback-tab.png?t=", encodeURIComponent(opts.tab_label), "&c=", opts.tab_inverted ? encodeURIComponent(opts.tab_color) : "ffffff", "&r=", encodeURIComponent(rotation), opts.tab_inverted ? "&i=yes" : ""].join("");
        var bgImage = opts.tab_position.replace(/middle-/, "").replace(/(bottom|top)-(right|left)/, "horizontal");
        bgImage = [assetHost, "/images/clients/widget2/tab-", bgImage, opts.tab_inverted ? "-light" : "-dark", whiteLabel, ".png"].join("");
        opts.bgImage = bgImage;
        opts.imgSrc = image;
        opts.tab_label = htmlentities(opts.tab_label);
        tabStyle = tabCss[tabStyle];
        linkStyle = tabCss[linkStyle];
        if (UA.ie6 || UA.ieQuirks) {
          tabStyle += "position:absolute !important;";
          if (verticalPos === "top") {
            tabStyle += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (!this.offsetHeight && 0)) + 'px');"
          } else {
            if (verticalPos === "middle") {
              tabStyle += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + ((((document.documentElement.clientHeight || document.body.clientHeight) + (!this.offsetHeight && 0)) / 2) >> 0)) + 'px');"
            } else {
              if (verticalPos === "bottom") {
                tabStyle += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight) + 'px');"
              }
            }
          }
        }
        opts.tabStyle = render(tabStyle, {
          color: opts.tab_color,
          bgImage: opts.bgImage
        });
        opts.linkStyle = linkStyle;
        includeCss(widgetEnvironmentCss);
        if (verticalPos === "top") {
          this.edge = "top"
        } else {
          if (verticalPos === "bottom") {
            this.edge = "bottom"
          } else {
            if (horizontalPos === "left") {
              this.edge = "left"
            } else {
              if (horizontalPos === "right") {
                this.edge = "right"
              }
            }
          }
        }
        this.rotation = rotation;
        this.options = opts
      };
      Tab.prototype.bindTouchEvents = function () {
        var self = this;
        var top;
        var pos = /([^\-]+)-([^\-]+)/.exec(self.options.position);
        var timer;
        var getTop;

        function onTouchStart(event) {
          self.element.style.display = "none"
        }
        function onTouchEnd(event) {
          self.element.style.display = "block"
        }
        function onScroll(event) {
          clearTimeout(timer);
          timer = setTimeout(function () {
            self.element.style.bottom = "auto";
            self.element.style.top = getTop()
          }, 100)
        }
        pos = (pos && pos[1]) || "bottom";
        if (pos === "top") {
          getTop = function () {
            return (window.pageYOffset + "px")
          }
        } else {
          if (pos === "middle") {
            getTop = function () {
              return Math.round(window.pageYOffset + (window.innerHeight / 2) - (self.dimensions.width / 2)) + "px"
            }
          } else {
            getTop = function () {
              return (window.pageYOffset + window.innerHeight - self.dimensions.height) + "px"
            }
          }
        }
        window.addEventListener("scroll", onScroll, false);
        if ("ontouchstart" in window) {
          document.addEventListener("touchstart", onTouchStart, false);
          document.addEventListener("touchend", onTouchEnd, false)
        } else {
          document.addEventListener("mousedown", onTouchStart, false);
          document.addEventListener("mouseup", onTouchEnd, false)
        }
        onScroll()
      };
      return Tab
    })();
    var Popover = (function () {
      function Popover(widgetType, widgetOptions, delegate) {
        this.template = '        <div class="uv-popover-content uv-popover-controls-hidden">          <div class="uv-popover-iframe-container"></div>          <div class="uv-popover-controls">            <span class="uv-popover-button uv-popover-close" tabindex="1">Ask me later</span>            <span class="uv-popover-button uv-popover-dismiss" tabindex="2">Don\'t ask again</span>          </div>          <!-- shadow for ie8 -->          <div class="uv-popover-content-shadow"></div>        </div>        <div class="uv-popover-tail"></div>      ';
        this.widget = Widget.identify(widgetType, "popover", widgetOptions);
        this.createElement();
        this.delegate = delegate
      }
      Popover.active = null;
      Popover.hideActive = function () {
        if (Popover.active) {
          if (Popover.active.delegate) {
            Popover.active.delegate.close()
          } else {
            Popover.active.hide()
          }
        }
      };
      Popover.prototype.show = function (animate) {
        animate = animate == undefined ? true : animate;
        Popover.hideActive();
        Popover.active = this;
        if (animate) {
          this.animateIn()
        } else {
          removeClassName(this.el, "uv-is-scale-bottom-right");
          removeClassName(this.el, "uv-is-hidden")
        }
      };
      Popover.prototype.hide = function (animate) {
        animate = animate == undefined ? true : animate;
        Popover.active = null;
        if (animate) {
          this.animateOut()
        } else {
          removeClassName(this.el, "uv-is-scale-bottom-right");
          addClassName(this.el, "uv-is-hidden")
        }
      };
      Popover.prototype.toggle = function (animate) {
        if (this.visible()) {
          this.hide(animate)
        } else {
          this.show(animate)
        }
      };
      Popover.prototype.animateIn = function () {
        this.position();
        prepareTransition(this.element);
        removeClassName(this.element, "uv-is-hidden");
        this.element.offsetWidth;
        this.createIframe()
      };
      Popover.prototype.animateOut = function () {
        var self = this;
        prepareTransition(this.element);
        addClassName(this.element, "uv-is-hidden")
      };
      Popover.prototype.visible = function () {
        return !hasClassName(this.element, "uv-is-hidden")
      };
      Popover.prototype.position = function () {
        var visible = this.visible();
        addClassName(this.element, "uv-no-transition");
        if (!visible) {
          addClassName(this.element, "uv-is-invisible")
        }
        removeClassName(this.element, "uv-scale-\\S+");
        this.element.offsetWidth;
        if (this.isCustomTrigger) {
          this.doCustomPositioning()
        } else {
          if (this.delegate && this.delegate.position) {
            addClassName(this.element, "uv-scale-" + this.delegate.options.position)
          } else {
            addClassName(this.element, "uv-scale-bottom")
          }
        } if (!visible) {
          removeClassName(this.element, "uv-is-invisible")
        }
        removeClassName(this.element, "uv-no-transition");
        this.element.offsetWidth
      };
      Popover.prototype.doCustomPositioning = function () {
        var popover = this.element,
          tail = queryTagClass(this.element, "uv-popover-tail"),
          popoverDimensions = elementDimensions(popover),
          width = popoverDimensions.width,
          tailWidth = elementDimensions(tail).width,
          triggerDimensions = elementDimensions(this.trigger),
          triggerWidth = triggerDimensions.width,
          triggerOffset = elementOffset(this.trigger),
          desiredOffset = triggerOffset.left + Math.floor((triggerWidth - width) / 2),
          pageWidth = pageDimensions().width,
          margin = 10,
          leftBoundOffset = (desiredOffset - margin) < 0 ? margin : desiredOffset,
          rightBoundOffset = (leftBoundOffset + width + margin) > pageWidth ? pageWidth - width - margin : leftBoundOffset,
          desiredTailOffset = triggerOffset.left - rightBoundOffset + triggerWidth / 2 - tailWidth / 2,
          tailMargin = 30,
          leftBoundTailOffset = (desiredTailOffset - tailMargin) < 0 ? tailMargin : desiredTailOffset,
          rightBoundTailOffset = (leftBoundTailOffset + tailWidth + tailMargin) > width ? width - tailMargin : leftBoundTailOffset,
          windowHeight = typeof window.innerHeight === "number" ? window.innerHeight : document.documentElement.clientHeight,
          screenAbove = triggerOffset.top - document.body.scrollTop,
          screenBelow = windowHeight - (triggerOffset.top + triggerDimensions.height - document.body.scrollTop),
          popoverPosition = screenAbove > screenBelow ? "above" : "below";
        popover.style.left = rightBoundOffset + "px";
        tail.style.left = rightBoundTailOffset + "px";
        if (popoverPosition === "above") {
          removeClassName(this.container, "uv-below");
          addClassName(this.container, "uv-above");
          tail.parentNode.appendChild(tail);
          popover.style.top = (triggerOffset.top - popoverDimensions.height - 4) + "px";
          addClassName(this.element, "uv-scale-bottom")
        } else {
          removeClassName(this.container, "uv-above");
          addClassName(this.container, "uv-below");
          tail.parentNode.insertBefore(tail, tail.parentNode.firstChild);
          popover.style.top = (triggerOffset.top + triggerDimensions.height + 4) + "px";
          addClassName(this.element, "uv-scale-top")
        }
      };
      Popover.prototype.createIframe = function () {
        if (queryTagClass(this.element, "iframe", "uv-popover-iframe")) {
          return
        }
        var iframe = this.widget.renderIframe(),
          iframeContainer = queryTagClass(this.element, "uv-popover-iframe-container"),
          self = this;
        addClassName(iframe, "uv-popover-iframe");
        iframeContainer.appendChild(iframe);
        if (Icon.positionTop && !this.isCustomTrigger) {
          var tail = queryTagClass(this.element, "uv-popover-tail");
          tail.parentNode.insertBefore(tail, tail.parentNode.firstChild)
        }
        if (this.isCustomTrigger) {
          if (UA.ie8) {
            this.element.className += " uv-ie8"
          }
          if ("addEventListener" in window) {
            window.addEventListener("resize", function (evt) {
              self.doCustomPositioning()
            }, false)
          } else {
            window.attachEvent("onresize", function (evt) {
              self.doCustomPositioning()
            })
          }
        }
      };
      Popover.prototype.createElement = function (container) {
        var el = this.element = document.createElement("div");
        el.innerHTML = this.template;
        addClassName(el, "uv-popover uv-is-hidden");
        var close = queryTagClass(this.element, "span", "uv-popover-close"),
          dismiss = queryTagClass(this.element, "span", "uv-popover-dismiss"),
          self = this;
        close.onclick = function (e) {
          e && e.preventDefault();
          if (e && e.stopPropagation) {
            e.stopPropagation()
          } else {
            if (e) {
              e.cancelBubble = true
            }
          } if (self.delegate) {
            self.delegate.popoverClosed(self)
          }
          return false
        };
        dismiss.onclick = function (e) {
          e && e.preventDefault();
          if (e && e.stopPropagation) {
            e.stopPropagation()
          } else {
            if (e) {
              e.cancelBubble = true
            }
          } if (self.delegate) {
            self.delegate.popoverDismissed(self)
          }
          return false
        }
      };
      Popover.prototype.setContainer = function (container) {
        this.container = container;
        this.container.appendChild(this.element)
      };
      Popover.prototype.showControls = function () {
        var content = queryTagClass(this.element, "uv-popover-content");
        removeClassName(content, "uv-popover-controls-hidden")
      };
      Popover.prototype.hideControls = function () {
        var content = queryTagClass(this.element, "uv-popover-content");
        addClassName(content, "uv-popover-controls-hidden")
      };
      Popover.prototype.setTailColor = function (color) {
        var popover = this.element;
        if (color === "transparent") {
          return
        }
        if (color === "#f0f3f7" || color === "rgb(240, 243, 247)" || color === "") {
          removeClassName(popover, "uv-reversed")
        } else {
          addClassName(popover, "uv-reversed")
        }
        queryTagClass(this.element, "uv-popover-content").style.backgroundColor = color;
        queryTagClass(this.element, "uv-popover-tail").style.borderTopColor = color
      };
      return Popover
    })();
    var Bubble = (function () {
      function Bubble(container, content, delegate) {
        var self = this;
        this.content = content;
        this.container = container;
        this.delegate = delegate;
        this.template = '        <div class="uv-bubble-content">          <span class="uv-bubble-title">#{content}</span>          <span class="uv-bubble-dismiss">#{close}</span>        </div>        <div class="uv-bubble-tail"></div>      ';
        this.createElement()
      }
      Bubble.prototype.position = function () {
        var bubble = this.element,
          tail = queryTagClass(this.element, "uv-bubble-tail"),
          width = elementDimensions(bubble).width,
          parentWidth = elementDimensions(this.container).width,
          desiredOffset = Math.floor((parentWidth - width) / 2),
          containerOffset = elementOffset(this.container).left,
          pageWidth = pageDimensions().width,
          margin = 10,
          leftBoundOffset = (containerOffset + desiredOffset - margin) < 0 ? margin - containerOffset : desiredOffset,
          rightBoundOffset = (containerOffset + leftBoundOffset + width + margin) > pageWidth ? pageWidth - containerOffset - width - margin : leftBoundOffset,
          tailOffset = parentWidth / 2 - rightBoundOffset - elementDimensions(tail).width / 2;
        bubble.style.left = rightBoundOffset + "px";
        tail.style.left = tailOffset + "px"
      };
      Bubble.prototype.show = function (animate) {
        animate = animate == undefined ? true : animate;
        if (animate) {
          this.animateIn()
        } else {
          this.position();
          removeClassName(this.el, "uv-is-fade");
          removeClassName(this.el, "uv-is-hidden")
        }
      };
      Bubble.prototype.hide = function (animate) {
        animate = animate == undefined ? true : animate;
        if (animate) {
          this.animateOut()
        } else {
          removeClassName(this.el, "uv-is-fade");
          addClassName(this.el, "uv-is-hidden")
        }
      };
      Bubble.prototype.toggle = function (animate) {
        if (this.visible()) {
          this.hide(animate)
        } else {
          this.show(animate)
        }
      };
      Bubble.prototype.animateIn = function () {
        addClassName(this.element, "uv-is-hidden");
        addClassName(this.element, "uv-fade");
        prepareTransition(this.element);
        removeClassName(this.element, "uv-is-hidden");
        this.position()
      };
      Bubble.prototype.animateOut = function () {
        var self = this;
        addClassName(this.element, "uv-fade");
        prepareTransition(this.element);
        addClassName(this.element, "uv-is-hidden")
      };
      Bubble.prototype.visible = function () {
        return !hasClassName(this.element, "uv-is-hidden")
      };
      Bubble.prototype.createElement = function (container) {
        var el = this.element = document.createElement("div"),
          self = this,
          dismiss;
        el.innerHTML = render(this.template, {
          content: this.content,
          close: Icon.icon_images.close
        });
        addClassName(el, "uv-bubble uv-is-hidden");
        dismiss = queryTagClass(this.element, "span", "uv-bubble-dismiss");
        dismiss.onclick = function () {
          self.delegate.bubbleClicked(self)
        };
        if (!this.delegate.isPrompt) {
          dismiss.style.display = "none"
        }
        this.container.appendChild(el);
        if (Icon.positionTop) {
          var tail = queryTagClass(this.element, "uv-bubble-tail");
          tail.parentNode.insertBefore(tail, tail.parentNode.firstChild)
        }
      };
      return Bubble
    })();
    var Icon = (function () {
      function Icon(type) {
        var widgetOptions = {
          height: "100%"
        };
        this.type = type;
        this.template = '        <span class="uv-tray-item-hoverinfo">          <span class="uv-tray-item-caption">#{label}</span>        </span>        <span class="uv-tray-item-icon">#{icon}</span>      ';
        this.createPopover();
        this.isHovering = false
      }
      Icon.icons = {};
      Icon.icon_images = {
        contact: '\u003Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"\u003E\r\n\u003Cg\u003E\r\n\t\u003Cg\u003E\r\n\t\t\u003Cpath fill="#FFFFFF" d="M21.896,25.459c0-4.247,5.292-4.751,5.292-7.235c0-1.115-0.864-2.052-2.845-2.052\r\n\t\t\tc-1.8,0-3.312,0.864-4.428,2.232L17,15.129c1.907-2.269,4.787-3.492,7.883-3.492c4.645,0,7.487,2.34,7.487,5.688\r\n\t\t\tc0,5.255-6.013,5.651-6.013,8.675c0,0.576,0.289,1.188,0.685,1.512l-3.959,1.152C22.327,27.835,21.896,26.719,21.896,25.459z\r\n\t\t\t M21.896,33.486c0-1.584,1.331-2.916,2.915-2.916c1.584,0,2.916,1.332,2.916,2.916S26.395,36.4,24.811,36.4\r\n\t\t\tC23.227,36.4,21.896,35.07,21.896,33.486z"/\u003E\r\n\t\u003C/g\u003E\r\n\u003C/g\u003E\r\n\u003C/svg\u003E\r\n',
        satisfaction: '\u003Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"\u003E\r\n\u003Cg\u003E\r\n\t\u003Cg\u003E\r\n\t\t\u003Cpath fill="#FFFFFF" d="M16.333,26.232c0.393,0.385,0.639,1.143,0.546,1.685l-1.304,7.629c-0.093,0.542,0.229,0.775,0.716,0.519\r\n\t\t\tl6.823-3.598c0.486-0.257,1.283-0.257,1.77,0l6.822,3.598c0.486,0.257,0.809,0.023,0.717-0.519l-1.304-7.629\r\n\t\t\tc-0.092-0.542,0.153-1.3,0.547-1.685l5.521-5.398c0.394-0.385,0.27-0.764-0.274-0.844l-7.627-1.113\r\n\t\t\tc-0.544-0.08-1.188-0.548-1.431-1.042l-3.415-6.938c-0.243-0.494-0.64-0.494-0.883,0l-3.415,6.938\r\n\t\t\tc-0.243,0.494-0.887,0.962-1.431,1.042l-7.626,1.113c-0.544,0.08-0.668,0.459-0.275,0.844L16.333,26.232z M24.024,29.857"/\u003E\r\n\t\u003C/g\u003E\r\n\u003C/g\u003E\r\n\u003C/svg\u003E\r\n',
        smartvote: '\u003Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"\u003E\r\n\u003Cg\u003E\r\n\t\u003Cg\u003E\r\n\t\t\u003Cpath fill="#FFFFFF" d="M30.037,13.501c-1.012-1.01-2.264-1.756-3.628-2.158C25.631,11.116,24.821,11,24.001,11\r\n\t\t\tc-2.281,0-4.424,0.888-6.037,2.501c-1.611,1.611-2.498,3.375-2.498,5.655l0.037,0.783c0.105,1.175,0.449,2.292,1.017,3.324\r\n\t\t\tc0.946,1.691,2.946,4.736,3.214,7.449l0.2,1.174c0.176,0.709,0.537,1.068,1.078,1.068h6.162c0.543,0,0.904-0.359,1.078-1.068\r\n\t\t\tl0.017-1.174c0.198-2.713,2.198-5.758,3.24-7.449c0.54-1.032,0.884-2.149,0.989-3.324l0.037-0.783\r\n\t\t\tC32.534,16.876,31.646,15.113,30.037,13.501z M20.466,35.955h7v-2h-7V35.955z M22.04,37.955h3.921l0.505-1h-5L22.04,37.955z"/\u003E\r\n\t\u003C/g\u003E\r\n\u003C/g\u003E\r\n\u003C/svg\u003E\r\n',
        close: '\u003Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t width="8px" height="8px" viewBox="0 0 8 8" enable-background="new 0 0 8 8" xml:space="preserve"\u003E\r\n\u003Cpolygon fill="#FFFFFF" points="8,1 7,0 4,3 1,0 0,1 3,4 0,7 1,8 4,5 7,8 8,7 5,4 "/\u003E\r\n\u003C/svg\u003E\r\n'
      };
      Icon.icon_images_ie8 = {
        contact: "\u003Cimg src='//widget.uservoice.com/images/clients/widget_environment/question_mark.png'\u003E",
        satisfaction: "\u003Cimg src='//widget.uservoice.com/images/clients/widget_environment/star.png'\u003E",
        smartvote: "\u003Cimg src='//widget.uservoice.com/images/clients/widget_environment/lightbulb.png'\u003E",
        close: "\u003Cimg src='//widget.uservoice.com/images/clients/widget_environment/close.png'\u003E"
      };
      Icon.active = null;
      Icon.setPosition = function (position) {
        Icon.position = position;
        Icon.positionTop = !! position.match("top");
        Icon.positionBottom = !! position.match("bottom");
        Icon.positionLeft = !! position.match("left");
        Icon.positionRight = !! position.match("right")
      };
      Icon.setPosition("bottom-right");
      Icon.postMessageHandler = new PostMessageHandler({
        openPane: function (data) {
          var key = data[0],
            backgroundColor = data[1];
          if (Icon.active) {
            Icon.active.paneOpened(key, backgroundColor)
          }
        },
        close: function () {
          if (Icon.active) {
            Icon.active.popoverClosed()
          } else {
            if (Popover.active) {
              Popover.active.hide()
            }
          }
        },
        dismiss: function () {
          if (Icon.active) {
            if (Icon.active.isPersistent) {
              Icon.active.close()
            } else {
              Icon.active.dismissPrompt()
            }
          }
        },
        voteSubmitted: function () {
          Widget.tracker.updateSession({
            last_smartvote_at: new Date().getTime()
          })
        },
        ratingSubmitted: function () {
          Widget.tracker.updateSession({
            last_sat_at: new Date().getTime()
          })
        }
      }).listen();
      Icon.identify = function (type, options) {
        if (type === "instant_answers") {
          type = "contact"
        }
        if (!Icon.icons[type]) {
          Icon.icons[type] = new Icon(type)
        }
        return Icon.icons[type]
      };
      Icon.createTray = function () {
        Icon.tray = document.createElement("div");
        addClassName(Icon.tray, "uv-tray uv-" + Icon.position);
        if (UA.ie8) {
          addClassName(Icon.tray, "uv-ie8")
        }
        try {
          if (window.localStorage && !window.localStorage.uv_init) {
            window.localStorage.uv_init = "1";
            addClassName(Icon.tray, "uv-init");
            Icon.initializing = true;
            setTimeout(function () {
              Icon.initializing = false;
              removeClassName(Icon.tray, "uv-init")
            }, 4000)
          }
        } catch (e) {}
        document.body.appendChild(Icon.tray);
        includeCss(widgetEnvironmentCss)
      };
      Icon.closeAll = function () {
        for (var key in Icon.icons) {
          Icon.icons[key].close()
        }
      };
      Icon.shouldShowSatisfactionPrompt = function (session) {
        var now = new Date().getTime(),
          last = Math.max(session.created_at || 0, session.last_sat_at || 0, session.dismissed_sat_at || 0);
        if (last !== 0) {
          var diff = now - last,
            days = diff / 1000 / 60 / 60 / 24;
          return days >= 60
        }
        return false
      };
      Icon.shouldShowSmartVotePrompt = function (session) {
        var now = new Date().getTime(),
          last = Math.max(session.last_smartvote_at || 0, session.dismissed_smartvote_at || 0);
        if (last !== 0) {
          var diff = now - last,
            days = diff / 1000 / 60 / 60 / 24;
          return days >= 42
        } else {
          return session.loginCount === 7
        }
      };
      Icon.initAutoprompts = function () {
        if (Widget.session === undefined) {
          Icon.pendingAutoprompt = true;
          return
        }
        if (!("localStorage" in window && window.localStorage)) {
          return
        }
        var session = Widget.session;
        if (session.sat_prompted === true) {
          Icon.identify("satisfaction").showPrompt({
            minimized: true
          })
        } else {
          if (Icon.shouldShowSatisfactionPrompt(session)) {
            Icon.identify("satisfaction").showPrompt()
          }
        } if (session.smartvote_prompted === true) {
          Icon.identify("smartvote").showPrompt({
            minimized: true
          })
        } else {
          if (Icon.shouldShowSmartVotePrompt(session)) {
            Icon.identify("smartvote").showPrompt()
          }
        }
      };
      Icon.prototype.createPopover = function () {
        if (this.type === "contact") {
          this.popover = new Popover("instant-answers", {
            height: "100%"
          }, this)
        } else {
          if (this.type === "smartvote") {
            this.popover = new Popover("smartvote", {
              height: "100%"
            }, this)
          } else {
            if (this.type === "satisfaction") {
              this.popover = new Popover("satisfaction", {
                height: "100%",
                smartvote: false,
                survey_lockout: false
              }, this)
            }
          }
        }
      };
      Icon.prototype.setOptions = function (options) {
        var defaultLabels = {
          contact: "Get help or give feedback",
          smartvote: "What should we build next?",
          satisfaction: "How are we doing?"
        }, defaultOptions = {
            label: defaultLabels[this.type],
            position: "bottom-right"
          };
        this.options = extend(defaultOptions, UserVoice.globalOptions, UserVoice.globalOptions[this.type] || (this.type === "contact" && UserVoice.globalOptions.instant_answers) || {}, options || {});
        Icon.setPosition(this.options.position);
        this.position = Icon.position
      };
      Icon.prototype.showIcon = function (options) {
        this.isPersistent = true;
        this.setOptions(options);
        this.render()
      };
      Icon.prototype.showPrompt = function (options) {
        if (this.isPersistent) {
          this.togglePopover();
          return
        }
        if (options !== undefined && options.pin === true) {
          this.isPersistent = true
        }
        var self = this;
        this.isPrompt = true;
        this.setOptions(options);
        this.createPopover();
        this.render();
        if (!this.isPersistent && (options === undefined || options.showControls !== false)) {
          this.popover.showControls();
          if (this.type === "satisfaction") {
            Widget.tracker.updateSession({
              sat_prompted: true
            })
          } else {
            if (this.type === "smartvote") {
              Widget.tracker.updateSession({
                smartvote_prompted: true
              })
            }
          }
        }
        if (options === undefined || options.minimized !== true) {
          this.togglePopover()
        }
      };
      Icon.prototype.dismissPrompt = function () {
        if (this.type === "satisfaction") {
          Widget.tracker.updateSession({
            sat_prompted: false
          })
        } else {
          if (this.type === "smartvote") {
            Widget.tracker.updateSession({
              smartvote_prompted: false
            })
          }
        }
        this.element.parentNode.removeChild(this.element);
        delete Icon.icons[this.type]
      };
      Icon.prototype.recordPromptDismissed = function () {
        if (this.type === "satisfaction") {
          Widget.tracker.updateSession({
            dismissed_sat_at: new Date().getTime()
          })
        } else {
          if (this.type === "smartvote") {
            Widget.tracker.updateSession({
              dismissed_smartvote_at: new Date().getTime()
            })
          }
        }
      };
      Icon.prototype.bubbleClicked = function (bubble) {
        this.dismissPrompt();
        this.recordPromptDismissed()
      };
      Icon.prototype.render = function () {
        var self = this,
          icon;
        if (!this.element) {
          this.createElement()
        }
        this.element.innerHTML = render(this.template, {
          icon: (UA.ie8 ? Icon.icon_images_ie8 : Icon.icon_images)[this.type],
          label: this.options.label
        });
        this.element.onclick = function () {
          self.togglePopover()
        };
        onMouseEnter(this.element, function () {
          self.isHovering = true;
          if (!Icon.initializing && !self.popover.visible()) {
            self.bubble.show()
          }
        });
        onMouseLeave(this.element, function () {
          self.isHovering = false;
          self.bubble.hide()
        });
        this.bubble = new Bubble(this.element, this.options.label, this);
        this.popover.setContainer(this.element)
      };
      Icon.prototype.createElement = function () {
        var el = this.element = document.createElement("div");
        addClassName(this.element, "uv-tray-item");
        if (!Icon.tray) {
          Icon.createTray()
        }
        if (Icon.positionLeft) {
          Icon.tray.appendChild(el)
        } else {
          Icon.tray.insertBefore(el, Icon.tray.firstChild)
        }
      };
      Icon.prototype.paneOpened = function (key, options) {
        if (!options.firstPane) {
          this.popover.hideControls()
        }
        if (options.needsReload) {
          this.needsReload = true
        }
        this.popover.setTailColor(options.backgroundColor)
      };
      Icon.prototype.close = function () {
        if (this.popover.visible()) {
          Icon.active = null;
          if (this.isHovering) {
            this.bubble.show()
          }
          this.popover.toggle();
          removeClassName(this.element, "uv-is-selected");
          removeClassName(Icon.tray, "uv-is-open")
        }
      };
      Icon.prototype.togglePopover = function () {
        if (this.popover.visible()) {
          this.close()
        } else {
          if (this.needsReload) {
            this.createPopover();
            this.render();
            this.needsReload = false
          }
          Icon.active = this;
          this.bubble.hide();
          this.popover.toggle();
          addClassName(this.element, "uv-is-selected");
          addClassName(Icon.tray, "uv-is-open")
        }
      };
      Icon.prototype.popoverClosed = function (popover) {
        this.isHovering = false;
        this.close()
      };
      Icon.prototype.popoverDismissed = function (popover) {
        this.dismissPrompt();
        this.recordPromptDismissed()
      };
      return Icon
    })();
    var Widget = (function () {
      function Widget(type, embedType, widgetKey, options) {
        this.iframe = null;
        this.iframeName = "uvw-iframe-" + widgetKey;
        this.iframeClassName = "uvw-dialog-iframe";
        if (embedType == "lightbox") {
          this.iframeCss = "display: block; border: none; -moz-border-radius: 3px; -webkit-border-radius: 3px; height: 100%; padding: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%;-webkit-transform: translate3d(0,0,0);"
        } else {
          this.iframeCss = "display: block; background: transparent; padding: none; margin: none; border: none; width: #{width}; height: #{height}"
        }
        this.dialogTemplate = '<div class="uvOverlay1" id="#{overlay_id}" style="position: relative; visibility:hidden; z-index: 100003;"><div id="#{overlay_background_id}" style="background: #000; -ms-filter: alpha(opacity=75); filter: alpha(opacity=75); opacity: .75; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"></div><div class="uvOverlay2" style="height: 100%; overflow: auto; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"><div class="uvOverlay3" style="height: 100%; min-height: 550px; min-width: 900px; position: relative; width: 100%;"><div id="#{dialog_id}" style="-webkit-box-shadow: rgba(0,0,0,.5) 0 5px 5px; height: 500px; margin: -250px 0 0 -444px; position: absolute; top: 50%; left: 50%; width: 888px;"><div id="#{dialog_close_id}" title="Close Dialog" style="z-index: 100004; background: transparent url(' + assetHost + '/images/clients/widget2/close.png) 0 0 no-repeat; height: 48px; margin: 0; padding: 0; position: absolute; top: -22px; right: -24px; width: 48px;"><button style="background: none; border: none; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; cursor: pointer; height: 30px; margin: 6px 0 0 9px; padding: 0; width: 30px; text-indent: -9000px;">Close Dialog</button></div><div id="#{dialog_content_id}" style="position:static; width:100%; height:100%"></div>' + (UserVoice.account.campaign ? '<a id="#{dialog_powered_by_id}" href="http://www.uservoice.com/?utm_campaign=' + UserVoice.account.campaign + "&amp;utm_medium=widget2&amp;utm_source=" + UserVoice.account.subdomain_ssl_host + '" target="_blank" style="background: url(' + assetHost + '/images/clients/widget2/powered_by.png) 0 0 no-repeat; font-size: 11px; height: 20px; position: absolute; bottom: -25px; right: 10px; text-indent: -9000px; width: 150px;">Powered by UserVoice</a>' : "") + "</div></div></div></div>";
        this.dialog_id = "uvw-dialog-" + widgetKey;
        this.dialog_close_id = "uvw-dialog-close-" + widgetKey;
        this.dialog_powered_by_id = "uvw-dialog-powered-by-" + widgetKey;
        this.dialog_content_id = "uvw-dialog-content-" + widgetKey;
        this.overlay_id = "uvw-overlay-" + widgetKey;
        this.overlay_background_id = "uvw-overlay-background-" + widgetKey;
        this.pokes = [];
        this.type = type;
        this.embedType = embedType;
        this.widgetKey = widgetKey;
        this.cdnSource = this.type === "omnibox";
        this.options = options;
        this.loaded = false;
        this.setLocation()
      }
      Widget.widgets = {};
      Widget.nextId = 0;
      Widget.uvts = null;
      Widget.prototype.setLocation = function () {
        var scheme = "https";
        if (this.cdnSource) {
          var cdnDomain = "widget.uservoice.com";
          this.location = {
            host: cdnDomain,
            protocol: scheme,
            baseUrl: scheme + "://" + cdnDomain + "/" + this.type + "/" + UserVoice.account.client_key
          }
        } else {
          this.location = {
            host: UserVoice.account.subdomain_ssl_host,
            protocol: scheme,
            baseUrl: scheme + "://" + UserVoice.account.subdomain_ssl_host + "/clients/widgets/" + this.type
          }
        }
        this.location.origin = [this.location.protocol, "://", this.location.host].join("")
      };
      Widget.setUvts = function (uvts) {
        Widget.uvts = uvts;
        for (var key in Widget.widgets) {
          if (Widget.widgets.hasOwnProperty(key)) {
            Widget.widgets[key].sendUvtsAndEmail()
          }
        }
      };
      Widget.setEmail = function (email) {
        Widget.email = email;
        for (var key in Widget.widgets) {
          if (Widget.widgets.hasOwnProperty(key)) {
            Widget.widgets[key].sendUvtsAndEmail()
          }
        }
      };
      Widget.setSession = function (session) {
        Widget.session = session;
        if (Icon.pendingAutoprompt) {
          Icon.initAutoprompts();
          Icon.pendingAutoprompt = false
        }
      };
      Widget.prototype.sendUvtsAndEmail = function () {
        if (Widget.uvts) {
          this.poke(jsonStringify({
            setUvts: Widget.uvts
          }))
        }
        if (Widget.email) {
          this.poke(jsonStringify({
            setEmail: Widget.email
          }))
        }
      };
      Widget.tracker = new Babayaga(UserVoice.account.subdomain_id, {
        channel: document.location.host === UserVoice.account.subdomain_site_host ? "site2" : "external",
        onUvts: Widget.setUvts,
        onSession: Widget.setSession
      });
      Widget.identify = function (widgetType, embedType, options) {
        if (widgetType === "contact" || widgetType === "instant_answers" || widgetType === "instant-answers" || widgetType === "smartvote" || widgetType === "satisfaction") {
          options.mode = widgetType === "contact" ? "instant-answers" : widgetType.replace(/_/g, "-");
          widgetType = "omnibox"
        }
        var id;
        if (embedType == "inline") {
          id = "inline-" + Widget.nextId;
          Widget.nextId += 1
        } else {
          id = base64Encode(widgetType + embedType + jsonStringify(options)).replace(/\W/, "")
        } if (!Widget.widgets[id]) {
          Widget.widgets[id] = new Widget(widgetType, embedType, id, extend({}, UserVoice.globalOptions, options));
          Widget.widgets[id].sendUvtsAndEmail()
        }
        return Widget.widgets[id]
      };
      Widget.initEmbeds = function () {
        var elements = document.getElementsByTagName("*");
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          if (element.getAttribute("data-uv-inline")) {
            Widget.renderInline(element)
          }
          if (element.tagName === "A" && element.getAttribute("data-uv-lightbox")) {
            Widget.linkToLightbox(element)
          }
          if (element.getAttribute("data-uv-show")) {
            Widget.linkToPopover(element)
          }
        }
      };
      Widget.extractOptions = function (element) {
        var options = {};
        for (var i = 0; i < element.attributes.length; i++) {
          var attribute = element.attributes[i];
          if (attribute.specified && attribute.name.match(/^data-uv-/)) {
            options[attribute.name.replace(/^data-uv-/, "").replace(/-/g, "_")] = attribute.value
          }
        }
        return options
      };
      Widget.renderInline = function (element) {
        var widgetType = element.getAttribute("data-uv-inline"),
          options = Widget.extractOptions(element),
          widget = Widget.identify(widgetType, "inline", options),
          iframe = widget.renderIframe(),
          position = element.currentStyle ? element.currentStyle.position : window.getComputedStyle(element, null).position;
        if (position === "static") {
          element.style.position = "relative"
        }
        while (element.firstChild) {
          element.removeChild(element.firstChild)
        }
        element.appendChild(iframe)
      };
      Widget.linkToLightbox = function (element) {
        var widgetType = element.getAttribute("data-uv-lightbox"),
          options = Widget.extractOptions(element);
        element.onclick = function () {
          UserVoice.showLightbox(widgetType, options);
          return false
        }
      };
      Widget.linkToPopover = function (element, widgetType, options) {
        var widgetType = widgetType || element.getAttribute("data-uv-show"),
          options = options || Widget.extractOptions(element),
          mode = "instant-answers",
          popover = new Popover(mode, extend({
            height: "100%"
          }, options));
        popover.trigger = element;
        popover.setContainer(document.body);
        popover.isCustomTrigger = true;
        element.onclick = function () {
          popover.toggle();
          return false
        };
        if (!Icon.tray) {
          Icon.createTray()
        }
      };
      Widget.prototype.show = function () {
        if (UA.ie6 || UA.touch || UA.ieMobile || UA.iOS || UA.ieQuirks) {
          var popupUrl = this.location.baseUrl + "?" + this.queryString();
          window.open(popupUrl, "uservoice_widget", "height=500,width=888,resizable=yes,scrollbars=1")
        } else {
          this.initPopup();
          this.overlay.style.visibility = "visible";
          this.overlay.style.display = "block";
          this.dialog.focus();
          addClassName(htmlElement(), "uvw-dialog-open")
        }
      };
      Widget.prototype.hide = function () {
        this.poke("reset");
        if (this.overlay) {
          this.overlay.style.display = "none"
        }
        removeClassName(htmlElement(), "uvw-dialog-open")
      };
      Widget.prototype.doLoad = function () {
        this.loaded = true;
        this.poke()
      };
      Widget.prototype.poke = function (message) {
        if (message) {
          this.pokes.push(message)
        }
        if (this.loaded && this.iframe && this.iframe.contentWindow) {
          var widgetWindow = this.iframe.contentWindow,
            i = 0,
            l = this.pokes.length;
          for (; i < l; i++) {
            if ("postMessage" in window) {
              widgetWindow.postMessage(this.pokes[i], this.location.origin)
            } else {
              try {
                widgetWindow.location.href = [this.iframeSrc, (+new Date()).toString() + "&" + this.pokes[i]].join("#")
              } catch (e) {}
            }
          }
          this.pokes = []
        }
      };
      Widget.prototype.renderIframe = function (options) {
        this.options.startIframeLoad = +new Date();
        var iframe = document.createElement("iframe"),
          widget = this,
          src = [this.location.baseUrl, this.queryString()].join("?"),
          cssOptions = {
            height: this.options.height || "550px",
            width: this.options.width || "100%"
          };
        options = options || {};
        if (iframe.attachEvent) {
          iframe.attachEvent("onload", function () {
            widget.doLoad()
          })
        } else {
          iframe.onload = function () {
            widget.doLoad()
          }
        }
        iframe.name = this.iframeName;
        iframe.className = this.iframeClassName;
        if (UA.ie) {
          iframe.style.setAttribute("cssText", render(this.iframeCss, cssOptions), 0)
        } else {
          iframe.setAttribute("style", render(this.iframeCss, cssOptions))
        }
        iframe.setAttribute("allowtransparency", "true");
        iframe.setAttribute("frameBorder", "0");
        iframe.frameBorder = 0;
        if (!(UA.ie && UA.version < 9)) {
          iframe.style.visibility = "hidden";
          var fn = iframe.onload;
          iframe.onload = function () {
            if (typeof fn === "function") {
              fn()
            }
            iframe.style.visibility = "visible"
          }
        }
        this.iframeSrc = iframe.src = src;
        this.iframe = iframe;
        return iframe
      };
      Widget.prototype.initPopup = function () {
        if (!this.overlay) {
          includeCss(dialogCss);
          this.overlay = insertHtml(render(this.dialogTemplate, this))
        }
        this.poke("opened");
        if (!this.dialog || this.dialog.getAttribute("data-widget-key") !== this.widgetKey) {
          var iframe = this.renderIframe();
          this.dialogContent = document.getElementById(this.dialog_content_id);
          while (this.dialogContent.firstChild) {
            this.dialogContent.removeChild(this.dialogContent.firstChild)
          }
          this.dialogContent.appendChild(iframe);
          this.dialog = document.getElementById(this.dialog_id);
          this.dialog.setAttribute("data-widget-key", this.widgetKey);
          var self = this;
          document.getElementById(this.dialog_close_id).onclick = function (e) {
            return self.hide()
          }
        }
      };
      Widget.prototype.queryString = function () {
        var params = {}, paramKeys = ["sso", "sess", "mode", "default_mode", "locale", "link_color", "topic_id", "forum_id", "feedback_tab_name", "support_tab_name", "contact_us", "email", "status_ids", "states", "category_ids", "comparisons_before_survey", "show_smartvote_link", "survey_lockout", "primary_color", "reversed_colors", "header", "border", "custom_template_id", "design_settings_id", "mixpanel_channel", "allow_tests", "demo", "startIframeLoad", "instant_answers", "smartvote", "satisfaction"];
        for (var i = 0; i < paramKeys.length; i++) {
          var key = paramKeys[i];
          if (this.options[key] !== undefined && typeof this.options[key] !== "object") {
            params[key] = this.options[key]
          }
          if (typeof params[key] === "string" && key.match(/color/) && params[key].match(/^#/)) {
            params[key] = params[key].substring(1)
          }
        }
        var customFields = this.options.ticket_custom_fields || this.options.custom_fields;
        if (customFields && typeof customFields === "object") {
          params.custom_fields = encodeURIComponent(base64Encode(jsonStringify(customFields)))
        }
        params.embed_type = this.embedType;
        params.referrer = encodeURIComponent(window.location.href);
        if (params.feedback_tab_name) {
          params.feedback_tab_name = encodeURIComponent(params.feedback_tab_name)
        }
        if (params.support_tab_name) {
          params.support_tab_name = encodeURIComponent(params.support_tab_name)
        }
        return param(params)
      };
      return Widget
    })();
    UserVoice.globalOptions = {};
    UserVoice.push = function (array) {
      var fn = array[0],
        args = array.slice(1);
      if (typeof (UserVoice[fn]) === "function") {
        UserVoice[fn].apply(null, args)
      }
    };
    UserVoice.set = function (key, value) {
      if (typeof key === "object") {
        UserVoice.globalOptions = deepMerge(UserVoice.globalOptions, key)
      } else {
        var h = {};
        h[key] = value;
        UserVoice.set(h)
      }
    };
    UserVoice.pin = function (iconType, options) {
      Icon.identify(iconType).showIcon(options)
    };
    UserVoice.show = function (iconType, options) {
      Icon.identify(iconType).showPrompt(options)
    };
    UserVoice.autoprompt = function () {
      Icon.initAutoprompts()
    };
    UserVoice.identify = function (hash) {
      Widget.tracker.identify(hash);
      if (hash && hash.email) {
        Widget.setEmail(hash.email)
      }
    };
    UserVoice.track = function (evt, props) {
      Widget.tracker.track(evt, props)
    };
    UserVoice.footprint = function (enabled) {
      Widget.tracker.setConfig({
        enabled: enabled
      })
    };
    UserVoice.setOption = function (k, v) {
      UserVoice.set(k, v)
    };
    UserVoice.setOptions = function (h) {
      UserVoice.set(h)
    };
    UserVoice.setSSO = function (v) {
      UserVoice.set("sso", v)
    };
    UserVoice.setCustomFields = function (v) {
      UserVoice.set("ticket_custom_fields", v)
    };
    UserVoice.setLocale = function (v) {
      UserVoice.set("locale", v)
    };
    UserVoice.showIcon = UserVoice.pin;
    UserVoice.showPrompt = UserVoice.showPopover = UserVoice.show;
    UserVoice.showTab = function (widgetType, options) {
      var widget = Widget.identify(widgetType, "lightbox", options);
      new Tab(widget).load()
    };
    UserVoice.showLightbox = function (widgetType, options) {
      var widget = Widget.identify(widgetType, "lightbox", options);
      widget.show()
    };
    UserVoice.hideLightbox = function () {};
    for (var i = 0; i < UserVoice.events.length; i++) {
      UserVoice.push(UserVoice.events[i])
    }
    Widget.initEmbeds();

    function onDomReady() {
      if (!onDomReady.fired) {
        onDomReady.fired = true;
        Widget.tracker.trackExternalView();
        Widget.tracker.ready()
      }
    }
    domReady(onDomReady)
  })(window, document)
};
(function () {

  function processOpts(opts) {
    if (opts && opts.widget_key && UserVoice.client_widgets && UserVoice.client_widgets[opts.widget_key]) {
      var clientOpts = UserVoice.client_widgets[opts.widget_key],
        newOpts = {}, key;
      for (key in clientOpts) newOpts[key] = clientOpts[key];
      for (key in opts) newOpts[key] = opts[key];
      return newOpts;
    }
    return opts;
  }

  window.UserVoice.showPopupWidget = function (opts) {
    UserVoice.push(['showLightbox', 'classic_widget', processOpts(opts)]);
  };

  window.UserVoice.hidePopupWidget = function () {
    UserVoice.push(['hideLightbox', 'classic_widget']);
  };

  window.UserVoice.newShowTab = window.UserVoice.showTab;
  window.UserVoice.showTab = function (arg0, arg1) {
    if (typeof arg0 === 'string')
      UserVoice.push(['newShowTab', arg0, processOpts(arg1)]);
    else
      UserVoice.push(['newShowTab', 'classic_widget', processOpts(arg0)]);
  };

  if (window.uvOptions) {
    var options = {
      sso: 'sso',
      custom_fields: 'custom_fields',
      default_mode: 'default_mode',
      sess: 'sess',
      locale: 'locale'
    };
    for (var key in options) {
      if (window.uvOptions[key])
        UserVoice.push(['setOption', options[key], window.uvOptions[key]]);
    }

    if (window.uvOptions.tab) {
      var tabOptions = {
        enabled: 'tab_enabled',
        position: 'tab_position',
        inverted: 'tab_inverted',
        label: 'tab_label',
        color: 'color',
        link_color: 'link_color'
      };
      for (var key in tabOptions) {
        if (window.uvOptions.tab[key])
          UserVoice.push(['setOption', tabOptions[key], window.uvOptions.tab[key]]);
      }
    }
  }
})();

UserVoice.push(['setOptions', {
    "mode": "full",
    "primary_color": "222120",
    "link_color": "222120",
    "tab_color": "222120",
    "tab_label": "feedback",
    "tab_position": "middle-right",
    "default_mode": "support",
    "forum_id": 183120,
    "feedback_tab_name": "Give feedback",
    "support_tab_name": "Contact support"
  }
]);