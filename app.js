const express = require('express');
const app = express();

const data = require('./data.js');
app.get('/', (req, res) => {
    res.json(data);
});

module.exports = app;