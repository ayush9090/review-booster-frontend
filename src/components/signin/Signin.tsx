import React, { FormEvent, useContext, useEffect, useState } from "react";
import {
  Container,
  CardBody,
  LogoImage,
  Title,
  Form,
  Input,
  SignInButton,
} from "./style";

import logo from "../assets/logos/Logo.png";
import { AuthContext } from "../../context/AuthWrapper";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  let navigate = useNavigate();
  const { login, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
 let loadings=false;
  const handleSignIn = async (e: FormEvent) => {
    console.log("email", email, "password0", password);
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(email, password);
      console.log("res", res);
      loadings=true;
    } catch (err) {
      console.log("error", err);
      setLoading(false);
      loadings=false;
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

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