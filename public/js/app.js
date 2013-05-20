'use strict';

/* ===================================
 app.js
 =================================== */
var app = angular.module("vline.ui.app", ["vline.ui.DirectoryService", "vline.ui.NotificationService", "vline.ui.UpdateService", "vline.ui.AnalyticsService", "vline.ui.DateFilter", "ngSanitize"])
  // Constants
  .constant("config.answerTimeout", 30000)
  .constant("config.ringTone", ["sounds/phone_ring.mp3", "sounds/phone_ring.ogg"])
  .constant("config.messageSound", ["sounds/ding.mp3", "sounds/ding.ogg"])
  // Directives
  .directive("vlShow", directiveShow)
  .directive("vlMenu", directiveMenu)
  .directive("vlMenuToggle", directiveMenuToggle)
  .directive("vlVideoPanel", directiveVidelPanel)
  // Config
  .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  var _s = window.location.pathname
    , _path = _s.substr(0, _s.lastIndexOf("/") + 1)
    ;//-----

  $routeProvider
    //When(s)
    .when(_path, { templateUrl:"partials/home.html", controller:HomeCtrl })
    .when(_path + ":userName", { templateUrl:"partials/chat.html", controller:ChatCtrl })
    .when(_path + "!search?:query", { templateUrl:"partials/people.html", controller:PeopleCtrl, reloadOnSearch:false })
    //Otherwise for Rediect
    .otherwise({ redirectTo:"/" });

  $locationProvider
    .html5Mode(true)
    .hashPrefix("!");
}])
  // Factories
  .factory("$vline", ["config.appId", "config.answerTimeout", "config.ringTone", "config.messageSound", function ($vline, answerTimeout, ringTone, messageSound) {
  var _client = vline.client.create({ appId:$vline, ui:true, videoPanelElem:"vline-video-panel" });
  return vline.Browser.supportsChat() && _client.connect(), _client.setAnswerTimeout(answerTimeout), _client.setRingtone(ringTone), _client.setIncomingMessageSound(messageSound), _client
}])
  .factory("$vlineui", ["$vline", function ($vline) {
  return $vline.getUiModule()
}]);
