'use strict';
const express = require('express');
const server = express();
const PORT = 5500;
server.listen( PORT , () => {
  console.log('listening to port ' , PORT);
});
// server.get('/test', (request, response) => {
//   response.send('working');
// });
// server.listen(PORT,() => {
// console.log('listen');
// });

server.use(express.static('/public'));