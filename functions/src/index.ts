import * as functions from 'firebase-functions';
//import * as Alexa from 'alexa-sdk';
//import cors = require("cors");
import express = require('express');

import bodyParser = require('body-parser');
import LaunchHandler from './handlers/LaunchHandler';
// import alexa = require( 'alexa-app' );
// const app = new alexa.app('test-skill');
// var express_app = express();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// app.launch( function( request, response ) {
// 	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
// } );

// app.error = function( exception, request, response ) {
// 	console.log(exception)
// 	console.log(request);
// 	console.log(response);	
// 	response.say( 'Sorry an error occured ' + error.message);
// };

// app.express({ expressApp: express_app });



// const server = express();

// server.use(bodyParser.json());
// server.use(cors({ origin: true }));//(bodyParser.json());

// server.post('*', (req, res) => {
// 	console.log("IN POST")
//   const context: any = {
//     fail: () => {
//       res.sendStatus(500);
//     },
//     succeed: (data) => {
//       res.send(data);
//     },
//   };

//   const alexa = Alexa.handler(req.body, context); // TODO: Handle exceptions.
//   alexa.appId = 'amzn1.ask.skill.2f0819fc-9a86-4c30-b259-59ff34abf6fe';
//   alexa.registerHandlers(LaunchHandler.handler());
//   alexa.execute();
// });


'use strict';

import AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
	httpsEnabled: true,
	httpsPort: 443,
	privateKey: 'private-key.pem',
    certificate: 'cert.cer'
} );

server.start();
//server.express.use('/test', function(req, res) { res.send("OK"); });

//console.log("SERVER: " + JSON.stringify(server))
// const app3 = express();
// app3.use(cors({ origin: true }));
// app3.get("*", (request, response) => {
//   response.send(
//     "Hello from Express on Firebase with CORS! No trailing '/' required!"
//   );
// });

export const googleFunctions = functions.https.onRequest(server);
