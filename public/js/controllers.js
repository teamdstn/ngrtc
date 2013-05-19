'use strict';

/* ===================================
 controllers.js
 =================================== */

// AppCtrl
function AppCtrl($scope, $rootScope, $element, $routeParams, $log, $timeout, $window, $location, $vline, $vlineui, DirectoryService, NotificationService, UpdateService, AnalyticsService) {

  function declineCall(e) {
    var n = $rootScope.outstandingNotificationMap[e];
    if (n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.close();
      }
      n = [];
    }
  };

  function startHdVideoCall(n) {
    if ($scope.callButtonedDisabled) return;
    AnalyticsService.track(AnalyticsService.CALL_CATEGORY, AnalyticsService.CALL_ACTION_OUTBOUND);
    var r = $rootScope.getSelectedChannel();
    r && (r.getId() === $rootScope.owner.getId() && (n || (n = {}), n.loopback = true), r.startMedia(n), n && n.loopback && $rootScope.muteCall(), $rootScope.selectUserId(r.getId()))
  };

  function acceptHdVideoCall(e, n) {
    AnalyticsService.track(AnalyticsService.CALL_CATEGORY, AnalyticsService.CALL_ACTION_INBOUND);
    var _channelId = e.getChannel().getId();
    declineCall(_channelId), $rootScope.selectUserId(_channelId), e.start(n)
  };

  function setFocus() {
    $("#vl-primary-text").focus()
  };

  function w(e, n, r, i) {
    var o = NotificationService.notify(e.getThumbnailUrl(), n, r, i);
    return o && (o.onclick = function () {
      $timeout(function () {
        $rootScope.select(e), o.close()
      }, 0, true)
    }), o
  };

  function E(e, n) {
    n && e && ($rootScope.outstandingNotificationMap[e.getId()] ? $rootScope.outstandingNotificationMap[e.getId()].push(n) : $rootScope.outstandingNotificationMap[e.getId()] = [n])
  };


  function x(e) {
    var _channel = $rootScope.getSelectedChannel();
    _channel && _channel.setActive(e), e && $rootScope.refreshUI()
  };

  function k(e) {
    $location.path(b + e), AnalyticsService.trackPageView(e)
  };

  function L() {
    return $location.path().substr(b.length - 1)
  };

  function A(e) {
    e.target === $rootScope.session && ($rootScope.session = null)
  };

  function O(e) {
    var n = e.target.getChannel(),
      r = e.target,
      i = DirectoryService.getContact(n.getId(), true, true);
    if ((!$rootScope.isSelected(i) || !$rootScope.focused) && r.isIncoming()) {
      var s = w(i, "Incoming Call", i.getDisplayName() + " is calling...", -1);
      s && E(i, s)
    }
    r.on("exitState:incoming", function () {
      declineCall(n.getId())
    }), $rootScope.select(i)
  };

  function M(e) {
    var t = e.target.getChannel();
    declineCall(t.getId())
  };

  function _(e) {
    P(e.target, false)
  };

  function D(e) {
    P(e.message, true)
  };

  function P(n, r) {
    var i = DirectoryService.getContact(n.getChannelId(), true, true)
      , s = $rootScope.isSelected(i)
      ;//-----
    s && $rootScope.scrollToBottom(), NotificationService.notifyOn(), r && n.getSenderId() !== $rootScope.owner.getId() && (!s || !$scope.focused) && w(i, i.getDisplayName(), n.getBody(false, true))
  };

  function getContact(e) {
    var t = e.target;
    DirectoryService.getContact(t.getId(), true, true)
  };

  function locSearch(e) {
    var t = $location.search();
    t.authToken && $location.search("authToken", null)
  };

  var d = false
    , v = false
    , m = 1500
    , g = true
    , y = window.location.pathname
    , b = y.substr(0, y.lastIndexOf("/") + 1)
    ;//--------

  $rootScope.$vline = $vline;
  $rootScope.predicate = ["-getPresenceState()", "getDisplayName()"];
  $rootScope.peopleQuery = "";
  $rootScope.numActiveVideos = 0;
  $rootScope.outstandingNotificationMap = {};
  $rootScope.loggingIn = false;
  $rootScope.contacts = [];
  $rootScope.developers = [];
  $rootScope.searchContacts = [];
  $rootScope.recentContacts = [];
  $rootScope.groups = [];
  $rootScope.canSearch = true;
  $rootScope.focused = true;

  $scope.callButtonedDisabled = false;

  vlineAppConf.logoImg || $vlineui.createTextLogo(vlineAppConf.title, "vl-login-logo");

  $rootScope.showNotSupported = function () {
    return !vline.Browser.supportsChat() && !vline.Browser.isChrome();

  };
  $rootScope.showUpgrade = function () {
    return vline.Browser.isChrome() && !vline.Browser.isVersion(23)
  };
  $rootScope.upgradeChrome = function () {
    //o.open("https://vline.uservoice.com/knowledgebase/articles/142491", "_blank");
    $window.open("https://support.google.com/chrome/answer/95414?hl=en", "_blank");
  };

  $rootScope.supportsWebRtc = function () {
    return vline.Browser.supportsWebRtc()
  };
  $rootScope.supportsHd = function () {
    return vline.Browser.supportsHd()
  };
  $rootScope.login = function () {
    console.log("login");

    $rootScope.loggingIn = true, DirectoryService.login().always(function () {
      $rootScope.loggingIn = false;
      $rootScope.refreshUI()
    }), AnalyticsService.track(AnalyticsService.LOGIN_CATEGORY, AnalyticsService.LOGIN_BUTTON_CLICK)
  };
  $rootScope.logout = function () {
    console.log("logout");

    $rootScope.select("/");
    $vline.logout();
  };
  $rootScope.connect = function () {
    console.log("connect");
    $vline.connect()
  };
  $rootScope.disconnect = function () {
    console.log("disconnect");
    $vline.disconnect()
  };
  $rootScope.startAudioCall = function () {
    console.log("startAudioCall");
    startHdVideoCall({
      audio:true
    })
  };
  $rootScope.startVideoCall = function () {
    console.log("startVideoCall");
    startHdVideoCall()
  };
  $rootScope.startHdVideoCall = function () {
    console.log("startHdVideoCall");
    startHdVideoCall({
      audio:true, video:true, hd:true
    })
  };
  $rootScope.acceptAudioCall = function (e) {
    console.log("accept : acceptAudioCall");
    acceptHdVideoCall(e, {
      audio:true
    })
  };
  $rootScope.acceptVideoCall = function (e) {
    console.log("accept : acceptVideoCall");
    acceptHdVideoCall(e)
  };
  $rootScope.acceptHdVideoCall = function (e) {
    console.log("accept : acceptHdVideoCall");
    acceptHdVideoCall(e, {
      audio:true, video:true, hd:!true
    })
  };

  $rootScope.declineCall = function (e) {
    console.log("declineCall");
    declineCall(e.getChannel().getId()), e.stop()
  };

  $rootScope.endCall = function () {
    console.log("endCall");
    $scope.callButtonedDisabled = true, setTimeout(function () {
      $scope.callButtonedDisabled = false
    }, m);
    var _sess = $rootScope.getSelectedMediaSession();
    _sess && _sess.stop()
  };
  $rootScope.muteCall = function () {
    console.log("muteCall");
    var _sess = $rootScope.getSelectedMediaSession();
    _sess && _sess.setAudioMuted(true)
  };

  $rootScope.unmuteCall = function () {
    console.log("unmuteCall");
    var _sess = $rootScope.getSelectedMediaSession();
    _sess && _sess.setAudioMuted(false)
  };
  $rootScope.isMuted = function () {
    var _sess = $rootScope.getSelectedMediaSession();
    return _sess ? _sess.isAudioMuted() : false
  };

  $rootScope.notifyOn = function () {
    NotificationService.notifyOn()
  };

  $rootScope.scrollToBottom = function () {
    setTimeout(function () {
      var _elem = $(".vl-content-body");
      _elem.prop({ scrollTop:_elem.prop("scrollHeight")});
    }, 0)
  };

  $rootScope.select = function (e) {
    if (e === "/" || e === "!search") {
      var n = $rootScope.selectedUser;
      n && n.channel && n.channel.setActive(false), $rootScope.selectedUser = null, k(e);
      return
    }
    return e === $rootScope.selectedUser ? e : (e.getId() === $rootScope.owner.getId() ? k("testcall") : $routeParams.userName !== e.getUserName() && k(e.getUserName()), e.channel && e.channel.setActive(true), $rootScope.selectedUser && $rootScope.selectedUser.channel && $rootScope.selectedUser.channel.setActive(false), $rootScope.selectedUser = e)
  };

  $rootScope.selectUserId = function (e) {
    console.log("selectUserId", e);
    return $rootScope.select(DirectoryService.getContact(e, true, true))
  };

  $rootScope.refreshUI = function () {
    !d && !this.$$phase && (d = true, $timeout(function () {d = false, $rootScope.setTitle()}, 0))
  };

  $rootScope.setTitle = function () {
    if (typeof $vline.getUnreadCount == "function") {
      var e = $vline.getUnreadCount();
      e && e > 0 ? document.title = " (" + e + ")" + " " + vlineAppConf.title : document.title = vlineAppConf.title
    }
  };
  $rootScope.getMediaState = function () {
    var e = $;
    return !$rootScope.selectedUser || !$rootScope.selectedUser.channel ? vline.MediaStates.INACTIVE : $rootScope.selectedUser.channel.getMediaState()
  };
  $rootScope.getViewLabel = function () {
    return ""
  };
  $rootScope.isSelected = function (e) {
    if (!$rootScope.selectedUser || !e) return false;
    var n;
    return typeof e == "string" ? n = e : n = e.getId(), $rootScope.selectedUser.getId() === n
  };
  $rootScope.isLocation = function (e) {
    return L() === e
  };
  $rootScope.supportsSearch = function () {
    return DirectoryService.supportsSearch()
  };
  $rootScope.getCalls = function () {
    var e = [],
      t = $vline.getMediaSessions();
    for (var n = 0; n < t.length; ++n) e.push(DirectoryService.getContact(t[n].getChannel().getId(), true, true));
    return e
  };
  $rootScope.getSelectedChannel = function () {
    return $rootScope.selectedUser && $rootScope.selectedUser.channel
  };
  $rootScope.getSelectedMediaSession = function () {
    var e = $rootScope.getSelectedChannel();
    return e && e.getMediaSession()
  };
  $rootScope.isTestCallUser = function (e) {
    return e && e.id === $rootScope.owner.id
  };
  $rootScope.getDisplayNameFromMediaSession = function (e) {
    var t = e.getChannel();
    return t ? DirectoryService.getContact(t.getId()).getDisplayName() : ""
  };
  $rootScope.getThumbnailUrlFromMediaSession = function (e) {
    var t = e.getChannel();
    return t ? DirectoryService.getContact(t.getId()).getThumbnailUrl() : ""
  };
  $rootScope.selectedUserHasVideo = function () {
    var e = $rootScope.getSelectedMediaSession();
    return !!e && !!e.hasVideo()
  };
  $rootScope.hasActiveMediaSession = function () {
    var e = $vline.getActiveMediaSession();
    return e && e.getMediaState() === vline.MediaStates.ACTIVE
  };
  $rootScope.selectedUserHasActiveMediaSession = function () {
    var e = $rootScope.getSelectedMediaSession();
    return e && e.getMediaState() === vline.MediaStates.ACTIVE
  };
  $rootScope.selectedUserHasVisibleVideoPanel = function () {
    var e = $rootScope.getSelectedMediaSession();
    return !!e && !!e.isVideoPanelVisible()
  };
  $rootScope.unselectedUserHasVideo = function () {
    var e = $vline.getActiveMediaSession();
    return e && e.hasVideo() && (!$rootScope.selectedUser || e.getChannel() !== $rootScope.selectedUser.channel)
  };
  $rootScope.showApp = function () {
    return $vline.isLoggedIn()
  };
  $rootScope.showLogin = function () {
    return !$vline.isLoggedIn() && !$rootScope.loggingIn
  };
  $rootScope.showHome = function () {
    return vlineAppConf.showHome
  };
  $rootScope.showFeedbackButton = function () {
    return vlineAppConf.showFeedbackBtn
  };
  $rootScope.showLogoutButton = function () {
    return vlineAppConf.showLogoutBtn
  };
  $rootScope.showSidebar = function () {
    return g
  };
  $rootScope.toggleSidebar = function () {
    g = !g
  };

  $rootScope.toggleFullscreen = function () {
    console.log("emit", "toggleFullscreen");
    $rootScope.$emit("toggleFullscreen");
  };

  //showSpinner
  $rootScope.showSpinner = function () {
    console.log("showSpinner");

    var e = !$rootScope.showLogin() && !$rootScope.showApp();
    return e && !$rootScope.spinner ? $rootScope.spinner = (new Spinner({
      className:"vl-spinner",
      color:"#666",
      zIndex:9e3
    })).spin($("#vl-login-spinner")[0]) : !e && $rootScope.spinner && ($rootScope.spinner.stop(), delete $rootScope.spinner), e
  };

  $rootScope.showSearchSponner = function () {
    var e = !$rootScope.canSearch;
    return e && !$rootScope.spinner ? $rootScope.spinner = (new Spinner({
      className:"vl-spinner",
      color:"#666"
    })).spin($("#vl-people-search-spinner")[0]) : !e && $rootScope.spinner && ($rootScope.spinner.stop(), delete $rootScope.spinner), e
  };

  $rootScope.isNotificationOn = function () {
    return NotificationService.isNotificationRequested()
  };

  $rootScope.feedback = function () {
    UserVoice.showPopupWidget()
  };

  $rootScope.addSession = function (e) {
    $rootScope.session || ($rootScope.loggingIn = false, $rootScope.session = e, $rootScope.$emit("sessionReady"));
  };

  $rootScope.$on("notificationService.toggle", function (e) {
    $rootScope.refreshUI()
  });

  $rootScope.$on("contact:removed", function (e, n) {
    $rootScope.isSelected(n) && $rootScope.select("/")
  });


  //Toouch
  var j;
  $($window).focus(function () {
    $rootScope.focused = true, x(true)
  }).blur(function () {
      $rootScope.focused = false;
      var e = $rootScope.getSelectedChannel();
      x(false)
    }).resize(function () {
      $rootScope.$broadcast("resize")
    }).on("transitionend webkitTransitionEnd",function () {

    }).on("touchstart",function (e) {
      j || $("body").removeClass("no-touch"), j = e
    }).on("touchmove", function (e) {
      var t = $(e.target).closest(".vl-scroll");
      (t.length === 0 || e.originalEvent.pageY > j.originalEvent.pageY && t.prop("scrollTop") == 0 || e.originalEvent.pageY < j.originalEvent.pageY && t.prop("scrollTop") + t.prop("offsetHeight") >= t.prop("scrollHeight")) && e.preventDefault()
    }), $vline.on("recv add remove change addItem removeItem", $rootScope.refreshUI, $rootScope).on("change:unreadCount", getContact).on("change:totalUnreadCount", $rootScope.setTitle).on("remove:session", A).on("add:mediaSession", O).on("remove:mediaSession", M).on("recv:im", D).on("add:im", _).on("ready:credentials", locSearch)
}
AppCtrl.$inject = ["$scope", "$rootScope", "$element", "$routeParams", "$log", "$timeout", "$window", "$location", "$vline", "$vlineui", "vline.ui.DirectoryService", "vline.ui.NotificationService", "vline.ui.UpdateService", "vline.ui.AnalyticsService"];


