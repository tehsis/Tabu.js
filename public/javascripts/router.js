define([
	"zepto",
	"underscore",
	"backbone",
	"views/game",
	"views/deck",
], function($, _, Backbone, GameView, DeckView) {
	var TabuRouter = Backbone.Router.extend({
		routes: {
			"game/:id": "initGame",
			"*actions": "homePage"
		}
	});

	var initialize = function() {
		var tabuRouter = new TabuRouter;

		// Routes actions
		tabuRouter.on("route:initGame", function() {new DeckView});
		tabuRouter.on("route:homePage", function () {new GameView;});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	}
});