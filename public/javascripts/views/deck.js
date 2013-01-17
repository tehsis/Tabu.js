define([
	"zepto",
	"underscore",
	"backbone",
	"javascripts/collections/deck",
	"javascripts/views/card",
	"javascripts/text!templates/deck.html"
], function($, _, Backbonea, Deck, CardView, deckTemplate) {
	var DeckView = Backbone.View.extend({
		events: {
			"click .button" : "pickCard"
		},

		pickCard: function() {
			this.collection.pickCard();
		},

		render: function() {
			var cardView = new CardView;

			var cards_html = "";
			this.collection.forEach(function(card) {
				cardView.model = card;	
				var card_html = cardView.render();
				cards_html +=  card_html;
			});

			var compiledTemplate = _.template(deckTemplate, {
				cards: cards_html,
				gameUrl: window.location.href
			}); 

			this.$el.empty();
			this.$el.append(compiledTemplate);	

			return this.$el;
		}

	});

	return DeckView;
});