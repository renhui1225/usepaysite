/**
 * Created by Administrator on 2014-08-21.
 */
'use strict';
var mongoose = require('mongoose'),
    City = mongoose.model('City'),
    Area = mongoose.model('Area'),
    Onelevel = mongoose.model('Onelevel'),
    SecondaryClass = mongoose.model('SecondaryClass'),
    _ = require('lodash');

var initDefaultData;
initDefaultData = function () {
    var location_cityJSON = require("../utils/core/location_citys");
    var location_areaJSON = require("../utils/core/location_area");
    var location_oneLevelJSON = require("../utils/core/location_oneLevel");
    var location_secondaryClasssJSON = require("../utils/core/location_secondaryclasss");


    /*清除数据*/
    City.find().remove(function (err) {
        if (err) {
            console.log("Empty citys error:" + err);
        }
    });
    Area.find().remove(function (err) {
        if (err) {
            console.log("Empty areas error:" + err);
        }
    });
    if(location_cityJSON && location_cityJSON.citys){
        location_cityJSON.citys.forEach(function(city){
            var cityItem = new City({
                cityID:city.cityID,
                cityName:city.cityName,
                citySort:city.citySort
            });
            cityItem.save();
        });
    }
    if(location_areaJSON && location_areaJSON.area){
        location_areaJSON.area.forEach(function(area){
            var areaItem = new Area({
                areaID:area.areaID,
                areaName:area.areaName,
                cityID:area.cityID
            });
            areaItem.save();
        });
    }

    Onelevel.find().remove(function (err) {
        if (err) {
            console.log("Empty oneLevels error:" + err);
        }
    });

    if(location_oneLevelJSON && location_oneLevelJSON.oneLevels){
        location_oneLevelJSON.oneLevels.forEach(function(oneLevel){
            var oneLevelItem = new Onelevel({
                oneLevelID:oneLevel.oneLevelID,
                oneLevelName:oneLevel.oneLevelName,
                iconImage:oneLevel.iconImage
            });
            oneLevelItem.save();
        });
    }

    SecondaryClass.find().remove(function (err) {
        if (err) {
            console.log("Empty SecondaryClasss error:" + err);
        }
    });

    if(location_secondaryClasssJSON && location_secondaryClasssJSON.secondaryClasss) {
        location_secondaryClasssJSON.secondaryClasss.forEach(function (secondaryClass) {
            var secondaryClassItem = new SecondaryClass({
                secondaryClassID: secondaryClass.secondaryClassID,
                secondaryName: secondaryClass.secondaryName,
                oneLevelID: secondaryClass.oneLevelID
            });
            secondaryClassItem.save();
        });
    }
};
module.exports ={
    initDefaultData:initDefaultData
};
