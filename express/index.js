let express = require('express')
let app = express()

//rota index
app.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})
app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})
app.get('/teste/:id', function(req, res){
    res.send(req.params)
})

//criar o servidor
app.listen(8080, function(){
    console.log("servidor rodando")
})