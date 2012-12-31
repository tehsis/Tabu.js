define([
	"zepto",
	"underscore",
	"backbone",
	"controllers/game",
	"controllers/card",
], function($, _, Backbone, gameController, cardController) {
	var TabuRouter = Backbone.Router.extend({
		routes: {
			"game/:id": "initGame",
			"*actions": "homePage"
		}
	});

	var initialize = function() {
		var tabuRouter = new TabuRouter;

		// Routes actions
		tabuRouter.on("route:initGame", cardController.getCard);
		tabuRouter.on("route:homePage", gameController.home);

		Backbone.history.start();
	};

	return {
		initialize: initialize
	}
});