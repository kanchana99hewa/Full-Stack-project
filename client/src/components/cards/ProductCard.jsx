import React, { useEffect, useState } from "react";
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

function ProductCard() {
  return (
    <Card>
      <Top>
      <Image src={product?.img} />
        <Menu>
          <MenuItem>
          </MenuItem>
          </Menu>
      </Top>

      </Card>
  )
}

export default ProductCard
