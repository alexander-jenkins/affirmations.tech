import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function App() {
  // declare state vars
  const [number, setNumber] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className='App'>
      <Container>
        <h2>Send an Affirmation</h2>
        <Form>
          <Form.Group>
            <Form.Label htmlFor='to'>To</Form.Label>
            <Form.Control
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='message'>Body</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button variant='primary' type='submit'>
          Send
        </Button>
      </Container>
      {console.log(`Number is ${number} and the Message is ${body}`)}
    </div>
  );
}

export default App;
