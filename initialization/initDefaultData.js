/**
 * Created by Administrator on 2014-08-21.
 */
'use strict';
var mongoose = require('mongoose'),
    Province = mongoose.model('Province'),
    City = mongoose.model('City'),
    _ = require('lodash');

var location_provinceJSON = require('../utils/core/location_provinces');
Province.find().remove(function (err, data) {
    if (err) {
        console.log("Empty provinces error:" + err);
    }
});
var initSaveAllProvinces = function(){
    if(location_provinceJSON && location_provinceJSON.provinces){
        location_provinceJSON.provinces.forEach(function(province){
            var provinceItem = new Province({
                id:province.id,
                provinceID:province.provinceID,
                provinceName:province.provinceName
            });
            console.log(provinceItem.provinceName);

            provinceItem.save();
        });
    }
};

var location_cityJSON  = require("../utils/core/location_citys");
City.find().remove(function (err, data) {
    if (err) {
        console.log("Empty citys error:" + err);
    }
});

var initSaveAllCitys = function(){
    if(location_cityJSON && location_cityJSON.citys){
        location_cityJSON.citys.forEach(function(city){
            var cityItem = new City({
                id:city.id,
                provinceID:city.provinceID,
                cityID:city.cityID,
                cityName:city.cityName
            });
            cityItem.save();
        });
    }
};


module.exports = {
    initSaveAllProvinces:initSaveAllCitys
};

