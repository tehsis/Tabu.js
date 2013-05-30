define([
	"zepto",
	"underscore",
	"backbone",
	"javascripts/text!templates/new-game-form.html",
	"javascripts/views/firefox-install"
], function($, _, Backbone, newGameFormTemplate, FirefoxInstall){
	var NewGameFormView = Backbone.View.extend({
		el: $("#tabu"),

		events: {
			"click .create-game" : "createGame",
			"click .app-install"  : "installApp"
		},

		initialize: function() {
			this.render();	
		},

		createGame: function() {
			window.location.hash = "game/001";
		},

		installApp: function() {
			var firefoxInstall = new FirefoxInstall;
			var manifest = window.location + "/manifest/tabu.webapp";

			firefoxInstall.install(manifest);
		},

		render: function() {
			this.$el.empty();

			this.$el.prepend(newGameFormTemplate);
			
			if (navigator.mozApps) {
				this.$el.find(".app-install").show();
			}
		}
	});

	return NewGameFormView;
});