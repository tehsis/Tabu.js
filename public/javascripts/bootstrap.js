require.config({
	paths: {
		zepto: "libs/zepto/zepto",
		underscore: "libs/underscore/underscore",
		backbone: "libs/backbone/backbone"
	}
});

require(["tabu"], function(tabu) {
	tabu.initialize();
});
