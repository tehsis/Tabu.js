define([
	"zepto",
	"underscore",
	"backbone",
	"collections/deck",
	"views/card"
], function($, _, Backbonea, Deck, CardView) {
	var DeckView = Backbone.View.extend({
		el: $("#cards-container"),

		render: function() {
			var cardView = new CardView;
			var that = this;

			var cards_html = $();
			this.collection.forEach(function(card) {
				cardView.model = card;	
				var card_html = cardView.render();
				cards_html = cards_html.add(card_html);
			});
			
			that.$el.append(cards_html);	
		}

	});

	return DeckView;
});