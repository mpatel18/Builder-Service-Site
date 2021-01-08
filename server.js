const express = require('express');
const serve_static = requre('serve-static');
const path = require('path'); 

const app = express(); 

app.use('/', serve_static(path.join(__dirname, '/dist'))); 

const PORT = process.env.PORT || 8080; 
app.listen(PORT); 