var express = require('express');
var pokemons = require("./pokemons");
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/demo', function (req, res) {
    res.render('demo');

});

app.get('/test', function (req, res) {
     var name=req.query.name;
     res.render("test", { "name": name });

});



app.get('/demoResult', function (req, res) {
         $(document).ready(function(){ 

   $("#save_value").click(function(){
    var result =0;
    var resulttotal =0 ;

      $("input[type=radio]:checked").each(function () {
        result = $(this).val() ;
        resulttotal = resulttotal + parseInt(result);
      });

      $("input[type=checkbox]:checked").each(function () {
        result = $(this).val() ;
        resulttotal = resulttotal+ parseInt(result);
      });

  
   }); 

 }); 
     res.render("demoResult", { "resulttotal":resulttotal});

});



app.get('/sticky', function (req, res) {
    res.render('SticyNotes');

});

app.get('/sticky/:id', function (req, res) {
    var SticyNotesResult = storage.sticky.text

    res.render('SticyNotesResult', { "SticyNotesResult": SticyNotesResult });

});


app.get('/pokemon/all', function (req, res) {
    res.render('pokemon', { "pokemons": pokemons });

});

app.get('/pokemon/:nationalNo', function (req, res) {
    if (req.query.nationalNo >= 1 && req.query.nationalNo <= pokemons.length) {
        var pokemonResult = pokemons[req.query.nationalNo - 1];
        res.render("pokemonresult", { "pokemonResult": pokemonResult });
    } else {
        res.send("輸入錯誤，請重新輸入");
    }

    res.end();
});

app.listen(1234)