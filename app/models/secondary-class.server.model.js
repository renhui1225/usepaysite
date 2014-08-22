'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * SecondaryClass Schema
 */
var SecondaryClassSchema = new Schema({
	// SecondaryClass model fields   
    secondaryClassID: {
        type: Number,
        require: true
    },
    secondaryName: {
        type: String,
        require: true
    },
    oneLevel:{
        type:Schema.ObjectId,
        ref:'Onelevel'
    } //一级分类
});

mongoose.model('SecondaryClass', SecondaryClassSchema);