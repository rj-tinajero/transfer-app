module.exports = {
   init(app){
     const staticRoutes = require("../routes/static");
     const userRoutes = require("../routes/users");
     const auditRoutes = require("../routes/transactions");

     app.use(staticRoutes);
     app.use(userRoutes);
     app.use(auditRoutes);
   }
 }