define([
	"zepto",
	"underscore",
	"backbone",
	"javascripts/text!templates/new-game-form.html",
	"javascripts/views/firefox-install"
], function($, _, Backbone, newGameFormTemplate){
	var NewGameFormView = Backbone.View.extend({
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
			if (navigator.mozApps) {
				firefoxInstall.install();
			}

			this.$el.prepend(newGameFormTemplate);
		}
	});

	return NewGameFormView;
});