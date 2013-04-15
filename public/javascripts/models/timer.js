define([
	"underscore",
	"backbone"
], function(_, Backbone) {
	var TimerModel = Backbone.Model.extend({
		defaults: {
			time: 90, // one minute and a half	
			step: 1000 // one second
		},

		initialize: function() {
			this.resetTimer();
		},

		resetTimer: function() {
			this.set("timer", 0);
		},

        stop: function () {
            this.trigger("timestop");
            this.resetTimer();
            window.clearTimeout(this._timeoutId);
        },

		start: function() {
			var timer = this.get("timer");
			var time = this.get("time");
			var stepTime = this.get("step");
			var timeoutId;
			var that = this;

			var step = function () {
					that._timeoutId = setTimeout(function () {
					timer++;
					that.set("timer", timer);
					that.trigger("step");
					if (timer != time) { 
					    step();
					} else {
						that.trigger("timesup");
						// Reset timer
						that.resetTimer();
					}		
				}, stepTime);
			}

			step();
		}

	});

	return TimerModel;
});
