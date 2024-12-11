import React from 'react'

function ProductDetails() {
  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Wrapper>
          <ImageWrapper>
          </Wrapper>
      )}
    </Container>
  )
}

export default ProductDetails
