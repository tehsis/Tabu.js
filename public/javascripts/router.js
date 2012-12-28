define([
	"zepto",
	"underscore",
	"backbone",
	"collections/deck",
	"views/deck"
], function($, _, Backbone, DeckCollection, DeckView) {
	var TabuRouter = Backbone.Router.extend({
		routes: {
			"*game": "initGame"
		}
	});

	var initGame = function() {
		var deck = new DeckCollection();
		var deckView = new DeckView({
			collection: deck
		});

		deck.on("reset", function() {
				deckView.render();
				deck.pickCard();
		});

		deck.on("change:selected", function(card, value) {
			$("#" + card.cid).removeClass('not-selected');
		});

		deck.on("remove", function(card) {
			$("#" + card.cid).addClass('not-selected');
		})

		$(".button").click(function() {
			deck.pickCard();
		});

		deck.fetch();
	}

	var initialize = function() {
		var tabuRouter = new TabuRouter;
		tabuRouter.on("route:initGame", initGame);
		Backbone.history.start();
	};

	return {
		initialize: initialize
	}
});