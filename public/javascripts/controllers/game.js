define([
	"zepto",
	"underscore",
	"backbone"
], 
function($, _, Backbone) {
	var actions = {};

	actions.home = function() {
		var createButton = $(".create-game");

		createButton.click(function() {
			window.location.hash = "game/001"
		});
	};		

	return actions;
});