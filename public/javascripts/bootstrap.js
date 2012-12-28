require.config({
	paths: {
		zepto: "libs/zepto/zepto-require",
		underscore: "libs/underscore/underscore-require",
		backbone: "libs/backbone/backbone-require"
	}
});

require(["tabu"], function(tabu) {
	var tabu = require("tabu");
	tabu.initialize();
});
