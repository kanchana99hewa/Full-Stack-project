import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";



const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <div>
      <Title>Welcome to Krist 👋</Title>
      <Span>Please login with your details here</Span>
      </div>
      <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />
   
      
      
    </Container>
  )
}

export default SignIn
