require.config({
	baseUrl: "..",
	paths: {
		zepto: "/javascripts/libs/zepto/zepto",
		underscore: "/javascripts/libs/underscore/underscore",
		backbone: "/javascripts/libs/backbone/backbone"
	}
});

require(["javascripts/tabu"], function(tabu) {
	tabu.initialize();
});
