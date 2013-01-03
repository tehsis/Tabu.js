define([
	"zepto",
	"underscore",
	"backbone",
	"text!/templates/request-start-team.html"
], function($, _, Backbone, requestTurnTemplate) {
	var RequestTurnView = Backbone.View.extend({
		el: $("#tabu"),

		events: {
			"click .ready-button" : "newTurn"
		},

		newTurn: function() {
			this.trigger("newTurn");
		},

		render: function(game) {
			this.$el.empty();

			var compiledTemplate = _.template(requestTurnTemplate, {
				currentTeam: game.getCurrentTeam(),
				teamA: game.get('teamA').toJSON(),
				teamB: game.get('teamB').toJSON()
			});

			this.$el.append(compiledTemplate);
		}
	});

	return RequestTurnView;
});