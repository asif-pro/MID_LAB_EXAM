var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  if (req.session.username != null) {
    res.render("employee");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
