define(
function() {

	FirefoxInstall = Backbone.View.extend({
		install: function(manifest) {
			if (navigator.mozApps.checkInstalled(manifest) != "true") { 
				var request = navigator.mozApps.getSelf();
				request.onsuccess = function() {
					if (!request.result) {
						navigator.mozApps.install(manifest); 	
					};

				};

				request.onerror = function() {
					this.trigger("install-error");
				}
			};
		}
	});

	return FirefoxInstall;

});