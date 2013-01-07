
//Module dependencies.
var app = require('./common.js');
var controllers = require('./controllers');

// Routes
app.use("/card", controllers.card.index);
app.use("/", controllers.tabu.index); 

// JSON Responses

app.listen(app.get('port'), function(){
  console.log("Tabu server listening on port " + app.get('port'));
});
