/*

# LEARN YOU THE NODE.JS FOR MUCH WIN!

## HTTP JSON API SERVER (Exercise 13 of 13)

Write an HTTP server that serves JSON data when it receives a GET request
to the path '/api/parsetime'. Expect the request to contain a query string
with a key 'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second'
properties. For example:

	 {
		 "hour": 14,
		 "minute": 23,
		 "second": 15
	 }

Add second endpoint for the path '/api/unixtime' which accepts the same
query string but returns UNIX epoch time in milliseconds (the number of
milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
For example:

	 { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to
your program.

*/

const http = require('http')
const url = require('url')

var portNumber = process.argv[2]

var server = http.createServer(function(req, res){

	res.writeHead(200, {'Content-Type': 'application/json'})

	var urlObj = url.parse(req.url, true)
	var date = new Date(urlObj.query['iso'])
	var result

	if (urlObj['pathname'] === "/api/parsetime") {

		// endpoint for path '/api/parsetime'
		var result = {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()}
	}
	else if (urlObj['pathname'] === "/api/unixtime") {

		// endpoint for path '/api/unixtime'
		var result = {"unixtime": date.getTime()}
	}

	res.end(JSON.stringify(result))

})

server.listen(portNumber)