import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

// Import local files
import {
  Info,
  Container,
  Circle,
  Image,
  Icon,
} from "../ComponentElements/ProductElement";

function Product({ item }) {
  return (
    <Container key={item._id} >
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Link to={`/product/${item._id}/`}   style={{color: "black"}}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
