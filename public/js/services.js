'use strict';
/* ===================================
 services.js

 - AnalyticsService
 - DirectoryService
 - NotificationService
 - UpdateService
 =================================== */

/*
 * AnalyticsService
 */
angular.module("vline.ui.AnalyticsService", [])
  .factory("vline.ui.AnalyticsService", ["$rootScope", "$location", function ($rootScope, $location) {
  /*
   location
   $$absUrl: "http://127.0.0.1:3000/"
   $$compose: function (){var b=qb(this.$$search),c=this.$$hash?"#"+Ya(this.$$hash):"";this.$$url=Gb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=la(this.$$protocol,
   $$hash: ""
   $$host: "127.0.0.1"
   $$parse: function (b){var c=wa(b,this);if(c.path.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Wa(c.search);this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()}
   $$path: "/"
   $$port: 3000
   $$protocol: "http"
   $$replace: false
   $$rewriteAppUrl: function (a){if(a.indexOf(c)==0)return a}
   $$search: Object
   $$url: "/"
   */

  var _host = $location.host() || "localhost";
  return {
    CALL_CATEGORY:"Calls",
    CALL_ACTION_OUTBOUND:"outbound",
    CALL_ACTION_INBOUND:"inbound",
    LOGIN_CATEGORY:"Login Data",
    LOGIN_BUTTON_CLICK:"login click",
    track : function (e, t, r, i, s) {
      console.log("AnalyticsService _track", arguments);
      //["Login Data", "login click"]
      //["Calls", "outbound"]
      if(!_host && _gaq) {
        _gaq.push(["_trackEvent", e, t, r, i, s])
      }
    },
    trackPageView:function (e) {
      console.log("AnalyticsService _trackPageView", arguments);
      if(!_host && _gaq) {
        _gaq.push(["_trackPageview", e])
      }
    }
  }
}]);

/*
 * DirectoryService
 */
