const express = require('express');
const app = express();

const usersControl = require('./Controllers/usersControl');

app.get('/', (req, res) => res.send('Welcome to MongoDB RESTful API'));

app.get('/users', usersControl.Index);
app.post('/users',  usersControl.Insert);
    
app.listen('3000', () => console.log('API Server started and listening on port 3000'));