import React from 'react'

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
          </Wrapper>
      )}
    </Container>
  )
}

export default ProductDetails
