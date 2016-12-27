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

// I had trouble with this one, particularly in figuring out the order of the initial requests

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
	finishedArr.push({ key : orderNumber, value : lineString});

	// if this is the last request,
	// sort by order number and print
	if (finishedArr.length === total) {

		keys = Object.keys(finishedArr);
		keys.sort();

		finishedArr = sort(finishedArr);

		for (var i = 0; i < finishedArr.length; i++) {

			if (typeof finishedArr[i] != 'undefined')
				console.log(finishedArr[i].value)
		}
	}
}

// merge sort
function sort(array) {

	if (array.length === 0 || array.length === 1)
		return array

	var middle = parseInt(array.length / 2)

	var left = []
	var right = []


	if (array.length === 2){
		left.push(array[0])
		right.push(array[1])
	} else {

		for (i = 0; i < array.length; i++) {

			if (i <= middle)
				left.push(array[i])
			else
				right.push(array[i])
		}
	}

	left = sort(left)
	right = sort(right)


	return merge(left, right)
}

// merge sort helper function
function merge(left, right) {
	var result = []

	while (		typeof left[0] != "undefined" && left != null && left.length > 0
				&& typeof right[0] != "undefined" && right != null && right.length > 0) {

		if (left[0].key <= right[0].key) {
			result.push(left[0])
			left = left.slice(1, left.length)
		} else {
			result.push(right[0])
			right = right.slice(1, right.length)
		}
	}

	while (typeof left[0] != "undefined" && left != null && left.length > 0) {
		result.push(left[0])
		left = left.slice(1,left.length)
	}
	while (typeof right[0] != "undefined" && right != null && right.length > 0) {
		result.push(right[0])
		right = right.slice(1,right.length)
	}

	return result


}