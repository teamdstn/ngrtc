'use strict';

// DateFilter
angular.module("vline.ui.DateFilter", [])
  .filter("dateFilter", ["$filter", function ($filter) {
  var _aDay     = 864e5
    , _aMin     = 6e4
    , _date     = new Date
    , _timezone = _date.getTimezoneOffset() * _aMin
    , _time     = _date.getTime()
    , o = _time - (_time - _timezone) % _aDay
    ;//------

  return function (t) {
    var n;
    return t < o ? n = "short" : n = "shortTime", $filter("date")(t, n)
  }
}]);


