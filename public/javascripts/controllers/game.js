define([
	"zepto",
	"underscore",
	"backbone",
	"views/game"
], 
function($, _, Backbone, TabuView) {
	var actions = {};
	var tabuView = new TabuView;

	actions.home = function() {
		$("#tabu").children().hide();
		tabuView.render();

		var createButton = $(".create-game");
		createButton.click(function() {
			window.location.hash = "game/001"
		});
	};		

	return actions;
});