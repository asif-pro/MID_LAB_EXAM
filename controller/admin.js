var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  if (req.session.username != null) {
    res.render("admin");
  } else {
    res.redirect("/login");
  }
});


router.post("/AddEmployee", function(req, res){
	res.render('AddEmployee');
});

module.exports = router;
