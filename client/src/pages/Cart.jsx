import React from 'react'

const Cart = () => {
  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Section>
          <Title>Your Shopping Cart</Title>
          </Section>
          </Container>
  )
}

export default Cart