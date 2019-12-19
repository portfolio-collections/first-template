'use strict';
// eslint-disable-next-line no-undef
const express = require('express');
const server = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5503;
// server.listen( PORT , () => {
//   console.log('listening to port ' , PORT);
// // });
// server.get('/test', (request, response) => {
//   response.send('working');
// });
server.use(express.static('public'));