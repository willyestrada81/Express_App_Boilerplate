var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

//IMPORT MODELS ****EXAMPLES BELOW *****
// const User = require("./models/users");
// const Comments = require("./models/comments");
// const Blog = require("./models/posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  
      res.render("index", { title: "👏👏👏 You're Are Good To go. Server is running and watching" });

});

module.exports = router;
