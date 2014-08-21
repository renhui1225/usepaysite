/**
 * Created by Administrator on 2014-08-21.
 */
'use strict';
var mongoose = require('mongoose'),
    Province = mongoose.model('Province'),
    City = mongoose.model('City'),
    Area = mongoose.model('Area'),
    _ = require('lodash');

var initSaveAllProvinces = function(){
    var location_provinceJSON = require('../utils/core/location_provinces');
    Province.find().remove(function (err) {
        if (err) {
            console.log("Empty provinces error:" + err);
        }
    });
    if(location_provinceJSON && location_provinceJSON.provinces){
        location_provinceJSON.provinces.forEach(function(province){
            var provinceItem = new Province({
                id:province.id,
                provinceID:province.provinceID,
                provinceName:province.provinceName
            });
            provinceItem.save();
        });
    }

    var location_cityJSON  = require("../utils/core/location_citys");
    City.find().remove(function (err) {
        if (err) {
            console.log("Empty citys error:" + err);
        }
    });

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

    var location_areaJSON  = require("../utils/core/location_area");
    Area.find().remove(function (err) {
        if (err) {
            console.log("Empty areas error:" + err);
        }
    });

    if(location_areaJSON && location_areaJSON.area){
        location_areaJSON.area.forEach(function(area){
            var areaItem = new Area({
                id:area.id,
                areaID:area.areaID,
                fatherID:area.fatherID,
                areaName:area.areaName
            });
            areaItem.save();
        });
    }
};

module.exports ={
    initSaveAllProvinces:initSaveAllProvinces
};

