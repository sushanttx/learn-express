const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

// diasbling to avoid giving away tech stack info (helps prevent targeted attacks)
app.disable('x-powered-by')

let data = ['sush']

// WEBSITE ENDPOINTS
app.get('/', (req, res) => {
    console.log('Heres an endpoint', req.method);
    res.send('<h1>CREATED BRO</h1>');

    res.sendStatus(201);
})

app.get('/data', (req, res) => {
    res.send(`
        <body style="background: black; color: white">
            <h1>DATA:</h1>
            <p>
                ${JSON.stringify(data)}
            </p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `);
})

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.get('/dashboard', (req, res) => {
    res.send('hi');
    // res.send('<h1>DASHBOARD BRO<h1/>');
    console.log('This is the dashboard');
})

// API ENDPOINTS
app.get('/api/data', (req, res) => {
    // res.send('This is for data');
    res.send(data)

})

app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    // res.status(201).json({
    //     status: 201,
    //     message: 'Data created',
    //     data: newEntry
    // })
    data.push(newEntry.name);
    res.status(201).send(`The data is ${JSON.stringify(newEntry)}`);

});

app.delete('/api/data', (req, res) => {
    data.pop();
    console.log(data);
    res.sendStatus(203);
})


app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));