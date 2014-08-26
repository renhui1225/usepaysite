'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var uploads = require('../../app/controllers/uploads');

	// Uploads Routes
	app.route('/uploads/imgImg')
		.post(users.requiresLogin, uploads.imgTmp);
};