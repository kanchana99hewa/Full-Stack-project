import React from "react";
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


function ProductCard() {
  return (
    <Card>
      <Top>
      <Image src={product?.img} />
        <Menu>
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
