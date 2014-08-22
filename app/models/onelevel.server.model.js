'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Onelevel Schema
 * 商户一级分类
 *
 */
var OnelevelSchema;
OnelevelSchema = new Schema({
    // Onelevel model fields
    oneLevelID: {
        type: Number,
        require: true
    },
    oneLevelName: {
        type: String,
        require: true
    },
    iconImage: {
        type: String,
        require: true
    }

});
mongoose.model('Onelevel', OnelevelSchema);