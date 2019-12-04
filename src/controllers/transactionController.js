const auditQueries = require("../db/queries.transactions");

module.exports = {
   create(req, res, next) {
      let newRecord = {
         senderId: req.user.id,
         receiverId: req.body.receiverId,
         db_amt_sent: req.body.db_amt_sent
      };
      auditQueries.createRecord(newRecord, (err, record) => {
         if(err) {
            console.log(err);
            res.redirect("/");
         } else {
            res.redirect("/");
         }
      });
   }
}