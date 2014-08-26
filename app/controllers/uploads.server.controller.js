'use strict';

var fs = require('fs'),
    path = require('path');

exports.imgTmp = function(req, res) {
    console.log(req);
};




/**
 * Upload authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.upload.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};