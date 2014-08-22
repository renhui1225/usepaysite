'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors'),
    Province = mongoose.model('Province'),
    _ = require('lodash');

/**
 * Create a Province
 */
exports.create = function(req, res) {

};

/**
 * Show the current Province
 */
exports.read = function(req, res) {
    res.json(req.province);
};

/**
 * Update a Province
 */
exports.update = function(req, res) {

};

/**
 * Delete an Province
 */
exports.delete = function(req, res) {

};

/**
 * Province middleware
 */
exports.provinceByID = function(req, res, next, id) {
    Province.findById(id).exec(function(err, province) {
        if (err) return next(err);
        if (!province) return next(new Error('Failed to load province ' + id));
        req.province = province;
        next();
    });
};


/**
 * List of Provinces
 */
exports.list = function(req, res) {
    Province.find().sort('id').exec(function(err, provinces) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(provinces);
        }
    });
};