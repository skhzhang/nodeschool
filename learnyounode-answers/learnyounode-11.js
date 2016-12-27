/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP FILE SERVER (Exercise 11 of 13)

  Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.

*/

const http = require('http')
const fs = require('fs')

var portNumber = process.argv[2]
var fileLocation = process.argv[3]

// callback called once for each connection received
// request used to fetch properties - eg. header, query-string
// response used to send data to client, both headers and body
var server = http.createServer(function(request, response) {

	response.writeHead(200, { 'content-type': 'text/plain' })
	fs.createReadStream(fileLocation).pipe(response)
})
server.listen(portNumber)
