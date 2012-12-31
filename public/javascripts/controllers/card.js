define([
	"zepto",
	"underscore",
	"backbone",
	"collections/deck",
	"views/deck"
], 
function($, _, Backbone, DeckCollection, DeckView) {
	var actions = {};

	actions.getCard = function() {
		var deck = new DeckCollection();
		var deckView = new DeckView({
			collection: deck
		});

		$("#tabu").children().hide();

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

		deck.on("rendered", function() {
			$(".button").live("click", function(evt) {
				deck.pickCard();
			});
		});


		deck.fetch();
	};

	return actions;
});