const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/merak/qr-1', (req, res) => {
    res.redirect("https://www.instagram.com/merakgin/")
});

app.get('/merak/qr-2', (req, res) => {
    res.redirect("https://www.instagram.com/merakgin/")
});

app.get('/merak/qr-3', (req, res) => {
    res.redirect("https://www.instagram.com/merakgin/")
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
