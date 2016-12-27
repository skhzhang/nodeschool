/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP COLLECT (Exercise 8 of 13)

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.

*/

const http = require('http');
const bl = require('bl');

// perform GET request matching URL provided as 1st command-line argument
http.get(process.argv[2], function(res){

	// pipe response stream into bl
	// print number of characters received and complete String
	res.pipe(bl(function (err, data) {

		if (err) return console.error(err);

		console.log(data.toString().length);
		console.log(data.toString());
	}));

}).on('error', console.error);