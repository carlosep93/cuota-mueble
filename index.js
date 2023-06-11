const express = require('express');

const app = express(); 
app.use(express.static('public'))

app.get('/', async (req, res) => {
  res.render('index')
});

module.exports = app;
