// import dependencies
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInputField from './PhoneInput';

// testing array of messages
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
  // declare state vars
  const [phoneNumber, setPhoneNumber] = useState();

  const sendMessage = () => {
    // get message from array with idx from 0 - 19
    let rID = Math.floor(Math.random() * 20);
    let message = messages[rID];
    console.log(`Sending message "${message}" to ${phoneNumber}`);
  };

  return (
    <div className='App'>
      <Container>
        <h2>Send an Affirmation</h2>
        <PhoneInputField
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        ></PhoneInputField>
        <button onClick={sendMessage}>Send Affirmation</button>
      </Container>

      {console.log(`Phone number is: ${phoneNumber}`)}
    </div>
  );
}

export default App;
