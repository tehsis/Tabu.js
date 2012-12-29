
//Module dependencies.
var app = require('./common.js');
var controllers = require('./controllers');

// Routes
app.get("/", controllers.game.index); 
app.get("/game/:id", controllers.game.index); 
app.get("/game", controllers.game.index); 
app.get("/card", controllers.card.index);

app.listen(app.get('port'), function(){
  console.log("Tabu server listening on port " + app.get('port'));
});
