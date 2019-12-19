'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 5500;

//server.use(express.static('./public'));

server.get('/public', (request,response) => {
  //response.send('Your test worked');
  response.send(server.use(express.static('./public')));
});

// server.get('/data', (request, response) => {
//   let family = [
//     {name: "John"},
//     {name: "Cathy"},
//     {name: "Zach"},
//     {name: "Allie"}
//   ];

//   response.json(family);
// });

server.listen( PORT, () => console.log('Listening on port', PORT));