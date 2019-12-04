const userQueries = require("../db/queries.users");


module.exports = {
  index(req, res, next){
    userQueries.getAllUsers((err, users) => {
      if(err) {
        res.redirect(404, "/");
      } else {
        res.render("static/index", {users});
      }
    })
  },

  //  index(req, res, next){
  //    res.render("static/index", {title: "Welcome to Project"});
  //  }
 }