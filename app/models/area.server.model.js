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
    areaID:{
        type:Number
    },
    areaName:{
        type: String
    },
    cityID: {
        type: String
    }
});

mongoose.model('Area', AreaSchema);