define([
	"zepto",
	"underscore",
	"backbone",
	"javascripts/models/game",
	"javascripts/models/timer",
	"javascripts/views/deck",
	"javascripts/views/timer",
	"javascripts/views/requestTurn"
], function($, _, Backbone, GameModel, TimerModel, DeckView, TimerView, RequestTurnView) {
	var gameView = Backbone.View.extend({
		el: $("#tabu"),

		events: {
			"click .correct-button" : "updateMarker"
		},

		updateMarker: function() {
			this.game.score();
			console.log(this.game.getCurrentTeam() + ": " +  this.game.get('currentTeam').get('score'));
		},


		initialize: function() {
			var that = this;
			this.game = new GameModel;
			this.deckView = new DeckView({
				collection: this.game.get("deck")
			});
			var timer = new TimerModel;
			this.timerView = new TimerView({model: timer});

			this.requestTurnView = new RequestTurnView;

			this.game.get('deck').fetch();
			this.requestTurnView.render(this.game);

			this.requestTurnView.on("newTurn", function() {
				timer.start();
				that.render();
				that.game.get('deck').pickCard();
			})

			this.game.get('deck').on("change:selected", function(card, value) {
				$("#" + card.cid).removeClass('not-selected');
			});
			this.game.get('deck').on("remove", function(card) {
				$("#" + card.cid).addClass('not-selected');
			});	

			timer.on("timesup", function() {
				that.game.toggleCurrentTeam();
				that.requestTurnView.render(that.game);
			})

			this.timerView.model.on('step', function() {
				that.$el.prepend(that.timerView.render());
			});
		},

		render: function() {
			this.$el.empty();
			this.$el.append(this.deckView.render());
			this.$el.prepend(this.timerView.render());
		}
	});

	return gameView;	
});