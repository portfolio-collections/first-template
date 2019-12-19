'use strict';
// eslint-disable-next-line no-undef
const express = require('express');
const server = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5500;
// server.listen( PORT , () => {
//   console.log('listening to port ' , PORT);
// // });
server.get('/test', (request, response) => {
  response.send('working');
});
server.listen(PORT,() => {
  // eslint-disable-next-line no-console
  console.log('listen');
});

server.use(express.static('/public'));