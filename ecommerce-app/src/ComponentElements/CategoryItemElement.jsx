import styled from "styled-components";

//Import Local Files
import { minimobile, miniTablet, mobile, tablet } from '../Responsive';

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  min-width: 400px;
  position: relative;
  ${minimobile({ minWidth: "270px" })}
  ${mobile({ minWidth: "270px" })}
  ${miniTablet({ height : "50vh", minWidth: "270px" })}
  ${tablet({ height : "60vh",minWidth: "270px" })}

`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${minimobile({ height : "25vh" })}
  ${mobile({ height : "25vh" })}
`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${miniTablet({ fontSize: "22px" })}
  ${tablet({ fontSize: "22px" })}
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${minimobile({ textAlign : "center" })}
  ${mobile({ textAlign : "center" })}
  ${miniTablet({ textAlign : "center" })}
  ${tablet({ textAlign : "center" })}

`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: gray;
  font-weight: 600;
`;
