import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import local files
import {
  Container,
  Logo,
  Wrapper,
  Language,
  Left,
  Input,
  SearchContainer,
  Center,
  MenuItem,
  Right,
} from "../ComponentElements/NavbarElement";

function Navbar() {
  // const cart = useSelector(state => state.cart)
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>MONA.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined className="cart" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
