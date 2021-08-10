const express = require('express');
const app = express();

const data = require('./data.js');
app.get('/', (req, res) => {
    res.send('Home Page - Try /dreams')
});
app.get('/dreams', (req, res) => {
    const dreamID = Number(req.params.id);
    const dream = data.find((item) => item.id === dreamID); 
    res.json(data);
});

module.exports = app;