const express = require('express');
const path = require('path');
const basicAuth = require('basic-auth-connect');

const app = express();

// container の health-check 用
app.get('/health-check', function (req, res) {
  res.send('alive');
});

// basic-auth
// if (process.env.NODE_ENV !== 'production') {
//   app.use(basicAuth('quick', 'iterate'));
// }

app.use(express.static(path.join(__dirname, '..', 'dist')));

// 通常
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(2000, () => {
  console.log('Listening on port 2000');
});
