import React from 'react'
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
const Menu = styled.div`
  width: 90%;
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  bottom: 20px;
  left: 50;
  right: 50;
  display: flex;
  gap: 12px;
`;

const ProductCategoryCard = ({ category }) => {
    const navigate = useNavigate();
    
  return (
    <div>
      <Card onClick={() => navigate(`/shop?category=${category.name}`)}>
      <Top>
      <Image src={category.img} />
      <Menu>
          <Button>{category.name}</Button>
        </Menu>
      </Top>
      </Card>
    </div>
  )
}

export default ProductCategoryCard