function VideoPanelCtrl($scope, $rootScope, $element, $vline, DirectoryService) {
  function v() {
    $scope.videoCount = 0, s = o = 0, a = $('<div class="vl-video-frame vl-background" style="position:absolute;top:0;bottom:0;left:0;right:0"></div>'), $element.append(a).on("dblclick", A), $(document).on("webkitfullscreenchange mozfullscreenchange", g)
  };

  function m() {
    if (!chan) return;
    $element.unbind("dblclick"), $element.empty()
  };

  function g() {
    var e = a.width(),
      t = a.height();
    (e !== s || t !== o) && L(false)
  };

  function y(r) {
    var i = r.stream;
    u--;
    var s = $("#" + i.getId(), $element),
      o = $("#" + i.getId() + "-video");
    s.fadeOut(f, function () {
      s.remove(), L(true)
    }), s.hasClass("vl-active") && ($scope.videoCount--, $rootScope.refreshUI())
  };

  function b(n, r) {
    function f() {
      o.addClass("vl-active " + r).css({
        display:"",
        position:"absolute"
      }), s.css({
        display:"",
        width:"100%",
        height:"100%"
      }), L(true), $scope.videoCount === 0 ? window.setTimeout(function () {
        N(o, {
          opacity:1
        }, true)
      }, 300) : o.css({
        opacity:1
      }, true), $scope.videoCount++, $rootScope.refreshUI()
    }

    u++;

    var i = {
      display:"none"
    };
    if (n.isLocal() && !n.hasVideo()) return;
    var s = n.createMediaElement();
    if (!s) return;
    s = $(s), s.css(i).addClass("vl-video"), s.prop("id", n.getId() + "-video");
    var o = $('<div class="vl-video-wrapper" style="display:none;opacity:0"></div>').append(s).prop("id", n.getId());
    a.prepend(o), n.hasVideo() && (n.isStarted() ? f() : n.on("mediaStream:start", f))
  };

  function w(e, t) {
    var n;
    for (n = 0; n < e.length; ++n) b(e[n], t)
  };

  function E(e, t, n) {
    var r = $("video", e)
      , i = r.prop("videoWidth") || 640
      , s = r.prop("videoHeight") || 480
      , ratio = t * i / s
      ;//-----
    return Math.min(Math.ceil(ratio), n)
  };

  function S(e) {
    return e && e !== "" ? e + "px" : "auto"
  };

  function x(e, t) {
    var n = {};
    n.transition = n["-webkit-transition"] = n["-moz-transition"] = t, $(e).css(n)
  };

  function T(e, t) {
    e["-webkit-transform"] = e["-moz-transform"] = t
  };

  function N(e, t, n) {
    n ? x(e, "all 0.75s") : x(e, ""), $(e).css(t)
  };

  function C(e, t) {
    return "perspective(400) translateZ(-" + t + "px) rotateY(" + e + "rad)"
  };

  function k(e, t, n, r, i, s, o) {
    var u = ""
      , a = .05
      , l = Math.floor(a * n)
      , f = {
        width:S(n), height:S(r), top:S(i), left:S(s)
      }
      ;//-----
    switch (o) {
      case h:
        u = C(a, l);
        break;
      case p:
        l = Math.floor(l * 1.8), u = C(0, l);
        break;
      case d:
        u = C(-a, l)
    }
    ;

    T(f, u);
    N(e, f, t);
  };

  function L(e) {
    var t, r, i, u, f, l, v, m, g, y, b, w = 0,
      S = [],
      x, T, N = o * .05,
      C = $(".vl-local.vl-active", $element),
      L = $(".vl-remote.vl-active", $element);
    s = a.width(), o = a.height(), C.length === 1 && L.length >= 1 ? (l = Math.max(o * .2, c), l = Math.min(l, o / 2), f = E(C[0], l, s), k(C[0], e, f, l, o - N - l, s - N - f), C.addClass("vl-inset")) : (C.removeClass("vl-inset"), L.push.apply(L, C));
    if (L.length === 1) {
      k(L[0], e, s, o, 0, 0);
      return
    }
    for (t = 0; t < L.length; ++t) w += E(L[t], o, s);
    x = Math.max(Math.floor(w / s), 1), T = Math.floor(L.length / x);
    for (i = 0, t = 0; i < x; ++i) {
      i === x - 1 && (T = L.length - t), y = N * 2, v = Math.floor((s - y) / T), l = Math.floor(o / x), m = 0, S.length = 0;
      for (u = 0, r = t; u < T; ++u, ++r) f = E(L[r], l, v), m += f, S.push(f);
      b = (s - m) / 2;
      for (u = 0; u < T; ++u, ++t) L.length === 1 ? g = 0 : u === 0 && T > 1 ? g = h : u === T - 1 && T > 1 ? g = d : g = p, f = E(L[t], l, v), k(L[t], e, S[u], l, l * i, b, g), b += S[u]
    }
  }

  function A(e) {
    document.webkitIsFullScreen ? document.webkitCancelFullScreen() : a[0].webkitRequestFullScreen()
  }

  var s = 0,
    o = 0,
    u = 0,
    a, f = 750,
    l = 550,
    c = 90,
    h = 1,
    p = 2,
    d = 3
};
VideoPanelCtrl.$inject = ["$scope", "$rootScope", "$element", "$vline", "vline.ui.DirectoryService"];

