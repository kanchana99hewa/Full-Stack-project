import React from 'react'
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
    <NavbarContainer>
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <MenuRounded style={{ color: "inherit" }} />
      </MobileIcon>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar