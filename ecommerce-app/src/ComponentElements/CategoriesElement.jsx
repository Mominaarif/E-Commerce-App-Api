import styled from "styled-components";

//Import Local Files
import { minimobile, mobile, tablet } from '../Responsive';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding : "0px", flexDirection: "column" })}
  ${minimobile({ padding : "0px", flexDirection: "column" })}
  ${tablet({ flexDirection: "row" })}
`;
