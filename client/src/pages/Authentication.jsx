import React from 'react'
import { Modal } from "@mui/material";
import styled from "styled-components";

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

const Authentication = ({ openAuth, setOpenAuth }) => {
  return (
    <Modal>
      <Container>
     <Left>l</Left>
     <Right>r</Right>
      </Container>
      </Modal>
  )
}

export default Authentication