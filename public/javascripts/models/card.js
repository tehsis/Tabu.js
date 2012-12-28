define([
	"underscore",
	"backbone"
], function(_, Backbone) {
	var cardModel = Backbone.Model.extend({
		defaults: {
			selected: false,
		}
	});

	return cardModel;
});