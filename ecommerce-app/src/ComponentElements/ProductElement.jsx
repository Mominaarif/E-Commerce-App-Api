import styled from "styled-components";

//Import Local Files
import { minimobile, mobile, miniTablet, tablet } from "../Responsive";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  ${minimobile({ height: "200px", minWidth: "230px" })}
  ${mobile({ height: "260px" })}
  ${miniTablet({ height: "280px" })}
  ${tablet({ height: "290px" })}

  &:hover ${Info} {
    opacity: 1;
  }
`;
export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  ${minimobile({ height: "150px", width: "150px" })}

`;
export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transform: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
