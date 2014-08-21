'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Area Schema
 */
var AreaSchema;
AreaSchema = new Schema({
    id: {type: Number},
    fatherID: {type: Number}, //市级ID
    areaID: {type: Number}, //县区级ID
    areaName: {type: String} //县区名称ss
});

mongoose.model('Area', AreaSchema);