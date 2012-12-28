define([
	"zepto",
	"underscore",
	"backbone",
	"router"
],
  function($, _, Backbone, router) {
  	var initialize = function() {
  		router.initialize();
  	}

  	return {
  		initialize: initialize
  	}

});