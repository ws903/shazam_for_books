import goodReadsJSONResponse from "goodreads-json-api"

export function fetchBook(API, handleResponse) {
	const https = require('https')

	https.get('https://cors-anywhere.herokuapp.com/'+API, (res) => {
		res.setEncoding('utf8')
		let rawData = ''
		res.on('data', (chunk) => rawData += chunk)
		res.on('end', () => {
			const response = goodReadsJSONResponse.convertToJson(rawData)
			handleResponse(response)
		})
	}).on('error', (e) => {
		console.log(`Got error: ${e.message}`)
	})
}