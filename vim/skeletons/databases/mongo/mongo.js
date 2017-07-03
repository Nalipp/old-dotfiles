// ********************************************************************************
// **********                   mongodb and express                      **********
// ********************************************************************************

// *mongodb
// *express
//   *examples

// *mongoose


// ********************************************************************************
// *mongodb

  // help or tab twice for options

  // create a new project in project folder
  npm init  or  npm init -y
  npm install --save
  npm install --save mongodb

  localhost:27017/local
  localhost:27017/test
  localhost:27017/<db name>

  // Run Mongo Daemon
    mongod

  // access mongodb
    mongo
    show dbs

  // change/create db
    use <db name>

  // collections             (collection(instead of table) is like an array of elements)
    show collections  // collection will not show up if it is empty
    db.<collection name>

    db.students.insert(<JSON data>)    // create a collection and insert
    db.students.find()
    db.students.find().pretty()
    db.students.find({"name": /S/})                                 regex expression
    db.students.find({"score": {$gt: 50}})                          uses query opperator $gt => greater than
    db.students.find({"score": {$gt: 50}, "name": /Lipp$/})         use multiple queries
    db.students.find({$or: [{"name": /^Ben/}, {"name": /^Nate/}]})  or queries
    db.students.find().sort({"score": 1})                           sort
    db.students.find().sort({"score": -1})                          sort-

    db.students.find({}, {"name": 1})                               shows only name

    // update
    db.students.update({"name": "Ben Sadick"}, {$set: {"score" : 80}})
    db.students.update({_id: new ObjectID(id)}, {$set: {"status" : newStatus}})

    // push to array
    db.tasks.update({"title":"one"}, {$push: {"timeSubmission":{"timeStamp":"hi", "totalMilliseconds":5000}}})

    // delete
    db.students.remove({"name": /Lipp$/})

    // drop db
      use <db name>
      db.dropDatabase();

    // drop collection
    db.students.drop()

    // indexes are used for making faster queries, but each field must be unique
    db.users.getIndexes()
    db.users.createIndex( {"email":1}, {unique: true} )

    // set "<property value>" from 1 to -1 for Descending order


  // concurrency means the database can process multiple requests at the same time
  //   the program doesn't assign the id number it is handled by the database

var personSchema = new Schema({
  name: { type: String, default: 'anonymous' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-zA-Z ]/ },
  date: { type: Date, default: Date.now },
});


// ********************************************************************************
// *mongoose

  // schema examples

    // models/message.js 

      var mongoose = require('mongoose');
      var Schema = mongoose.Schema

      var schema = new Schema({
        content: {type: String, required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User'}   // references the Message model below
      })

      module.exports = mongoose.model('Message', schema);


  // validation with mongoose example
     npm install mongoose --save mongoose-unique-validator

    // models/message.js 

      var mongoose = require('mongoose');
      var Schema = mongoose.Schema;
      var uniqueValidator = require('mongoose-unique-validator');

      var schema = new Schema({
        firstName {type: String, required: true},
        lastName {type: String, required: true},
        password {type: String, required: true},
        email {type: String, required: true, unique: true},   // for unique to actually work you have to install the uniquevalidator and plugin
        message: [{type: Schema.Types.ObjectId, ref: 'Message'}]  // references the User model above
      })

      schema.plugin(uniqueValidator);

      module.exports = mongoose.model('User', schema);

