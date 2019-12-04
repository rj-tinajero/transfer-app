const userQueries = require("../db/queries.users");
// const transactionQueries = require("../db/queries.transactions");
const passport = require("passport");

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

   signUp(req, res, next){
     res.render("users/sign_up");
   },

   create(req, res, next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation
    };
    userQueries.createUser(newUser, (err, user) => {
      if(err) {
        res.redirect("/users/sign_up");
      } else {
        passport.authenticate("local")(req, res, () => {
          req.flash("notice", "You've successfully signed in!");
          res.redirect("/");
        });
      }
    })
   },

   signIn(req, res, next) {
    passport.authenticate("local")(req, res, function () {
      if(!req.user){
        req.flash("notice", "Sign in failed. Please try again.")
        res.redirect("/");
      } else {
        req.flash("notice", "You've successfully signed in!");
        res.redirect("/");
      }
    })
   },
   logOut(req, res, next) {
     req.logout();
     req.flash("notice", "You've successfully signed out!");
     res.redirect("/");
   },
   updateSender(req, res, next) {
     userQueries.updateSenderUserDB(req, req.body, (err, user) => {
       if(err || user == null) {
         console.log(err);
        res.redirect(404, "/");
       } else {
         res.redirect("/")
       }
     })
   },
   updateReceiver(req, res, next) {
    userQueries.updateReceiverUserDB(req, req.body, (err, user) => {
      if(err || user == null) {
        console.log(err);
       res.redirect(404, "/");
      } else {
        res.redirect("/")
      }
    })
   },
 }