import React from 'react'

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