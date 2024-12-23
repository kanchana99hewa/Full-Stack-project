import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 170px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.3s ease-out;
  @media (max-width: 600px) {
    height: 240px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
  &:hover ${Image} {
    opacity: 0.8;
  }
`;

const Menu = styled.div`
  width: 90%;
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  bottom: 20px;
  display: flex;
  gap: 12px;
`;

const Button = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  padding: 12px 20px;
  background: white;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  @media (max-width: 600px) {
    padding: 6px 14px;
  }
`;

const Sale = styled.div`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: green;
  padding: 3px 6px;
  border-radius: 4px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const ProductCategoryCard = ({ category }) => {
  const navigate = useNavigate();

  // Fallback values for undefined category or missing properties
  const imgSrc = category?.img || "/assets/placeholder.jpg";
  const categoryName = category?.name || "Unknown Category";
  const discount = category?.off || "No Offer";

  return (
    <Card onClick={() => navigate(`/shop?category=${categoryName}`)}>
      <Top>
        <Image src={imgSrc} alt={categoryName} />
        <Menu>
          <Button>{categoryName}</Button>
        </Menu>
        <Sale>{discount}</Sale>
      </Top>
    </Card>
  );
};

export default ProductCategoryCard;
