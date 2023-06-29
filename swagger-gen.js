const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/app.js']

// Optional and depends on security requirements for the API.
const securityDefinitions = {
	apiKeyAuth: {
		type: 'apiKey',
		in: 'header',
		name: 'Authorization',
	}
};

const doc = {
	info: {
		title: 'API Title',
		description: 'API Description',
	},
	host: 'localhost:3000', // API's host
	basePath: '/',
	schemes: ['http'],
	securityDefinitions: securityDefinitions,
};

swaggerAutogen(outputFile, endpointsFiles, doc)
