var index_action = function(req, res) {
	res.render('game/index', {
		title: "Tabu.js"
	});
}

exports.index = index_action;
