import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Menu = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  top: 14px;
  right: 14px;
  display: none;
  flex-direction: column;
  gap: 12px;
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
const Details = styled.div`
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../redux/reducers/snackbarSlice";
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 4px 10px;
`;
const MenuItem = styled.div`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: white;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;
const addFavorite = async () => {
  setFavoriteLoading(true);
  const token = localStorage.getItem("krist-app-token");
  await addToFavourite(token, { productID: product?._id })
    .then((res) => {
      setFavorite(true);
      setFavoriteLoading(false);
    })
    .catch((err) => {
      setFavoriteLoading(false);
      dispatch(
        openSnackbar({
          message: err.message,
          severity: "error",
        })
      );
    });
};
const removeFavorite = async () => {
  setFavoriteLoading(true);
  const token = localStorage.getItem("krist-app-token");
  await deleteFromFavourite(token, { productID: product?._id })
    .then((res) => {
      setFavorite(false);
      setFavoriteLoading(false);
    })
    .catch((err) => {
      setFavoriteLoading(false);
      dispatch(
        openSnackbar({
          message: err.message,
          severity: "error",
        })
      );
    });
};

useEffect(() => {
  checkFavourite();
}, []);

  return (
    <Card>
      <Top>
      <Image src={product?.img} />
        <Menu>

        <MenuItem
            onClick={() => (favorite ? removeFavorite() : addFavorite())}
          >
            {favoriteLoading ? (
              <CircularProgress sx={{ fontSize: "20px" }} />
            ) : (
              <>
                {favorite ? (
                  <FavoriteRounded sx={{ fontSize: "20px", color: "red" }} />
                ) : (
                  <FavoriteBorder sx={{ fontSize: "20px" }} />
                )}
              </>
            )}
          </MenuItem>{" "}
          <MenuItem onClick={() => addCart(product?.id)}>
            <AddShoppingCartOutlined
              sx={{ color: "inherit", fontSize: "20px" }}
            />
          </MenuItem>
          <MenuItem>
             <Rate>
          <Rating value={3.5} sx={{ fontSize: "14px" }} />
            </Rate>
        <Details nClick={() => navigate(`/shop/${product._id}`)}>

        </Details>
        <Price>
            <Title>

            </Title>
        </Price>
          </MenuItem>
          </Menu>
      </Top>

      </Card>
  )
}

export default ProductCard
