const express = require('express');
const path = require('path');

//rutas
const pagesRutas = require('./routes/pages');

const app = express();
const port= 3002;


app.use(express.static('public'));


app.use('/',pagesRutas);


app.get('/',(req,res)=>{
    res.redirect('/Principal');
});


app.listen(port,()=>{
    console.log(`Server http://localhost:${port}`);
});