angular.module("vline.ui.DirectoryService", [])
  //Constants
  .constant("config.testCallDisplayName", "Test Call")
  .constant("config.testCallId", "vline:testcall")
  .constant("config.testCallShortId", "testcall")
  .constant("config.testCallThumbnailUrl", "images/test-call.png")
  //Factories
  .factory("vline.ui.DirectoryService", ["$rootScope", "$vline", "$log", "$timeout", "config.testCallDisplayName", "config.testCallId", "config.testCallShortId", "config.testCallThumbnailUrl", function ($rootScope, $vline, $log, $timeout, testCallDisplayName, testCallId, testCallShortId, testCallThumbnailUrl) {

  //Prototyping
  function a() {
  };

  a.prototype = {
    getSender:function () {
      function _prot() {
      }

      _prot.prototype = {
        getDisplayName:function () {
          return testCallDisplayName
        },
        getThumbnailUrl:function () {
          return testCallThumbnailUrl
        }
      };
      var t = new _prot;
      return t
    },
    getId:function () {
      return testCallId
    },
    getDisplayName:function () {
      return testCallDisplayName
    },
    getBody:function () {
      return "\nTo test that your microphone and camera are configured correctly, click the green \"Video Call\" button.\n\nAfter the call connects, you should see live video from your camera.\n\nIf you unmute the audio, you should also hear yourself.\n\nIf you hear any feedback after unmuting, try turning down the volume on your computer. Don't worry, you won't hear feedback when you call another computer."
    },
    getCreationTime:function () {
      return (new Date).getTime()
    },
    getSenderId:function () {
      return testCallId
    }
  };

  a.prototype.getSenderId = function () {
    return testCallId
  };

  function c(uid) {
    this.id = uid
      , this.unreadCount = 0
      , this.mediaSessions = []
      , this.localVideoUrls = []
      , this.remoteVideoUrls = []
      , this.remoteAudioUrls = []
      , this.username = uid.substr(uid.indexOf(":") + 1)
      , this.displayName = ""
      , this.thumbnailUrl = "images/gravatars/gravatar-140.png"
    ;
  }

  c.prototype = {
    getId:function () {
      return this.id
    },
    getUserName:function () {
      return this.username
    },
    getPresenceState:function () {
      return this.channel && this.channel.getPresenceState() || "offline"
    },
    getDisplayName:function (t) {
      return !t && $rootScope.isTestCallUser(this) ? testCallDisplayName : this.channel && this.channel.getDisplayName() || this.displayName
    },
    getThumbnailUrl:function (t) {
      return !t && $rootScope.isTestCallUser(this) ? testCallThumbnailUrl : this.channel && this.channel.getThumbnailUrl() || this.thumbnailUrl
    },
    getUnreadCount:function () {
      return this.channel && this.channel.getUnreadCount() || 0
    },
    getProfileUrl:function () {
      return "https://github.com/" + this.username
    },
    getLocation:function () {
      return this.location
    },
    setDisplayName:function (e) {
      this.displayName = e
    },
    setThumbnailUrl:function (e) {
      this.thumbnailUrl = e
    },
    setLocation:function (e) {
      this.location = e
    },
    getChannel:function () {
      return this.channel
    },
    getMessages:function () {
      if (this.messagesRequested) return;
      this.messagesRequested = true, $rootScope.isTestCallUser(this) ? this.messages = l : this.channel && this.requestMessages_()
    },
    setActive:function () {
      this.channel ? this.channel.setActive(true) : this.setActiveRequested = true
    },
    setChannel:function (e) {
      this.channel = e, this.messagesRequested && this.requestMessages_(), this.setActiveRequested && this.channel.setActive(true)
    },
    requestMessages_:function () {
      this.channel.getMessages().done(function (t) {
        this.messages = t, $rootScope.refreshUI(), $rootScope.isSelected(this) && $rootScope.scrollToBottom()
      }, this)
    }
  };

  function C() {
    !p && v && m === 0 && (p = true, $rootScope.contacts = g, $rootScope.searchContacts = y, $rootScope.refreshUI(), $rootScope.$emit("directory.ready"))
  };

  function k(t) {
    t.personRequested || (t.personRequested = true, m++, h.session.getPerson(t.id).done(function (n) {
      w[t.id] ? (t.setChannel(n), t.omitFromContacts || g.push(t), S[t.id] && b.indexOf(t) < 0 && b.push(t), $rootScope.recentContacts = b) : n.release()
    }).always(function () {
        m--, C()
      }))
  };

  function L(t, n) {
    t.personRequested || (t.personRequested = true, h.session.getPerson(t.id).done(function (r) {
      n === T ? (t.setChannel(r), y.push(t), $rootScope.searchContacts = y, $rootScope.searchResults = true, $rootScope.refreshUI()) : r.release()
    }))
  };

  function A(e) {
    h.fetchContact(e), k(e)
  };

  function O() {
    var e, t = x;
    x = [];
    for (e = 0; e < t.length; ++e) A(t[e])
  };

  function M(e) {
    return w[e] = new c(e)
  };

  function _(e) {
    return E[e] = new c(e)
  };

  function D(e) {
    if (e) {
      var t = /(.+\:)(\d+)(\/.*)/,
        n = e.match(t);
      if (n && n.length > 2) {
        var r = n[2];
        return n[1] + r + "\\:" + r + n[3]
      }
    }
    return e
  };

  function P(t) {
    ++m;
    var n = t.getLocalPersonId();

    h.session = t;
    d = true;

    var r = D(t.getProviderUrl());
    h.init(n, t.getAuthToken(), r);
    $rootScope.owner = N.getContact(n);
    O();
    h.fetchAllContacts();
    --m;
    $rootScope.addSession(t);
    C();
  };

  var f = new a
    , l = [f]
    ;//-------

  var h
    , p = false
    , d = false
    , v = false
    , m = 0
    , g = []
    , y = []
    , b = []
    , w = {}
    , E = {}
    , S = {}
    , x = []
    , T = ""
    ;//---------

  var N = {
    login:function () {
      return h.login()
    },
    getContactByName:function (t, n, r) {
      return t === testCallShortId && (t = $rootScope.owner.getUserName()), this.getContact(h.getUserPrefix() + t, n, r)
    },
    getContact:function (e, t, n) {
      var r = w[e],
        i = E[e];
      if (!r && i) return w[e] = i, g.push(i), angular.forEach(y, function (t, n) {
        t.getId() === e && y.splice(n, 1)
      }), delete E[e], i;
      r || (r = M(e), r.omitFromContacts = !!n, d ? A(r) : this.addPendingContact(r));
      if (t && g.indexOf(r) < 0) {
        S[e] = r;
        var s = b.indexOf(r);
        s < 0 && b.push(r)
      }
      r.omitFromContacts = !!n;
      if (!n) {
        r.channel && g.indexOf(r) < 0 && g.push(r), delete S[r.getId()];
        var s = b.indexOf(r);
        s >= 0 && b.splice(s, 1)
      }
      return r
    },
    addContact:function (e, t, n, r, i, s) {
      var o = w[t];
      s ? s === T && (o = E[t], o && n && o.setDisplayName(n), o && r && o.setThumbnailUrl(r), o && i && o.setLocation(i), o && L(o, s)) : (o || (o = M(t), k(o)), n && o.setDisplayName(n), r && o.setThumbnailUrl(r), i && o.setLocation(i))
    },
    removeContact:function (t) {
      var n = g.indexOf(w[t]);
      n >= 0 && g.splice(n, 1), n = b.indexOf(S[t]), n >= 0 && b.splice(n, 1), delete w[t], delete S[t], $rootScope.$emit("contact:removed", t)
    },
    addPendingContact:function (e) {
      x.push(e)
    },
    addSearchContacts:function (t, n) {
      n === T && (t = t.slice(0, 24), $rootScope.searchResults = true, angular.forEach(t, function (e) {
        var t = h.getUserPrefix() + e.username,
          r = w[t] || S[t];
        r || (r = E[t], r || (r = _(t), h.fetchContact(r, n)))
      }, this))
    },
    supportsSearch:function () {
      return h.supportsSearch()
    },
    search:function (e) {
      if (!e || 0 === e.length || /^\s*$/.test(e)) {
        T = "", this.releaseSearchResults(), h.doSearch("");
        return
      }
      if (T === e) return;
      T = e, h.doSearch(e)
    },
    releaseSearchResults:function () {
      var t = [];
      angular.forEach(E, function (e) {
        t.push(e.getChannel())
      }), $rootScope.searchContacts = y = [], E = {}, $rootScope.refreshUI(), angular.forEach(t, function (e) {
        e && e.release()
      })
    },
    addProvider:function (e) {
      h = e, setTimeout(function () {
        $vline.isLoggedIn() && !d && P($vline.getDefaultSession())
      }, 0)
    },
    providerLoaded:function (e) {
      v = true, C()
    }
  };

  return $vline.on("logout",function () {
    p = d = v = false;
    h.logout();
    $rootScope.contacts.length = $rootScope.recentContacts.length = $rootScope.groups.length = $rootScope.developers.length = x.length = 0;
    g = [];
    w = {};
    $rootScope.owner = null;
  }).on("add:session", function (e) {
      h && P(e.target)
    }), N

}]);

