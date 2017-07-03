var mongoose = require("mongoose");

// mongoose.Promise = global.Promise

// npm remove mongoose
// npm install mongoose@4.10.8 --save

mongoose.connect("mongodb://localhost/users-practice");

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

var User = mongoose.model("User", userSchema);


User.find({}, (err, blogs) => {
  if (err) {
    console.log(err); 
    res.redirect('/');
  } else {
    res.render('blogs', {blogs: blogs});
  }
})


User.create(req.body.user, (err, newBlog) => {
  if (err) {
    console.log(err);
    res.redirect('/blogs/new');
  } else {
    res.redirect('/blogs');
  }
});


User.findById(req.params.id, (err, user) => {
  if (err) {
    console.log(err); 
    res.redirect('/blogs');
  } else {
    res.render('user', {user: user});
  }
});


User.findByIdAndUpdate(req.params.id, req.body.user, (err, result) => {
  if (err) {
    console.log(err); 
    res.redirect('/blogs');
  } else {
    res.redirect('/blogs/' + req.params.id);
  }
});


User.findByIdAndRemove(req.params.id, (err, result) => {
  if (err) {
    console.log(err); 
    res.redirect('/blogs');
  } else {
    res.redirect('/blogs');
  }
});
