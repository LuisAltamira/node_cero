'use strict';
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Hola Mundo! ${req.query.nombre}`);
});

app.get('/home', (req, res) => {
    res.end(`<h1>Este es un h1</h1>`);
});

app.listen(PORT, () => {
    console.log(`servidor andando en el puerto ${PORT}`);
});
