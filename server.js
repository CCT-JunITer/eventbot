// Import dependencies
const { createMessageAdapter } = require('@slack/interactive-messages')
const http = require('http')
const express = require('express')
const Meetup = require('./src/meetup/meetup.js')
const scheduler = require('node-schedule')

console.log(__dirname)
const config = require('./assets/config/config.json')


// Create the adapter using the app's signing secret, read from environment variable
const slackInteractions = createMessageAdapter(config.slack)

// Initialize an Express application
// NOTE: You must use a body parser for the urlencoded format before attaching the adapter
const app = express()

// Attach the adapter to the Express application as a middleware
// NOTE: The path must match the Request URL and/or Options URL configured in Slack
app.use('/slack/actions', slackInteractions.expressMiddleware())

// Select a port for the server to listen on.
// NOTE: When using ngrok or localtunnel locally, choose the same port it was started with.
const port = process.env.PORT || 3000

// Start the express application server
http.createServer(app).listen(port, () => {
  console.log(`server listening on port ${port}`);
})

var j = scheduler.scheduleJob('*/5 * * * * *', function(){
  console.log('Today is recognized by Rebecca Black!');
});


