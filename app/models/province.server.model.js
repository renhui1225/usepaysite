'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Province Schema
 */
var ProvinceSchema = new Schema({
    id: {
        type: Number,
        require: true,
    },
    provinceID: {
        type: Number,
        require: true,
    }, //省级ID
    provinceName:  {
        type: String,
        require: true,
    }  //省级名称
});

mongoose.model('Province', ProvinceSchema);