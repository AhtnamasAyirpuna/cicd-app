import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = email.includes("@gmail.com");

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const isPasswordValid = passwordRegex.test(password);

  const isFormValid = isEmailValid && isPasswordValid;

  return (
    <Container className='my-5'>
      <h1>Form Submission</h1>
      <Form className='my-4'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-testid="emailInput"
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            data-testid="passwordInput"
          />
        </Form.Group>
        <Button
          type='submit'
          className='btn btn-primary'
          disabled={!isFormValid}
          data-testid="submitButton"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}


