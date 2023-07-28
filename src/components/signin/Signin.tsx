import React, { FormEvent, useState } from 'react';
import { Container, CardBody, LogoImage, Title, Form, Input, SignInButton } from './style';

// Import the logo image from the assets folder
import logo from '../assets/logos/Logo.png';

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <Container>
          <CardBody>
            <LogoImage src={logo} alt="Logo" />
            <Title>Sign In</Title>
            <Form onSubmit={handleSignIn}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
              />
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
               
              />
              <SignInButton type="submit">Sign In</SignInButton>
            </Form>
          </CardBody>
    </Container>
  );
};

export default Signin;
