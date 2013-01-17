define([
	"zepto",
	"underscore",
	"backbone",
	"javascripts/models/team",
	"javascripts/collections/deck"
], function($, _, Backbone, TeamModel, Deck) {
	var GameModel = Backbone.Model.extend({
		defaults: {
			teamA: new TeamModel({"name" : "A"}),
			teamB: new TeamModel({"name" : "B"}),
			deck: new Deck,
		},

		initialize: function() {
			this.set('currentTeam', this.get('teamA'));
		},

		toggleCurrentTeam: function() {
			this.set('currentTeam', 
				this.get('teamA') == this.get('currentTeam')
				?	this.get('teamB')
				:   this.get('teamA'));
		},

		getCurrentTeam: function() {
			return this.get('currentTeam').get('name');
		},

		score: function() {
			this.get('currentTeam').increaseScore();
		}

	});

	return GameModel;
});