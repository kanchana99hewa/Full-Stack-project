import React from 'react'

const Container = styled.div`
  padding: 20px 30px;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
    flex-direction: column;
    overflow-y: scroll;
  }
  background: ${({ theme }) => theme.bg};
`;

const ShopListing = () => {
  const [loading, setLoading] = useState(false);


  return (
    <Container>
       {loading ? (
        <CircularProgress />
      ) : (
        <>
        <Filters>
          <Menu>
            {filter.map((filters) => (
              <FilterSection>
                 <Title>{filters.name}</Title>
                  {filters.value === "price" ? (
                    <>
                <Slider
                        aria-label="Price"
                        defaultValue={priceRange}
                        min={0}
                        max={1000}
                        valueLabelDisplay="auto"
                        marks={[
                          { value: 0, label: "$0" },
                          { value: 1000, label: "$1000" },
                        ]}
                        onChange={(e, newValue) => setPriceRange(newValue)}
                      />
                    </>
                  ) : filters.value === "size" ? (
                    <Item>
                    {filters.items.map((item) => (
                      <SelectableItem
                        key={item}
                        selected={selectedSizes.includes(item)}
                        onClick={() =>
                          setSelectedSizes((prevSizes) =>
                            prevSizes.includes(item)
                              ? prevSizes.filter(
                                  (category) => category !== item
                                )
                              : [...prevSizes, item]
                          )
                        }
                      >
                        {item}
                      </SelectableItem>
                    ))}
                  </Item>
      <Container/>
  )
}

export default ShopListing