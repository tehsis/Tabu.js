define([
	"zepto",
	"underscore",
	"backbone",
	"collections/deck",
	"views/card",
	"text!/templates/deck.html"
], function($, _, Backbonea, Deck, CardView, deckTemplate) {
	var DeckView = Backbone.View.extend({
		el: $("#tabu"),

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
			
			this.$el.append(compiledTemplate);	

			this.collection.trigger("rendered");
		}

	});

	return DeckView;
});