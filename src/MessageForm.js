import React, { useState } from 'react';

function MessageForm({messages}) {
  const [phoneNumber, setPhoneNumber] = useState();

  const sendMessage = () => {
    // get message from array with idx from 0 - 19
    let rID = Math.floor(Math.random() * 20);
    let message = messages[rID];
    console.log(`Sending message "${message}" to err`);
  };


  return (
    <form>
      <PhoneInputField
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <button onClick={sendMessage}>Send Affirmation</button>
    </form>
  );
}