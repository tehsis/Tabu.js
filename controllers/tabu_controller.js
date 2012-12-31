var index_action = function(req, res) {
	res.render("index", {
		title: "Tabu.js"
	});
}

exports.index = index_action;