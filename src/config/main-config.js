require("dotenv").config();
const path = require('path');
const viewsFolder = path.join(__dirname, "..", "views");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require('express-flash');
const passportConfig = require("./passport-config");
const logger = require('morgan');
const firebase = require('firebase/app');
const firestore = require('firebase/firestore');

   // TODO: Replace the following with your app's Firebase project configuration
   const firebaseConfig = {
    apiKey: "AIzaSyDRc-_OXRz1ayTGTE7SQmw6iZzemRZoD7c",
    authDomain: "project-911f0.firebaseapp.com",
    databaseURL: "https://project-911f0.firebaseio.com",
    projectId: "project-911f0",
    storageBucket: "project-911f0.appspot.com",
    messagingSenderId: "998108760342",
    appId: "1:998108760342:web:01ac841766616ea7c2a837",
    measurementId: "G-WQX1JQKJ9D"
  };

module.exports = {
  init(app, express){
   app.set("views", viewsFolder);
   app.set("view engine", "ejs");
   app.use(express.static(path.join(__dirname, "..", "assets")));
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(session({
     secret: process.env.secret,
     resave: false,
     saveUninitialized: false,
     cookie: { maxAge: 1.21e+9 }
   }));
   app.use(flash());
   passportConfig.init(app);
   app.use((req, res, next) => {
     res.locals.currentUser = req.user;
     next();
   });
   app.use(logger('dev'));


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  }
};
