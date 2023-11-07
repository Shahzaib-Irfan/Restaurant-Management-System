import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  padding: 10px;
`;

const LoginPage = () => {
  return (
    <Container>
      <Logo src="logo_url" alt="logo" />
      <Input type="text" placeholder="Email address" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </Container>
  );
};

export default LoginPage;
