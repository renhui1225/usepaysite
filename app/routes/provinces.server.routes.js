'use strict';

/**
 * Module dependencies.
 */
var provinces = require('../../app/controllers/provinces');

module.exports = function(app) {
    // Article Routes
    app.route('/provinces')
        .get(provinces.list);

    app.route('/provinces/:provinceId')
        .get(provinces.read);

    app.param('provinceId', provinces.provinceByID);
};