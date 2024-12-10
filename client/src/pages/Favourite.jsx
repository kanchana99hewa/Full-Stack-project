import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;

const Favourite = () => {
  return (
    <Container>
    <Section>
      <Title>Your favourites</Title>
      <CardWrapper>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {products.length === 0 ? (
              <>No Products</>
            ) : (
              <CardWrapper>
                {products.map((product) => (
                  <ProductCard product={product} />
                ))}
              </CardWrapper>
            )}
          </>
        )}
      </CardWrapper>
    </Section>
  </Container>
  )
}

export default Favourite