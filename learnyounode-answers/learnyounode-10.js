/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## TIME SERVER (Exercise 10 of 13)

  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.

*/

const net = require('net');

var portNumber = process.argv[2];

var server = net.createServer(function (socket) {

	// create timestamp
	var date = new Date()
	var month = ((String)(date.getMonth()).length == 2) ? date.getMonth()+1 : (String)('0'+date.getMonth()+1)
	var day = ((String)(date.getDate()).length == 2) ? date.getDate() : (String)('0'+date.getDate())
	var hours = ((String)(date.getHours()).length == 2) ? date.getHours() : (String)('0'+date.getHours())
	var minutes = ((String)(date.getMinutes()).length == 2) ? date.getMinutes() : (String)('0'+date.getMinutes())

	var timestamp = date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + "\n"
	socket.write(timestamp)// write the date/time when an connection occurs
	socket.end()
})

server.listen(portNumber)

