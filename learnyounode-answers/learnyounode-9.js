/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## JUGGLING ASYNC (Exercise 9 of 13)

  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.

*/

const http = require('http');
const bl = require('bl');

var finishedArr = []
var total = 0

for (var i = 2; i < process.argv.length; i++) {

	total += 1;
	const orderNum = i;

	// perform GET request for each command-line argument
	http.get(process.argv[i], function(res){

		// pipe response stream into bl
		res.pipe(bl(function (err, data) {

			if (err) return console.error(err);

			// call finished after completing GET request
			finished(orderNum, data.toString());
		}));

	}).on('error', console.error);

}


function finished(orderNumber, lineString) {

	// push response onto array
	finishedArr[orderNumber] = lineString

	// if this is the last request,
	// sort by order number and print
	if (finishedArr.length === total) {

		for (var i = 0; i < finishedArr.length; i++) {

			if (typeof finishedArr[i] != 'undefined')
				console.log(finishedArr[i].value)
		}
	}
}