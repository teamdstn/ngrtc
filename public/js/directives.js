'use strict';

/* ===================================
 diretives.js
 =================================== */

function elementVisible(elem, visb) {
  visb === undefined && (visb = elem.css("display") === "none");

  var _fx = elem.attr("vl-fx") || "none"
    , _duration = parseInt(elem.attr("vl-duration"))
    ;//-----

  isNaN(_duration) && (_duration = 500);

  switch (_fx) {
    case "fade":
      visb ? elem.fadeIn(_duration) : elem.is(":visible") ? elem.fadeOut(_duration) : elem.css("display", "none");
      break;
    case "slide":
      visb ? elem.slideDown(_duration) : elem.slideUp(_duration);
      break;
    case "bounce":
      visb ? elem.css({ display : ""}).addClass("animated bounce") : elem.fadeOut(_duration);
      break;
    default:
      elem.css("display", visb ? "" : "none")
  }
  return visb
};

//Restrict A
function directiveShow() {
  return {
    restrict:"A",
    link:function (e, t, n) {
      t.css("display", "none"), e.$watch(n.vlShow, function (e) {
        e !== undefined && elementVisible(t, e)
      })
    }
  }
};

//Restrict C
function directiveMenu() {
  return {
    restrict:"C",
    link:function (e, t, n) {
      t.css("display", "none"), n.$set("vlFx", "fade"), n.$set("vlDuration", "150"), n.$set("vlShow", "0")
    }
  }
};

//Restrict A
function directiveMenuToggle() {
  return {
    restrict:"A",
    link:function (e, t, n) {
      function i() {
        elementVisible(r, false), $(window).unbind("click.vlMenu")
      }

      var r = $(n.vlMenuToggle);
      t.bind("click", function () {
        elementVisible(r) && setTimeout(function () { $(window).bind("click.vlMenu", i)}, 0)
      })
    }
  }
};

//Restrict AE
function directiveVidelPanel() {
  return {
    restrict:"AE",
    controller:VideoPanelCtrl,
    scope:{ channel:"=", videoCount:"=" }
  }
};

