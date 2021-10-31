// import dependencies
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInputField from './PhoneInput';

// testing array of messages
const messages = ['You are amazing!', "Don't give up!"];

function App() {
  // declare state vars
  const [phoneNumber, setPhoneNumber] = useState();
  const sendMessage = () => {
    // used for testing
    console.log(`Sending a message to ${phoneNumber}`);

    // get random id from 0 - 19
    let rID = Math.floor(Math.random() * 20);
    console.log(messages[rID]);

    // get document from the firestore database with the value form rID
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
