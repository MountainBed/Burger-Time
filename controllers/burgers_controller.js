var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var handlebarsObject = {
      burger: data
    };
    res.render("index", handlebarsObject);
  });
});

router.post("/", function (req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function () {
    res.redirect("/");
  });
});

router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: true
  }, condition, function () {
    res.end();
  });
});

module.exports = router;
