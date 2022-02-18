import React from "react";
import { Div, Container, Wrapper, Image, Para } from "../pagesElement/SuccessElement";
import img from '../assests/p2.jpg';
import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation()
  console.log(location)
  return (
    <Container>
      <Wrapper>
          <Image src={img} />
        <Div>Successfull.</Div>
        <Para>Generic font families are a fallback mechanism, a means of preserving</Para>
      </Wrapper>
    </Container>
  );
};

export default Success;
