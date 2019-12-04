const User = require("./models").User;
const bcrypt = require("bcryptjs");

module.exports = {
   getAllUsers(callback) {
      return User.findAll()
         .then((users) => {
            callback(null, users);
         })
         .catch((err) => {
            console.log(err, "<<<<<<<<<<<<<<<<<");
            callback(err);
         })
   },

   createUser(newUser, callback) {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);
    return User.create({
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    })
   },

   updateSenderUserDB(req, updatedUser, callback) {
      return User.findByPk(req.user.id)
      .then((user) => { console.log(req.user.id);
         user.update(updatedUser, {
            attributes: [
               [Sequelize.literal('db_credits' - updatedUser.db_credits), 'db_credits']
            ]
         })
         .then(() => {
            callback(null, user)
         })
         .catch((err) => {
            console.log(err);
            callback(err);
         })
      });
   },
   updateReceiverUserDB(req, updatedUser, callback) {
      return User.findByPk(req.params.id)
      .then((user) => {
         user.update(updatedUser, {
            attributes: [
               [Sequelize.literal('db_credits' + updatedUser.db_credits), 'db_credits']
            ]
         })
         .then(() => {
            callback(null, user);
         })
         .catch((err) => {
            console.log(err);
            callback(err);
         })
      });
   },
}