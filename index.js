const http = require('http');
const express = require('express');
const app = express();
//recursos
app.use(express.static(__dirname+'/'));

//enrutamiento
app.get('/',(req,res) =>{
res.render('index.html')
});
app.listen(4000);
console.log('servidor corriendo en el puerto 4000')     