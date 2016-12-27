/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## MY FIRST I/O! (Exercise 3 of 13)

  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.

*/

const fs = require('fs');

// read file with filename of 1st command-line argument
var fileBuffer = fs.readFileSync(process.argv[2]);
var fileStr = fileBuffer.toString();

// print each line
console.log(fileStr.split('\n').length-1);
