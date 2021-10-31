import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInputField from './PhoneInput';

function App() {
  // declare state vars
  const [phoneNumber, setPhoneNumber] = useState();
  const sendMessage = () => {
    console.log(`Sending a message to ${phoneNumber}`);
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
