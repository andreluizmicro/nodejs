var app = require("./config/server");

var rotaNoticias = require('./app/routes/noticias')(app);

var home = require('./app/routes/home')(app);

var form_add_noticia = require('./app/routes/form_add_noticia')(app);


app.listen(3000, function(){
    console.log("Servidor Rodando!");
});