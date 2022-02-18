import React, { useState } from "react";
import { useLocation } from "react-router";

// Import local files
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
  Div,
} from "../pagesElement/ProductListElement";
import Navbar from "../components/Navbar";
import Annnouncement from "../components/Annnouncement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


function ProductList() {
  const location = useLocation();
  const cate = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Annnouncement />
      <Title>{cate}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Div>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>gray</Option>
              <Option>green</Option>
              <Option>brown</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Div>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cate={cate} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
