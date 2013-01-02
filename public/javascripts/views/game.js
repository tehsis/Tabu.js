define([
	"zepto",
	"underscore",
	"backbone",
	"text!/templates/new-game-form.html"	
], function($, _, Backbone, newGameFormTemplate){
	var TabuView = Backbone.View.extend({
		el: $("#tabu"),

		events: {
			"click .create-game" : "createGame"
		},

		initialize: function() {
			this.render();	
		},

		createGame: function() {
			window.location.hash = "game/001";
		},

		render: function() {
			this.$el.empty();
			this.$el.append(newGameFormTemplate);
		}
	});

	return TabuView;
});