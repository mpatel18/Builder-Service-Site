var history = require('connect-history-api-fallback');

const express = require('express');
const serve_static = require('serve-static');
const path = require('path');

const app = express(); 

app.use(history()); 
app.use('/', serve_static(path.join(__dirname, '/dist'))); 

const PORT = process.env.PORT || 8080; 
app.listen(PORT); 

console.log('Server started ...');