'use strict';

/* ===================================
 providers.js

 - GithubProvider
 - OpensocialProvider
 - ManagedProvider
 =================================== */

/*
 * ManagedProvider
 */
angular.module("vline.ui.ManagedProvider", ["ngResource"])
  // Constants
  .constant("config.appId",  vlineAppConf.appId)
  .constant("config.authId", vlineAppConf.authId)
  .run(["vline.ui.DirectoryService", "$rootScope", "$vline", "$log", "$resource", "config.authId", function (DirectoryService, $rootScope, $vline, $log, $resource, authId) {

  var o
    , a = 0
    , isLogin
    , _domain = authId
    , _prefix = _domain + ":"
    , _supportsSearch = false
    ;//-----

  var _provider = {
    getDomain:function () {
      return _domain
    },
    getUserPrefix:function () {
      return _prefix
    },
    login:function () {
      return $vline.login(authId)
    },
    logout:function () {
      isLogin = false
    },
    init:function (e, t, n) {
      o = e
    },
    fetchContact:function (t, r) {
      var i = t.id;
      return $vline.getDefaultSession().getPerson(i).done(function (t) {
        DirectoryService.addContact(_provider, i, t.getDisplayName(), t.getThumbnailUrl(), null, r)
      }, _provider)
    },
    fetchAllContacts:function () {
      $vline.getDefaultSession().getContacts().done(function (n) {
        n.retain(), a = n.getSize(), n.forEach(function (t) {
          var n = t.getId();
          _provider.fetchContact({
            id:n
          }).done(function () {
              --a === 0 && !isLogin && (isLogin = true, DirectoryService.providerLoaded(_provider))
            }, _provider)
        }, _provider), n.on("addItem", function (e) {
          var n = e.item.getPath(),
            r = n.substr(n.lastIndexOf("/") + 1);
          this.fetchContact({
            id:r
          }).done(function () {
              $rootScope.refreshUI()
            })
        }, this), n.on("removeItem", function (n) {
          var r = n.item.getPath(),
            i = r.substr(r.lastIndexOf("/") + 1);
          DirectoryService.removeContact(i), $rootScope.refreshUI()
        }, this)
      }, _provider)
    },
    doSearch:function (str) {
      console.log(str);
    },
    canSearch:function () {
      return false
    },
    supportsSearch:function () {
      return _supportsSearch
    }
  };

  DirectoryService.addProvider(_provider);
}]);


/*
 * GithubProvider
 */
angular.module("vline.ui.GithubProvider", ["ngResource"])
  .constant("config.appId",  vlineAppConf.appId )
  .constant("config.authId", vlineAppConf.authId )
  .run(["vline.ui.DirectoryService", "$rootScope", "$vline", "$log", "$resource", "config.authId", function (DirectoryService, $rootScope, $vline, $log, $resource, authId) {

  function E(e, t) {
    return $resource(v + e, {
      access_token:l,
      callback:"JSON_CALLBACK"
    }, {
      get:{
        method:"JSONP"
      }
    })
  };

  function S(n, i, s, o) {
    function u() {
      --m === 0 && !h && (h = true, DirectoryService.providerLoaded(_provider))
    }

    if (!c || !l) return undefined;
    m++;
    var a = n.get(i, function () {
      o(a), u()
    }, function () {
      $log.warn("Error fetching " + a), $rootScope.$emit("accountService.fetchError", a), u()
    });
    return a;
  };

  function x(e, n, i) {
    var s = e.get(n, function () {
      i(s)
    }, function () {
      $log.warn("Error searching " + s), $rootScope.$emit("accountService.fetchError", s), i()
    });
    return s
  };

  function T(t, n) {
    var r = S(t, n, true, function () {
      angular.forEach(r.data, function (t) {
        DirectoryService.getContact(_prefix + t.login)
      })
    });
    return r
  };

  function N() {
    $rootScope.following = T(u, {})
  };

  function C() {
    var e = S(a, {}, true, function () {
      angular.forEach(e.data, function (e) {
        T(f, {
          orgId:e.login
        })
      })
    })
  };

  var o, u, a, f, l, c, h, p, d
    , v = "https://api.github.com/"
    , m = 0
    , g = true
    , y = true
    , _prefix = "github:"
    ;//------

  var _provider = {
    getDomain:function () {
      return DOMAIN
    },
    getUserPrefix:function () {
      return _prefix
    },
    login:function () {
      return $vline.login(authId)
    },
    logout:function () {
      h = false
    },
    init:function (e, t) {
      c = e;
      l = t;
      o = E("users/:userId");
      u = E("user/following", true);
      a = E("user/orgs", true);
      f = E("orgs/:orgId/members", true);
      // WhereIsSearch
      // Search = E("legacy/user/search/:keyword", true);

    },
    fetchContact:function (t, n) {
      var r = t.id,
        i = r.indexOf(":"),
        s = i > 0 ? r.substr(i + 1) : r,
        u = S(o, {
          userId:s
        }, false, function () {
          if (u.data && u.data.message === "Not Found") {
            DirectoryService.removeContact(r);
            return
          }
          DirectoryService.addContact(_provider, r, u.data.name || u.data.login, u.data.avatar_url, u.data.location, n)
        });
      return u && (u.id = r), u
    },
    fetchAllContacts:function () {
      N(), C(), $rootScope.developers.push(DirectoryService.getContact(_prefix + "bstrong", false, true), DirectoryService.getContact(_prefix + "kashr", false, true), DirectoryService.getContact(_prefix + "mooniac", false, true), DirectoryService.getContact(_prefix + "thughes", false, true))
    },
    doSearch:function (n) {
      function i(n) {
        $rootScope.canSearch = g = true, n && (d === p ? DirectoryService.addSearchContacts(n.data.users, p) : p && p.length !== 0 && !/^\s*$/.test(str) && setTimeout(angular.bind(this, this.doSearch(p), 0)))
      }

      if (!c || !l) return undefined;
      p = n;
      if (!g) return;
      d = p;
      try {
        if (!p || 0 === p.length || /^\s*$/.test(p)) return;
        return $rootScope.canSearch = g = false, DirectoryService.releaseSearchResults(), x(Search, {
          keyword:p
        }, i)
      } catch (s) {
        $log.warn("Exception in search " + s), $rootScope.canSearch = g = true
      }
    },
    canSearch:function () {
      return g
    },
    supportsSearch:function () {
      return y
    }
  };

  DirectoryService.addProvider(_provider);

}]);

