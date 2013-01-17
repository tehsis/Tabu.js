define([
	"zepto",
	"underscore",
	"backbone",
	"javascripts/models/timer",
	"javascripts/text!templates/timer.html"
], function($, _, Backbone, TimerModel, timerTemplate) {
	var TimerView = Backbone.View.extend({

		el: $("<aside>").addClass("timer"),

		initialize: function() {
			var that = this;
			this.model || (this.model = new TimerModel);
			this.model.on("change:timer", function() {
				that.render();
			});
		},

		render: function() {
			this.$el.empty();
			var timer = this.model.get('timer');
			var minutes = Math.floor(timer / 60);
			var seconds = timer % 60;
			var compiled_template = _.template(timerTemplate, {
				minutes: minutes,
				seconds: seconds
			})

			this.$el.append(compiled_template);

			return this.$el;
		}

	});	
	return TimerView;
});