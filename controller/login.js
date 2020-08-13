var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("login");
});

router.post("/", function (req, res) {

  if (req.body.uname == "admin") {
    req.session.username = req.body.uname;
    res.redirect("/admin");
  } else if (req.body.uname == "employee") {
    req.session.username = req.body.uname;
    res.redirect("/employee");
  } else {
    res.send("invalid username/password");
  }
});

module.exports = router;
