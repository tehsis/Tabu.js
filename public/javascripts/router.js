define([
	"zepto",
	"underscore",
	"backbone",
	"views/newgameform",
	"views/game",
], function($, _, Backbone, NewGameFormView, GameView) {
	var TabuRouter = Backbone.Router.extend({
		routes: {
			"game/:id": "initGame",
			"*actions": "homePage"
		}
	});

	var initialize = function() {
		var tabuRouter = new TabuRouter;

		// Routes actions
		tabuRouter.on("route:initGame", function() {new GameView});
		tabuRouter.on("route:homePage", function () {new NewGameFormView;});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	}
});