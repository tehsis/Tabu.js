require.config({
	baseUrl: "public",
	paths: {
		zepto: "javascripts/libs/zepto/zepto",
		underscore: "javascripts/libs/underscore/underscore",
		backbone: "javascripts/libs/backbone/backbone"
	}
});

require(["javascripts/init"], function(tabu) {
	tabu.initialize();
});
