// import depencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

// set up the client
const client = require('twilio')(
  process.env.REACT_APP_TWILIO_ACCOUNT_SID,
  process.env.REACT_APP_TWILIO_AUTH_TOKEN
);

// set up the express app
const app = express();
app.use(cors());
const port = process.env.REACT_APP_PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Wassup hackUMBC 2021!');
});

// API route to send the random affirmation
app.post('/api/send-affirmation', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'The affirmation was sent!' }));
  client.messages
    .create({
      from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body,
    })
    .then((message) => {
      res.json({ message });
      console.log(message);
    });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express is listening to http://localhost:${port}`);
});
