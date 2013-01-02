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

		events: {
			"click .button" : "pickCard"
		},

		initialize: function() {
			var view = this;
			this.collection = new Deck;

			this.collection.fetch();

			this.collection.on("reset", function() {
				view.render();
				view.pickCard();
			});

			this.collection.on("change:selected", function(card, value) {
				$("#" + card.cid).removeClass('not-selected');
			});

			this.collection.on("remove", function(card) {
				$("#" + card.cid).addClass('not-selected');
			})
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
			this.collection.trigger("rendered");
		}

	});

	return DeckView;
});