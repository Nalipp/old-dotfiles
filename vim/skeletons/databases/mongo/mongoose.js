var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users_play");

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

var User = mongoose.model("User", userSchema);

User.create({ firstName: 'bill', lastName: 'grey', email: 'bill@grey.com'}, 
  function(err, result) {
  if (err) return console.log(err);
  console.log(result); 
});

User.find({ firstName: 'bill'}, 
  function (err, user) {
  if (err) return console.error(err);
  console.log(user);
});
