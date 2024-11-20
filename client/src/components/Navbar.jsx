import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../utils/Images/Logo.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { logout } from "../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

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

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const Logo = styled.img`
  height: 34px;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navlink = styled(NavLink)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  z-index: 5;

  a {
    padding: 16px;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

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
          <MobileMenu>
            <Navlink to="/" onClick={() => setIsOpen(false)}>
              Home
            </Navlink>
            <Navlink to="/Shop" onClick={() => setIsOpen(false)}>
              Shop
            </Navlink>
            <Navlink to="/New_Arrivals" onClick={() => setIsOpen(false)}>
              New Arrivals
            </Navlink>
            <Navlink to="/Orders" onClick={() => setIsOpen(false)}>
              Orders
            </Navlink>
            <Navlink to="/Contact" onClick={() => setIsOpen(false)}>
              Contact
            </Navlink>
            {currentUser ? (
              <Button text="Logout" small onClick={() => dispatch(logout())} />
            ) : (
              <Button text="Login" small />
            )}
          </MobileMenu>
        )}
        <Mobileicons>
        <Navlink to="/search">
          <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
        </Navlink>

        {currentUser ? (
          <>
            <Navlink to="/favorite">
              <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
            </Navlink>
            <Navlink to="/cart">
              <ShoppingCartOutlined
                sx={{ color: "inherit", fontSize: "28px" }}
              />
            </Navlink>
            <Avatar
              src={currentUser?.img}
              sx={{
                color: "inherit",
                fontSize: "28px",
              }}
            >
              {currentUser?.name[0]}
            </Avatar>
          </>
        ) : (
          <Button
            text="SignIn"
            small
            onClick={() => setOpenAuth(!openAuth)}
          />
        )}
      </Mobileicons>

      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
