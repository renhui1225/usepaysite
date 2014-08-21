'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * City Schema
 */
var CitySchema = new Schema({
	// City model fields
	id: {
        type: Number,
        require: true
    },
    provinceID:{
        type: Number,
        require: true
    },
    cityID:{
    type: Number,
        require: true
    },
    cityName:{
        type: String,
        require: true
    }
});

mongoose.model('City', CitySchema);