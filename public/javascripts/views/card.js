define([
	"zepto",
	"underscore",
	"backbone",
	"text!/templates/card.html"
], function($, _, Backbone, cardTemplate){
	var cardView = Backbone.View.extend({
		render: function() {
			var compiledTemplate = _.template(cardTemplate, this.model);
			return compiledTemplate;
		} 
	});

	return cardView;
});