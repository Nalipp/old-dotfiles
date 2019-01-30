**************************************************
heroku deploy


initial commit
  .git
  .gitignore
    .env

  // .env // (in most root folder)
  //   MONGO_URI=`mongodb://heroku_wszz785d:dhckd2n7suvrn1lu4n2j08ut8a@ds153314.mlab.com:53314/heroku_wszz785d`

  heroku config:get MONGODB_URI
  heroku config:set MONGODB_URI

  connect to shell
$ mongo ds153314.mlab.com:53314/heroku_wszz785d -u heroku_wszz785d -p dhckd2n7suvrn1lu4n2j08ut8a

  models
    if (process.env.MONGO_URI) {
      console.log('connecting to MONGO_URI..', process.env.MONGO_URI);
      mongoose.connect(process.env.MONGO_URI);
    } else {
      console.log('connecting to localhost/world-weather');
      mongoose.connect('mongodb://localhost/world-weather');
    }

  // api/index.js
  //   require('dotenv').config()
  
