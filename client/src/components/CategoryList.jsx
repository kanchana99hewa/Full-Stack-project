// src/components/CategoryList.js
import React from "react";
import ProductCategoryCard from "./ProductCategoryCard"; // Adjust path as needed

const CategoryList = () => {
  const categories = [
    { name: "Electronics", img: "/electronics.png", off: "10% Off" },
    { name: "Fashion", img: "/fashion.png", off: "20% Off" },
    { name: "Home", img: "/home.png" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {categories.map((category, index) => (
        <ProductCategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
