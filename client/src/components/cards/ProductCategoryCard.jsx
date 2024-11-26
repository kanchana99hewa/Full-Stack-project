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

const ProductCategoryCard = ({ category }) => {
    const navigate = useNavigate();

  return (
    <div>
      <Card onClick={() => navigate(`/shop?category=${category.name}`)}>
      
      </Card>
    </div>
  )
}

export default ProductCategoryCard
