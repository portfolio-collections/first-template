'use strict';
// eslint-disable-next-line no-undef
const express = require('express');
const server = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5500;
// server.listen( PORT , () => {
//   console.log('listening to port ' , PORT);
// // });
server.get('/public', (request, response) => {
  response.use(express.static('/public'));
});
server.listen(PORT,() => {
  // eslint-disable-next-line no-console
  console.log('listen');
});

