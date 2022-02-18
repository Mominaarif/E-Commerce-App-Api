import styled from "styled-components";

//Import Local Files
import { minimobile, mobile } from '../Responsive';

export const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ fontSize : "12px" })}
  ${minimobile({ fontSize : "10px" })}
`;
