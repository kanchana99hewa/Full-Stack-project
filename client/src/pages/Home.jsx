import React from 'react';
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media (max-width: 750px) {
    gap: 14px;
  }
`;

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

const Home = () => {
  return (
    <Container>
      <Section
        style={{
          alignItems: "center",
        }}
      >
      <Img src={} />
      </Section>

      <Section>
        <Title>Shop by Categories</Title>
        <CardWrapper>
          {category.map((category) => (
            <ProductCategoryCard category={category} />
          ))}
        </CardWrapper>
      </Section>
      <Section>
        <Title center>Our Bestseller</Title>
        <CardWrapper>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </CardWrapper>
      </Section>

      </Container>
  );
}

export default Home;
