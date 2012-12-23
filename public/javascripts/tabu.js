$(function() {
	Card = Backbone.Model.extend({
		defaults: function() {
			return {
				used: false
			}
		},

		use: function() {
			this.used = true;
		}

	});

	Deck = Backbone.Collection.extend({
		model: Card,
		url: "/card",
	});

	deck = new Deck;

	var CardView = Backbone.View.extend({
		tagName: "div",

		model: Card,

		template: _.template($("#card").html()),

		initialize: function() {
			this.model.bind("change", this.render, this);
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		}
	});

	var TabuView = Backbone.View.extend({
		el: $("#tabu"),

		initialize: function() {
			deck.bind("reset", function() { 
				var card = new CardView;
				console.log(deck.at(20).toJSON());
			}, this);

			deck.fetch({
				success: function() {
					console.log("fetched sucessful");
				}
			});
		},

		render: function() {

		}
	});

	var Tabu = new TabuView;

});
