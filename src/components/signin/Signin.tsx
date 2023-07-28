import React, { FormEvent, useContext, useState } from "react";
import {
  Container,
  CardBody,
  LogoImage,
  Title,
  Form,
  Input,
  SignInButton,
} from "./style";

// Import the logo image from the assets folder
import logo from "../assets/logos/Logo.png";
import AuthWrapper, { AuthContext } from "../../context/AuthWrapper";

const Signin: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: FormEvent) => {
    console.log("email", email, "password0", password);
    e.preventDefault();
    // Add your sign-in logic here
    setLoading(true);
    try {
      const res = await login(email, password);
      console.log("res", res);
    } catch (err) {
      console.log("error", err);
      setLoading(false);
    }
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <SignInButton type="submit">Sign In</SignInButton>
          </Form>
        </CardBody>
      </Container>
  );
};

export default Signin;
