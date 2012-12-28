define(
[
	"underscore",
	"backbone",
	"models/card"
],

function(_, Backbone, cardModel) {
	var Deck = Backbone.Collection.extend({
		model: cardModel,
		url: "/card",

		selected_card: null,

		// Returns a new card that has not
		// been selected.
		pickCard: function() {
			if (this.get('selected_card') !== null) {
				this.remove(this.selected_card);	
			}

			var index = (Math.floor(Math.random() * this.length))  + 1;

			var card = this.at(index);
			this.selected_card = card.cid;

			card.set('selected', true);

			return card;
		}
	});

	return Deck;
}
);