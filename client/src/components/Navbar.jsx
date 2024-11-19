import React from 'react'
import styled from "styled-components";
import LogoImg from "../utils/Images/Logo.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <Nav>
    <NavbarContainer>
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <MenuRounded style={{ color: "inherit" }} />
      </MobileIcon>
      <NavLogo>
          <Logo src={LogoImg} />
        </NavLogo>
        
        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/Shop">Shop</Navlink>
          <Navlink to="/New_Arrivals">New Arrivals</Navlink>
          <Navlink to="/Orders">Orders</Navlink>
          <Navlink to="/Contact">Contact</Navlink>
        </NavItems>


      </NavbarContainer>
    </Nav>
  )
}

export default Navbar