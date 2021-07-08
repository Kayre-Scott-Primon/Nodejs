const express = require("express")
const app = express();



/*
app.get("/", function(req, res){
     res.send("Hello world!");
});
*/


 /*
app.get("/sobre", function(req, res){
     res.send("About")
});
*/

app.get("/sobre", function(req, res){
   res.sendFile(__dirname + "/html/sobre.html");  
});

app.get("/blog", function(req, res){
     res.send("Blog")
});

app.get("/ola/:nome/:idade", function(req, res){
     res.send(req.params) //mostra a lista de parametros
});

app.get("/ola2/:nome/:idade", function(req, res){
     res.send("ola "+req.params.nome+", voce tem "+req.params.idade+" anos!")
});

app.listen(8081, function(){
     console.log("teste");
});