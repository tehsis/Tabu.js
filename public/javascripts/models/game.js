define([
	"zepto",
	"underscore",
	"backbone",
	"models/team"
], function($, _, Backbone, TeamModel) {
	var GameModel = Backbone.Model.extend({
		initialize: function() {
			this.teamA = new TeamModel;
			this.teamB = new TeamModel;
		},

		toggleCurrentTeam: function() {
			this.currentTeam = this.teamA?this.TeamB:this.teamA;
		};

		score: function() {
			this.currentTeam.increaseScore();
		}

	});

	return GameModel;
});