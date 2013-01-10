define([
], 

function() {
	var manifest = window.location + "/manifest/tabu.webapp";
	firefoxInstall = {
		install: function() {
			var request = navigator.mozApps.getSelf();
			request.onsuccess = function() {
				if (!request.result) {
					// This is not going to work on desktop until Firefox
					// gets https://bugzilla.mozilla.org/show_bug.cgi?id=806597
					// fixed.
					navigator.mozApps.install(manifest); 	
				}
			};
		}
	}

	return firefoxInstall;

});