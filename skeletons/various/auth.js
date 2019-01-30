
// ****************************************************************************************************
// jwt -> json web token

var jwt = require('jsonwebtoken');

var userId = 1;

var iat = Math.floor(Date.now() / 1000); // iat is the issue date

var process = {}
process.env = {}
process.env.JWT_KEY = 'secretkey';


var res = jwt.sign(
  { sub: userId, data: userId, iat: iat }, 
  process.env.JWT_KEY,
  {
    algorithm: "HS256",
    expiresIn: 1800 // measured in seconds from time of issue (iat) - currently 30 minutes
  }
);

console.log(res);

// ****************************************************************************************************
// bcrypt

// var bcrypt = require('bcrypt');

// var pw = 'a';
// var saltRounds = 10;

// var hashedPw = bcrypt.hashSync(pw, saltRounds)

// // '$2b$10$2IvnmL8e8aJSky/jvHFnpekJN0fKqYTr/o9C8E01hOD9PNNxnu10y'
// // '$2b$10$usoe2sVFRj89A/XXvFNRVeUqx.ag/Tn85zHX/8M4ct/UeyCIbXyou'

// var res1 = bcrypt.compareSync('a', '$2b$10$2IvnmL8e8aJSky/jvHFnpekJN0fKqYTr/o9C8E01hOD9PNNxnu10y');
// console.log(res1); 

// var res2 = bcrypt.compareSync('ab', '$2b$10$usoe2sVFRj89A/XXvFNRVeUqx.ag/Tn85zHX/8M4ct/UeyCIbXyou');
// console.log(res2); 

