module.exports = function(app){
    app.get('/noticias/add', function(req, res){
        res.render("admin/form_add_noticia")
    });
};    
