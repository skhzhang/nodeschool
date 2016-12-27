/*
# LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## BABY STEPS (Exercise 2 of 13)

  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).

*/

var sum = 0;

var arguments = process.argv;

// iterate through command line arguments
for (var i = 2; i < arguments.length; i++) {
	sum += Number(arguments[i]);
}

console.log(sum);