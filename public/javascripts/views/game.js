define([
	"zepto",
	"underscore",
	"backbone",
	"text!/templates/new-game-form.html"	
], function($, _, Backbone, newGameFormTemplate){
	var TabuView = Backbone.View.extend({
		el: $("#tabu"),

		render: function() {
			this.$el.append(newGameFormTemplate);
		}
	});

	return TabuView;
});