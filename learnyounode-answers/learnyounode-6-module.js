const fs = require('fs');
const path = require('path');

module.exports = function (directory, ext, callback) {

	// read directory matching parameter
	fs.readdir(directory, function(err, data) {

		if (err) return callback(err); // early return

		var resultArr = [];

		// iterate through each filename
		data.forEach (function(filename){
			if (path.extname(filename) === '.' + ext){
				resultArr.push(filename);
			}
		});

		callback(null, resultArr);
	});

}