/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## MY FIRST ASYNC I/O! (Exercise 4 of 13)

  Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument.

*/

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function callback (err, data) {
	if (err) console.log(err);
	else 
	{
		var lines = data.split('\n').length-1;

		console.log(lines);
	}
});
