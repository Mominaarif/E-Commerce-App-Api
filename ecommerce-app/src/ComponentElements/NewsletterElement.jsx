import styled from "styled-components";

//Import Local Files
import { minimobile, miniTablet, mobile, tablet } from "../Responsive";

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${minimobile({ height: "40vh" })}
  ${mobile({ height: "45vh" })}
  ${tablet({ height: "45vh" })}
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "35px" })}
  ${minimobile({ fontSize: "35px" })}
`;
export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${minimobile({ fontSize: "20px", textAlign : "center" })}
  ${mobile({ textAlign : "center" })}
  ${miniTablet({ textAlign : "center" })}
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${minimobile({ height: "30px", width: "65%" })}
  ${mobile({ height: "35px", width: "65%" })}
  ${miniTablet({ height: "38px", width: "52%" })}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  ${minimobile({ padding: "10px" })}
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
