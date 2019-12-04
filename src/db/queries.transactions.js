const Transaction = require("./models").Transaction;

module.exports = {
   createRecord(newRecord,callback) {
      return Transaction.create({
         senderId: newRecord.senderId,
         receiverId: newRecord.receiverId,
         db_amt_sent: newRecord.db_amt_sent
      })
      .then((record) => {
         callback(null, record);
      })
      .catch((err) => {
         callback(err);
      })
   }
}