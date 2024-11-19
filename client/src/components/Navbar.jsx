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
        
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Navlink to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Shop">
              Shop
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/New_Arrivals">
              New Arrivals
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Orders">
              Orders
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Contact">
              Contact
            </Navlink>
            {currentUser ? (
              <Button text="Logout" small onClick={() => dispatch(logout())} />
            ) : (

      </NavbarContainer>
    </Nav>
  )
}

export default Navbar