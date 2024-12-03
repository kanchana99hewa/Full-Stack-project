import React from 'react'

const ShopListing = () => {
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
                ) : filt
      <Container/>
  )
}

export default ShopListing