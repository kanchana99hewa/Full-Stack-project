import React from 'react'

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
