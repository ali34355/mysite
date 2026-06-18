const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
  const time = new Date().toLocaleString();

  fs.appendFileSync('visitors.txt', `IP: ${ip} | Time: ${time}\n`);

  res.send(`<h1>Your IP is: ${ip}</h1>`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});