/*
 * OpensocialProvider
 */

angular.module("vline.ui.OpensocialProvider", ["ngResource"])
  .constant("config.appId", vlineAppConf.appId)
  .constant("config.authId", vlineAppConf.authId)
  .run(["vline.ui.DirectoryService", "$rootScope", "$vline", "$log", "$resource", "config.authId", function (DirectoryService, $rootScope, $vline, $log, $resource, authId) {

  function g(e, t) {
    return $resource(c + e, {
      access_token:a,
      callback:"JSON_CALLBACK"
    }, {
      get:{
        method:"JSONP",
        isArray:t
      }
    })
  }

  function y(n, i, s, o) {
    function u() {
      --h === 0 && !l && (l = true, DirectoryService.providerLoaded(_provider))
    }

    if (!f) return undefined;
    h++;
    var a = n.get(i, function () {
      o(a), u()
    }, function () {
      $log.warn("Error fetching " + a), $rootScope.$emit("accountService.fetchError", a), a.id && DirectoryService.removeContact(a.id), u()
    });
    return a
  }

  function b(t, n) {
    var r = y(t, n, true, function () {
      angular.forEach(r, function (t) {
        DirectoryService.addContact(_provider, _prefix + t.id, t.displayName || t.id, t.thumbnailUrl, t.location, null)
      })
    });
    return r
  }

  var o
    , u
    , a
    , f
    , l
    , c = "http://localhost:3000:3000/_vline/api/v1/"
    , h = 0
    , d = false
    , _domain = "bloc"
    , _prefix = "bloc:"
    ;//-----

  var _provider = {
    getDomain:function () {
      return _domain
    },
    getUserPrefix:function () {
      return _prefix
    },
    login:function () {
      return $vline.login(authId)
    },
    logout:function () {
      l = false
    },
    init:function (e, t, n) {
      f = e, a = t, n && (c = n);
      var r = e.indexOf(":");
      r > 0 && (_prefix = e.substr(0, r + 1), _domain = e.substr(0, r)), o = g("people/:userId/@self"), u = g("people/:userId/@all", true)
    },
    fetchContact:function (t, n) {
      var r = t.id,
        i = r.indexOf(":"),
        s = i > 0 ? r.substr(i + 1) : r,
        u = y(o, {
          userId:s
        }, false, function () {
          DirectoryService.addContact(_provider, r, u.displayName || u.id, u.thumbnailUrl, u.location, n)
        });
      return u.id = r, u
    },
    fetchAllContacts:function () {
      $rootScope.following = b(u, {
        userId:1
      })
    },
    doSearch:function (e) {
    },
    canSearch:function () {
      return false
    },
    supportsSearch:function () {
      return d
    }
  };

  DirectoryService.addProvider(_provider);

}]);