/*
 * NotificationService
 */
angular.module("vline.ui.NotificationService", [])
  .factory("vline.ui.NotificationService", ["$rootScope", "$log", "$window", function ($rootScope, $log, $window) {
    var _hasWebkitNotifications = !!$window.webkitNotifications
      , _perm = 0
      ;//--------
    _hasWebkitNotifications && (_perm = window.webkitNotifications.checkPermission());
    var s = _perm === 0
      , o = 5500
      ;//--------

    return {
      requestPermission:function () {
        if (!_hasWebkitNotifications) return;
        $window.webkitNotifications.requestPermission(function () {
          _perm = $window.webkitNotifications.checkPermission();
          s     = _perm === 0;
          $rootScope.$emit("notificationService.toggle");
        })
      },
      notify:function (e, t, n, r) {
        var _notification = this.create(e, t, n);
        return _notification && (_notification.show(), r === undefined && (r = o), r !== -1 && setTimeout(function () {
          _notification.close()
        }, r)), _notification
      },
      create:function (e, t, i) {
        return !_hasWebkitNotifications || !s ? null : $window.webkitNotifications.createNotification(e, t, i)
      },
      isNotificationRequested:function () {
        return _perm != 1
      },
      notifyOn:function () {
        this.requestPermission()
      }
    }
  }]);

/*
 * UpdateService
 */
angular.module("vline.ui.UpdateService", [])
  .factory("vline.ui.UpdateService", ["$rootScope", "$log", "$window", "$location", "$http", "$vline", function ($rootScope, $log, $window, $location, $http, $vline) {

  function E() { return !d && v === 0 }
  function locationReload() { location.reload() }

  function S(e, t) {
    m || (m = true, setTimeout(function () {
      m = false;
      if (g) {
        E() ? (g = false, locationReload()) : S(w);
        return
      }

      var _reqObject = { method:"HEAD", url:_orig, headers:{ "If-Modified-Since":y, "max-age":0 } };

      $http(_reqObject)
        .success(function (e, n, r, i) {
          var s = r("Last-Modified")
            , o = r("Date")
            ;//-----
          s ? y = s : o && (y = o), n === 200 && !t ? (g = true, S(0)) : S(b)
        })
        .error(function (e, t, n, r) {
          S(b)
        })
    }, e))
  }

  var _http       = "http"
    , _https      = "https"
    , _httpPort   = 80
    , _httpsPort  = 443
    , _prot = $location.protocol()
    , _port = $location.port()
    , _host = $location.host()
    , _orig
    ;//-----

  _prot === _http ? _port === _httpPort && (_port = undefined) : _prot == _https && _port === _httpsPort && (_port = undefined);
  _orig = _prot + "://" + _host;
  _port && (_orig += ":" + _port);

  var d = true
    , v = 0
    , m = false
    , g = false
    , y = (new Date(0)).toUTCString()
    , b = 1800000
    , w = 60000
    ;//-----

  $vline
    .on("add:mediaSession",     function () { v++; })
    .on("remove:mediaSession",  function () { v--; })
  ;//-----

  $($window)
    .focus(function () { d = true })
    .blur(function () { d = false })
  ;//-----

  _host !== "localhost" && !vline.Browser.isSafari() && S(0, true);

  //var T = {};
  return {};
}]);

// End services.js
