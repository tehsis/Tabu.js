define([
	"zepto",
	"underscore",
	"backbone"
], function($, _, Backbone) {
	var TeamModel = Backbone.Model.extend({
		defaults: {
			score: 0
		}
	});

	return TeamModel;
});