const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log('Heres an endpoint', req.method);
    res.sendStatus(200);
})

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.get('/dashboard', (req, res) => {
    console.log('This is dashboard');
    res.send('hi');
})

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));