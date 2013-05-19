'use strict';

/* ===================================
 filters.js
 - DateFilter
 =================================== */

// DateFilter
angular.module("vline.ui.DateFilter", [])
  .filter("dateFilter", ["$filter", function ($filter) {
    var t = 864e5
      , n = 6e4
      , r = new Date
      , i = r.getTimezoneOffset() * n
      , s = r.getTime()
      , o = s - (s - i) % t
      ;//------

    return function (t) {
      var n;
      return t < o ? n = "short" : n = "shortTime", $filter("date")(t, n)
    }
  }]);


