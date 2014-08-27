'use strict';

var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    Image = mongoose.model('Image');

exports.imgTmp = function(req, res) {
    var oldPath = req.files.myFile.path;
    var separator = '/';
   // var filename = oldPath.split(separator)[oldPath.split(separator).length-1];
    var filename = oldPath.split('\\')[oldPath.split('\\').length-1];
    var newPath = [__dirname, '..', '..' , 'public','img','images', filename].join(separator);
 //   C:\Users\Administrator\usepaysite\public\img\images
    console.log('>>>>>');
    console.log('__dirname', __dirname);
    console.log('oldPath', oldPath);
    console.log('newPath: ', newPath);
    console.log('filename: ', filename);

    fs.rename(oldPath, newPath, function (err) {
        if (err === null) {
            var image = {
                title: req.body.title || "???",
                author: req.body.author || "???",
                description: req.body.description || "???",
                image: {
                    modificationDate: req.files.myFile.modifiedDate || new Date(),
                    name: req.files.myFile.name || "???",
                    size: req.files.myFile.size || 0,
                    type: req.files.myFile.type || "???",
                    filename: filename
                }
            };
            var doc = new Image(image);

            console.log('Renaming file to ', req.files.myFile.name);

            doc.save(function (err) {

                var retObj = {
                    meta: {"action": "upload", 'timestamp': new Date(), filename: __filename},
                    doc: doc,
                    err: err
                };
                return res.send(retObj);
            });
        }
    });
};




/**
 * Upload authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.upload.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};