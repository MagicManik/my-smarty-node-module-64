const express = require('express');
// to unlock server data
const cors = require('cors');
// const { get } = require('express/lib/response');
const app = express()
const port = process.env.PORT || 5000


// _____________ Middleware ______________
// to unlock server Data
app.use(cors());
// use express.json in middleware to receive data from client site
app.use(express.json());


// _____ basic server data route _____
app.get('/', (req, res) => {
    res.send('Hello World!')
});



const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', ph: '014634567844' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', ph: '0156345423847' },
    { id: 3, name: 'suchorita', email: 'suchorita@gmail.com', ph: '014634373843' },
    { id: 4, name: 'Sabila', email: 'sabila@gmail.com', ph: '017638643841' },
    { id: 5, name: 'Sobnom', email: 'sobnom@gmail.com', ph: '019634543840' },
    { id: 6, name: 'sohana', email: 'sohana@gmail.com', ph: '018634543848' },
]

// _______ basic server data route _______
app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})


// to get daynamic data route
app.get('/user/:id', (req, res) => {
    const catchDaynamicPath = parseInt(req.params.id);
    console.log(catchDaynamicPath);
    res.send(users.find(user => user.id === catchDaynamicPath))

})


// to post data by client site
app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})



app.listen(port, () => {
    console.log('Listining to port', port)
})