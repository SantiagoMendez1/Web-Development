const express = require('express');
const app = express();

app.set('view engine','ejs');
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/',require('./router'));

app.listen(4000, ()=>{
    console.log('SERVER corriendo en http://localhost:4000');
});