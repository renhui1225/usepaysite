'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * City Schema
 */
var CitySchema;
CitySchema = new Schema({
    // City model fields
    cityID: {
        type: Number,
        require: true
    },
    cityName: {
        type: String,
        require: true
    },
    citySort: {
        type: Number
    }
});

mongoose.model('City', CitySchema);