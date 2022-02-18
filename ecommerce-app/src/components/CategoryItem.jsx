import React from "react";
import { Link } from "react-router-dom";

// Import local files
import {
  Container,
  Image,
  Title,
  Info,
  Button,
} from "../ComponentElements/CategoryItemElement";

function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cate}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOW NOW</Button>
      </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
