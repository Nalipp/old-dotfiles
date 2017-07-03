var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/associations-practice");

// ****************************************************************************************************
// object reference example

// var postSchema = new mongoose.Schema({
//   title: String,
//   content: String
// });

// var Post = mongoose.model("Post", postSchema);

// var userSchema = new mongoose.Schema({
//   email: String,
//   name: String,
//   posts: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Post'
//     }
//   ]
// });

// var User = mongoose.model("User", userSchema);

// User.findOne({email: 'bob@gmail.com'})
//   .populate('posts')
//     .exec( (err, user) => { 
//       if (err) return console.log(err);
//       console.log(user);
//     });

// Post.create({
//   title: 'going camping!',
//   content: 'This year I want to go camping in oregon!'
// }, function(err, post) {
//   User.findOne({email: 'bob@gmail.com'}, function(err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save( (err, user) => {
//         if (err) return console.log(err);
//         console.log(user); 
//       });
//     }
//   })
// })

// User.findOne({email: 'bob@gmail.com'}, (err, user) => {
//   if (err) return console.log(err);
//   console.log(user); 
//   Post.find({_id: user.posts}, (err, post) => {
//     if (err) return console.log(err);
//     console.log(post); 
//   });
// });


// User.create({
//   email: 'bob@gmail.com',
//   name: 'bob belcher'
// });
  


// ****************************************************************************************************
// embeded reference example

// var postSchema = new mongoose.Schema({
//   title: String,
//   content: String
// });

// var userSchema = new mongoose.Schema({
//   email: String,
//   name: String,
//   posts: [postSchema]
// });

// var User = mongoose.model("User", userSchema);
// var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//   email: 'charlie@brown.com',
//   name: 'charlie'
// });

// newUser.posts.push({title: 'title1', content: 'this is the first post'});
// newUser.posts.push({title: 'title2', content: 'this is the second post'});
// newUser.posts.push({title: 'title3', content: 'this is the third post'});

// newUser.save( (err, user) => {
//   if (err) return console.log(err);
//   console.log(user); 
// });

// newPost = new Post({
//   title: 'Post title',
//   content: 'This is a post'
// });

// newPost.save( (err, post) => {
//   if (err) return console.log(err);
//   console.log(post); 
// });

