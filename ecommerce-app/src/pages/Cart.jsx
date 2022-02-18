import { Add, Remove } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Import local files
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Detail,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  Button,
} from "../pagesElement/CartElement";
import Annnouncement from "../components/Annnouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BASE_URL } from "../RequestMethods";

const KEY =
  "pk_test_51Jmj5KJ3cx4uHAYgnJ3AKdFIkaa4feR590lLsjmuu6qkvtxorxITzPB8LnoSDA0A0cAMHyzUUAEqWVFDWDezFXKI00k2nbmOsQ";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(`${BASE_URL}/checkout/payment`, {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        console.log(res.data);
        navigate.push("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, cart.total]);

  return (
    <Container>
      {/* <h1>bhji</h1> */}
      <Navbar />
      <Annnouncement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <StripeCheckout
            name="Mona Shop"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Detail>
                    <ProductName>
                      <b>Product: </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>Id: </b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b>
                      {product.size}
                    </ProductSize>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Mona Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
