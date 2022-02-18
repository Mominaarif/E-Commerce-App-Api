import React, { useState, useEffect } from "react";
import axios from "axios";

// Import local files
import Product from "./Product";
import { Container } from "../ComponentElements/ProductsElement";
import {token, BASE_URL} from "../RequestMethods";

function Products({ cate, filters, sort }) {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cate
            ? `${BASE_URL}/products?category=${cate}`
            : `${BASE_URL}/products`,
          {
            headers: {
              token:
                `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cate]);

  useEffect(() => {
    cate &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cate, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {cate
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products.slice(0, 10).map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
}

export default Products;
