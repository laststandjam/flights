var express = require("express");
var router = express.Router();
const destinationsCtrl = require("../controllers/destinations");

router.get("/", (req, res) => {
    res.redirect("/flights");
  });
  router.post("/flights/:id/destinations", destinationsCtrl.create);

  module.exports = router