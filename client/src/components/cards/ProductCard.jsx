import React, { useState } from "react";
import { CircularProgress, Rating } from "@mui/material";
import styled from "styled-components";
import {
  AddShoppingCartOutlined,
  FavoriteBorder,
  FavoriteRounded,
} from "@mui/icons-material";

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

const Menu = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: none;
  flex-direction: column;
  gap: 12px;
`;

const Top = styled.div`
  position: relative;
  border-radius: 6px;
  &:hover ${Menu} {
    display: flex;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 4px 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 8px;
`;

const ProductCard = ({ product }) => {
  const [favorite, setFavorite] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  const toggleFavorite = () => {
    setFavoriteLoading(true);
    setTimeout(() => {
      setFavorite((prev) => !prev);
      setFavoriteLoading(false);
    }, 500);
  };

  return (
    <Card>
      <Top>
        <Image src={product.img} alt={product.title} />
        <Menu>
          <div onClick={toggleFavorite}>
            {favoriteLoading ? (
              <CircularProgress size={20} />
            ) : favorite ? (
              <FavoriteRounded style={{ color: "red" }} />
            ) : (
              <FavoriteBorder />
            )}
          </div>
          <div>
            <AddShoppingCartOutlined />
          </div>
        </Menu>
      </Top>
      <Details>
        <Title>{product.title}</Title>
        <Price>
          ${product.price.org}{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ${product.price.mrp}
          </span>
        </Price>
        <Rating value={4} readOnly size="small" />
      </Details>
    </Card>
  );
};

export default ProductCard;
