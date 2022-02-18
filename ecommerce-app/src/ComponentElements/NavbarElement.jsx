import styled from "styled-components";

//Import Local Files
import { minimobile, mobile, miniTablet , tablet } from '../Responsive';


export const Container = styled.div`
  height: 60px;
  ${minimobile({ height : "40px" })}
  ${mobile({ height : "50px" })}
  ${miniTablet({ height : "50px" })}
  ${tablet({ height : "52px" })}
`;
export const Logo = styled.h1`
  font-weight: bold;
  ${minimobile({ fontSize : "18px", marginLeft: "10px" })}
  ${mobile({ fontSize : "24px", marginLeft: "0px" })}
  ${miniTablet({ fontSize : "24px", marginLeft: "0px" })}
  ${tablet({ fontSize : "25px", marginLeft: "26%" })}
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${minimobile({ padding : "10px 0px" })}
  ${mobile({ padding : "10px 0px" })}
  ${miniTablet({ padding : "10px 0px" })}
  ${tablet({ padding : "12px 0px" })}

`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${minimobile({ display : "none" })}
  ${mobile({ display : "none" })}
  ${miniTablet({ display : "none" })}
  ${tablet({ display : "none" })}

`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  border: none;
  ${minimobile({ width : "40px" })}
  ${mobile({ width : "50px" })}
  ${miniTablet({ width : "50px" })}
  ${tablet({ width : "85px" })}

`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${minimobile({ padding : "2px", marginLeft: "15px" })}
  ${mobile({ marginLeft : "10px" })}
  ${miniTablet({ marginLeft : "10px" })}
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
  ${miniTablet({ marginLeft : "15%" })}
  ${tablet({ marginLeft : "15%" })}
`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${minimobile({ fontSize : "8px", marginLeft : "8px" })}
  ${mobile({ fontSize : "12px", marginLeft : "10px" })}
  ${miniTablet({ fontSize : "12px", marginLeft : "10px" })}
  ${tablet({ fontSize : "12px", marginLeft : "10px" })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${minimobile({ flex: 2, justifyContent : "center", marginRight : "10px" })}
  ${mobile({ flex: 2, justifyContent : "center", marginRight : "10px" })}
  ${miniTablet({ flex: 2, justifyContent : "center", marginRight : "10px" })}
  ${tablet({ flex: 4, marginRight : "10%" })}
`;