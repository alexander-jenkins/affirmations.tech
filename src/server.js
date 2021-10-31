// import depencies
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
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
const port = process.env.REACT_APP_PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

// test routes
app.get('/api', (req, res) => {
  res.json({ message: 'The api is alive!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'The express server is alive!' });
});

// set up post route
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
    });
});

app.get('/api/send-test', (req, res) => {
  client.messages
    .create({
      from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
      to: process.env.REACT_APP_TWILIO_TEST_NUMBER,
      body: 'This is a test message from the server!',
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
