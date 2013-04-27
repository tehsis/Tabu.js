define(
function() {
	var manifest = window.location + "/manifest/tabu.webapp";

	FirefoxInstall = Backbone.View.extend({
		// At desktop and Android's devices result will be null until
		// Firefox gets https://bugzilla.mozilla.org/show_bug.cgi?id=806597
		// fixed. Meanwhile, I'll relay on localstorage to check
		// whether app is installed or not. 
		// This is not going to work if the application was uninstalled
		// or if the user deletes its localstorage.
		install: function() {
			if (navigator.mozApps.checkInstalled(manifest) != "true") { 
				var request = navigator.mozApps.getSelf();
				request.onsuccess = function() {
					if (!request.result) {
						navigator.mozApps.install(manifest); 	
					};

				};
			};
		}
	});

	return FirefoxInstall;

});