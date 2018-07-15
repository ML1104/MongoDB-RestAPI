const express = require('express');
const app = express();

const usersControl = require('./Controllers/usersControl');

app.get('/', (req, res) => res.send('Welcome'));
app.get('/users', usersControl.Index);
    
app.listen('3000', () => console.log('API Server started and listening on port 3000'));