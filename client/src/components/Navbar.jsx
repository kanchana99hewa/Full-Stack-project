import React from "react";
import styled from "styled-components"; 

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <NavbarContainer>
        {/* Navbar content goes here */}
      </NavbarContainer>
    </nav>
  );
};

export default Navbar;
