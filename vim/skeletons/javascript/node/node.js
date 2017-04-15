*************************************************************
Node Js
*************************************************************

*common modules
*read write files
*basic routing and file serving (without express)
*issues we ran into with todo app

*************************************************************

// download dependencies
npm install

// start server
npm run dev

// run tests
mocha test.js


// *************************************************************
// *common modules

// import file system
  var fs = require('fs');

// nodemon (used for continuous development
  npm install -g nodemon

// listen to a server
  server.listen(3000, () => console.log('running on 3000'));

// convert a string to JSON
  JSON.parse('')

// convert JSON to a string
  JSON.stringify('')

// *************************************************************
// *read write files

// read file (asyncronously)
  fs.readFile('<file_name>', function(err, text) {
    if (err) console.log(err);
    console.log(text.toString());
  })

// write file (asyncronously)
  fs.writeFile('<file_name>', "input data", function(err) {
    if (err) console.log(err);
  });

// copy file (ascyncronously)
  fs.readFile('data.txt', function(err, data) {
    if (err) console.log(err);
    fs.writeFile('copied-data.txt', data, function(err) {
      if (err) console.log(err);
    });
  });

// copy file (ascyncronously) with modular code
 function copyFile(oldFile, newFile) {
   fs.readFile(oldFile, function doneReading(err, fileContents) {
     if (err) console.log('Problem reading file ' + err);
     writeFileData(newFile, fileContents)
   })
 }

 function writeFileData(fileName, fileContents) {
   fs.writeFile(fileName, fileContents, function doneWriting(err) {
     if (err) console.log('Problem writing file ' + err);
   })
 }

 copyFile('oldFile', 'newFile')


// write file (ascyncronously)

  try {
    fs.writeFileSync('fileName', newData);
  } catch (err) {
    if (err) console.log(err )
  }


// *************************************************************
// *basic routing and file serving (without express)


var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  if (req.url === '/') {
    serveStatic('/index.html', res);
  } else {
    serveStatic(req.url, res);
  }
});

server.listen(3000, () => console.log('running on 3000'));

function serveStatic(path, res) {
  fs.readFile('static' + path, (err, data) => {
    if (err) pageNotFound(res);
    res.end(data);
  });
}

function pageNotFound(res) {
  console.console.log("Page not found");
  res.statusCode = 404;
  res.end('Page not found');
}


// *************************************************************
// *issues we ran into with todo app
//
//
// problem
//   we had a file with an array of JSON data but when we read the file we recieved string format instead of array format
//
// solution
//   in order to read JSON files you need to parse them as JSON
//     JSON.parse(data)
//   in order to write to a JSON file you need to convert to JSON
//     JSON.stringify(data)
//
//
// problem
//   the standard javascript linter was recocgnizing '$' from jQuery as a global variable as well as others
//
// solution
//   add the following to package.json (see documentation)
//   "standard": {
//     "globals": [ "$", "describe", "it" ]
//   },
//
//
//
// problem
//   when making agax calls using jQuery we were using shorthand for $.get and $.post
//     $.get('http://localhost:3000/tasks')
//       .done(data => {
//         window.alert(data)
//
//     $.post('http://localhost:3000/tasks', <data to post>)
//       .done(data => {
//         populate()
//
//   this was fine until we needed to delete which doesnt follow the same format, the delete method must be posted out manually
//
// solution
//     $.ajax({
//       url: 'http://localhost:3000/tasks',
//       method: 'DELETE',
//       data: id
//     })
//
//
// problem
//   when trying to create a new todo, write it to the database and then display it back on the page
//   todo item apeared on the page but as [object, Object] and wrote {"type":"Buffer","data":[102,102]} to the file
//
// solution
//   when making a ajax post request the data passed was a buffer in object format and the encoding needs to be set
//   in the app.js file add req.setEncoding('utf8') before req.on('data', (newTask) => {...}
