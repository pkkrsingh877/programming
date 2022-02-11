const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const morgan = require('morgan');

//middlewares
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Working');
});

app.listen(3000, () => {
    console.log('App listening at port 3000');
});