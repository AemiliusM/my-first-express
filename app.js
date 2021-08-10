const express = require('express');
const app = express();

const data = require('./data.js');
app.get('/', (req, res) => {
    res.send('Home Page - Try /dreams')
});
app.get('/dreams', (req, res) => {
    res.json(data);
});

app.get('/dreams/:id', (req, res) => {
    const dreamID = Number(req.params.id);
    const dream = data.find((item) => item.id === dreamID); 
    res.json(dream);
});

module.exports = app;