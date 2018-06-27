const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  console.log('accessed the right page');
  next();
}, (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

// app.get('/P2P', (req, res) => {
//   res.sendFile()
// })

app.listen(2000, () => console.log('app is now listening on port 2000'));
