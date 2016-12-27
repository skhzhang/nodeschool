/*

# LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP UPPERCASERER (Exercise 12 of 13)

  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.

*/

const http = require('http')
const map = require('through2-map')

var portNumber = process.argv[2]
var fileLocation = process.argv[3]

var server = http.createServer(function(request, response){

	if (request.method !== 'POST') {
		return response.end('Send a POST\n')
	}

	response.writeHead(200, { 'content-type': 'text/plain' })

	// pipe request to response,
	// but pipe request to toUpperCase() function first
	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(response)
})

server.listen(portNumber)