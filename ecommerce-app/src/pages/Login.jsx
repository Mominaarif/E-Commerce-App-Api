import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import local files
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Links,
  Error
} from "../pagesElement/LoginElement";
import { login } from "../redux/apiCalls";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}
           disabled={isFetching}
           >
            LOGIN
          </Button>
          { error && <Error>Something went wrong...</Error>}
          <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
          <Link to="/register" style={{ color: "black" }}>
            <Links>CREATE A NEW ACCOUNT</Links>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
