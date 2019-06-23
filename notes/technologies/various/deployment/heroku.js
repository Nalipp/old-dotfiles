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
  

**************************************************
Api keys / db access


printenv
heroku config
heroku config:set

export GOOGLE_API_KEY=AIzaSyBvwtjPflzBTky_tl2BR8DeJBI_5HkK5zg
export REACT_APP_GOOGLE_API_KEY=AIzaSyBvwtjPflzBTky_tl2BR8DeJBI_5HkK5zg
export DARKSKY_API_KEY=d4384f8041d61dc78c973fa48d3fab7d 
export REACT_APP_PIXABAY_API_KEY=11734527-97d07f5b8bac8ae2d76867589
export AMADEUS_API_KEY=LblyCN8ecmqi2fR0OcvEQf0vtNGJuYDl
export AMADEUS_API_SECRET=nMkhlMpuTAsVO4Gn

Heroku

DARKSKY_API_KEY:           d4384f8041d61dc78c973fa48d3fab7d
MONGO_URI:                 mongodb://heroku_wszz785d:dhckd2n7suvrn1lu4n2j08ut8a@ds153314.mlab.com:53314/heroku_wszz785d
PROD_MONGODB:              mongodb://heroku_wszz785d:dhckd2n7suvrn1lu4n2j08ut8a@ds153314.mlab.com:53314/heroku_wszz785d
REACT_APP_GOOGLE_API_KEY:  AIzaSyBvwtjPflzBTky_tl2BR8DeJBI_5HkK5zg
REACT_APP_PIXABAY_API_KEY: 11734527-97d07f5b8bac8ae2d76867589
AMADEUS_API_KEY:           LblyCN8ecmqi2fR0OcvEQf0vtNGJuYDl
AMADEUS_API_SECRET:        nMkhlMpuTAsVO4Gn


access mlab db
$ mongo ds153314.mlab.com:53314/heroku_wszz785d -u heroku_wszz785d -p dhckd2n7suvrn1lu4n2j08ut8a


imort csv into local database
$ mongoimport --db world-weather --collection populations --type csv --headerline --file ~/Desktop/cities_II.csv 

imort csv into heroku mlab
$ mongoimport -h ds153314.mlab.com:53314 -d world-weather -c populations -u dbuser -p dbpassword --file filename.csv --type csv --headerline 
$ mongoimport -h ds153314.mlab.com:53314 -d heroku_wszz785d -c populations -u heroku_wszz785d -p dhckd2n7suvrn1lu4n2j08ut8a --file ~/Desktop/cities_II.csv --type csv --headerline 

load process.env.DARKSKY_API_KEY when updating the city list in development (this is handled in production using $heroku config)
  DARKSKY_API_KEY=d4384f8041d61dc78c973fa48d3fab7d node index.js

