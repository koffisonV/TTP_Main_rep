const express = require('express');
const app = express();
const PORT = 1337;

app.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.get('/puppies', (req, res) => {
  res.send(`puppies`);
});

app.get('/kittens', (req, res) => {
  res.send(`kittens`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});