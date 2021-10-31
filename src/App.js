// import dependencies
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInputField from './PhoneInput';
import logo from './affirmations.tech.64.png';
import './App.css';

// messages array
const messages = [
  'You are worth it!',
  'Take some time to reflect on all that you have accomplished today.',
  'Taking a day to relax and recharge IS productive.',
  'When life gives you lemons, make the best lemonade that the world has ever tasted.',
  'You are a gift to those around you.',
  'Everything will fall into place, sometimes it just takes time.',
  'Give yourself space to grow and learn.',
  'The world would not be the same without you.',
  'Just be yourself.',
  'Pick yourself back up and turn it around.',
  'Can I offer you a nice egg in this frying time?',
  'You are strong.',
  'You will do great things.',
  'Today is a great day!',
  'Everything will all work out.',
  'You are a blessing to those around you.',
  'Take pride in everything that you have accomplished.',
  'You ARE good enough!',
  "You've got it in you.",
  'Every little thing is gonna be alright.',
];

function App() {
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <div className='App'>
      <Container>
        <div>
          <img src={logo} style={{ display: 'inline-block' }} alt='logo' />
          <h2 style={{ display: 'inline-block' }}>Send an Affirmation</h2>
        </div>
        <br />
        <MessageForm
          messages={messages}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </Container>
    </div>
  );
}

function MessageForm({ messages, phoneNumber, setPhoneNumber }) {
  const sendMessage = () => {

    // get message from array with idx from 0 - 19
    let rID = Math.floor(Math.random() * 20);
    let message = messages[rID];


    // send message
    console.log(`to: ${phoneNumber}, body: ${message}`);
    fetch('https://api.affirmations.tech/api/send-affirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: `${phoneNumber}`, body: `${message}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form>
      <PhoneInputField
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <button type='button' onClick={sendMessage}>Send Affirmation</button>
    </form>
  );
}

export default App;
