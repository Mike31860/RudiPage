const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/RUDI-PAGE'));

app.get('/*', function(req,res) {

res.sendFile(path.join(`${__dirname}/src/Pages/home.js`));
});

app.listen(process.env.PORT || 8080);