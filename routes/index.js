exports.index = function(req, res, next){
  var appConf = {
    appId: "teamdstn",
    authId: "teamdstn",
    title: "teamdstn",
    bgImg: "images/bg/mosaic_blk.png",
    logoImg: "",
    //logoImg: "images/logo.svg",
    desc: "teamdstn",
    hideVlineBrand: String("false").toLowerCase() === "true",
    favicon: "images/favicon16.png",
    loginBtnTxt: "Login",
    showHome: String("false").toLowerCase() === "true",
    showFeedbackBtn: String("false").toLowerCase() === "true",
    showLogoutBtn: String("true").toLowerCase() === "true"
  };

  res.render('index', {appConf : appConf});
};


exports.partial = function (req, res, next) {
  var name = req.params.name;
  console.log("name : " + name);

  res.render('partials/' + name);
};