// --- homeController
function HomeCtrl($scope, $rootScope, $routeParams, $location, $window, DirectoryService) {
  $rootScope.getViewLabel = function () {
    return "Home"
  }, $scope.shareLink = function () {
    return $rootScope.owner ? "https://gittogether.com/" + $rootScope.owner.getUserName() : ""
  }, $scope.hashTags = function () {
    return "&hashtags=WebRTC,GitTogether"
  }, $scope.shareText = function () {
    return "Video%20chat%20with%20me%20on%20GitTogether%20using%20my%20personalized%20link:"
  }, $scope.share = function () {
    $window.open("https://plus.google.com/share?url=" + $scope.shareLink(), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
  }, $scope.tweet = function () {
    $window.open("https://twitter.com/intent/tweet?text=" + $scope.shareText() + "&url=" + $scope.shareLink() + $scope.hashTags(), "_blank")
  }
};
HomeCtrl.$inject = ["$scope", "$rootScope", "$routeParams", "$location", "$window", "vline.ui.DirectoryService"];

// --- chatController
function ChatCtrl($scope, $rootScope, $routeParams, $vline, $vlineui, DirectoryService, NotificationService) {
  function f(n) {
    var r = n.target;
    $rootScope.getSelectedChannel() == r && (a = true, $scope.$apply(), $rootScope.scrollToBottom())
  }

  function l(n) {
    var r = n.target;
    $rootScope.getSelectedChannel() == r && (a = false, $scope.$apply())
  }

  function c() {
    if (u) return;
    var r = $rootScope.select(DirectoryService.getContactByName($routeParams.userName, true, true));
    r && (r.getMessages(), r.setActive()), $scope.scrollToBottom();
    var o, a = true;
    r.getId() === $rootScope.owner.getId() && (a = false, o = "You cannot send chat messages to this user."), u = $vlineui.createMessageInput($rootScope.session, a, o), u.setPersonId(r.id), u.render($(".vl-content-footer").empty()[0])
  }

  var u, a = false;
  $scope.send = function () {
    $rootScope.selectedUser.channel.send($scope.outText), NotificationService.notifyOn(), $scope.outText = "", $scope.scrollToBottom()
  }, $scope.isFromSelf = function (t) {
    return $scope.owner.id === t.getSenderId()
  }, $scope.msgSender = function (t) {
    return $scope.isFromSelf(t) ? $scope.owner : $scope.selectedUser
  }, $scope.showCallButtons = function () {
    var e = $rootScope.getSelectedChannel();
    return e && e.isMediaSupported() && !$vline.hasMediaSessions()
  }, $scope.showDownloadButton = function () {
    return !$rootScope.supportsWebRtc() && !vline.Browser.isMobile()
  }, $scope.isTyping = function () {
    return a
  }, $rootScope.getMessagesFromUser = function (e) {
    if ($rootScope.isTestCallUser(e)) return e.messages;
    if (e && e.messages) return e.messages.getImpl()
  }, $vline.on("typing:start", f).on("typing:end", l), $rootScope.getViewLabel = function () {
    var e = $rootScope.selectedUser;
    return "Chat" + (e ? " - " + e.getDisplayName() : "")
  }, $rootScope.session ? c() : $rootScope.$on("sessionReady", c), $scope.$on("$destroy", function () {
    u && u.dispose(), u = null
  })
};
ChatCtrl.$inject = ["$scope", "$rootScope", "$routeParams", "$vline", "$vlineui", "vline.ui.DirectoryService", "vline.ui.NotificationService"];

// --- peopleController
function PeopleCtrl($scope, $rootScope, $log, $filter, DirectoryService) {
  function o() {
    $rootScope.searchText = null, $rootScope.searchResults = false, DirectoryService.search(), $scope.search()
  }

  var s = document.getElementById("search-text-box");
  $scope.searchValue = $rootScope.searchText, s && s.focus(), $rootScope.getViewLabel = function () {
    return "People Search"
  }, $scope.filterByName = function (e) {
    function r(t) {
      if (!e.getDisplayName() && !e.getId()) return false;
      if (e.getDisplayName() && e.getDisplayName().toLowerCase().indexOf(t) != -1) return true;
      var n = null;
      if (e.getId()) {
        var r = e.getId().split(":");
        r.length > 1 && (n = r[1])
      }
      if (n && n.toLowerCase().indexOf(t) != -1) return true
    }

    if (!$rootScope.searchText) return false;
    var n = $rootScope.searchText.toLowerCase();
    return r(n)
  }, $scope.search = function () {
    $scope.filteredContacts = $filter("filter")($scope.contacts, $scope.filterByName), DirectoryService.search($rootScope.searchText)
  }, $scope.search(), $scope.onChange = function () {
    $scope.searchValue ? $rootScope.searchText = $scope.searchValue : o()
  }
};
PeopleCtrl.$inject = ["$scope", "$rootScope", "$log", "$filter", "vline.ui.DirectoryService"];