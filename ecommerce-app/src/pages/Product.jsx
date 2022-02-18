import React, { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";

// Import local files
import Annnouncement from "../components/Annnouncement";
import Navbar from "../components/Navbar";
import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
  FilterColor,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "../pagesElement/ProductElement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { token, BASE_URL } from "../RequestMethods";
import { addProduct } from "../redux/cartRedux";

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/products/find/${id}`, {
          headers: {
            token: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    // update cart
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };
  return (
    <Container>
      <Navbar />
      <Annnouncement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <Select onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Option key={s}>
                    {s}
                  </Option>
                ))}
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
