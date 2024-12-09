import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { FavoriteBorder, FavoriteRounded } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { openSnackbar } from "../redux/reducers/snackbarSlice";
import { useDispatch } from "react-redux";

function ProductDetails() {
  return (
    <Container>
    {loading ? (
      <CircularProgress />
    ) : (
      <Wrapper>
        <ImageWrapper>
          <Image src={product?.img} />
        </ImageWrapper>
        <Details>
          <div>
            <Title>{product?.title}</Title>
            <Name>{product?.name}</Name>
          </div>
          <Rating value={3.5} />
          <Price>
            ${product?.price?.org} <Span>${product?.price?.mrp}</Span>{" "}
            <Percent> (${product?.price?.off}% Off) </Percent>
          </Price>
          <Desc>{product?.desc}</Desc>
          <Sizes>
            <Items>
              {product?.sizes.map((size) => (
                <Item
                  selected={selected === size}
                  onClick={() => setSelected(size)}
                >
                  {size}
                </Item>
              ))}
            </Items>
          </Sizes>
          <ButtonWrapper>
            <Button
              text="Add to Cart"
              full
              outlined
              isLoading={cartLoading}
              onClick={() => addCart()}
            />
            <Button text="Buy Now" full />
            <Button
              leftIcon={
                favorite ? (
                  <FavoriteRounded sx={{ fontSize: "22px", color: "red" }} />
                ) : (
                  <FavoriteBorder sx={{ fontSize: "22px" }} />
                )
              }
              full
              outlined
              isLoading={favoriteLoading}
              onClick={() => (favorite ? removeFavorite() : addFavorite())}
            />
          </ButtonWrapper>
        </Details>
      </Wrapper>
    )}
  </Container>
  )
}

export default ProductDetails
