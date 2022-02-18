import styled from 'styled-components';

//Import Local Files
import { minimobile, mobile, miniTablet, tablet } from '../Responsive';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${minimobile({ display : "none" })}
  ${mobile({ display : "none" })}
  ${miniTablet({ display : "none" })}
  ${tablet({ height : "60vh" })}
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  ${tablet({ height : "75vh" })}
`;
export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  ${tablet({ height : "80%" })}

`;
export const Image = styled.img`
  height: 70%;
  ${tablet({ height : "80%" })}
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${tablet({ marginLeft : "-5pc", marginBottom : "5pc" })}
`;
export const Title = styled.h1`
  font-size: 70px;
  ${tablet({ fontSize : "40px" })}
`;
export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${tablet({ fontSize : "15px", margin: "20px 0px" })}
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
  ${tablet({ fontSize : "15px", padding: "5px" })}
`;