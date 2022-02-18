import styled from "styled-components";

//Import Local Files
import { minimobile, mobile, miniTablet, tablet } from "../Responsive";

export const Container = styled.div`
  display: flex;
  ${minimobile({ flexDirection : "column" })};
  ${mobile({ flexDirection : "column" })};
  ${miniTablet({ flexDirection : "column" })};
  ${tablet({ flexDirection : "column" })};
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Logo = styled.h1``;
export const Desc = styled.p`
  margin: 20px 0px;
`;
export const Socialcontainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const Listitem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${minimobile({ display : "none" })}
  ${mobile({ display : "none" })}
  ${miniTablet({ display : "none" })}
  ${tablet({ backgroundColor : "#eee" })}
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${minimobile({ backgroundColor : "#eee" })}
  ${mobile({ backgroundColor : "#eee" })}

`;
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const Payment = styled.img`
    width: 50%;
    cursor: pointer;
`;