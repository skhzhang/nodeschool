/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP CLIENT (Exercise 7 of 13)

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).

*/

const http = require('http');

// perform GET request to call URL provided as 1st command-line argument
http.get(process.argv[2], callback).on('error', console.error);

function callback (response) {
	response.setEncoding("utf8");
	response.on('data', function(data) {
			console.log(data)
	});
	response.on('error', console.error);
}