import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";

// Import local files
import {
  Container,
  Left,
  Logo,
  Desc,
  Socialcontainer,
  SocialIcon,
  Title,
  List,
  Listitem,
  Center,
  Right,
  ContactItem,
  Payment,
} from "../ComponentElements/FooterElement";

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>MONA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <Socialcontainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </Socialcontainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Man Fashion</Listitem>
          <Listitem>woman Fashion</Listitem>
          <Listitem>Shoes</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order tracking</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Term</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 139/1 A Block PSIC Society,
          Lahore Pakistan
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +92 307 7078916
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />{" "}
          mominaarif140@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
