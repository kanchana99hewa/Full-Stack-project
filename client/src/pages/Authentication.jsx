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