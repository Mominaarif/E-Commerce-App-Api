import React from "react";

// Import local files
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Container } from "../ComponentElements/CategoriesElement";

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;
