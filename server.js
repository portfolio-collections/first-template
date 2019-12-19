'use strict';

import express, { static } from 'express';

const server = express();

const PORT = process.env.PORT || 3000;

server.use(static('./public'));

// server.get('/test', (request,response) => {
//   response.send('Your test worked');
// });

// server.get('/data', (request, response) => {
//   let family = [
//     {name: "John"},
//     {name: "Cathy"},
//     {name: "Zach"},
//     {name: "Allie"}
//   ];

//   response.json(family);
// });

// server.listen( PORT, () => console.log('Listening on port', PORT));