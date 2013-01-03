define([
	"zepto",
	"underscore",
	"backbone"
], function($, _, Backbone) {
	var TeamModel = Backbone.Model.extend({
		defaults: {
			score: 0
		},

		increaseScore: function() {
			this.set('score', this.get('score') + 1);
		}
	});

	return TeamModel;
});