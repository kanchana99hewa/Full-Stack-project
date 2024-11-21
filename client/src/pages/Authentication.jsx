import React from 'react'
import { Modal } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  position: relative;
  flex: 0.9;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;
const Logo = styled.img`
  position: absolute;
  top: 40px;
  left: 60px;
  z-index: 10;
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Authentication = ({ openAuth, setOpenAuth }) => {
  return (
    <Modal>
      <Container>
      <Left>
          <Logo src={LogoImage} />
          <Image src={AuthImage} />
        </Left>
     <Right>r</Right>
      </Container>
      </Modal>
  )
}

export default Authentication