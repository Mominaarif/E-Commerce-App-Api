import { Send } from "@mui/icons-material";
import React from "react";

// Import local files
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "../ComponentElements/NewsletterElement";

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
